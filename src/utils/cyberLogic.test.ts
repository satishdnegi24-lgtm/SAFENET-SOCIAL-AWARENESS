import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateFootprintScore,
  evaluateQuiz,
  isCertificateEligible,
  INITIAL_PROGRESS,
} from './cyberLogic';
import { FootprintQuestion, QuizQuestion, UserProgressState } from '../types';

const mockQuestions: FootprintQuestion[] = [
  {
    id: 'q1',
    category: 'Privacy Settings',
    question: 'How is your primary social media account visibility configured?',
    options: [
      { text: 'Public to anyone', points: 0, riskDescription: 'Public profile allows strangers to harvest data.' },
      { text: 'Private / Friends only', points: 10, riskDescription: 'Well protected profile.' },
    ],
  },
  {
    id: 'q2',
    category: 'Personal Data',
    question: 'Do you post your phone number or home address publicly?',
    options: [
      { text: 'Yes, on my bio or posts', points: 0, riskDescription: 'Direct risk of stalking and phishing.' },
      { text: 'Never', points: 10, riskDescription: 'Personal data safeguarded.' },
    ],
  },
];

const mockQuizQuestions: QuizQuestion[] = [
  {
    id: 'qz1',
    category: 'Account Security',
    question: 'What is the most effective safeguard against password stuffing attacks?',
    options: ['Using a short name', 'Two-Factor Authentication (2FA)', 'Sharing it with family'],
    correctIndex: 1,
    explanation: '2FA requires a secondary verification code.',
    recommendedTopicId: 'learn',
  },
  {
    id: 'qz2',
    category: 'Scam Detection',
    question: 'If you receive an urgent message stating your bank account is blocked with a bit.ly link, what should you do?',
    options: ['Click immediately', 'Never click; verify through official bank app', 'Forward to friends'],
    correctIndex: 1,
    explanation: 'Banks never ask for sensitive credentials via unverified shortlinks.',
    recommendedTopicId: 'scenarios',
  },
];

test('calculateFootprintScore calculates accurate 100% when all safe options are picked', () => {
  const answers = { q1: 1, q2: 1 };
  const result = calculateFootprintScore(answers, mockQuestions);
  assert.equal(result.score, 100);
  assert.equal(result.tier, 'Cyber Champion');
  assert.equal(result.categoryScores.length, 2);
  assert.equal(result.actionPlan.length, 0);
});

test('calculateFootprintScore handles zero points and identifies High Risk with action plan', () => {
  const answers = { q1: 0, q2: 0 };
  const result = calculateFootprintScore(answers, mockQuestions);
  assert.equal(result.score, 0);
  assert.equal(result.tier, 'High Risk');
  assert.equal(result.actionPlan.length, 2);
  assert.equal(result.actionPlan[0].priority, 'High');
});

test('evaluateQuiz computes correct score percentage and flags review topics for wrong answers', () => {
  // 1 correct, 1 wrong
  const userAnswers = { qz1: 1, qz2: 0 };
  const result = evaluateQuiz(userAnswers, mockQuizQuestions);

  assert.equal(result.correctCount, 1);
  assert.equal(result.totalQuestions, 2);
  assert.equal(result.scorePercentage, 50);
  assert.equal(result.passed, false);
  assert.deepEqual(result.recommendedReviewTopics, ['scenarios']);
});

test('isCertificateEligible enforces both >=80% quiz score and all required lessons completion', () => {
  const requiredLessons = ['lesson-1', 'lesson-2', 'lesson-3'];

  // Case 1: Quiz passed 85%, but lessons missing
  const progress1: UserProgressState = {
    ...INITIAL_PROGRESS,
    completedLessons: ['lesson-1'],
    bestQuizScore: 85,
  };
  const check1 = isCertificateEligible(progress1, requiredLessons);
  assert.equal(check1.eligible, false);
  assert.equal(check1.lessonsCompleted, false);
  assert.equal(check1.quizPassed, true);
  assert.equal(check1.remainingLessons, 2);

  // Case 2: Lessons complete, but quiz score < 80%
  const progress2: UserProgressState = {
    ...INITIAL_PROGRESS,
    completedLessons: ['lesson-1', 'lesson-2', 'lesson-3'],
    bestQuizScore: 75,
  };
  const check2 = isCertificateEligible(progress2, requiredLessons);
  assert.equal(check2.eligible, false);
  assert.equal(check2.lessonsCompleted, true);
  assert.equal(check2.quizPassed, false);

  // Case 3: Both complete
  const progress3: UserProgressState = {
    ...INITIAL_PROGRESS,
    completedLessons: ['lesson-1', 'lesson-2', 'lesson-3'],
    bestQuizScore: 92,
  };
  const check3 = isCertificateEligible(progress3, requiredLessons);
  assert.equal(check3.eligible, true);
  assert.equal(check3.remainingLessons, 0);
});

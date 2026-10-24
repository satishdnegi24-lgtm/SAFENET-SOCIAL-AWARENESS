import {
  FootprintQuestion,
  FootprintResult,
  QuizQuestion,
  UserProgressState,
  PageRoute,
} from '../types';

export const INITIAL_PROGRESS: UserProgressState = {
  completedLessons: [],
  completedScenarios: [],
  quizAttempts: [],
  bestQuizScore: 0,
  footprintAssessmentCompleted: false,
  checklistProgress: {},
  userName: '',
};

const STORAGE_KEY = 'safenet_learning_progress_v1';

export function calculateFootprintScore(
  answers: Record<string, number>, // questionId -> selectedOptionIndex
  questions: FootprintQuestion[]
): FootprintResult {
  let earnedPoints = 0;
  let maxPoints = 0;

  const categoryMap: Record<string, { earned: number; max: number }> = {};
  const strengths: string[] = [];
  const improvementAreas: string[] = [];
  const actionPlan: { priority: 'High' | 'Medium' | 'Routine'; action: string; why: string }[] = [];

  for (const q of questions) {
    const selectedIdx = answers[q.id];
    const maxQuestionPoints = Math.max(...q.options.map((o) => o.points));
    maxPoints += maxQuestionPoints;

    if (!categoryMap[q.category]) {
      categoryMap[q.category] = { earned: 0, max: 0 };
    }
    categoryMap[q.category].max += maxQuestionPoints;

    if (selectedIdx !== undefined && q.options[selectedIdx]) {
      const option = q.options[selectedIdx];
      earnedPoints += option.points;
      categoryMap[q.category].earned += option.points;

      if (option.points >= 8) {
        if (!strengths.includes(q.category)) {
          strengths.push(`${q.category}: Proactive approach to ${q.question.toLowerCase().slice(0, 50)}...`);
        }
      } else if (option.points <= 4) {
        improvementAreas.push(`${q.category}: ${option.riskDescription}`);
        actionPlan.push({
          priority: option.points === 0 ? 'High' : 'Medium',
          action: `Strengthen ${q.category.toLowerCase()} safeguards`,
          why: option.riskDescription,
        });
      }
    }
  }

  const rawScore = maxPoints > 0 ? (earnedPoints / maxPoints) * 100 : 0;
  const score = Math.round(rawScore);

  let tier: FootprintResult['tier'] = 'High Risk';
  let color = 'text-rose-500';
  let summary = 'Significant exposure of personal information. Your digital footprint makes you vulnerable to identity harvesting, impersonation, or credential attacks.';

  if (score >= 90) {
    tier = 'Cyber Champion';
    color = 'text-emerald-400';
    summary = 'Outstanding cyber hygiene! You consistently restrict public exposure, isolate sensitive credentials, and verify unknown requests before acting.';
  } else if (score >= 75) {
    tier = 'Safety Conscious';
    color = 'text-indigo-400';
    summary = 'Good general awareness with solid foundational privacy settings. A few specific refinements in location sharing and historical post audits will make you resilient.';
  } else if (score >= 50) {
    tier = 'Moderate Awareness';
    color = 'text-amber-400';
    summary = 'Average protection. While you take some basic steps, several blind spots (like public app permissions or location tags) leave unnecessary digital traces.';
  }

  const categoryScores = Object.entries(categoryMap).map(([category, { earned, max }]) => ({
    category,
    score: earned,
    maxScore: max,
    percentage: max > 0 ? Math.round((earned / max) * 100) : 0,
  }));

  // Ensure default strengths/improvements if empty
  if (strengths.length === 0) {
    strengths.push('Willingness to evaluate your digital footprint and identify weak spots.');
  }
  if (improvementAreas.length === 0) {
    improvementAreas.push('Regular audit of connected third-party apps and routine session sign-outs.');
  }

  // Sort action plan by high priority first
  actionPlan.sort((a, b) => (a.priority === 'High' ? -1 : b.priority === 'High' ? 1 : 0));

  return {
    score,
    tier,
    color,
    summary,
    categoryScores,
    strengths,
    improvementAreas,
    actionPlan,
  };
}

export interface QuizEvaluationResult {
  correctCount: number;
  totalQuestions: number;
  scorePercentage: number;
  passed: boolean; // >= 80%
  recommendedReviewTopics: PageRoute[];
  detailedReview: {
    questionId: string;
    question: string;
    selectedAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
    explanation: string;
    topicId: PageRoute;
  }[];
}

export function evaluateQuiz(
  userAnswers: Record<string, number>, // questionId -> selectedOptionIndex
  questions: QuizQuestion[]
): QuizEvaluationResult {
  let correctCount = 0;
  const reviewTopicsSet = new Set<PageRoute>();
  const detailedReview: QuizEvaluationResult['detailedReview'] = [];

  for (const q of questions) {
    const selectedIdx = userAnswers[q.id];
    const isCorrect = selectedIdx === q.correctIndex;

    if (isCorrect) {
      correctCount++;
    } else {
      if (q.recommendedTopicId) {
        reviewTopicsSet.add(q.recommendedTopicId);
      }
    }

    detailedReview.push({
      questionId: q.id,
      question: q.question,
      selectedAnswer: selectedIdx !== undefined ? q.options[selectedIdx] : 'Unanswered',
      correctAnswer: q.options[q.correctIndex],
      isCorrect,
      explanation: q.explanation,
      topicId: q.recommendedTopicId,
    });
  }

  const totalQuestions = questions.length;
  const scorePercentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const passed = scorePercentage >= 80;

  return {
    correctCount,
    totalQuestions,
    scorePercentage,
    passed,
    recommendedReviewTopics: Array.from(reviewTopicsSet),
    detailedReview,
  };
}

export function isCertificateEligible(
  progress: UserProgressState,
  requiredLessonIds: string[]
): {
  eligible: boolean;
  lessonsCompleted: boolean;
  quizPassed: boolean;
  remainingLessons: number;
  currentQuizScore: number;
} {
  const completedSet = new Set(progress.completedLessons || []);
  const allLessonsDone = requiredLessonIds.every((id) => completedSet.has(id));
  const remainingLessons = requiredLessonIds.filter((id) => !completedSet.has(id)).length;
  const quizPassed = (progress.bestQuizScore || 0) >= 80;

  return {
    eligible: allLessonsDone && quizPassed,
    lessonsCompleted: allLessonsDone,
    quizPassed,
    remainingLessons,
    currentQuizScore: progress.bestQuizScore || 0,
  };
}

export function loadProgressFromStorage(): UserProgressState {
  if (typeof window === 'undefined') return INITIAL_PROGRESS;
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return INITIAL_PROGRESS;
    const parsed = JSON.parse(data);
    return {
      ...INITIAL_PROGRESS,
      ...parsed,
    };
  } catch {
    return INITIAL_PROGRESS;
  }
}

export function saveProgressToStorage(progress: UserProgressState): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Non-blocking in incognito / quota exceeded
  }
}

export function clearProgressStorage(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

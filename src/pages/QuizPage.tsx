import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import { QuizQuestion, PageRoute } from '../types';
import { evaluateQuiz, QuizEvaluationResult } from '../utils/cyberLogic';
import {
  FileCheck2,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  Shuffle,
  Award,
  BookOpen,
  Info,
} from 'lucide-react';

interface QuizPageProps {
  onQuizComplete: (scorePercentage: number, correctCount: number, total: number) => void;
  onNavigate: (page: PageRoute) => void;
  bestScore?: number;
}

export const QuizPage: React.FC<QuizPageProps> = ({ onQuizComplete, onNavigate, bestScore }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>(QUIZ_QUESTIONS);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [hasAnsweredCurrent, setHasAnsweredCurrent] = useState<boolean>(false);
  const [evaluation, setEvaluation] = useState<QuizEvaluationResult | null>(null);
  const [isRandomized, setIsRandomized] = useState<boolean>(false);

  const currentQ = questions[currentIndex];
  const totalQuestions = questions.length;
  const isLast = currentIndex === totalQuestions - 1;

  // Sync answer state when moving between questions
  useEffect(() => {
    setHasAnsweredCurrent(userAnswers[currentQ?.id] !== undefined);
  }, [currentIndex, userAnswers, currentQ]);

  const handleSelectOption = (optionIndex: number) => {
    if (hasAnsweredCurrent) return; // Prevent double clicks / changing answer once chosen

    const updated = { ...userAnswers, [currentQ.id]: optionIndex };
    setUserAnswers(updated);
    setHasAnsweredCurrent(true);
  };

  const handleNext = () => {
    if (isLast) {
      // Finish quiz & calculate
      const result = evaluateQuiz(userAnswers, questions);
      setEvaluation(result);
      onQuizComplete(result.scorePercentage, result.correctCount, result.totalQuestions);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleRestart = (randomize: boolean = false) => {
    if (randomize) {
      const shuffled = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5);
      setQuestions(shuffled);
      setIsRandomized(true);
    } else {
      setQuestions(QUIZ_QUESTIONS);
      setIsRandomized(false);
    }
    setCurrentIndex(0);
    setUserAnswers({});
    setHasAnsweredCurrent(false);
    setEvaluation(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-10 py-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400">
              <FileCheck2 className="h-4 w-4" />
              <span>Certified Assessment</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Comprehensive Cyber Safety Quiz
            </h1>
            <p className="text-xs sm:text-sm text-slate-400">
              26 questions covering social media privacy, credential hygiene, deepfakes, scams, and Indian cyber laws.
            </p>
          </div>

          {bestScore !== undefined && bestScore > 0 && (
            <div className="flex items-center gap-2 rounded-xl border border-indigo-900/60 bg-indigo-950/30 px-3.5 py-2 text-xs">
              <Award className="h-4 w-4 text-amber-400" />
              <span className="text-slate-300">
                Personal Best: <strong className="text-white font-bold">{bestScore}%</strong>
              </span>
            </div>
          )}
        </div>
      </div>

      {!evaluation ? (
        <div className="space-y-6">
          {/* Progress Bar & Counter */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span className="font-medium">
                Question {currentIndex + 1} of {totalQuestions}
              </span>
              <span className="text-slate-500 font-mono">
                Category: <strong className="text-indigo-300">{currentQ.category}</strong>
              </span>
              <span className="font-mono text-indigo-400">
                {Math.round(((currentIndex + 1) / totalQuestions) * 100)}%
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full bg-indigo-500 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Box */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6">
            <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
              {currentQ.question}
            </h2>

            {/* Answer Options */}
            <div className="space-y-3">
              {currentQ.options.map((option, idx) => {
                const isSelected = userAnswers[currentQ.id] === idx;
                const isCorrect = idx === currentQ.correctIndex;

                let buttonStyle =
                  'border-slate-800 bg-slate-950 text-slate-200 hover:border-slate-700 hover:bg-slate-900';

                if (hasAnsweredCurrent) {
                  if (isSelected && isCorrect) {
                    buttonStyle = 'border-emerald-500 bg-emerald-950/40 text-emerald-200';
                  } else if (isSelected && !isCorrect) {
                    buttonStyle = 'border-rose-500 bg-rose-950/40 text-rose-200';
                  } else if (isCorrect) {
                    buttonStyle = 'border-emerald-500/60 bg-emerald-950/20 text-emerald-300';
                  } else {
                    buttonStyle = 'opacity-40 border-slate-800 bg-slate-950 text-slate-400';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={hasAnsweredCurrent}
                    className={`flex w-full items-start gap-3.5 rounded-xl p-4 text-left transition-all border text-xs sm:text-sm ${buttonStyle}`}
                  >
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-mono font-bold ${
                        isSelected && isCorrect
                          ? 'bg-emerald-500 text-slate-950'
                          : isSelected && !isCorrect
                          ? 'bg-rose-500 text-white'
                          : 'border border-slate-700 text-slate-400'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className="flex-1 font-medium">{option}</span>
                    {hasAnsweredCurrent && isCorrect && (
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                    )}
                    {hasAnsweredCurrent && isSelected && !isCorrect && (
                      <XCircle className="h-5 w-5 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Instant Educational Feedback & Explanation */}
            {hasAnsweredCurrent && (
              <div
                className={`rounded-xl border p-4 space-y-1.5 animate-in fade-in ${
                  userAnswers[currentQ.id] === currentQ.correctIndex
                    ? 'border-emerald-500/30 bg-emerald-950/20 text-emerald-300'
                    : 'border-amber-500/30 bg-amber-950/20 text-amber-300'
                }`}
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                  <Info className="h-4 w-4" />
                  <span>
                    {userAnswers[currentQ.id] === currentQ.correctIndex
                      ? 'Correct Answer!'
                      : 'Incorrect — Explanation:'}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{currentQ.explanation}</p>
              </div>
            )}

            {/* Next / Submit Button */}
            <div className="flex items-center justify-between border-t border-slate-800 pt-4">
              <span className="text-xs text-slate-500">
                {hasAnsweredCurrent ? 'Review explanation above before proceeding' : 'Select an answer to continue'}
              </span>

              <button
                onClick={handleNext}
                disabled={!hasAnsweredCurrent}
                className="flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 text-xs font-bold text-white shadow-md disabled:opacity-40 transition-colors"
              >
                <span>{isLast ? 'Complete & View Score' : 'Next Question'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Final Results & Review */
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Main Results Scorecard */}
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 p-8 sm:p-10 text-center space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              Assessment Results
            </span>

            <div className="flex items-center justify-center gap-2">
              <span className="font-display text-6xl font-extrabold text-white tracking-tight">
                {evaluation.scorePercentage}%
              </span>
            </div>

            <p className="text-sm font-semibold text-slate-200">
              You answered {evaluation.correctCount} out of {evaluation.totalQuestions} questions correctly.
            </p>

            {evaluation.passed ? (
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 max-w-lg mx-auto space-y-2">
                <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-sm">
                  <Award className="h-5 w-5" />
                  <span>Certificate Eligibility Unlocked!</span>
                </div>
                <p className="text-xs text-slate-300">
                  Congratulations! You achieved ≥80% on the Cyber Safety assessment. Complete all 5 academy modules to claim your official educational certificate.
                </p>
                <button
                  onClick={() => onNavigate('progress')}
                  className="rounded-lg bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors mt-2"
                >
                  Go to My Progress & Certificate
                </button>
              </div>
            ) : (
              <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 max-w-lg mx-auto space-y-1 text-xs text-amber-300">
                <p className="font-bold">Passing score for certificate is 80%</p>
                <p className="text-slate-300">
                  Review the missed questions below, explore the recommended modules, and retry the quiz!
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => handleRestart(false)}
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-semibold text-white transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Retry Quiz</span>
              </button>

              <button
                onClick={() => handleRestart(true)}
                className="flex items-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-900/30 hover:bg-indigo-900/50 px-4 py-2 text-xs font-semibold text-indigo-300 transition-colors"
              >
                <Shuffle className="h-3.5 w-3.5" />
                <span>Randomize Order & Retry</span>
              </button>
            </div>
          </div>

          {/* Recommended Review Topics */}
          {evaluation.recommendedReviewTopics.length > 0 && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-3">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-indigo-400" />
                <span>Recommended Study Modules</span>
              </h2>
              <p className="text-xs text-slate-400">
                Based on questions you missed, we suggest reviewing these dedicated resources:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {evaluation.recommendedReviewTopics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => onNavigate(topic)}
                    className="flex items-center gap-1.5 rounded-lg border border-indigo-500/30 bg-indigo-950/40 hover:bg-indigo-900/50 px-3 py-1.5 text-xs font-medium text-indigo-300 transition-colors capitalize"
                  >
                    <span>Explore {topic} module</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Question-by-Question Review */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              Question-by-Question Review
            </h2>

            <div className="space-y-4">
              {evaluation.detailedReview.map((item, idx) => (
                <div
                  key={item.questionId}
                  className={`rounded-xl border p-4 text-xs space-y-2 ${
                    item.isCorrect
                      ? 'border-emerald-500/20 bg-emerald-950/10'
                      : 'border-rose-500/20 bg-rose-950/10'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-white text-sm">
                      {idx + 1}. {item.question}
                    </span>
                    {item.isCorrect ? (
                      <span className="rounded bg-emerald-500/20 text-emerald-400 px-2 py-0.5 text-[10px] font-bold shrink-0">
                        Correct
                      </span>
                    ) : (
                      <span className="rounded bg-rose-500/20 text-rose-400 px-2 py-0.5 text-[10px] font-bold shrink-0">
                        Incorrect
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    <div className="text-slate-400">
                      Your choice:{' '}
                      <span className={item.isCorrect ? 'text-emerald-300 font-semibold' : 'text-rose-300 font-semibold'}>
                        {item.selectedAnswer}
                      </span>
                    </div>
                    {!item.isCorrect && (
                      <div className="text-emerald-300 font-medium">
                        Correct answer: {item.correctAnswer}
                      </div>
                    )}
                  </div>

                  <p className="text-[11px] text-slate-300 italic pt-1 border-t border-slate-800">
                    <strong>Explanation:</strong> {item.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

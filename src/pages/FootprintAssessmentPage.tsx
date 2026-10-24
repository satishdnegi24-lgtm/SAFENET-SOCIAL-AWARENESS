import React, { useState } from 'react';
import { FOOTPRINT_QUESTIONS } from '../data/footprintQuestions';
import { FootprintResult, PageRoute } from '../types';
import { calculateFootprintScore } from '../utils/cyberLogic';
import {
  Compass,
  AlertTriangle,
  CheckCircle2,
  RotateCcw,
  ShieldAlert,
  ArrowRight,
  ShieldCheck,
  Info,
  ListChecks,
} from 'lucide-react';

interface FootprintAssessmentPageProps {
  onCompleteAssessment: (score: number) => void;
  onNavigate: (page: PageRoute) => void;
  savedScore?: number;
}

export const FootprintAssessmentPage: React.FC<FootprintAssessmentPageProps> = ({
  onCompleteAssessment,
  onNavigate,
  savedScore,
}) => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<FootprintResult | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const totalQuestions = FOOTPRINT_QUESTIONS.length;
  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === totalQuestions;

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    const updated = { ...answers, [questionId]: optionIdx };
    setAnswers(updated);

    // Auto advance if on question view
    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleCalculateScore = () => {
    const calculated = calculateFootprintScore(answers, FOOTPRINT_QUESTIONS);
    setResult(calculated);
    onCompleteAssessment(calculated.score);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    setAnswers({});
    setResult(null);
    setCurrentStep(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-10 py-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
          <Compass className="h-4 w-4" />
          <span>Interactive Privacy Audit</span>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
          Digital Footprint Self-Assessment
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Evaluate your online visibility, behavioral patterns, and exposure across 14 calibrated privacy checkpoints.
        </p>

        {/* Transparent Rubric & Privacy Disclaimer */}
        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300 flex items-start gap-3">
          <Info className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-slate-400">
            <p>
              <strong className="text-white">Privacy Guarantee:</strong> This self-assessment evaluates self-reported habits and runs entirely inside your browser. SafeNet does NOT scan, inspect, or interface with your real social media accounts, and never requests passwords, OTPs, or government IDs.
            </p>
            <p className="text-[11px] text-slate-500">
              Scoring Rubric: Each question carries 0 to 10 points based on security risk levels. Total earned points are divided by maximum potential points to calculate your 0–100 awareness index.
            </p>
          </div>
        </div>
      </div>

      {!result ? (
        <div className="space-y-6">
          {/* Progress Indicator */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>
                Question {currentStep + 1} of {totalQuestions}
              </span>
              <span className="font-mono text-cyan-400">
                {Math.round((answeredCount / totalQuestions) * 100)}% Complete
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full bg-cyan-500 transition-all duration-300"
                style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Active Question Card */}
          {FOOTPRINT_QUESTIONS[currentStep] && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
                  {FOOTPRINT_QUESTIONS[currentStep].category}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  {FOOTPRINT_QUESTIONS[currentStep].question}
                </h2>
                {FOOTPRINT_QUESTIONS[currentStep].subtitle && (
                  <p className="text-xs text-slate-400">
                    {FOOTPRINT_QUESTIONS[currentStep].subtitle}
                  </p>
                )}
              </div>

              {/* Options */}
              <div className="space-y-3">
                {FOOTPRINT_QUESTIONS[currentStep].options.map((opt, oIdx) => {
                  const isSelected = answers[FOOTPRINT_QUESTIONS[currentStep].id] === oIdx;
                  return (
                    <button
                      key={oIdx}
                      onClick={() =>
                        handleSelectOption(FOOTPRINT_QUESTIONS[currentStep].id, oIdx)
                      }
                      className={`flex w-full items-start gap-3 rounded-xl p-4 text-left transition-all border ${
                        isSelected
                          ? 'border-cyan-500 bg-cyan-950/40 text-white shadow-md'
                          : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <div
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                          isSelected ? 'border-cyan-400 bg-cyan-400' : 'border-slate-600'
                        }`}
                      >
                        {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-slate-950" />}
                      </div>
                      <div className="flex-1 text-xs sm:text-sm">
                        <span className="font-medium text-white">{opt.text}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Stepper Navigation */}
              <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="rounded-lg px-4 py-2 text-xs font-medium text-slate-400 hover:text-white disabled:opacity-30"
                >
                  Previous
                </button>

                {currentStep < totalQuestions - 1 ? (
                  <button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    disabled={answers[FOOTPRINT_QUESTIONS[currentStep].id] === undefined}
                    className="flex items-center gap-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-semibold text-white disabled:opacity-40 transition-colors"
                  >
                    <span>Next</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={handleCalculateScore}
                    disabled={!isComplete}
                    className="flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg disabled:opacity-40 transition-all"
                  >
                    <span>Calculate My Score</span>
                    <CheckCircle2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Quick Question Jump Buttons */}
          <div className="flex flex-wrap gap-1.5 justify-center pt-2">
            {FOOTPRINT_QUESTIONS.map((q, idx) => {
              const isAnswered = answers[q.id] !== undefined;
              const isCurrent = currentStep === idx;
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentStep(idx)}
                  className={`h-7 w-7 rounded-lg text-xs font-mono font-semibold transition-all ${
                    isCurrent
                      ? 'border border-cyan-400 bg-cyan-500/20 text-cyan-300'
                      : isAnswered
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      : 'bg-slate-900 text-slate-600 hover:text-slate-400'
                  }`}
                  aria-label={`Jump to question ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Main Scorecard */}
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 p-8 text-center space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              Your Awareness Score
            </span>

            <div className="flex items-center justify-center gap-2">
              <span className="font-display text-6xl font-extrabold text-white tracking-tight">
                {result.score}
              </span>
              <span className="text-2xl text-slate-500 font-bold">/ 100</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-sm font-bold">
              <ShieldCheck className={`h-4 w-4 ${result.color}`} />
              <span className={result.color}>{result.tier}</span>
            </div>

            <p className="mx-auto max-w-xl text-xs sm:text-sm text-slate-300 leading-relaxed">
              {result.summary}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleRetake}
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-semibold text-white transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Retake Assessment</span>
              </button>

              <button
                onClick={() => onNavigate('toolkit')}
                className="flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-xs font-semibold text-white transition-colors"
              >
                <ListChecks className="h-4 w-4" />
                <span>Go to Safety Toolkit</span>
              </button>
            </div>
          </div>

          {/* Category Breakdown Bars */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              Category Breakdown
            </h2>

            <div className="space-y-4">
              {result.categoryScores.map((cat, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium">{cat.category}</span>
                    <span className="font-mono text-cyan-400">
                      {cat.score} / {cat.maxScore} pts ({cat.percentage}%)
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                    <div
                      className={`h-full transition-all duration-500 ${
                        cat.percentage >= 80
                          ? 'bg-emerald-500'
                          : cat.percentage >= 50
                          ? 'bg-amber-500'
                          : 'bg-rose-500'
                      }`}
                      style={{ width: `${cat.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths & Weaknesses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                <span>Key Strengths</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {result.strengths.map((st, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-rose-400">
                <AlertTriangle className="h-4 w-4" />
                <span>Areas for Improvement</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {result.improvementAreas.map((area, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">!</span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prioritized Action Plan */}
          {result.actionPlan.length > 0 && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                  Prioritized Action Plan
                </h2>
                <span className="text-xs text-slate-500">Sorted by urgency</span>
              </div>

              <div className="space-y-3">
                {result.actionPlan.map((act, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase font-mono ${
                            act.priority === 'High'
                              ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                              : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          }`}
                        >
                          {act.priority} Priority
                        </span>
                        <h3 className="text-xs font-bold text-white">{act.action}</h3>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">{act.why}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

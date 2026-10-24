import React, { useState } from 'react';
import { UserProgressState, PageRoute } from '../types';
import { ACADEMY_LESSONS } from '../data/learningData';
import { SCENARIOS } from '../data/scenariosData';
import { TOOLKIT_CHECKLISTS } from '../data/toolkitData';
import { isCertificateEligible } from '../utils/cyberLogic';
import {
  Award,
  BookOpen,
  Sparkles,
  ListChecks,
  Compass,
  CheckCircle2,
  Lock,
  RotateCcw,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface LearningProgressPageProps {
  progress: UserProgressState;
  onOpenCertificate: () => void;
  onResetProgress: () => void;
  onNavigate: (page: PageRoute) => void;
  onUpdateUserName: (name: string) => void;
}

export const LearningProgressPage: React.FC<LearningProgressPageProps> = ({
  progress,
  onOpenCertificate,
  onResetProgress,
  onNavigate,
  onUpdateUserName,
}) => {
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const requiredLessonIds = ACADEMY_LESSONS.map((l) => l.id);
  const eligibility = isCertificateEligible(progress, requiredLessonIds);

  // Total checklist items across all toolkits
  const totalToolkitItems = TOOLKIT_CHECKLISTS.reduce((acc, c) => acc + c.items.length, 0);
  const totalCompletedToolkitItems = Object.values(progress.checklistProgress || {}).reduce(
    (acc, arr) => acc + arr.length,
    0
  );

  return (
    <div className="space-y-10 py-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400">
            <Award className="h-4 w-4" />
            <span>Academic Portfolio</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
            My Learning Progress & Certification
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Track your mastery across academy modules, scenario simulations, quizzes, and audit checklists.
          </p>
        </div>

        {/* Reset Progress Button */}
        <div>
          {!showResetConfirm ? (
            <button
              onClick={() => setShowResetConfirm(true)}
              className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 px-3 py-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset All Progress</span>
            </button>
          ) : (
            <div className="flex items-center gap-2 rounded-xl bg-rose-950/60 border border-rose-500/40 p-2">
              <span className="text-xs text-rose-300 font-medium">Are you sure?</span>
              <button
                onClick={() => {
                  onResetProgress();
                  setShowResetConfirm(false);
                }}
                className="rounded bg-rose-600 px-2.5 py-1 text-xs font-bold text-white hover:bg-rose-500"
              >
                Yes, Reset
              </button>
              <button
                onClick={() => setShowResetConfirm(false)}
                className="rounded bg-slate-800 px-2 py-1 text-xs text-slate-300 hover:text-white"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Certificate Eligibility Banner */}
      <section className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                  eligibility.eligible
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">
                  SafeNet Certificate of Achievement
                </h2>
                <span
                  className={`text-xs font-semibold ${
                    eligibility.eligible ? 'text-emerald-400' : 'text-amber-400'
                  }`}
                >
                  {eligibility.eligible
                    ? '✓ All Requirements Satisfied — Certificate Unlocked'
                    : 'Requirements in progress'}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
              Awarded to scholars who complete all 5 academy curriculum modules and achieve a score of 80% or higher on the comprehensive 26-question quiz.
            </p>

            <div className="flex flex-wrap gap-4 pt-1 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                {eligibility.lessonsCompleted ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Lock className="h-4 w-4 text-slate-500" />
                )}
                <span>
                  Lessons: {progress.completedLessons.length} / {ACADEMY_LESSONS.length} Completed
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                {eligibility.quizPassed ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Lock className="h-4 w-4 text-slate-500" />
                )}
                <span>
                  Quiz Score: {progress.bestQuizScore || 0}% (Requirement: ≥80%)
                </span>
              </div>
            </div>
          </div>

          <div className="shrink-0">
            {eligibility.eligible ? (
              <button
                onClick={onOpenCertificate}
                className="flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all"
              >
                <Award className="h-4 w-4" />
                <span>View & Print Certificate</span>
              </button>
            ) : (
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-center space-y-2">
                <span className="text-xs text-slate-400 block font-medium">To unlock certificate:</span>
                {!eligibility.lessonsCompleted && (
                  <button
                    onClick={() => onNavigate('learn')}
                    className="block w-full text-xs text-indigo-400 hover:underline text-left"
                  >
                    • Complete {eligibility.remainingLessons} more lesson(s)
                  </button>
                )}
                {!eligibility.quizPassed && (
                  <button
                    onClick={() => onNavigate('quiz')}
                    className="block w-full text-xs text-indigo-400 hover:underline text-left"
                  >
                    • Score ≥80% on the Quiz (current: {progress.bestQuizScore || 0}%)
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Progress Cards Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Academy Lessons Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
          <div className="flex items-center justify-between text-indigo-400">
            <BookOpen className="h-5 w-5" />
            <span className="font-mono text-sm font-bold">
              {progress.completedLessons.length} / {ACADEMY_LESSONS.length}
            </span>
          </div>
          <h3 className="text-sm font-bold text-white">Academy Modules</h3>
          <p className="text-xs text-slate-400">Foundational curriculum in social media security.</p>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full bg-indigo-500"
              style={{
                width: `${(progress.completedLessons.length / ACADEMY_LESSONS.length) * 100}%`,
              }}
            />
          </div>
          <button
            onClick={() => onNavigate('learn')}
            className="text-xs text-indigo-400 hover:underline flex items-center gap-1 font-semibold pt-1"
          >
            <span>Go to Academy</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>

        {/* Quiz Best Score Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
          <div className="flex items-center justify-between text-amber-400">
            <Award className="h-5 w-5" />
            <span className="font-mono text-sm font-bold">{progress.bestQuizScore || 0}%</span>
          </div>
          <h3 className="text-sm font-bold text-white">Quiz Score</h3>
          <p className="text-xs text-slate-400">
            {progress.quizAttempts.length} attempt(s) recorded.
          </p>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full bg-amber-500"
              style={{ width: `${progress.bestQuizScore || 0}%` }}
            />
          </div>
          <button
            onClick={() => onNavigate('quiz')}
            className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-semibold pt-1"
          >
            <span>Retake Quiz</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>

        {/* Scenarios Solved Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
          <div className="flex items-center justify-between text-purple-400">
            <Sparkles className="h-5 w-5" />
            <span className="font-mono text-sm font-bold">
              {progress.completedScenarios.length} / {SCENARIOS.length}
            </span>
          </div>
          <h3 className="text-sm font-bold text-white">Scenarios Solved</h3>
          <p className="text-xs text-slate-400">Real-life interactive branching cyber dilemmas.</p>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full bg-purple-500"
              style={{
                width: `${(progress.completedScenarios.length / SCENARIOS.length) * 100}%`,
              }}
            />
          </div>
          <button
            onClick={() => onNavigate('scenarios')}
            className="text-xs text-purple-400 hover:underline flex items-center gap-1 font-semibold pt-1"
          >
            <span>Explore Scenarios</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>

        {/* Toolkit Checklists Done */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
          <div className="flex items-center justify-between text-cyan-400">
            <ListChecks className="h-5 w-5" />
            <span className="font-mono text-sm font-bold">
              {totalCompletedToolkitItems} / {totalToolkitItems}
            </span>
          </div>
          <h3 className="text-sm font-bold text-white">Toolkit Checklist Tasks</h3>
          <p className="text-xs text-slate-400">Action items completed across 8 security toolkits.</p>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full bg-cyan-500"
              style={{
                width: `${(totalCompletedToolkitItems / totalToolkitItems) * 100}%`,
              }}
            />
          </div>
          <button
            onClick={() => onNavigate('toolkit')}
            className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-semibold pt-1"
          >
            <span>Open Toolkits</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

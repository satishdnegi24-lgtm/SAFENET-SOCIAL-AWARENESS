import React, { useState } from 'react';
import { ACADEMY_LESSONS, DOS_AND_DONTS, AcademyLesson } from '../data/learningData';
import { PageRoute, UserProgressState } from '../types';
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Shield,
  ThumbsUp,
  ThumbsDown,
  ArrowRight,
  Filter,
  Sparkles,
} from 'lucide-react';

interface LearnPageProps {
  onNavigate: (page: PageRoute) => void;
  progress: UserProgressState;
  onToggleLessonCompletion: (lessonId: string) => void;
}

export const LearnPage: React.FC<LearnPageProps> = ({
  onNavigate,
  progress,
  onToggleLessonCompletion,
}) => {
  const [activeTab, setActiveTab] = useState<'lessons' | 'dos-donts'>('lessons');
  const [selectedLesson, setSelectedLesson] = useState<AcademyLesson>(ACADEMY_LESSONS[0]);
  const [dosFilter, setDosFilter] = useState<string>('all');

  const isCompleted = (id: string) => progress.completedLessons.includes(id);

  const categories = ['all', 'Security', 'Privacy', 'Habits', 'Action', 'Citizenship', 'Wellbeing'];

  const filteredDos =
    dosFilter === 'all'
      ? DOS_AND_DONTS.dos
      : DOS_AND_DONTS.dos.filter((d) => d.category.toLowerCase() === dosFilter.toLowerCase());

  const filteredDonts =
    dosFilter === 'all'
      ? DOS_AND_DONTS.donts
      : DOS_AND_DONTS.donts.filter((d) => d.category.toLowerCase() === dosFilter.toLowerCase());

  return (
    <div className="space-y-10 py-6">
      {/* Page Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400">
              <BookOpen className="h-4 w-4" />
              <span>SafeNet Curriculum</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Social Media Safety Academy
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Master foundational cyber hygiene, digital boundaries, and behavioral safeguards.
            </p>
          </div>

          {/* Segmented Control Tabs */}
          <div className="flex items-center gap-1 rounded-xl border border-slate-800 bg-slate-900 p-1">
            <button
              onClick={() => setActiveTab('lessons')}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                activeTab === 'lessons'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Interactive Modules ({progress.completedLessons.length}/{ACADEMY_LESSONS.length})
            </button>
            <button
              onClick={() => setActiveTab('dos-donts')}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                activeTab === 'dos-donts'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Illustrated Dos & Don'ts
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'lessons' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Lesson Selector Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Academy Curriculum
            </h2>
            <div className="space-y-2">
              {ACADEMY_LESSONS.map((lesson, idx) => {
                const done = isCompleted(lesson.id);
                const isSelected = selectedLesson.id === lesson.id;
                return (
                  <button
                    key={lesson.id}
                    onClick={() => {
                      setSelectedLesson(lesson);
                      window.scrollTo({ top: 120, behavior: 'smooth' });
                    }}
                    className={`flex w-full items-start gap-3 rounded-xl p-3.5 text-left transition-all border ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-950/40 text-white shadow-md'
                        : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                        done
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : isSelected
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {done ? <CheckCircle2 className="h-4 w-4" /> : idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>{lesson.category}</span>
                        <span>{lesson.duration}</span>
                      </div>
                      <h3 className="text-xs font-bold text-white truncate mt-0.5">
                        {lesson.title}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Completion Progress Card */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 space-y-2 mt-4">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Modules Progress</span>
                <span className="font-mono text-indigo-400">
                  {Math.round((progress.completedLessons.length / ACADEMY_LESSONS.length) * 100)}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full bg-indigo-500 transition-all duration-300"
                  style={{
                    width: `${(progress.completedLessons.length / ACADEMY_LESSONS.length) * 100}%`,
                  }}
                />
              </div>
              <p className="text-[11px] text-slate-500">
                Completing all 5 modules and scoring ≥80% on the quiz qualifies you for the verified Certificate.
              </p>
            </div>
          </div>

          {/* Lesson Content Viewer */}
          <div className="lg:col-span-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 space-y-8">
            <div className="space-y-2 border-b border-slate-800 pb-6">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="text-indigo-400 font-semibold">{selectedLesson.category}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {selectedLesson.duration}
                </span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                {selectedLesson.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedLesson.summary}
              </p>
            </div>

            {/* Objectives */}
            <div className="rounded-xl border border-indigo-900/50 bg-indigo-950/20 p-4 space-y-2">
              <h3 className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                Key Learning Objectives
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedLesson.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold shrink-0">✓</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lesson Body Paragraphs */}
            <div className="space-y-6">
              {selectedLesson.content.map((sec, idx) => (
                <div key={idx} className="space-y-2.5">
                  <h3 className="text-base font-bold text-white">{sec.heading}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{sec.text}</p>
                  {sec.keyTakeaway && (
                    <div className="rounded-lg border border-slate-800 bg-slate-950 p-3 text-xs text-cyan-300">
                      <strong>Takeaway:</strong> {sec.keyTakeaway}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Interactive Lesson Checklist */}
            {selectedLesson.interactiveChecklist && (
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Practical Action Steps
                </h3>
                <div className="space-y-2">
                  {selectedLesson.interactiveChecklist.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="mt-0.5 h-3.5 w-3.5 rounded border border-indigo-400 shrink-0 flex items-center justify-center text-[10px] text-indigo-400">
                        {idx + 1}
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reflection Prompt */}
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-1.5">
              <span className="text-xs font-semibold text-amber-400">Reflection Question</span>
              <p className="text-xs text-slate-300 italic">{selectedLesson.reflectionPrompt}</p>
            </div>

            {/* Bottom Lesson Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-6">
              <button
                onClick={() => onToggleLessonCompletion(selectedLesson.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                  isCompleted(selectedLesson.id)
                    ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                    : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-md'
                }`}
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>
                  {isCompleted(selectedLesson.id) ? 'Completed (Click to Revert)' : 'Mark Module Completed'}
                </span>
              </button>

              <button
                onClick={() => onNavigate('footprint')}
                className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                <span>Take Digital Footprint Audit</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Illustrated Dos and Don'ts Section */
        <div className="space-y-8">
          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs">
            <Filter className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-400 font-medium shrink-0">Filter by topic:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setDosFilter(cat)}
                className={`rounded-lg px-3 py-1.5 font-medium whitespace-nowrap capitalize transition-colors ${
                  dosFilter.toLowerCase() === cat.toLowerCase()
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* DO Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-emerald-500/30 pb-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                  <ThumbsUp className="h-4 w-4" />
                </div>
                <h2 className="text-lg font-bold text-emerald-400">WHAT TO DO</h2>
              </div>

              <div className="space-y-4">
                {filteredDos.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-2 hover:border-emerald-500/40 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <h3 className="font-bold text-white text-sm">{item.title}</h3>
                      <span className="text-[11px] text-slate-500 font-mono">{item.category}</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      <strong>Why it matters:</strong> {item.why}
                    </p>
                    <div className="rounded-lg bg-slate-950 p-2.5 text-[11px] text-slate-400 border border-slate-800">
                      <strong>Example:</strong> {item.example}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DON'T Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-rose-500/30 pb-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-500/20 text-rose-400">
                  <ThumbsDown className="h-4 w-4" />
                </div>
                <h2 className="text-lg font-bold text-rose-400">WHAT NOT TO DO</h2>
              </div>

              <div className="space-y-4">
                {filteredDonts.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-2 hover:border-rose-500/40 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <h3 className="font-bold text-white text-sm">{item.title}</h3>
                      <span className="text-[11px] text-slate-500 font-mono">{item.category}</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      <strong>Why it is dangerous:</strong> {item.why}
                    </p>
                    <div className="rounded-lg bg-slate-950 p-2.5 text-[11px] text-slate-400 border border-slate-800">
                      <strong>Example:</strong> {item.example}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

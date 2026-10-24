import React, { useState } from 'react';
import { TOOLKIT_CHECKLISTS } from '../data/toolkitData';
import { ToolkitChecklist, PageRoute } from '../types';
import {
  ListChecks,
  CheckCircle2,
  RotateCcw,
  Printer,
  Shield,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

interface SafetyToolkitPageProps {
  completedItems: Record<string, string[]>; // checklistId -> itemIds[]
  onToggleItem: (checklistId: string, itemId: string) => void;
  onResetChecklist: (checklistId: string) => void;
  onNavigate: (page: PageRoute) => void;
}

export const SafetyToolkitPage: React.FC<SafetyToolkitPageProps> = ({
  completedItems,
  onToggleItem,
  onResetChecklist,
  onNavigate,
}) => {
  const [selectedChecklistId, setSelectedChecklistId] = useState<string>(TOOLKIT_CHECKLISTS[0].id);

  const activeChecklist =
    TOOLKIT_CHECKLISTS.find((c) => c.id === selectedChecklistId) || TOOLKIT_CHECKLISTS[0];

  const currentCompleted = completedItems[activeChecklist.id] || [];
  const totalItems = activeChecklist.items.length;
  const completedCount = currentCompleted.length;
  const isAllDone = totalItems > 0 && completedCount === totalItems;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
              <ListChecks className="h-4 w-4" />
              <span>Interactive Action Checklists</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Cyber Safety Toolkit
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              8 step-by-step interactive security audits and response protocols. Check off items as you complete them; your progress saves locally in your browser.
            </p>
          </div>

          <div className="flex items-center gap-2 no-print">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 px-3.5 py-2 text-xs font-semibold text-slate-200 transition-colors"
            >
              <Printer className="h-4 w-4" />
              <span>Print Guide</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Checklist Tabs & Active Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Checklist Selector */}
        <div className="lg:col-span-4 space-y-2 no-print">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Available Toolkits
          </span>

          <div className="space-y-2">
            {TOOLKIT_CHECKLISTS.map((toolkit) => {
              const isSelected = toolkit.id === selectedChecklistId;
              const done = (completedItems[toolkit.id] || []).length;
              const total = toolkit.items.length;
              return (
                <button
                  key={toolkit.id}
                  onClick={() => setSelectedChecklistId(toolkit.id)}
                  className={`flex w-full items-center justify-between rounded-xl p-3.5 text-left transition-all border ${
                    isSelected
                      ? 'border-cyan-500 bg-cyan-950/40 text-white shadow-md'
                      : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="min-w-0 pr-2">
                    <span className="text-[10px] font-mono uppercase text-slate-400">
                      {toolkit.category}
                    </span>
                    <h3 className="text-xs font-bold text-white truncate">{toolkit.title}</h3>
                  </div>
                  <div className="text-right shrink-0">
                    <span
                      className={`font-mono text-xs ${
                        done === total ? 'text-emerald-400 font-bold' : 'text-slate-400'
                      }`}
                    >
                      {done}/{total}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Checklist View */}
        <div className="lg:col-span-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <span className="text-xs font-mono uppercase text-cyan-400 font-semibold">
                {activeChecklist.category}
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                {activeChecklist.title}
              </h2>
              <p className="text-xs text-slate-300 mt-1">{activeChecklist.description}</p>
            </div>

            <button
              onClick={() => onResetChecklist(activeChecklist.id)}
              className="no-print flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 text-xs text-slate-300 transition-colors shrink-0"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset Checklist</span>
            </button>
          </div>

          {/* Progress Tracker Bar */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Audit Completion</span>
              <span className="font-mono text-cyan-400 font-semibold">
                {completedCount} of {totalItems} Tasks Done ({Math.round((completedCount / totalItems) * 100)}%)
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className={`h-full transition-all duration-300 ${
                  isAllDone ? 'bg-emerald-500' : 'bg-cyan-500'
                }`}
                style={{ width: `${(completedCount / totalItems) * 100}%` }}
              />
            </div>
          </div>

          {/* Checklist Items */}
          <div className="space-y-3">
            {activeChecklist.items.map((item) => {
              const isChecked = currentCompleted.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => onToggleItem(activeChecklist.id, item.id)}
                  className={`cursor-pointer rounded-xl border p-4 transition-all flex items-start gap-3.5 ${
                    isChecked
                      ? 'border-emerald-500/40 bg-emerald-950/20 text-slate-200'
                      : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                  role="checkbox"
                  aria-checked={isChecked}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      onToggleItem(activeChecklist.id, item.id);
                    }
                  }}
                >
                  <div
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                      isChecked
                        ? 'border-emerald-500 bg-emerald-500 text-slate-950'
                        : 'border-slate-600 bg-slate-900'
                    }`}
                  >
                    {isChecked && <CheckCircle2 className="h-4 w-4" />}
                  </div>

                  <div className="flex-1 space-y-1">
                    <h3
                      className={`text-xs sm:text-sm font-semibold ${
                        isChecked ? 'line-through text-slate-400' : 'text-white'
                      }`}
                    >
                      {item.task}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Celebration if all done */}
          {isAllDone && (
            <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-4 text-center space-y-1 animate-in fade-in">
              <span className="text-emerald-400 font-bold text-sm">✓ Checklist Fully Completed!</span>
              <p className="text-xs text-slate-300">
                You have systematically hardened this security vector. Continue through the other toolkits to maximize your cyber defense.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { SCENARIOS } from '../data/scenariosData';
import { Scenario, ScenarioChoice, PageRoute, UserProgressState } from '../types';
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ShieldAlert,
  ArrowRight,
  RotateCcw,
  Shield,
  HelpCircle,
  FileText,
} from 'lucide-react';

interface ScenariosPageProps {
  onScenarioCompleted: (scenarioId: string) => void;
  progress: UserProgressState;
  onNavigate: (page: PageRoute) => void;
}

export const ScenariosPage: React.FC<ScenariosPageProps> = ({
  onScenarioCompleted,
  progress,
  onNavigate,
}) => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(SCENARIOS[0].id);
  const [selectedChoice, setSelectedChoice] = useState<ScenarioChoice | null>(null);

  const currentScenario =
    SCENARIOS.find((s) => s.id === selectedScenarioId) || SCENARIOS[0];

  const isCompleted = (id: string) => progress.completedScenarios.includes(id);

  const handleSelectChoice = (choice: ScenarioChoice) => {
    setSelectedChoice(choice);
    if (choice.isRecommended) {
      onScenarioCompleted(currentScenario.id);
    }
  };

  const handleSwitchScenario = (scenarioId: string) => {
    setSelectedScenarioId(scenarioId);
    setSelectedChoice(null);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
          <Sparkles className="h-4 w-4" />
          <span>Interactive Simulation Deck</span>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
          Real-Life Cyber Safety Scenarios
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
          Test your decision-making in realistic online dilemmas. Explore branching outcomes, understand consequences, and learn how to preserve evidence safely.
        </p>
      </div>

      {/* Main Grid: Sidebar List + Scenario View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Scenario List */}
        <div className="lg:col-span-4 space-y-2.5">
          <div className="flex items-center justify-between text-xs text-slate-400 font-semibold uppercase tracking-wider pb-1">
            <span>Scenarios ({progress.completedScenarios.length}/{SCENARIOS.length} Solved)</span>
          </div>

          {SCENARIOS.map((item) => {
            const completed = isCompleted(item.id);
            const isSelected = item.id === selectedScenarioId;
            return (
              <button
                key={item.id}
                onClick={() => handleSwitchScenario(item.id)}
                className={`flex w-full items-start gap-3 rounded-xl p-3.5 text-left transition-all border ${
                  isSelected
                    ? 'border-amber-500 bg-amber-950/40 text-white shadow-md'
                    : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-mono font-bold ${
                    completed
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : isSelected
                      ? 'bg-amber-600 text-white'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {completed ? <CheckCircle2 className="h-4 w-4" /> : item.code.replace('SCN-', '')}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-amber-400/90 font-mono uppercase">
                    {item.contextTag}
                  </span>
                  <h3 className="text-xs font-bold text-white truncate mt-0.5">{item.title}</h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Scenario Card */}
        <div className="lg:col-span-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-6">
          <div className="space-y-2 border-b border-slate-800 pb-5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-amber-400 font-semibold">{currentScenario.code}</span>
              <span className="text-slate-500 font-medium">{currentScenario.category}</span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
              {currentScenario.title}
            </h2>
          </div>

          {/* Situation Box */}
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              The Situation:
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {currentScenario.situation}
            </p>
          </div>

          {/* Choices Prompt */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              What would you do?
            </h3>

            <div className="space-y-3">
              {currentScenario.choices.map((choice) => {
                const isSelected = selectedChoice?.id === choice.id;
                return (
                  <button
                    key={choice.id}
                    onClick={() => handleSelectChoice(choice)}
                    className={`flex w-full items-start gap-3 rounded-xl p-4 text-left transition-all border text-xs sm:text-sm ${
                      isSelected
                        ? choice.isRecommended
                          ? 'border-emerald-500 bg-emerald-950/30 text-white'
                          : 'border-rose-500 bg-rose-950/30 text-white'
                        : 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                        isSelected
                          ? choice.isRecommended
                            ? 'border-emerald-400 bg-emerald-400 text-slate-950'
                            : 'border-rose-400 bg-rose-400 text-white'
                          : 'border-slate-700 text-slate-400'
                      }`}
                    >
                      {isSelected ? (choice.isRecommended ? '✓' : '✗') : '•'}
                    </div>
                    <span className="flex-1 leading-relaxed">{choice.text}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Consequence & Educational Feedback */}
          {selectedChoice && (
            <div
              className={`rounded-2xl border p-5 sm:p-6 space-y-4 animate-in fade-in duration-200 ${
                selectedChoice.isRecommended
                  ? 'border-emerald-500/40 bg-emerald-950/30'
                  : 'border-rose-500/40 bg-rose-950/30'
              }`}
            >
              <div className="flex items-center gap-2">
                {selectedChoice.isRecommended ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                    <span className="text-sm font-bold text-emerald-300">
                      Recommended Safe Action!
                    </span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="h-5 w-5 text-rose-400 shrink-0" />
                    <span className="text-sm font-bold text-rose-300">
                      Risky or Dangerous Choice!
                    </span>
                  </>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {selectedChoice.feedback}
              </p>

              {/* Actionable Tips */}
              <div className="rounded-xl bg-slate-950/70 p-4 border border-slate-800/80 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Key Insights:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedChoice.actionableTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold shrink-0">▸</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Evidence & Resolution Deck */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 space-y-2">
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5" />
                    <span>Evidence to Preserve</span>
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {currentScenario.evidencePreservationGuide.map((ev, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{ev}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 space-y-2">
                  <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Shield className="h-3.5 w-3.5" />
                    <span>Who to Contact</span>
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {currentScenario.whoToContact.map((contact, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-rose-400 font-bold">•</span>
                        <span>{contact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

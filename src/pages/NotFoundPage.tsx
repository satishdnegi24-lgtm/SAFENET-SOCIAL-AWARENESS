import React from 'react';
import { PageRoute } from '../types';
import { ShieldAlert, ArrowLeft, Home, Compass, BookOpen, AlertTriangle } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 text-center max-w-xl mx-auto space-y-6">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
        <ShieldAlert className="h-8 w-8" />
      </div>

      <div className="space-y-2">
        <span className="font-mono text-xs font-bold text-rose-400 uppercase tracking-widest">
          Error 404 · Navigation Checkpoint
        </span>
        <h1 className="font-display text-3xl font-extrabold text-white">
          Page or Resource Not Found
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          The requested cyber safety module or URL path does not exist. Please navigate back to one of our verified safety hubs below:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 hover:border-indigo-500 hover:bg-slate-900 transition-all text-xs"
        >
          <Home className="h-4 w-4 text-indigo-400 shrink-0" />
          <div>
            <strong className="text-white block">SafeNet Home</strong>
            <span className="text-slate-400 text-[11px]">Return to dashboard</span>
          </div>
        </button>

        <button
          onClick={() => onNavigate('learn')}
          className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 hover:border-indigo-500 hover:bg-slate-900 transition-all text-xs"
        >
          <BookOpen className="h-4 w-4 text-cyan-400 shrink-0" />
          <div>
            <strong className="text-white block">Safety Academy</strong>
            <span className="text-slate-400 text-[11px]">Learn social hygiene</span>
          </div>
        </button>

        <button
          onClick={() => onNavigate('footprint')}
          className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 hover:border-indigo-500 hover:bg-slate-900 transition-all text-xs"
        >
          <Compass className="h-4 w-4 text-purple-400 shrink-0" />
          <div>
            <strong className="text-white block">Digital Footprint Audit</strong>
            <span className="text-slate-400 text-[11px]">Check privacy score</span>
          </div>
        </button>

        <button
          onClick={() => onNavigate('report')}
          className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 hover:border-indigo-500 hover:bg-slate-900 transition-all text-xs"
        >
          <AlertTriangle className="h-4 w-4 text-rose-400 shrink-0" />
          <div>
            <strong className="text-white block">Where to Get Help</strong>
            <span className="text-slate-400 text-[11px]">Emergency 1930 & 112</span>
          </div>
        </button>
      </div>

      <div className="pt-4">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to SafeNet Home</span>
        </button>
      </div>
    </div>
  );
};

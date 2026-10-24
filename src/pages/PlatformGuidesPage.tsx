import React, { useState } from 'react';
import { PLATFORM_GUIDES } from '../data/platformGuidesData';
import { PlatformGuide } from '../types';
import {
  ShieldCheck,
  ExternalLink,
  Calendar,
  CheckCircle,
  HelpCircle,
  Layers,
  Info,
} from 'lucide-react';

export const PlatformGuidesPage: React.FC = () => {
  const [selectedPlatformId, setSelectedPlatformId] = useState<string>('instagram');

  const currentGuide =
    PLATFORM_GUIDES.find((g) => g.id === selectedPlatformId) || PLATFORM_GUIDES[0];

  return (
    <div className="space-y-10 py-6">
      {/* Page Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
          <Layers className="h-4 w-4" />
          <span>Platform Security Blueprints</span>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
          Platform-Specific Safety Guides
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
          Verified, step-by-step security and privacy configurations for Instagram, Facebook, Snapchat, X (Twitter), and WhatsApp.
        </p>
      </div>

      {/* Platform Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {PLATFORM_GUIDES.map((guide) => {
          const isSelected = guide.id === selectedPlatformId;
          return (
            <button
              key={guide.id}
              onClick={() => setSelectedPlatformId(guide.id)}
              className={`flex flex-col items-start rounded-xl p-4 text-left transition-all border ${
                isSelected
                  ? 'border-emerald-500 bg-emerald-950/30 text-white shadow-lg'
                  : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <span className="font-display text-sm font-bold text-white">{guide.platform}</span>
              <span className="text-[11px] text-slate-400 line-clamp-1 mt-1">{guide.tagline}</span>
            </button>
          );
        })}
      </div>

      {/* Guide Content Display */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 space-y-8">
        {/* Guide Top Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="font-display text-2xl font-extrabold text-white">
                {currentGuide.platform} Safety Blueprint
              </h2>
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400 border border-emerald-500/20">
                Verified Instructions
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">{currentGuide.tagline}</p>
            <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
              <Calendar className="h-3.5 w-3.5" />
              <span>Last Reviewed: {currentGuide.lastReviewed}</span>
            </div>
          </div>

          <a
            href={currentGuide.officialHelpUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 px-4 py-2.5 text-xs font-semibold text-white transition-colors shrink-0"
          >
            <span>Official {currentGuide.platform} Help Center</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Disclaimer */}
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-xs text-slate-400 flex items-start gap-2.5">
          <Info className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
          <p>
            Platform interfaces, menu hierarchies, and terms change periodically. SafeNet verifies instructions against current app releases. Never share your passwords or verification SMS codes with anyone claiming to help you configure settings.
          </p>
        </div>

        {/* Sections List */}
        <div className="space-y-6">
          {currentGuide.sections.map((section, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-5 sm:p-6 space-y-3"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600/30 text-indigo-300 text-xs font-mono">
                      {idx + 1}
                    </span>
                    <span>{section.title}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{section.description}</p>
                </div>
              </div>

              {/* Step by step */}
              <div className="rounded-lg bg-slate-950 p-4 space-y-2 border border-slate-800">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Step-by-Step Procedure:
                </span>
                <ol className="space-y-2 text-xs text-slate-300">
                  {section.steps.map((st, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2.5">
                      <span className="font-mono text-cyan-400 text-xs shrink-0">{sIdx + 1}.</span>
                      <span className="leading-relaxed">{st}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {section.officialTip && (
                <div className="rounded-lg bg-emerald-950/30 border border-emerald-500/20 p-3 text-xs text-emerald-300 flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                  <span>
                    <strong>Official Tip:</strong> {section.officialTip}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

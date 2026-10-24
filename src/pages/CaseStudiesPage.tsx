import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/caseStudiesData';
import { CaseStudy, PageRoute } from '../types';
import {
  FileText,
  ShieldCheck,
  Calendar,
  ExternalLink,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  Scale,
} from 'lucide-react';

interface CaseStudiesPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onNavigate }) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_STUDIES[0].id);

  const activeCase =
    CASE_STUDIES.find((c) => c.id === selectedCaseId) || CASE_STUDIES[0];

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-purple-400">
          <FileText className="h-4 w-4" />
          <span>Real Stories, Real Lessons</span>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
          Verified Real-World Case Studies
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
          Carefully researched public cyber investigations, police enforcement records, and regulatory precedents in India. Distinguishing confirmed facts from allegations.
        </p>

        {/* Ethical Standards Badge */}
        <div className="mt-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-xs text-slate-400 flex items-center gap-2">
          <Scale className="h-4 w-4 text-purple-400 shrink-0" />
          <span>
            <strong>Editorial Integrity:</strong> All case studies are grounded in official police press briefings, court filings, and reputable journalistic reports. No unverified rumors, private intimate material, or victim identities are sensationalized.
          </span>
        </div>
      </div>

      {/* Case Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {CASE_STUDIES.map((c) => {
          const isSelected = c.id === selectedCaseId;
          return (
            <button
              key={c.id}
              onClick={() => setSelectedCaseId(c.id)}
              className={`flex flex-col items-start rounded-xl p-4 text-left transition-all border ${
                isSelected
                  ? 'border-purple-500 bg-purple-950/40 text-white shadow-lg'
                  : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <span className="text-[10px] font-mono uppercase text-purple-400">{c.topic}</span>
              <h3 className="font-display text-xs font-bold text-white mt-1 line-clamp-2">
                {c.title}
              </h3>
              <span className="text-[11px] text-slate-500 mt-2 flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {c.dateOrTimeline}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Case Study Detail */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 space-y-8">
        {/* Case Banner */}
        <div className="space-y-3 border-b border-slate-800 pb-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-purple-500/20 px-2.5 py-0.5 text-xs font-semibold text-purple-300 border border-purple-500/30">
              {activeCase.verifiedStatus}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
              <Calendar className="h-3.5 w-3.5" />
              {activeCase.dateOrTimeline}
            </span>
          </div>

          <h2 className="font-display text-xl sm:text-2xl font-extrabold text-white">
            {activeCase.title}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic border-l-2 border-purple-500 pl-3">
            {activeCase.background}
          </p>
        </div>

        {/* What Sources Confirm vs What Remains Uncertain */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Confirmed Facts */}
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/10 p-5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              <span>What Official Sources & Investigations Confirm</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {activeCase.whatSourcesConfirm.map((fact, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span className="leading-relaxed">{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Uncertainties / Open Questions */}
          <div className="rounded-xl border border-amber-500/30 bg-amber-950/10 p-5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <HelpCircle className="h-4 w-4" />
              <span>What Remains Complex or Uncertain</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {activeCase.whatRemainsUncertain.map((unc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold shrink-0">?</span>
                  <span className="leading-relaxed">{unc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Real-World Impact */}
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400">
            Real-World Impact & Legal Precedent
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {activeCase.realWorldImpact}
          </p>
        </div>

        {/* Safety Lessons & Preventive Measures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-indigo-900/50 bg-indigo-950/20 p-5 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-300">
              Key Safety Lessons
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {activeCase.keySafetyLessons.map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold shrink-0">▸</span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-cyan-900/50 bg-cyan-950/20 p-5 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
              Recommended Preventive Measures
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {activeCase.preventiveMeasures.map((measure, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold shrink-0">▸</span>
                  <span>{measure}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Citations & Sources */}
        <div className="border-t border-slate-800 pt-6 space-y-2">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Verified Source Documentation
          </h4>
          <ul className="space-y-1.5 text-xs">
            {activeCase.sources.map((src, idx) => (
              <li key={idx} className="flex items-center gap-2 text-slate-300">
                <span className="font-semibold text-white">{src.publisher}:</span>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 underline underline-offset-4"
                >
                  <span>{src.title}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { REPORTING_ISSUES } from '../data/reportData';
import { ReportingIssueGuide, PageRoute } from '../types';
import {
  AlertTriangle,
  PhoneCall,
  ExternalLink,
  ShieldCheck,
  FileText,
  Lock,
  Layers,
  Info,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

export const ReportHelpPage: React.FC = () => {
  const [selectedIssueId, setSelectedIssueId] = useState<string>('financial-fraud');

  const activeIssue =
    REPORTING_ISSUES.find((i) => i.id === selectedIssueId) || REPORTING_ISSUES[0];

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
          <AlertTriangle className="h-4 w-4" />
          <span>Incident Response & Escalation Hub</span>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
          Report an Issue & Where to Get Help
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
          Step-by-step verified protocols for financial cyber fraud, deepfakes, account takeovers, impersonation, and harassment.
        </p>

        {/* Mandatory Educational Disclaimer */}
        <div className="mt-4 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs text-rose-200 flex items-start gap-3">
          <Info className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-white">Crucial Notice: SafeNet Is an Educational Directory</p>
            <p className="leading-relaxed">
              SafeNet is <strong>NOT</strong> an automated complaint filing portal, police dispatch service, or legal counsel. We provide instructions on how <em>you</em> can report directly to official platforms and law enforcement authorities. Never submit personal passwords, banking OTPs, or private sensitive evidence into SafeNet.
            </p>
          </div>
        </div>
      </div>

      {/* Emergency Hotlines Strip (India) */}
      <section className="rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold">
              Official Indian Emergency & Cybercrime Helplines
            </span>
            <h2 className="text-lg font-bold text-white">
              National Incident Reporting Direct Lines
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          {/* Helpline 1930 */}
          <div className="rounded-xl border border-amber-500/30 bg-slate-950 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-amber-400 text-sm">Dial 1930</span>
              <span className="rounded bg-amber-500/20 text-amber-300 px-1.5 py-0.5 text-[10px] font-mono">
                Toll-Free 24/7
              </span>
            </div>
            <p className="font-semibold text-white">Citizen Financial Cyber Fraud</p>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Specifically for reporting stolen funds or UPI scams. Calling within the <strong>"Golden Hour" (first 2 hours)</strong> triggers immediate banking inter-bank freeze alerts.
            </p>
          </div>

          {/* National Portal */}
          <div className="rounded-xl border border-indigo-500/30 bg-slate-950 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-indigo-400 text-sm">cybercrime.gov.in</span>
              <span className="rounded bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 text-[10px] font-mono">
                National Portal
              </span>
            </div>
            <p className="font-semibold text-white">National Cyber Crime Reporting Portal</p>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Official portal by Ministry of Home Affairs (MHA) for formal complaints against deepfakes, women/child abuse, and identity theft.
            </p>
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              <span>Visit Portal</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* Emergency 112 */}
          <div className="rounded-xl border border-rose-500/30 bg-slate-950 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-rose-400 text-sm">Dial 112</span>
              <span className="rounded bg-rose-500/20 text-rose-300 px-1.5 py-0.5 text-[10px] font-mono">
                Immediate Danger
              </span>
            </div>
            <p className="font-semibold text-white">All-India Emergency Number</p>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              For active stalking, extortion threats involving physical harm, or imminent emergency danger. Police, fire, and ambulance response.
            </p>
          </div>
        </div>
      </section>

      {/* Platform vs Police Clarification */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider">
          Understanding the Two Distinct Reporting Tracks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 space-y-1.5">
            <strong className="text-cyan-400 text-sm">Track 1: Social Media Platform Reporting</strong>
            <p className="text-slate-300 leading-relaxed">
              • <strong>Role:</strong> Removes violating content, disables imposter accounts, and updates automated safety filters under Terms of Service.<br />
              • <strong>Limitation:</strong> Platforms do <em>not</em> arrest suspects, freeze bank accounts, or award monetary restitution.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 space-y-1.5">
            <strong className="text-indigo-400 text-sm">Track 2: Police & Law Enforcement Complaints</strong>
            <p className="text-slate-300 leading-relaxed">
              • <strong>Role:</strong> Initiates statutory criminal proceedings under the IT Act 2000 and BNS, serves legal preservation orders to tech platforms, and tracks financial money trails.<br />
              • <strong>Action:</strong> Register on cybercrime.gov.in or your local cyber cell.
            </p>
          </div>
        </div>
      </section>

      {/* Issue Selector Tabs */}
      <div className="space-y-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Select Your Issue for Tailored Guidance:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {REPORTING_ISSUES.map((issue) => {
            const isSelected = issue.id === selectedIssueId;
            return (
              <button
                key={issue.id}
                onClick={() => setSelectedIssueId(issue.id)}
                className={`flex flex-col items-start rounded-xl p-4 text-left transition-all border ${
                  isSelected
                    ? 'border-rose-500 bg-rose-950/30 text-white shadow-lg'
                    : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <h3 className="font-bold text-sm text-white">{issue.name}</h3>
                <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">
                  {issue.shortDescription}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Issue Guide View */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 space-y-8">
        <div className="space-y-1 border-b border-slate-800 pb-5">
          <span className="text-xs font-mono uppercase text-rose-400 font-semibold">
            Action Guide
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
            {activeIssue.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">{activeIssue.shortDescription}</p>
        </div>

        {/* Immediate Steps */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
            <AlertCircle className="h-4 w-4" />
            <span>Immediate Safety Steps</span>
          </h3>

          <div className="space-y-2">
            {activeIssue.immediateSafetySteps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950 p-3.5 text-xs text-slate-200"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 text-[11px] font-mono font-bold">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Evidence Preservation Checklist */}
        <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/10 p-5 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
            <FileText className="h-4 w-4" />
            <span>Evidence Preservation Checklist (Save Privately; Do Not Share Publicly)</span>
          </h3>
          <p className="text-xs text-slate-400">
            Never crop, filter, or re-encode media. Keep files in a secure offline folder for police inquiry:
          </p>
          <ul className="space-y-2 text-xs text-slate-300">
            {activeIssue.evidencePreservationChecklist.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Platform Reporting Steps */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
            <Layers className="h-4 w-4" />
            <span>Platform Takedown Procedures</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeIssue.platformReportingSteps.map((pr, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">{pr.platform}</span>
                  <a
                    href={pr.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-semibold"
                  >
                    <span>Help Portal</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <p className="text-slate-300 leading-relaxed">{pr.steps}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Formal Complaint Route Box */}
        <div className="rounded-xl border border-amber-500/40 bg-slate-950 p-5 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4" />
            <span>Formal Law Enforcement Route: {activeIssue.formalComplaintRoute.portalName}</span>
          </h3>

          <div className="text-xs text-slate-300 space-y-2">
            <p>
              <strong>Official Website:</strong>{' '}
              <a
                href={activeIssue.formalComplaintRoute.portalUrl}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-400 underline"
              >
                {activeIssue.formalComplaintRoute.portalUrl}
              </a>
            </p>
            {activeIssue.formalComplaintRoute.helpline && (
              <p>
                <strong>Helpline:</strong> {activeIssue.formalComplaintRoute.helpline}
              </p>
            )}
            <p>
              <strong>Applicable Legal Framework:</strong> {activeIssue.formalComplaintRoute.applicableLegalCategory}
            </p>
            <p className="text-[11px] text-slate-400 italic pt-1 border-t border-slate-800">
              {activeIssue.formalComplaintRoute.importantDisclaimer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

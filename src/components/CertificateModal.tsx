import React, { useState } from 'react';
import { X, Printer, Award, Shield, CheckCircle2 } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  onUpdateUserName: (name: string) => void;
  quizScore: number;
  completedLessonsCount: number;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  userName,
  onUpdateUserName,
  quizScore,
  completedLessonsCount,
}) => {
  const [nameInput, setNameInput] = useState(userName || 'Cyber Safety Scholar');
  const [isEditing, setIsEditing] = useState(!userName);

  if (!isOpen) return null;

  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const certificateId = `SN-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

  const handlePrint = () => {
    window.print();
  };

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      onUpdateUserName(nameInput.trim());
      setIsEditing(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-title"
    >
      <div className="relative w-full max-w-4xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 text-white my-8">
        {/* Controls Bar - Hidden during print */}
        <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-amber-400" />
            <h2 id="cert-title" className="text-base font-bold text-white">
              Educational Completion Certificate
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
            >
              <Printer className="h-4 w-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
              aria-label="Close certificate modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Name Customization Row - Hidden during print */}
        <div className="no-print mb-6 rounded-xl bg-slate-800/80 p-4 border border-slate-700/60 flex flex-wrap items-center justify-between gap-4">
          {isEditing ? (
            <form onSubmit={handleSaveName} className="flex flex-1 items-center gap-3">
              <label htmlFor="cert-name" className="text-xs text-slate-300 font-medium whitespace-nowrap">
                Recipient Name:
              </label>
              <input
                id="cert-name"
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                maxLength={40}
                placeholder="Enter your full name"
                className="flex-1 rounded-lg border border-slate-600 bg-slate-950 px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-500"
              >
                Apply to Certificate
              </button>
            </form>
          ) : (
            <div className="flex w-full items-center justify-between">
              <span className="text-xs text-slate-300">
                Issued to: <strong className="text-white text-sm">{userName || nameInput}</strong>
              </span>
              <button
                onClick={() => setIsEditing(true)}
                className="text-xs text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
              >
                Change Display Name
              </button>
            </div>
          )}
        </div>

        {/* Certificate Sheet (Printable Canvas) */}
        <div className="print-only relative rounded-xl border-4 border-amber-500/40 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8 sm:p-12 text-center shadow-inner overflow-hidden">
          {/* Subtle Guilloché Border Effect */}
          <div className="absolute inset-2 pointer-events-none rounded-lg border border-amber-500/20" />
          <div className="absolute inset-4 pointer-events-none rounded-lg border border-indigo-500/20" />

          {/* Crest Emblem */}
          <div className="mx-auto mb-4 flex justify-center">
            <div className="relative h-20 w-20 rounded-full border-2 border-amber-400/80 p-1 shadow-lg shadow-amber-500/10">
              <img
                src="/src/assets/images/certificate_crest_1792854581269.jpg"
                alt="SafeNet Academy Seal"
                className="h-full w-full rounded-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-indigo-900/40 rounded-full -z-10">
                <Shield className="h-10 w-10 text-amber-400" />
              </div>
            </div>
          </div>

          <span className="text-xs font-semibold tracking-widest uppercase text-amber-400/90 font-mono">
            SafeNet Cyber Safety Education Initiative
          </span>

          <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display">
            Certificate of Achievement
          </h1>

          <p className="mt-1 text-xs text-slate-400 italic">
            This certificate is proudly awarded to
          </p>

          {/* Student Name */}
          <div className="my-4 border-b border-amber-400/30 pb-2 max-w-md mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-amber-300 tracking-wide">
              {userName || nameInput}
            </h2>
          </div>

          <p className="mx-auto max-w-xl text-xs sm:text-sm leading-relaxed text-slate-300">
            For successfully demonstrating competency in Social Media Safety, Digital Footprint Awareness, Password Fortification, Phishing Defense, Synthetic Media Literacy, and Official Indian Cyber Reporting Protocols.
          </p>

          {/* Score & Validation Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 rounded-lg bg-slate-800/80 px-3 py-1.5 border border-slate-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Academy Lessons: {completedLessonsCount} / 5 Modules Completed</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-slate-800/80 px-3 py-1.5 border border-slate-700">
              <Award className="h-4 w-4 text-amber-400" />
              <span>Comprehensive Quiz Score: <strong>{quizScore}%</strong> (Passing: ≥80%)</span>
            </div>
          </div>

          {/* Signatures & Verification ID */}
          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-slate-800/80 pt-6 text-left text-xs">
            <div>
              <p className="text-[11px] text-slate-500 uppercase tracking-wider font-mono">Issue Date</p>
              <p className="font-semibold text-slate-200 mt-0.5">{today}</p>
              <p className="text-[10px] text-slate-500 mt-1 font-mono">ID: {certificateId}</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] text-slate-500 uppercase tracking-wider font-mono">Certification Authority</p>
              <p className="font-semibold text-indigo-300 mt-0.5">SafeNet Cyber Academic Committee</p>
              <p className="text-[10px] text-slate-500 mt-1">Verified Non-Accredited Educational Project</p>
            </div>
          </div>

          {/* Educational Project Label */}
          <div className="mt-6 text-[10px] text-slate-500">
            SafeNet — Think Before You Click · Educational Self-Assessment & Literacy Project · www.safenet-cyber.edu
          </div>
        </div>
      </div>
    </div>
  );
};

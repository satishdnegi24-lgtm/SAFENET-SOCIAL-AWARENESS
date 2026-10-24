import React from 'react';
import { PageRoute, UserProgressState } from '../types';
import {
  Shield,
  ArrowRight,
  Compass,
  FileCheck2,
  AlertTriangle,
  Lock,
  Layers,
  Sparkles,
  PhoneCall,
  CheckCircle,
  HelpCircle,
  Eye,
  FileText,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  progress: UserProgressState;
  onOpenTutor: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, progress, onOpenTutor }) => {
  const hasProgress = Boolean(
    progress.completedLessons.length > 0 ||
    progress.footprintAssessmentCompleted ||
    (progress.bestQuizScore !== undefined && progress.bestQuizScore > 0)
  );

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300">
              <Shield className="h-3.5 w-3.5 text-indigo-400" />
              <span>Cyber Safety & Digital Footprint Academy</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Think Before <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-200 bg-clip-text text-transparent">
                You Click.
              </span>
            </h1>

            <p className="text-base sm:text-lg font-medium text-slate-300">
              Stay Safe. Protect Your Privacy. Own Your Digital Footprint.
            </p>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-400 max-w-xl">
              An interactive educational platform designed for students, young adults, parents, and citizens in India. Master privacy controls, detect synthetic deepfakes, spot social engineering scams, and navigate official reporting channels.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('learn')}
                className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 transition-all"
              >
                <span>Start Learning</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => onNavigate('footprint')}
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-all"
              >
                <Compass className="h-4 w-4 text-cyan-400" />
                <span>Check My Digital Footprint</span>
              </button>

              <button
                onClick={() => onNavigate('report')}
                className="flex items-center gap-2 rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm font-semibold text-rose-300 hover:bg-rose-500/20 transition-all"
              >
                <AlertTriangle className="h-4 w-4 text-rose-400" />
                <span>Report an Issue</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-square overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
              <img
                src="/src/assets/images/hero_digital_safety_1792854579606.jpg"
                alt="Cybersecurity shield and interconnected digital network"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-slate-800/80 bg-slate-950/80 p-3 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-white">Daily Cyber Safety Habit</span>
                  <span className="text-cyan-400 font-mono text-[11px]">Today's Focus</span>
                </div>
                <p className="mt-1 text-[11px] text-slate-400">
                  Turn on Authenticator App 2FA and never forward SMS reset codes to anyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Help Callout for Victims */}
      <section className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0" />
              <h2 className="text-base font-bold text-white">
                Experiencing Impersonation, Blackmail, or Financial Fraud Right Now?
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Do not panic, do not pay extortionists, and do not delete evidence. Follow our step-by-step guidance or call national emergency numbers.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:1930"
              className="flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 text-xs transition-colors shadow-md"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call 1930 (Financial Fraud)</span>
            </a>
            <button
              onClick={() => onNavigate('report')}
              className="rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 px-4 py-2.5 text-xs font-semibold text-white transition-colors"
            >
              Open Help Directory
            </button>
          </div>
        </div>
      </section>

      {/* Progress Summary Strip (if user has active data) */}
      {hasProgress && (
        <section className="rounded-2xl border border-indigo-900/60 bg-indigo-950/20 p-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>Your Ongoing Learning Journey</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {progress.completedLessons.length} lessons finished · Best Quiz Score:{' '}
                {progress.bestQuizScore || 0}% · {progress.footprintAssessmentCompleted ? 'Footprint audited' : 'Footprint pending'}
              </p>
            </div>
            <button
              onClick={() => onNavigate('progress')}
              className="rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white px-3.5 py-1.5 transition-colors"
            >
              View Learning Dashboard & Certificate
            </button>
          </div>
        </section>
      )}

      {/* Core Educational Pillars (5 Pillars requested) */}
      <section className="space-y-6">
        <div>
          <h2 className="font-display text-2xl font-bold text-white">Explore Cyber Safety Modules</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Carefully curated frameworks covering behavioral defense, digital identity, and legal protections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Social Media Safety */}
          <div
            onClick={() => onNavigate('learn')}
            className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-indigo-500/60 hover:bg-slate-900 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                Social Media Safety Academy
              </h3>
              <p className="text-xs leading-relaxed text-slate-400">
                Master the 6-Second Pause, credential stuffing defense, passkeys, and interactive dos and don'ts for teenagers and adults.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-semibold text-indigo-400">
              <span>Enter Academy</span>
              <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 2: Digital Footprints */}
          <div
            onClick={() => onNavigate('footprint')}
            className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-cyan-500/60 hover:bg-slate-900 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600/20 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                Digital Footprint Self-Assessment
              </h3>
              <p className="text-xs leading-relaxed text-slate-400">
                Evaluate your online exposure across 14 calibrated questions with an instant transparent awareness score and prioritized action plan.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-semibold text-cyan-400">
              <span>Start Assessment</span>
              <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 3: Deepfake Awareness */}
          <div
            onClick={() => onNavigate('deepfake')}
            className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/60 hover:bg-slate-900 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                Deepfake & Synthetic Media Center
              </h3>
              <p className="text-xs leading-relaxed text-slate-400">
                Understand AI face swaps, voice clone extortion, the 5-step verification workflow, and Indian legal remedies under the IT Act.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-semibold text-purple-400">
              <span>Explore Deepfakes</span>
              <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 4: Platform Guides */}
          <div
            onClick={() => onNavigate('platforms')}
            className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-emerald-500/60 hover:bg-slate-900 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600/20 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                Platform-Specific Guides
              </h3>
              <p className="text-xs leading-relaxed text-slate-400">
                Step-by-step lock-down guides for Instagram, Facebook, Snapchat, X, and WhatsApp with official verified help center links.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-semibold text-emerald-400">
              <span>View Guides</span>
              <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 5: Real-Life Scenarios */}
          <div
            onClick={() => onNavigate('scenarios')}
            className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-amber-500/60 hover:bg-slate-900 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-600/20 text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                8 Interactive Scenarios
              </h3>
              <p className="text-xs leading-relaxed text-slate-400">
                Make choices during suspicious links, friend impersonations, cyberbullying, and compromised accounts with immediate feedback.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-semibold text-amber-400">
              <span>Try Scenarios</span>
              <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 6: Report & Emergency Directory */}
          <div
            onClick={() => onNavigate('report')}
            className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-rose-500/60 hover:bg-slate-900 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-600/20 text-rose-400 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors">
                Where to Get Help & Report
              </h3>
              <p className="text-xs leading-relaxed text-slate-400">
                Clear distinction between platform takedowns and police complaints, 1930 helpline usage, and evidence preservation logs.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-semibold text-rose-400">
              <span>View Directory</span>
              <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </section>

      {/* Active vs Passive Digital Footprint Concept Card */}
      <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10">
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            Core Concept
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-2">
            Active vs. Passive Digital Footprints
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Every minute you spend connected creates two distinct streams of data that third parties, advertisers, and adversaries analyze:
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
              <h3 className="text-base font-bold text-white">Active Digital Footprint</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Created through deliberate, conscious actions: public photos, status updates, YouTube comments, tweets, forum posts, and profile bios.
            </p>
            <div className="rounded-lg bg-slate-900/80 p-3 text-xs text-slate-300">
              <strong>Key Risk:</strong> Misinterpreted statements resurfacing in job screenings, overshared personal addresses, or family details.
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-indigo-400" />
              <h3 className="text-base font-bold text-white">Passive Digital Footprint</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Collected quietly without your active typing: IP addresses, GPS camera EXIF metadata, app permissions, Wi-Fi router beacons, and device fingerprinting.
            </p>
            <div className="rounded-lg bg-slate-900/80 p-3 text-xs text-slate-300">
              <strong>Key Risk:</strong> Reveals physical location patterns, home neighborhood, sleep hours, and linked third-party accounts.
            </div>
          </div>
        </div>
      </section>

      {/* Quick Launchpad to Quiz & Case Studies */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-indigo-950/40 to-slate-900 p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400">
              <FileCheck2 className="h-4 w-4" />
              <span>Comprehensive Knowledge Check</span>
            </div>
            <h3 className="text-xl font-bold text-white">25-Question Cyber Safety Quiz</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Test your knowledge across digital footprints, scams, deepfakes, and reporting. Score ≥80% along with completing lessons to unlock your educational Certificate of Achievement.
            </p>
          </div>
          <button
            onClick={() => onNavigate('quiz')}
            className="mt-6 flex items-center justify-between rounded-xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2.5 text-xs font-semibold text-white transition-colors"
          >
            <span>Take the Quiz</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-purple-950/40 to-slate-900 p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400">
              <FileText className="h-4 w-4" />
              <span>Real Stories, Real Lessons</span>
            </div>
            <h3 className="text-xl font-bold text-white">Verified Real-World Case Studies</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Examine the Rashmika Mandanna deepfake case, AI voice cloning extortion rings, and Telegram task scams with verified facts, police FIR records, and safety lessons.
            </p>
          </div>
          <button
            onClick={() => onNavigate('cases')}
            className="mt-6 flex items-center justify-between rounded-xl bg-purple-600 hover:bg-purple-500 px-4 py-2.5 text-xs font-semibold text-white transition-colors"
          >
            <span>Read Case Studies</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* AI Tutor Callout */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Have a Specific Cyber Question?</h3>
            <p className="text-xs text-slate-400">
              Ask our SafeNet AI Tutor for instant advice on password managers, suspicious messages, or reporting.
            </p>
          </div>
        </div>
        <button
          onClick={onOpenTutor}
          className="rounded-xl border border-indigo-500/40 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 px-4 py-2 text-xs font-semibold transition-colors"
        >
          Ask SafeNet Tutor
        </button>
      </section>
    </div>
  );
};

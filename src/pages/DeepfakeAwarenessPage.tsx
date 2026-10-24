import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  Eye,
  ShieldCheck,
  AlertTriangle,
  Search,
  ExternalLink,
  CheckCircle2,
  FileCheck2,
  ArrowRight,
  Info,
  HelpCircle,
} from 'lucide-react';

interface DeepfakeAwarenessPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const DeepfakeAwarenessPage: React.FC<DeepfakeAwarenessPageProps> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const verificationSteps = [
    {
      title: 'Step 1: Trace the Primary Source',
      subtitle: 'Who published this video or audio clip first?',
      details:
        'Don\'t rely on re-shares in WhatsApp family groups or anonymous meme channels. Look for where the media originally surfaced. Often, tracing back reveals that the video was lifted from an existing foreign stock video, a fashion influencer reel, or an interview filmed years earlier.',
      action: 'Use reverse image search on extracted video frames or Google Lens.',
    },
    {
      title: 'Step 2: Scrutinize the Context & Timing',
      subtitle: 'Does this match established historical reality?',
      details:
        'Ask: Why would this public figure or classmate say this now? Does the lighting, weather, season, or wardrobe match the supposed location? Synthetic media often pairs real faces with mismatched backgrounds or re-purposes genuine audio over fabricated lip movements.',
      action: 'Check weather records, official event schedules, and date stamps.',
    },
    {
      title: 'Step 3: Consult Established Journalism & Fact-Checkers',
      subtitle: 'Have wire agencies or independent fact-checkers evaluated it?',
      details:
        'Reputable newsrooms (e.g. PTI Fact Check, Boom Live, Alt News, BBC Verify) employ specialized digital forensics teams. If a sensational scandal or emergency statement has not been reported by any mainstream news organization, it is overwhelmingly likely to be fabricated.',
      action: 'Search the person\'s name + "fact check" or check PIB Fact Check.',
    },
    {
      title: 'Step 4: Check Official Verified Statements',
      subtitle: 'Has the purported person or organization issued a denial or confirmation?',
      details:
        'Before believing a video showing someone confessing or resigning, check their official verified Twitter/X handle, Instagram, or corporate press room. Public figures and organizations issue rapid legal statements when targeted by synthetic impersonation.',
      action: 'Inspect official verified social profiles and press releases.',
    },
    {
      title: 'Step 5: Practice Responsible Non-Transmission',
      subtitle: 'Do not forward or quote suspected synthetic media.',
      details:
        'Even if your caption says "Is this fake?", forwarding the media feeds algorithmic recommendation systems and inflicts continuous trauma on victims. Breaking the transmission loop is the most effective civic intervention against synthetic defamation.',
      action: 'Report the URL directly to the platform and law enforcement instead of forwarding.',
    },
  ];

  return (
    <div className="space-y-12 py-6">
      {/* Page Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-purple-400">
          <Eye className="h-4 w-4" />
          <span>Synthetic Media Literacy Hub</span>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
          Deepfake Awareness & Media Verification Center
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
          Deconstruct AI face-swapping, vocal cloning extortion, and synthetic misinformation with objective forensic principles and victim-centered safety protocols.
        </p>
      </div>

      {/* Hero Visual Section */}
      <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950/40 p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400">
              Biometric Forensics & Ethics
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
              Seeing Is No Longer Believing.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Generative artificial intelligence has democratized the synthesis of human likenesses. While synthetic media powers creative arts and accessibility, its weaponization for non-consensual intimate imagery, voice clone kidnapping scams, and political defamation poses urgent societal risks.
            </p>

            <div className="rounded-xl border border-purple-500/30 bg-purple-950/20 p-4 space-y-1 text-xs text-purple-200">
              <strong className="text-white">Victim-Centered Core Principle:</strong>
              <p>
                Non-consensual synthetic imagery is a severe violation of bodily privacy and human dignity. Victims bear zero blame for being targeted by neural manipulation tools.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
              <img
                src="/src/assets/images/deepfake_detection_visual_1792854581528.jpg"
                alt="Educational biometric mesh and synthetic media analysis"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-[11px] text-slate-300">
                <span>Facial mesh analysis & synthetic texture comparison model</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Limits of AI Detectors Callout */}
      <section className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 space-y-3">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
          <AlertTriangle className="h-5 w-5 shrink-0" />
          <span>The Critical Fallacy: Why AI Detectors Alone Cannot Be Trusted</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Many websites claim to "Instantly Detect Deepfakes with 99% Accuracy". In reality, peer-reviewed computer science research demonstrates that commercial detectors are highly brittle. They regularly flag authentic footage as fake due to standard smartphone compression artifacts, and fail to detect cutting-edge diffusion models.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-400 pt-1">
          <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
            <strong className="text-amber-300">False Positives:</strong> Real speeches recorded in low light or re-compressed on WhatsApp get mislabeled as AI generated.
          </div>
          <div className="rounded-lg bg-slate-950 p-3 border border-slate-800">
            <strong className="text-amber-300">Out-of-Context Reality:</strong> Entirely real videos presented with deceptive audio or false captions cause massive harm without any AI modification.
          </div>
        </div>
      </section>

      {/* 5-Step Verification Process (Interactive Stepper) */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400">
            Methodical Protocol
          </span>
          <h2 className="font-display text-2xl font-bold text-white mt-1">
            The 5-Step Media Verification Workflow
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            A disciplined, human-centered protocol before forming judgment or reacting to sensational media.
          </p>
        </div>

        {/* Stepper Buttons */}
        <div className="flex flex-wrap gap-2">
          {verificationSteps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                activeStep === idx
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'border border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              Step {idx + 1}: {step.title.replace(`Step ${idx + 1}: `, '')}
            </button>
          ))}
        </div>

        {/* Active Step Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">
              {verificationSteps[activeStep].title}
            </h3>
            <p className="text-xs text-purple-300 font-medium">
              {verificationSteps[activeStep].subtitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {verificationSteps[activeStep].details}
          </p>

          <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 text-xs text-cyan-300 flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
            <div>
              <strong>Action to take:</strong> {verificationSteps[activeStep].action}
            </div>
          </div>
        </div>
      </section>

      {/* Response Checklist & Legal Recourse in India */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Response Checklist */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            <span>Immediate Response Checklist</span>
          </div>

          <ul className="space-y-3 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold shrink-0">1.</span>
              <span><strong>Halt Circulation:</strong> Do not forward, quote-tweet, or screenshot-share the file to other groups.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold shrink-0">2.</span>
              <span><strong>Preserve URL Evidence:</strong> Copy the exact link to the post and document uploader profile identifiers.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold shrink-0">3.</span>
              <span><strong>In-App Takedown:</strong> Submit reports under "Non-consensual nudity" or "Manipulated media" options.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold shrink-0">4.</span>
              <span><strong>StopNCII Hash Creation:</strong> For intimate imagery, generate non-reversible perceptual hashes at StopNCII.org to preempt cross-platform re-uploads.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold shrink-0">5.</span>
              <span><strong>Seek Trusted Support:</strong> Confide in a close counselor, parent, or institutional authority.</span>
            </li>
          </ul>
        </div>

        {/* Legal Recourse in India */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <ShieldCheck className="h-5 w-5 text-indigo-400" />
            <span>Legal Remedies in India</span>
          </div>

          <div className="space-y-3 text-xs text-slate-300">
            <div className="rounded-xl bg-slate-950 p-3.5 border border-slate-800 space-y-1">
              <h4 className="font-bold text-white">IT Act 2000 & Penal Provisions:</h4>
              <p className="text-slate-400">
                • <strong>Section 66E:</strong> Privacy violation (punishable by up to 3 years imprisonment).<br />
                • <strong>Section 66D:</strong> Cheating by personation using computer resource.<br />
                • <strong>Section 67 / 67A:</strong> Transmitting obscene or sexually explicit material.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 p-3.5 border border-slate-800 space-y-1">
              <h4 className="font-bold text-white">IT Rules 2021 Takedown Mandate:</h4>
              <p className="text-slate-400">
                Social media intermediaries must remove non-consensual deepfakes within <strong>24 to 36 hours</strong> upon receipt of formal notification.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('cases')}
                className="flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300"
              >
                <span>Read the Rashmika Mandanna Case Study</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

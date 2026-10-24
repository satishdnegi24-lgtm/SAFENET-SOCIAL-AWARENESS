import React from 'react';
import { PageRoute } from '../types';
import {
  Shield,
  Lock,
  ExternalLink,
  BookOpen,
  Calendar,
  CheckCircle2,
  AlertCircle,
  FileText,
  UserCheck,
} from 'lucide-react';

interface AboutPrivacySourcesPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPrivacySourcesPage: React.FC<AboutPrivacySourcesPageProps> = ({ onNavigate }) => {
  const verifiedSources = [
    {
      category: 'Government & Law Enforcement (India)',
      items: [
        { title: 'National Cyber Crime Reporting Portal (MHA)', url: 'https://cybercrime.gov.in', note: 'Central government portal for registering formal cybercrime complaints.' },
        { title: 'Ministry of Electronics and Information Technology (MeitY)', url: 'https://www.meity.gov.in', note: 'Information Technology Act, 2000 & IT Rules 2021 Advisories.' },
        { title: 'Indian Computer Emergency Response Team (CERT-In)', url: 'https://www.cert-in.org.in', note: 'National nodal agency for responding to computer security incidents.' },
        { title: 'Press Information Bureau (PIB) Fact Check Unit', url: 'https://factcheck.pib.gov.in', note: 'Official government verification of viral social media misinformation.' },
      ],
    },
    {
      category: 'Official Social Media Safety Centers',
      items: [
        { title: 'Instagram Help Center & Safety', url: 'https://help.instagram.com', note: 'Account privacy, two-factor authentication, and impersonation takedown procedures.' },
        { title: 'Meta Privacy Center (Facebook)', url: 'https://privacycenter.instagram.com', note: 'Cross-platform audience controls and profile tagging checkup.' },
        { title: 'Snapchat Safety & Privacy Guide', url: 'https://support.snapchat.com', note: 'Ghost Mode settings, contact controls, and disappearing media documentation.' },
        { title: 'X Help Center (formerly Twitter)', url: 'https://help.twitter.com', note: 'Protected posts, direct message safety filters, and harassment reporting.' },
        { title: 'WhatsApp Security & Privacy Features', url: 'https://faq.whatsapp.com', note: 'End-to-end encryption protocols, two-step verification PIN, and group controls.' },
      ],
    },
    {
      category: 'Recognized Cybersecurity & Privacy Research',
      items: [
        { title: 'StopNCII.org', url: 'https://stopncii.org', note: 'Global platform to prevent the non-consensual sharing of intimate images using perceptual hashing.' },
        { title: 'Electronic Frontier Foundation (EFF)', url: 'https://www.eff.org', note: 'Surveillance self-defense and browser privacy guides.' },
        { title: 'National Institute of Standards & Technology (NIST SP 800-63B)', url: 'https://pages.nist.gov/800-63-3', note: 'Modern password guidelines and multi-factor authentication standards.' },
        { title: 'WITNESS Media Lab', url: 'https://www.witness.org', note: 'Guidance on ethical media verification, deepfakes, and human rights evidence.' },
      ],
    },
  ];

  return (
    <div className="space-y-12 py-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400">
          <BookOpen className="h-4 w-4" />
          <span>Institutional Transparency</span>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
          About SafeNet, Privacy & Sources
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Our educational mission, transparent privacy practices, and verified directory of authoritative cyber-safety references.
        </p>
      </div>

      {/* Section 1: About SafeNet */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Project Identity & Educational Purpose</h2>
            <p className="text-xs text-slate-400">
              SafeNet — Think Before You Click · Stay Safe. Protect Your Privacy. Own Your Digital Footprint.
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          SafeNet was created as an interactive cyber safety education platform tailored to school students, college undergraduates, young professionals, parents, and citizens in India. Modern social media platforms reward impulsiveness and emotional posting, while threat actors leverage automated credential stuffing, synthetic deepfakes, and psychological extortion.
        </p>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Our objective is to instill cognitive resilience ("The 6-Second Pause"), demystify how digital footprints affect future educational and career prospects, and equip citizens with verified procedures to report crimes through official channels.
        </p>

        {/* Limitations Notice */}
        <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 space-y-1.5 text-xs text-amber-200">
          <strong className="text-white">Important Operational Limitations:</strong>
          <ul className="list-disc list-inside space-y-1 text-slate-300">
            <li>SafeNet is an academic educational project and is not affiliated with or endorsed by Meta, X, Snapchat, Google, or any government body.</li>
            <li>SafeNet does not provide legal representation, statutory advice, or police dispatch services.</li>
            <li>SafeNet does not file complaints on your behalf; users must personally report through official channels.</li>
          </ul>
        </div>
      </section>

      {/* Section 2: Privacy Policy */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
            <Lock className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Privacy Notice & Data Minimization</h2>
            <p className="text-xs text-slate-400">
              Last Updated: October 2026 · Strictly Zero-Knowledge & Local Storage
            </p>
          </div>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            SafeNet practices strict <strong>data minimization</strong>. We believe an educational cybersecurity application must uphold the very privacy principles it teaches:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
            <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 space-y-1">
              <strong className="text-emerald-400 font-semibold">What Stays in Your Browser:</strong>
              <p className="text-slate-400">
                • Non-sensitive module completion flags.<br />
                • Quiz scores and scenario progress.<br />
                • Checklist task checkmarks.<br />
                • Optional display name for the Certificate.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 space-y-1">
              <strong className="text-rose-400 font-semibold">What We NEVER Collect:</strong>
              <p className="text-slate-400">
                • Never collect social media passwords or OTPs.<br />
                • Never request government IDs or biometric scans.<br />
                • Never track your location or use third-party ad pixels.<br />
                • Never inspect or interface with real social media accounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Verified Sources Directory */}
      <section className="space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <h2 className="text-lg font-bold text-white">
            Verified Source Documentation & Authoritative Links
          </h2>
          <p className="text-xs text-slate-400">
            Every recommendation, legal citation, and procedure in SafeNet references verified primary documentation.
          </p>
        </div>

        <div className="space-y-6">
          {verifiedSources.map((group, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400">
                {group.category}
              </h3>

              <div className="space-y-3">
                {group.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl bg-slate-950 p-3.5 border border-slate-800/80 text-xs"
                  >
                    <div>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-white hover:text-indigo-400 inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>{item.title}</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <p className="text-slate-400 text-[11px] mt-0.5">{item.note}</p>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono shrink-0">
                      Verified Reference
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

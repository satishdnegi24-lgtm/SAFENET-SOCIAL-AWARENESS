import React from 'react';
import { PageRoute } from '../types';
import { Shield, PhoneCall, ExternalLink, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 no-print">
      {/* Emergency Helpline Strip */}
      <div className="border-b border-slate-800 bg-slate-900/60 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-200">
            <PhoneCall className="h-4 w-4 text-rose-400 shrink-0" aria-hidden="true" />
            <span className="font-semibold text-white">Need Urgent Help in India?</span>
            <span className="hidden sm:inline text-slate-400">·</span>
            <span className="text-slate-300">
              Financial Cyber Fraud: <strong className="text-amber-300 font-bold">1930</strong> (Free 24/7)
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
            >
              <span>National Cyber Crime Portal</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">Emergency Police: <strong className="text-white">112</strong></span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <Shield className="h-4 w-4" aria-hidden="true" />
              </div>
              <span className="font-display text-lg font-bold text-white">SafeNet</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-300 max-w-md">
              Think Before You Click. Stay Safe. Protect Your Privacy. Own Your Digital Footprint.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-400 max-w-md">
              A comprehensive educational platform teaching social media hygiene, deepfake literacy, account security, and verified cyber reporting protocols.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <Globe className="h-3.5 w-3.5 text-slate-400" />
              <span>Tailored for students, young adults, parents, and citizens in India.</span>
            </div>
          </div>

          {/* Column 1: Learn */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Learning Academy</h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('learn')} className="hover:text-white transition-colors">
                  Safety Academy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('footprint')} className="hover:text-white transition-colors">
                  Digital Footprint Audit
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('deepfake')} className="hover:text-white transition-colors">
                  Deepfake Awareness
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('cases')} className="hover:text-white transition-colors">
                  Real-World Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-white transition-colors">
                  Help Center & Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Interactive Tools */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Interactive Tools</h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('quiz')} className="hover:text-white transition-colors">
                  25-Question Cyber Quiz
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('scenarios')} className="hover:text-white transition-colors">
                  8 Real-Life Scenarios
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('toolkit')} className="hover:text-white transition-colors">
                  Safety Checklists Toolkit
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('platforms')} className="hover:text-white transition-colors">
                  Platform Guides
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('progress')} className="hover:text-white transition-colors">
                  My Progress & Certificate
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Help & Ethics */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">Where to Get Help</h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('report')} className="hover:text-white transition-colors">
                  Report an Issue Directory
                </button>
              </li>
              <li>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>National Cyber Crime Portal</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.cert-in.org.in"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>CERT-In Advisories</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                  About, Privacy & Sources
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-10 border-t border-slate-900 pt-6 text-[11px] leading-normal text-slate-400">
          <p>
            <strong>Educational Disclaimer:</strong> SafeNet is an independent academic educational project developed to promote digital safety literacy and cyber hygiene. SafeNet is not an official platform of Meta, X, Snap, or the Government of India, does not file complaints on your behalf, and does not provide legal representation. In emergencies involving immediate threat to life, contact emergency services at 112 immediately.
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-4 text-slate-400">
            <span>© 2026 SafeNet — Think Before You Click. All educational rights reserved.</span>
            <span>Zero personal passwords or biometric data are ever collected or stored.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Shield, Sparkles, Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenTutor: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenTutor }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { page: PageRoute; label: string }[] = [
    { page: 'learn', label: 'Academy' },
    { page: 'footprint', label: 'Footprint Audit' },
    { page: 'quiz', label: 'Interactive Quiz' },
    { page: 'scenarios', label: 'Real Scenarios' },
    { page: 'report', label: 'Report & Help' },
  ];

  const moreLinks: { page: PageRoute; label: string; desc: string }[] = [
    { page: 'platforms', label: 'Platform Guides', desc: 'Step-by-step for Instagram, WhatsApp, Snapchat & X' },
    { page: 'deepfake', label: 'Deepfake Awareness', desc: 'Identify AI-generated faces, voices & media' },
    { page: 'cases', label: 'Case Studies', desc: 'Real verified incidents & lessons' },
    { page: 'toolkit', label: 'Safety Toolkit', desc: 'Interactive checklists & guides' },
    { page: 'blog', label: 'Help Center & Blog', desc: '10 educational guides & best practices' },
    { page: 'progress', label: 'My Progress & Certificate', desc: 'Track completion & earn certificate' },
    { page: 'about', label: 'About & Sources', desc: 'Mission, privacy policy & official references' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2.5 text-left text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg p-1"
          aria-label="SafeNet Home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md shadow-indigo-500/20">
            <Shield className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0">
            SafeNet
          </span>
        </button>

        {/* Zone 2: Primary Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 text-sm font-medium ${
                  isActive
                    ? 'border-indigo-400 text-white font-semibold'
                    : 'border-transparent text-slate-300 hover:text-white hover:border-slate-600'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          {/* More Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              onBlur={() => setTimeout(() => setMoreDropdownOpen(false), 200)}
              className="flex items-center gap-1.5 py-1 text-sm font-medium text-slate-300 hover:text-white whitespace-nowrap shrink-0 transition-colors"
              aria-expanded={moreDropdownOpen}
            >
              <span>Explore More</span>
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>

            {moreDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 rounded-xl border border-slate-800 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95">
                {moreLinks.map((sub) => (
                  <button
                    key={sub.page}
                    onClick={() => handleNav(sub.page)}
                    className="flex w-full flex-col items-start rounded-lg p-2.5 text-left text-xs transition-colors hover:bg-slate-800 text-slate-200"
                  >
                    <span className="font-semibold text-white">{sub.label}</span>
                    <span className="text-slate-400 text-[11px] mt-0.5">{sub.desc}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenTutor}
            className="flex items-center gap-2 rounded-lg bg-indigo-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 transition-all whitespace-nowrap shrink-0"
            aria-label="Open AI Safety Tutor"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>AI Safety Tutor</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-slate-950 px-4 pt-2 pb-6 lg:hidden animate-in slide-in-from-top-4">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNav('home')}
              className={`rounded-lg px-3 py-2 text-left text-sm font-medium ${
                currentPage === 'home' ? 'bg-indigo-950 text-indigo-300' : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              Home
            </button>
            {navLinks.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`rounded-lg px-3 py-2 text-left text-sm font-medium ${
                  currentPage === item.page ? 'bg-indigo-950 text-indigo-300' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="my-2 border-t border-slate-800 pt-2">
              <span className="px-3 text-xs font-semibold text-slate-400">Deep Dives & Tools</span>
              {moreLinks.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  className={`mt-1 flex w-full flex-col rounded-lg px-3 py-2 text-left text-sm ${
                    currentPage === item.page ? 'bg-indigo-950 text-indigo-300' : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <span className="font-medium text-white">{item.label}</span>
                  <span className="text-xs text-slate-400">{item.desc}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState } from 'react';
import { X, Sparkles, Send, ShieldCheck, HelpCircle } from 'lucide-react';

interface AiSafetyTutorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  sender: 'user' | 'tutor';
  text: string;
  notice?: string;
}

export const AiSafetyTutorModal: React.FC<AiSafetyTutorModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      sender: 'tutor',
      text: 'Hello! I am your SafeNet Cyber Safety Tutor. Ask me any question about social media privacy, recovering compromised accounts, spotting scams, deepfake literacy, or official reporting channels in India.',
      notice: 'SafeNet Educational Tutor · Always verify sensitive steps with official portals.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const quickQuestions = [
    'How do I report a fake Instagram account copying my photos?',
    'What should I do immediately if my WhatsApp or social account is hacked?',
    'How can I spot an AI deepfake video or cloned voice?',
    'Someone is threatening to share private chats, what are my legal rights in India?',
    'How does the 1930 cyber fraud helpline work for financial loss?',
  ];

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: textToSend.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend.trim() }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      const tutorMsg: Message = {
        id: `tut-${Date.now()}`,
        sender: 'tutor',
        text: data.reply || 'Please check our official Report Directory or Helpline 1930 for urgent cyber fraud assistance.',
        notice: data.notice,
      };

      setMessages((prev) => [...prev, tutorMsg]);
    } catch {
      // Local graceful fallback
      const fallbackMsg: Message = {
        id: `tut-${Date.now()}`,
        sender: 'tutor',
        text: 'For immediate assistance: \n• Financial cyber fraud: Dial 1930 immediately.\n• Reporting cyber harassment & deepfakes: Visit https://cybercrime.gov.in.\n• Urgent physical threats: Call 112.\n• Review our Safety Toolkit and Platform Guides for step-by-step instructions.',
        notice: 'Offline SafeNet Guidance Protocol',
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm no-print"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tutor-title"
    >
      <div className="flex h-[90vh] max-h-[680px] w-full max-w-2xl flex-col rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm shadow-indigo-500/20">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h2 id="tutor-title" className="text-base font-semibold text-white">
                SafeNet AI Cyber Tutor
              </h2>
              <p className="text-xs text-slate-400">
                Online safety advisor · Private & privacy-preserving
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label="Close AI Safety Tutor"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Message Log */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800/90 text-slate-200 border border-slate-700/60'
                }`}
              >
                <p className="whitespace-pre-line">{m.text}</p>
                {m.notice && (
                  <div className="mt-2.5 pt-2 border-t border-slate-700/50 flex items-center gap-1.5 text-[11px] text-slate-400">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>{m.notice}</span>
                  </div>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="rounded-2xl bg-slate-800 p-4 text-xs text-slate-400 border border-slate-700 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
                <span>Consulting cyber safety protocols...</span>
              </div>
            </div>
          )}
        </div>

        {/* Suggested Quick Questions */}
        <div className="border-t border-slate-800 bg-slate-950/40 px-4 py-2.5">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-1.5 font-medium">
            <HelpCircle className="h-3.5 w-3.5 text-indigo-400" />
            <span>Frequent Inquiries:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                disabled={loading}
                className="rounded-md bg-slate-800 hover:bg-slate-700 px-2.5 py-1 text-[11px] text-slate-300 transition-colors text-left truncate max-w-full disabled:opacity-50"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="border-t border-slate-800 p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about privacy settings, scams, deepfakes, or reporting..."
              maxLength={500}
              className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="flex items-center justify-center rounded-xl bg-indigo-600 p-2.5 text-white hover:bg-indigo-500 disabled:opacity-50 transition-colors"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
          <p className="mt-2 text-[10px] text-slate-300 text-center">
            Educational tool only. Never submit passwords, banking OTPs, or private identity documents.
          </p>
        </div>
      </div>
    </div>
  );
};

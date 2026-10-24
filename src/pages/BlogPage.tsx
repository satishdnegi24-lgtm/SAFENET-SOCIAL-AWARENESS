import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost, ArticleCategory } from '../types';
import {
  Search,
  BookOpen,
  Clock,
  Calendar,
  ExternalLink,
  ArrowRight,
  X,
  CheckCircle2,
  AlertCircle,
  ThumbsUp,
  ThumbsDown,
} from 'lucide-react';

export const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = [
    'All',
    'Social Media Safety',
    'Digital Footprint',
    'Privacy Settings',
    'Password Security',
    'Phishing and Scams',
    'Cyberbullying',
    'Deepfake Awareness',
    'Identity Impersonation',
    'Responsible Posting',
    'Reporting Harmful Content',
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10 py-6">
      {/* Header & Search */}
      <div className="border-b border-slate-800 pb-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400">
              <BookOpen className="h-4 w-4" />
              <span>Educational Knowledge Base</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Social Media Help Center & Blog
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Comprehensive guides, practical checklists, and verified cyber safety articles.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides or topics..."
              className="w-full rounded-xl border border-slate-700 bg-slate-900 py-2.5 pl-9 pr-4 text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3 py-1.5 font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      {filteredPosts.length === 0 ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-12 text-center">
          <AlertCircle className="mx-auto h-8 w-8 text-slate-500" />
          <h3 className="mt-3 text-sm font-semibold text-white">No articles matched your criteria</h3>
          <p className="mt-1 text-xs text-slate-400">Try adjusting your search terms or selecting "All" categories.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between hover:border-indigo-500/50 hover:bg-slate-900 transition-all shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-semibold text-indigo-400">{post.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-display text-base font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500">{post.publishedDate}</span>
                <span className="flex items-center gap-1 font-semibold text-indigo-400 group-hover:text-indigo-300">
                  <span>Read Guide</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Article Detail Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 text-white shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Close */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="rounded-md bg-indigo-500/20 px-2.5 py-1 text-xs font-semibold text-indigo-300">
                {activeArticle.category}
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
                aria-label="Close article"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Article Header */}
            <div className="mt-4 space-y-3">
              <h2 className="font-display text-xl sm:text-2xl font-extrabold text-white">
                {activeArticle.title}
              </h2>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span>By {activeArticle.author}</span>
                <span>·</span>
                <span>Published: {activeArticle.publishedDate}</span>
                <span>·</span>
                <span>Reviewed: {activeArticle.lastReviewed}</span>
                <span>·</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-medium italic border-l-2 border-indigo-500 pl-3">
                {activeArticle.summary}
              </p>
            </div>

            {/* Article Body */}
            <div className="mt-6 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeArticle.body.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Practical Examples */}
            {activeArticle.practicalExamples.length > 0 && (
              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Practical Scenarios & Applications
                </h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  {activeArticle.practicalExamples.map((ex, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold shrink-0">▸</span>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Dos and Don'ts */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <ThumbsUp className="h-3.5 w-3.5" />
                  <span>DO</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {activeArticle.dos.map((d, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-4 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400">
                  <ThumbsDown className="h-3.5 w-3.5" />
                  <span>DON'T</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {activeArticle.donts.map((d, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-rose-400 font-bold">✗</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Checklist */}
            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                <span>Actionable Checklist</span>
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {activeArticle.actionChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold shrink-0">[ ]</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sources & Citations */}
            <div className="mt-6 border-t border-slate-800 pt-4 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Verified Sources & References:</span>
              <ul className="mt-2 space-y-1">
                {activeArticle.sources.map((s, idx) => (
                  <li key={idx}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
                    >
                      <span>{s.title}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

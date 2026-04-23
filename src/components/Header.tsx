import React from 'react';
import { BookOpen, Newspaper } from 'lucide-react';

const SlotLeverIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Slot handle ball */}
    <circle cx="18" cy="5" r="2.5" fill="currentColor" stroke="currentColor" />
    {/* Slot handle rod */}
    <line x1="18" y1="8" x2="18" y2="15" strokeWidth="2.5" />
    {/* Handle attachment */}
    <path d="M14 15h6" />
    {/* Machine body */}
    <rect x="3" y="8" width="11" height="14" rx="2" />
    {/* Screen / Rollers */}
    <rect x="5" y="11" width="7" height="6" rx="1" />
  </svg>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white drop-shadow-sm flex-shrink-0">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-indigo-600">
            <SlotLeverIcon className="h-5 w-5 text-amber-400" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800 uppercase">SLOT國度</span>
        </div>
        <nav className="hidden md:flex gap-8 h-full">
          <a href="#articles" className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1 border-b-2 border-transparent hover:border-slate-800">
            <BookOpen className="h-4 w-4" />
            文章
          </a>
          <a href="#news" className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1 border-b-2 border-transparent hover:border-slate-800">
            <Newspaper className="h-4 w-4" />
            新聞
          </a>
        </nav>
      </div>
    </header>
  );
}

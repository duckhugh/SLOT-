import React from 'react';
import { BookOpen, Newspaper } from 'lucide-react';

const SlotLeverIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Lever Ball - hollow outline */}
    <circle cx="15" cy="7" r="4.5" />
    {/* Lever Shaft - curved from bottom left */}
    <path d="M15 11.5v6.5a2 2 0 0 1-2 2H4" />
  </svg>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white drop-shadow-sm flex-shrink-0">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-[#5A7CFF] shadow-sm">
            <SlotLeverIcon className="h-6 w-6 text-white" />
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

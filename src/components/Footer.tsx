import React from 'react';

const SlotLeverIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="18" cy="5" r="2.5" fill="currentColor" stroke="currentColor" />
    <line x1="18" y1="8" x2="18" y2="15" strokeWidth="2.5" />
    <path d="M14 15h6" />
    <rect x="3" y="8" width="11" height="14" rx="2" />
    <rect x="5" y="11" width="7" height="6" rx="1" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8 text-slate-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-indigo-600">
              <SlotLeverIcon className="h-4 w-4 text-amber-400" />
            </div>
            <span className="text-sm font-bold tracking-tight text-slate-800 uppercase">SLOT國度</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-[11px] font-medium">
            <span>免責聲明：本站僅提供產業資訊分析，不提供任何線上博弈服務</span>
            <div className="flex gap-4">
              <span className="hover:text-indigo-600 transition-colors cursor-pointer">隱私權政策</span>
              <span className="hover:text-indigo-600 transition-colors cursor-pointer">聯絡我們</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px]">
          <p>&copy; {new Date().getFullYear()} SLOT國度 專業博弈市場情報分享站. All rights reserved.</p>
          <p>未滿十八歲者不得參與博奕活動。</p>
        </div>
      </div>
    </footer>
  );
}

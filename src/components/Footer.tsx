import React from 'react';

const SlotLeverIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="15" cy="7" r="4.5" />
    <path d="M15 11.5v6.5a2 2 0 0 1-2 2H4" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8 text-slate-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[#5A7CFF] shadow-sm">
              <SlotLeverIcon className="h-5 w-5 text-white" />
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

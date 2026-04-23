import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 mb-12">
      <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-xl text-center flex flex-col justify-center min-h-[320px] py-12 px-6 sm:px-12 border border-slate-800">
        
        {/* Background Image Container */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity hover:opacity-50 transition-opacity duration-1000"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2000&auto=format&fit=crop')"
          }}
        ></div>
        
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/30"></div>
        
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="inline-flex items-center rounded-full bg-slate-800/80 backdrop-blur border border-slate-700 px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-slate-300 mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
            2026年最新線上博弈平台評測
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight drop-shadow-md">
            最權威的台灣與海外市場分析
          </h1>
          
          <p className="mt-3 text-sm max-w-xl mx-auto text-slate-300 leading-relaxed font-medium drop-shadow-md">
            我們提供中立、專業的平台特色比較，深入解析各家娛樂場的安全性、遊戲多樣性及出金速度，助您掌握即時動態與全球產業新聞。
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="#articles"
              className="w-full sm:w-auto justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-sm hover:bg-slate-100 transition-colors flex items-center gap-2"
            >
              觀看最新評測
              <ChevronRight className="h-4 w-4" />
            </a>
            <a href="#news" className="w-full sm:w-auto justify-center rounded-lg px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors border border-transparent sm:border-none sm:py-0 sm:px-0 flex items-center gap-1 drop-shadow">
              閱讀焦點新聞 <span aria-hidden="true" className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

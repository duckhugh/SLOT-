import React, { useEffect, useState } from 'react';
import { ExternalLink, Calendar, Loader2, AlertCircle } from 'lucide-react';

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  source: string;
}

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('/api/news');
        if (!res.ok) throw new Error('無法獲取新聞資料');
        const data = await res.json();
        setNews(data);
      } catch (err: any) {
        setError(err.message || '發生未知錯誤');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section id="news" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-extrabold text-slate-800 flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
            產業即時快訊
          </h2>
          <span className="text-xs text-slate-400 font-medium tracking-wider">新聞聚合</span>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20 bg-white border border-slate-200 rounded-2xl">
            <Loader2 className="h-8 w-8 text-indigo-600 animate-spin" />
            <span className="ml-2 text-sm font-medium text-slate-500">正在獲取最新新聞...</span>
          </div>
        ) : error ? (
          <div className="rounded-xl bg-red-50 p-4 border border-red-100">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-red-500" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-bold text-red-800">獲取失敗</h3>
                <div className="mt-2 text-sm text-red-600">
                  <p>{error}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {news.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 bg-white border border-slate-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all flex flex-col"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] uppercase font-bold text-indigo-600 tracking-wider bg-indigo-50 px-2 py-1 rounded">
                    {item.source}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {new Date(item.pubDate).toLocaleDateString('zh-TW', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit'
                    }).replace(/\//g, '.')}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-indigo-600 line-clamp-3 mb-2 flex-grow">
                  {item.title}
                </h3>
                <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-slate-400 group-hover:text-indigo-500 uppercase tracking-widest transition-colors">
                  閱讀全文
                  <ExternalLink className="h-3 w-3" />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import React from 'react';
import { Star, Shield, Zap, Gift, Check, X } from 'lucide-react';

const platforms = [
  {
    id: 1,
    name: '👑 總裁線上娛樂城',
    rating: 4.9,
    description: '業界首選，出金速度快，具有合法的海外博弈牌照。',
    features: ['5分鐘極速出金', '首儲100%回饋', '24H 真人客服'],
    pros: ['遊戲種類業界最多', '介面直覺友善'],
    cons: ['需完成較高的流水限制'],
    safety: '高',
    speed: '極快',
    games: '頂級'
  },
  {
    id: 2,
    name: '🎰 歡樂老虎機天地',
    rating: 4.7,
    description: '專注於各類型電子老虎機與捕魚機，視覺效果華麗。',
    features: ['超過千款角子機', '每日免費轉盤', '定期錦標賽'],
    pros: ['免費回饋金多', '小額儲值友善'],
    cons: ['週末出金偶爾延遲'],
    safety: '中高',
    speed: '普通',
    games: '豐富'
  },
  {
    id: 3,
    name: '🌟 星光百家樂俱樂部',
    rating: 4.5,
    description: '主打真人視訊百家樂，多個不同的真人荷官廳館可選。',
    features: ['全高清視訊連線', '多桌同時下注', '免水百家樂'],
    pros: ['連線穩定不卡頓', '荷官專業度高'],
    cons: ['電子遊戲數量偏少'],
    safety: '高',
    speed: '極快',
    games: '中上'
  }
];

export default function PlatformComparison() {
  return (
    <section id="articles" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">台灣優質平台評測比較</h2>
          <p className="mt-4 text-sm max-w-md mx-auto leading-relaxed text-slate-500">
            SLOT國度團隊親自實測，依據安全性、出金速度及遊戲品質等面向，為您篩選出最可靠的線上平台。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div key={platform.id} className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-8 hover:border-indigo-300 hover:shadow-md transition-all">
              {index === 0 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-indigo-100 px-3 py-1 text-[10px] font-bold tracking-widest text-indigo-700 shadow-sm uppercase">
                  編輯推薦首選
                </div>
              )}
              
              <div className="mb-6 pb-6 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{platform.name}</h3>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.floor(platform.rating) ? 'fill-current' : 'text-slate-200'}`} />
                  ))}
                  <span className="ml-2 text-sm font-bold text-slate-700">{platform.rating}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{platform.description}</p>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6 text-center text-sm">
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <Shield className="h-5 w-5 mx-auto mb-1 text-emerald-500" />
                  <span className="text-slate-600 font-medium text-[10px] uppercase tracking-wider block">安全: {platform.safety}</span>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <Zap className="h-5 w-5 mx-auto mb-1 text-indigo-500" />
                  <span className="text-slate-600 font-medium text-[10px] uppercase tracking-wider block">出金: {platform.speed}</span>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <Gift className="h-5 w-5 mx-auto mb-1 text-amber-500" />
                  <span className="text-slate-600 font-medium text-[10px] uppercase tracking-wider block">遊戲: {platform.games}</span>
                </div>
              </div>

              <div className="mb-8 flex-1">
                <h4 className="text-[11px] font-bold text-slate-800 mb-3 flex items-center gap-2 uppercase tracking-wider">
                  特色優勢
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 mb-6">
                  {platform.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="text-[11px] font-bold text-slate-800 mb-3 flex items-center gap-2 uppercase tracking-wider">
                  注意事項
                </h4>
                <ul className="space-y-2 text-xs text-slate-500">
                  {platform.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-500 shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full rounded-lg bg-slate-100 px-4 py-3 text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors uppercase tracking-widest mt-auto">
                查看詳細評測 (即將推出)
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

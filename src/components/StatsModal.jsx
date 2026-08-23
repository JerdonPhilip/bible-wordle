import React from 'react';
import { X, CalendarDays, Trophy, Flame } from 'lucide-react';

export default function StatsModal({ open, stats, onClose, onReset }) {
  if (!open) return null;

  const { played, wins, curStreak, maxStreak, dist } = stats;
  const winRate = played ? Math.round((wins / played) * 100) : 0;
  const maxDist = Math.max(...dist, 1);

  const tiles = [
    { icon: CalendarDays, label: 'Played', value: played },
    { icon: Trophy, label: 'Win %', value: winRate },
    { icon: Flame, label: 'Current', value: curStreak },
    { icon: Flame, label: 'Max', value: maxStreak },
  ];

  return (
    <>
      <div className="overlay-backdrop" onClick={onClose} />
      <section role="dialog" aria-label="Statistics" className="modal-panel scroll-y">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold font-display">Statistics</h2>
          <button type="button" onClick={onClose} className="icon-btn" aria-label="Close statistics">
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-5">
          {tiles.map(({ icon: Icon, label, value }) => (
            <div key={label} className="glass rounded-xl py-3 text-center">
              <Icon size={16} strokeWidth={2.25} className="mx-auto mb-1 text-purple-500 dark:text-purple-400" aria-hidden="true" />
              <div className="text-xl font-extrabold font-display leading-none">{value}</div>
              <div className="text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-400 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {played > 0 ? (
          <>
            <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold mb-2">
              Guess distribution
            </p>
            <div className="space-y-1.5 mb-4">
              {dist.map((count, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-4 text-xs font-bold text-gray-600 dark:text-white/60">{i + 1}</span>
                  <div className="flex-1 h-6 rounded-md overflow-hidden bg-gray-200/60 dark:bg-white/[0.06]">
                    <div
                      className={`h-full flex items-center justify-end px-2 text-[11px] font-bold transition-all duration-500 ${
                        count ? 'bg-emerald-500 text-white' : ''
                      }`}
                      style={{ width: `${Math.max(count ? 14 : 0, (count / maxDist) * 100)}%` }}
                    >
                      {count || ''}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4">
              Streaks and distribution count daily games only — one entry per day.
            </p>
          </>
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center py-2">
            Finish a Daily game to start building your stats.
          </p>
        )}

        <button
          type="button"
          onClick={() => {
            if (window.confirm('Reset all statistics? This cannot be undone.')) {
              onReset();
            }
          }}
          className="block mx-auto text-xs text-red-500 dark:text-red-400 underline underline-offset-2"
        >
          Reset statistics
        </button>
      </section>
    </>
  );
}

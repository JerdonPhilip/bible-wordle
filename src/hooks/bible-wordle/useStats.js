import { useState, useEffect, useRef } from 'react';
import { dateKey, yesterdayKey } from '../../utils/wordList';
import { STORAGE_KEYS } from '../../config';

const EMPTY_STATS = {
    played: 0,
    wins: 0,
    curStreak: 0,
    maxStreak: 0,
    dist: [0, 0, 0, 0, 0, 0],
    lastFinished: '',   // dateKey of the last recorded daily game
    lastWinDate: '',    // dateKey of last win (for streak continuity)
};

const loadStats = () => {
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.stats);
        return raw ? { ...EMPTY_STATS, ...JSON.parse(raw) } : { ...EMPTY_STATS };
    } catch {
        return { ...EMPTY_STATS };
    }
};

// Records each finished daily game exactly once per day.
// finishedDaily flips true when a daily run ends (win or loss).
export function useStats(finishedDaily, gameWon, guessCount) {
    const [stats, setStats] = useState(loadStats);
    const statsRef = useRef(stats);
    statsRef.current = stats;

    useEffect(() => {
        if (!finishedDaily) return;
        const today = dateKey();
        if (statsRef.current.lastFinished === today) return;

        setStats(prev => {
            const s = {
                ...prev,
                played: prev.played + 1,
                dist: [...prev.dist],
                lastFinished: today,
                lastWinDate: prev.lastWinDate
            };
            if (gameWon) {
                s.wins += 1;
                s.dist[guessCount - 1] = (s.dist[guessCount - 1] || 0) + 1;
                s.curStreak = s.lastWinDate === yesterdayKey() ? prev.curStreak + 1 : 1;
                s.maxStreak = Math.max(prev.maxStreak, s.curStreak);
                s.lastWinDate = today;
            } else {
                s.curStreak = 0;
            }
            try { localStorage.setItem(STORAGE_KEYS.stats, JSON.stringify(s)); } catch { /* storage full */ }
            return s;
        });
    }, [finishedDaily, gameWon, guessCount]);

    const resetStats = () => {
        const fresh = { ...EMPTY_STATS, dist: [...EMPTY_STATS.dist] };
        try { localStorage.setItem(STORAGE_KEYS.stats, JSON.stringify(fresh)); } catch { /* ignore */ }
        setStats(fresh);
    };

    return { stats, resetStats };
}

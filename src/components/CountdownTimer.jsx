import React, { useEffect, useState } from 'react';
import { Timer } from 'lucide-react';

function msUntilNextMidnight() {
  const next = new Date();
  next.setHours(24, 0, 0, 0);
  return Math.max(0, next.getTime() - Date.now());
}

function formatDuration(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const s = String(totalSeconds % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

export default function CountdownTimer({ label = 'Next puzzle in' }) {
  const [remaining, setRemaining] = useState(msUntilNextMidnight);

  useEffect(() => {
    const t = setInterval(() => setRemaining(msUntilNextMidnight()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="chip cursor-default select-none tabular-nums text-blue-700 dark:text-blue-300">
      <Timer size={13} strokeWidth={2.25} aria-hidden="true" />
      {label} {formatDuration(remaining)}
    </span>
  );
}

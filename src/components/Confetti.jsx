import React, { useEffect, useState } from 'react';

const COLORS = ['#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#3b82f6', '#ef4444'];
const PIECE_COUNT = 80;
const MAX_DURATION_MS = 4000;

function makePieces() {
  return Array.from({ length: PIECE_COUNT }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 600,
    duration: 2200 + Math.random() * 1600,
    color: COLORS[i % COLORS.length],
    size: 6 + Math.random() * 7,
    spin: (Math.random() > 0.5 ? 1 : -1) * (360 + Math.random() * 540),
    round: Math.random() > 0.7,
  }));
}

export default function Confetti({ active }) {
  const [pieces, setPieces] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!active || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false);
      setPieces([]);
      return;
    }
    setPieces(makePieces());
    setVisible(true);
    const t = setTimeout(() => setVisible(false), MAX_DURATION_MS);
    return () => clearTimeout(t);
  }, [active]);

  if (!visible) return null;

  return (
    <div className="confetti-container" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.round ? p.size : p.size * 1.5}px`,
            backgroundColor: p.color,
            borderRadius: p.round ? '50%' : '2px',
            animationDelay: `${p.delay}ms`,
            animationDuration: `${p.duration}ms`,
            '--spin': `${p.spin}deg`,
          }}
        />
      ))}
    </div>
  );
}

import React from 'react';
import { X } from 'lucide-react';

const EXAMPLES = [
  { word: 'FAITH', hi: 0, status: 'correct', desc: 'F is in the word and in the right spot.' },
  { word: 'MOSES', hi: 1, status: 'present', desc: 'O is in the word but in the wrong spot.' },
  { word: 'CROSS', hi: 2, status: 'absent', desc: 'R is not in the word in any spot.' },
];

const STATUS_CLASS = {
  correct: 'tile-correct',
  present: 'tile-present',
  absent: 'tile-absent',
};

export default function HelpModal({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      <div className="overlay-backdrop" onClick={onClose} />
      <section role="dialog" aria-label="How to play" className="modal-panel scroll-y">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold font-display">How to Play</h2>
          <button type="button" onClick={onClose} className="icon-btn" aria-label="Close help">
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Guess the hidden Bible word in 6 tries. Each guess must be a real Bible word of the chosen length.
        </p>

        <div className="space-y-3 mb-2">
          {EXAMPLES.map(({ word, hi, status, desc }) => (
            <div key={word} className="flex items-center gap-3">
              <div className="board-row demo-board shrink-0" style={{ '--cols': 5, maxWidth: '150px' }}>
                {word.split('').map((letter, i) => (
                  <div
                    key={i}
                    className={`tile ${i === hi ? STATUS_CLASS[status] : 'tile-empty'}`}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
          A hint appears after your 4th guess. Win to reveal a matching Bible verse.
        </p>
      </section>
    </>
  );
}

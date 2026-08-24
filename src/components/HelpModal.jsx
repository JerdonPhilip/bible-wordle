import React from 'react';
import { X } from 'lucide-react';

// Example rows adapt to the selected word length; words come from the game database
const EXAMPLES_BY_LENGTH = {
  4: [
    { word: 'NOAH', hi: 0, status: 'correct', desc: 'N is in the word and in the right spot.' },
    { word: 'EDEN', hi: 2, status: 'present', desc: 'E is in the word but in the wrong spot.' },
    { word: 'HOPE', hi: 3, status: 'absent', desc: 'P is not in the word in any spot.' },
  ],
  5: [
    { word: 'MOSES', hi: 0, status: 'correct', desc: 'M is in the word and in the right spot.' },
    { word: 'CROSS', hi: 1, status: 'present', desc: 'R is in the word but in the wrong spot.' },
    { word: 'FAITH', hi: 2, status: 'absent', desc: 'I is not in the word in any spot.' },
  ],
  6: [
    { word: 'SAMUEL', hi: 0, status: 'correct', desc: 'S is in the word and in the right spot.' },
    { word: 'PRAYER', hi: 1, status: 'present', desc: 'R is in the word but in the wrong spot.' },
    { word: 'GOSPEL', hi: 3, status: 'absent', desc: 'P is not in the word in any spot.' },
  ],
  7: [
    { word: 'MIRACLE', hi: 0, status: 'correct', desc: 'M is in the word and in the right spot.' },
    { word: 'PARABLE', hi: 1, status: 'present', desc: 'A is in the word but in the wrong spot.' },
    { word: 'TRIUMPH', hi: 2, status: 'absent', desc: 'I is not in the word in any spot.' },
  ],
};

const STATUS_CLASS = {
  correct: 'tile-correct',
  present: 'tile-present',
  absent: 'tile-absent',
};

export default function HelpModal({ open, onClose, wordLength = 5 }) {
  if (!open) return null;
  const EXAMPLES = EXAMPLES_BY_LENGTH[wordLength] || EXAMPLES_BY_LENGTH[5];

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
              <div className="board-row demo-board shrink-0" style={{ '--cols': wordLength, maxWidth: '210px' }}>
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

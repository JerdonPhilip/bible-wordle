import React from 'react';

const KEYBOARD_ROWS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['ENTER', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'BACKSPACE'],
];

export default function Keyboard({ onKeyPress, usedLetters }) {
  const getKeyClass = (key) => {
    if (usedLetters.correct.has(key)) return 'key key-correct';
    if (usedLetters.present.has(key)) return 'key key-present';
    if (usedLetters.absent.has(key)) return 'key key-absent';
    return 'key';
  };

  return (
    <nav className="keyboard shrink-0" aria-label="On-screen keyboard">
      {KEYBOARD_ROWS.map((row, rowIdx) => (
        <div key={rowIdx} className="kb-row">
          {row.map((key) => (
            <button
              key={key}
              type="button"
              aria-label={key === 'BACKSPACE' ? 'Delete letter' : key === 'ENTER' ? 'Submit guess' : `Letter ${key}`}
              onClick={() => onKeyPress(key)}
              className={`${getKeyClass(key)} ${key === 'ENTER' || key === 'BACKSPACE' ? 'key-wide' : ''}`}
            >
              {key === 'BACKSPACE' ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
                  <line x1="18" y1="9" x2="12" y2="15" />
                  <line x1="12" y1="9" x2="18" y2="15" />
                </svg>
              ) : key === 'ENTER' ? (
                'Enter'
              ) : (
                key
              )}
            </button>
          ))}
        </div>
      ))}
    </nav>
  );
}

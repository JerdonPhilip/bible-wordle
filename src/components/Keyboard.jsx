import React from 'react';

const KEYBOARD_ROWS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['ENTER', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'BACKSPACE']
];

export default function Keyboard({ onKeyPress, usedLetters }) {
  const getKeyClass = (key) => {
    const baseClass = "rounded-lg font-semibold transition-all duration-200 active:scale-95 shadow-md";
    
    if (usedLetters.correct.has(key)) {
      return `${baseClass} bg-gradient-to-br from-green-500 to-green-600 text-white shadow-green-500/30`;
    }
    if (usedLetters.present.has(key)) {
      return `${baseClass} bg-gradient-to-br from-yellow-500 to-amber-500 text-white shadow-yellow-500/30`;
    }
    if (usedLetters.absent.has(key)) {
      return `${baseClass} bg-gray-400 dark:bg-gray-500/50 text-white backdrop-blur-sm`;
    }
    return `${baseClass} glass text-gray-800 dark:text-white hover:bg-white/90 dark:hover:bg-white/10`;
  };

  // Responsive key sizes
  const getKeySize = (key) => {
    if (key === 'ENTER' || key === 'BACKSPACE') {
      return 'px-2 sm:px-4 text-xs sm:text-sm min-w-[50px] sm:min-w-[70px]';
    }
    return 'px-2 sm:px-4 w-8 sm:w-10 text-sm sm:text-base';
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-4 sm:mt-8 p-2 sm:p-4 glass rounded-2xl">
      {KEYBOARD_ROWS.map((row, rowIdx) => (
        <div key={rowIdx} className="flex justify-center gap-1 sm:gap-1.5 mb-1.5 sm:mb-2">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress(key)}
              className={`
                py-2 sm:py-3 font-semibold
                ${getKeySize(key)}
                ${getKeyClass(key)}
              `}
            >
              {key === 'BACKSPACE' ? '⌫' : key.toUpperCase()}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
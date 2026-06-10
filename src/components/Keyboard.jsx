import React from "react";

const KEYBOARD_ROWS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["ENTER", "z", "x", "c", "v", "b", "n", "m", "BACKSPACE"],
];

export default function Keyboard({ onKeyPress, usedLetters }) {
  const getKeyClass = (key) => {
    const baseClass =
      "rounded-lg font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-md";

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

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-4 glass rounded-2xl">
      {KEYBOARD_ROWS.map((row, rowIdx) => (
        <div key={rowIdx} className="flex justify-center gap-1.5 mb-2">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress(key)}
              className={`
                px-3 py-3 min-w-[2.5rem] ${key === "ENTER" || key === "BACKSPACE" ? "px-4 text-xs" : "px-4"}
                ${getKeyClass(key)}
              `}
            >
              {key === "BACKSPACE" ? "⌫" : key.toUpperCase()}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

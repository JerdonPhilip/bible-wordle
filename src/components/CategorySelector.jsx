import React from "react";
import { GAME_CONFIG } from "../utils/wordList";

export default function CategorySelector({
  selectedLength,
  selectedCategory,
  onLengthChange,
  onCategoryChange,
}) {
  return (
    <div className="glass-card p-3 sm:p-5 space-y-3 sm:space-y-5">
      {/* Word Length Selector */}
      <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
        {GAME_CONFIG.wordLengths.map((length) => (
          <button
            key={length}
            onClick={() => onLengthChange(length)}
            className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-bold transition-all duration-200 text-sm sm:text-base ${
              selectedLength === length
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                : "glass text-gray-800 dark:text-white hover:bg-white/90 dark:hover:bg-white/10"
            }`}
          >
            {length} Letters
          </button>
        ))}
      </div>

      {/* Category Selector - 2 columns on mobile, 3 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 sm:gap-2">
        {Object.entries(GAME_CONFIG.categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => onCategoryChange(key)}
            className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              selectedCategory === key
                ? "bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-md"
                : "glass text-gray-800 dark:text-white hover:bg-white/90 dark:hover:bg-white/10"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
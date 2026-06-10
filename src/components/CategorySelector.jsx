import React from "react";
import { GAME_CONFIG } from "../utils/wordList";

export default function CategorySelector({
  selectedLength,
  selectedCategory,
  onLengthChange,
  onCategoryChange,
}) {
  return (
    <div className="glass-card p-5 space-y-5">
      {/* Word Length Selector */}
      <div className="flex justify-center gap-3 flex-wrap">
        {GAME_CONFIG.wordLengths.map((length) => (
          <button
            key={length}  // ✅ Unique key added
            onClick={() => onLengthChange(length)}  // ✅ Add missing onClick
            className={`px-5 py-2 rounded-full font-bold transition-all duration-200 ${
              selectedLength === length
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                : "glass text-gray-800 dark:text-white hover:bg-white/90 dark:hover:bg-white/10"
            }`}
          >
            {length} Letters
          </button>
        ))}
      </div>

      {/* Category Selector */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {Object.entries(GAME_CONFIG.categories).map(([key, label]) => (
          <button
            key={key}  // ✅ Unique key added (e.g., "people", "places")
            onClick={() => onCategoryChange(key)}  // ✅ Add missing onClick
            className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
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
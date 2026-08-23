import React from 'react';
import { X } from 'lucide-react';
import CategoryIcon from './CategoryIcon';
import { GAME_CONFIG } from '../utils/wordList';

export default function SettingsSheet({ open, onClose, selectedLength, selectedCategory, onLengthChange, onCategoryChange }) {
  if (!open) return null;

  return (
    <>
      <div className="overlay-backdrop" onClick={onClose} />
      <section
        role="dialog"
        aria-label="Game settings"
        className="sheet-panel scroll-y"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold font-display">Game Settings</h2>
          <button type="button" onClick={onClose} className="icon-btn" aria-label="Close settings">
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold mb-2">Word length</p>
        <div className="flex gap-1.5 glass rounded-xl p-1 mb-5">
          {GAME_CONFIG.wordLengths.map((length) => (
            <button
              key={length}
              type="button"
              onClick={() => onLengthChange(length)}
              className={`seg-btn ${selectedLength === length ? 'active' : ''}`}
            >
              {length} Letters
            </button>
          ))}
        </div>

        <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold mb-2">Category</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
          {Object.entries(GAME_CONFIG.categories).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => onCategoryChange(key)}
              className={`opt-btn flex items-center justify-center gap-1.5 ${selectedCategory === key ? 'active' : ''}`}
            >
              <CategoryIcon category={key} size={15} />
              {label}
            </button>
          ))}
        </div>

        <p className="text-[11px] text-center text-gray-500 dark:text-gray-400">
          Changing settings starts a new game
        </p>
      </section>
    </>
  );
}

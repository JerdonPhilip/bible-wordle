import React from 'react';
import { X, CalendarDays, Dices, BookOpen } from 'lucide-react';
import CategoryIcon from './CategoryIcon';
import { GAME_CONFIG } from '../utils/wordList';
import { TRANSLATIONS } from '../config';

const MODES = [
  { key: 'daily', label: 'Daily', icon: CalendarDays, blurb: "One word a day — builds your streak" },
  { key: 'practice', label: 'Practice', icon: Dices, blurb: "Unlimited random words" },
];

export default function SettingsSheet({
  open,
  onClose,
  mode,
  onModeChange,
  selectedLength,
  selectedCategory,
  selectedTranslation,
  onLengthChange,
  onCategoryChange,
  onHardModeChange,
  hardMode,
  onTranslationChange,
}) {
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

        <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold mb-2">Mode</p>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {MODES.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => onModeChange(key)}
              className={`opt-btn flex flex-col items-center gap-1 py-3 ${mode === key ? 'active' : ''}`}
            >
              <Icon size={18} strokeWidth={2.25} aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>
        <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5">
          {MODES.find(m => m.key === mode)?.blurb}
        </p>

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
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5">
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

        <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold mb-2">Bible translation</p>
        <div className="grid grid-cols-4 gap-1.5 glass rounded-xl p-1 mb-2">
          {TRANSLATIONS.map(({ code, label }) => (
            <button
              key={code}
              type="button"
              onClick={() => onTranslationChange(code)}
              className={`seg-btn ${selectedTranslation === code ? 'active' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400 mb-5">
          <BookOpen size={11} strokeWidth={2.25} aria-hidden="true" />
          {TRANSLATIONS.find(t => t.code === selectedTranslation)?.name} — used for victory verses
        </p>

        <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold mb-2">Difficulty</p>
        <button
          type="button"
          role="switch"
          aria-checked={hardMode}
          onClick={() => onHardModeChange(!hardMode)}
          className={`opt-btn w-full flex items-center justify-between gap-3 py-3 px-4 ${hardMode ? 'active' : ''}`}
        >
          <span className="text-left">
            <span className="block font-semibold text-sm">Hard Mode</span>
            <span className="block text-[11px] font-normal opacity-70 mt-0.5">
              Revealed hints must be reused in later guesses
            </span>
          </span>
          <span
            className={`relative shrink-0 w-11 h-6 rounded-full transition-colors duration-200 ${
              hardMode ? 'bg-blue-600' : 'bg-gray-300 dark:bg-white/15'
            }`}
            aria-hidden="true"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
                hardMode ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </span>
        </button>

        <p className="text-[11px] text-center text-gray-500 dark:text-gray-400 mt-6">
          Changing mode, length or category starts a new game
        </p>
      </section>
    </>
  );
}

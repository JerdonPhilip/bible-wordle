import React, { useEffect, useState } from 'react';
import { BookOpen, Lightbulb, ChevronDown, HelpCircle, Settings } from 'lucide-react';
import WordleGrid from './components/WordleGrid';
import Keyboard from './components/Keyboard';
import SettingsSheet from './components/SettingsSheet';
import ThemeToggle from './components/ThemeToggle';
import Toast from './components/Toast';
import HelpModal from './components/HelpModal';
import EndGameModal from './components/EndGameModal';
import CategoryIcon from './components/CategoryIcon';
import { useBibleWordle } from './hooks/useBibleWordle';
import { useTheme } from './context/ThemeContext';

function App() {
  const {
    dailyWord,
    guesses,
    currentGuess,
    gameOver,
    gameWon,
    verseData,
    loadingVerse,
    usedLetters,
    errorMessage,
    clearError,
    wordLength,
    category,
    showHint,
    shakeKey,
    handleKeyPress,
    resetGame,
    changeWordLength,
    changeCategory,
    MAX_GUESSES,
  } = useBibleWordle();

  const { theme } = useTheme();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [endModalOpen, setEndModalOpen] = useState(false);
  const [dismissedEnd, setDismissedEnd] = useState(false);

  // Open results modal after the final row finishes revealing
  useEffect(() => {
    if (gameOver || gameWon) {
      setDismissedEnd(false);
      const t = setTimeout(() => setEndModalOpen(true), 1400);
      return () => clearTimeout(t);
    }
    setEndModalOpen(false);
  }, [gameOver, gameWon]);

  if (!dailyWord) {
    return (
      <div className="app-shell">
        <div className="app-bg" />
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-600 dark:text-white/70 text-sm">Loading divine words...</p>
          </div>
        </div>
      </div>
    );
  }

  const attemptsLeft = MAX_GUESSES - guesses.length;

  return (
    <div className="app-shell">
      <div className="app-bg" />

      {/* ===== Header ===== */}
      <header className="relative z-10 shrink-0 glass !border-x-0 !border-t-0">
        <div className="max-w-xl mx-auto flex items-center justify-between px-3 py-2">
          <h1 className="flex items-center gap-2 font-extrabold font-display text-lg sm:text-2xl tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent select-none">
            <BookOpen size={22} strokeWidth={2.25} className="text-purple-600 dark:text-purple-400" aria-hidden="true" />
            <span>Bible Wordle</span>
          </h1>
          <div className="flex items-center gap-1.5">
            <button type="button" onClick={() => setHelpOpen(true)} className="icon-btn" aria-label="How to play">
              <HelpCircle size={18} strokeWidth={2.25} />
            </button>
            <button type="button" onClick={() => setSettingsOpen(true)} className="icon-btn" aria-label="Game settings">
              <Settings size={18} strokeWidth={2.25} />
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* ===== Game area ===== */}
      <main className="relative z-10 flex-1 min-h-0 flex flex-col max-w-xl w-full mx-auto px-3">
        {/* Status chips */}
        <div className="flex justify-center items-center gap-2 pt-2 shrink-0">
          <button type="button" className="chip" onClick={() => setSettingsOpen(true)}>
            <CategoryIcon category={category} size={13} />
            {category.charAt(0).toUpperCase() + category.slice(1)} · {wordLength} letters
            <ChevronDown size={12} strokeWidth={3} />
          </button>
          {!gameOver && !gameWon && (
            <span className="chip cursor-default select-none">{attemptsLeft} {attemptsLeft === 1 ? 'try' : 'tries'} left</span>
          )}
        </div>

        {/* Hint banner */}
        {showHint && dailyWord.hint && (
          <div className="shrink-0 mt-2 mx-auto w-full max-w-md glass-card border-yellow-400/60 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 px-3 py-1.5 animate-fade-in">
            <p className="flex items-center justify-center gap-1.5 text-xs font-semibold text-yellow-700 dark:text-yellow-300">
              <Lightbulb size={13} strokeWidth={2.25} className="shrink-0" aria-hidden="true" />
              <span className="truncate">Hint: {dailyWord.hint}</span>
            </p>
          </div>
        )}

        {/* Board */}
        <div className="flex-1 min-h-0 flex items-center justify-center py-2">
          <div className="w-full max-w-[420px]">
            <WordleGrid
              guesses={guesses}
              currentGuess={currentGuess}
              wordLength={wordLength}
              maxGuesses={MAX_GUESSES}
              dailyWord={dailyWord}
              gameWon={gameWon}
              shakeKey={shakeKey}
            />
          </div>
        </div>

        {/* Re-open results after dismissing */}
        {(gameOver || gameWon) && dismissedEnd && (
          <button
            type="button"
            onClick={() => setEndModalOpen(true)}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 chip shadow-lg"
          >
            <BookOpen size={13} strokeWidth={2.25} aria-hidden="true" />
            Show result
          </button>
        )}
      </main>

      {/* ===== Keyboard pinned to bottom ===== */}
      <div className="relative z-10 shrink-0 pb-1">
        <Keyboard onKeyPress={handleKeyPress} usedLetters={usedLetters} />
      </div>

      {/* ===== Overlays ===== */}
      <Toast message={errorMessage} onDone={clearError} />
      <HelpModal open={helpOpen} onClose={() => setHelpOpen(false)} />
      <SettingsSheet
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        selectedLength={wordLength}
        selectedCategory={category}
        onLengthChange={(len) => { changeWordLength(len); setSettingsOpen(false); }}
        onCategoryChange={(cat) => { changeCategory(cat); setSettingsOpen(false); }}
      />
      <EndGameModal
        open={endModalOpen && !dismissedEnd}
        gameWon={gameWon}
        dailyWord={dailyWord}
        guesses={guesses}
        wordLength={wordLength}
        verseData={verseData}
        loadingVerse={loadingVerse}
        onClose={() => { setEndModalOpen(false); setDismissedEnd(true); }}
        onPlayAgain={() => { setEndModalOpen(false); resetGame(); }}
      />

      {/* Screen-reader live region for theme */}
      <span className="sr-only" aria-live="polite">Current theme: {theme}</span>
    </div>
  );
}

export default App;

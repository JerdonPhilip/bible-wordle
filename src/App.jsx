import React from "react";
import WordleGrid from "./components/WordleGrid";
import Keyboard from "./components/Keyboard";
import VerseDisplay from "./components/VerseDisplay";
import CategorySelector from "./components/CategorySelector";
import ThemeToggle from "./components/ThemeToggle";
import { useBibleWordle } from "./hooks/useBibleWordle";
import { useTheme } from "./context/ThemeContext";
import "./App.css";

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
    showHint,
    wordLength,
    category,
    handleKeyPress,
    resetGame,
    changeWordLength,
    changeCategory,
    MAX_GUESSES,
  } = useBibleWordle();

  const { theme } = useTheme();

  if (!dailyWord) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
        <div className="glass-card p-8 text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/80">Loading divine words...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900"
          : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      }`}
    >
      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header with centered title and theme toggle */}
          <div className="relative text-center mb-8">
            {/* Theme Toggle - positioned absolutely */}
            <div className="absolute top-0 right-0">
              <ThemeToggle />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold inline-flex items-center justify-center gap-2">
              <span className="text-6xl md:text-7xl">📖</span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Bible Wordle
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base">
              Guess the Bible word in {MAX_GUESSES} tries
            </p>
          </div>

          {/* Game info badges */}
          <div className="flex justify-center gap-3 mb-6 flex-wrap">
            <div className="glass px-4 py-2 rounded-full text-sm font-semibold text-gray-800 dark:text-white">
              🎯 {wordLength}-Letter
            </div>
            <div className="glass px-4 py-2 rounded-full text-sm font-semibold text-gray-800 dark:text-white">
              📂 {category.charAt(0).toUpperCase() + category.slice(1)}
            </div>
            <div className="glass px-4 py-2 rounded-full text-sm font-semibold text-gray-800 dark:text-white">
              💡 Hints available
            </div>
          </div>

          {/* Category selector (only before game ends) */}
          {!gameOver && !gameWon && (
            <div className="mb-6 animate-slide-up">
              <CategorySelector
                selectedLength={wordLength}
                selectedCategory={category}
                onLengthChange={changeWordLength}
                onCategoryChange={changeCategory}
              />
            </div>
          )}

          {/* Hint display */}
          {dailyWord.hint && !gameWon && !gameOver && showHint && (
            <div className="glass-card p-4 mb-6 text-center animate-pulse-glow bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-400/50">
              <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">
                ✨ Hint:
              </span>
              <p className="text-lg font-medium text-gray-800 dark:text-white mt-1">
                {dailyWord.hint}
              </p>
            </div>
          )}

          {/* Wordle Grid */}
          <div className="glass-card p-6 mb-6">
            <WordleGrid
              guesses={guesses}
              currentGuess={currentGuess}
              wordLength={wordLength}
              maxGuesses={MAX_GUESSES}
              dailyWord={dailyWord}
            />
          </div>

          {/* Error message */}
          {errorMessage && (
            <div className="glass-card bg-red-500/20 border-red-500/50 p-4 mb-6 text-center animate-bounce-in">
              <span className="text-red-700 dark:text-red-300">
                ⚠️ {errorMessage}
              </span>
            </div>
          )}

          {/* Verse display */}
          <VerseDisplay
            verseData={verseData}
            loading={loadingVerse}
            dailyWord={dailyWord}
            gameWon={gameWon}
            gameOver={gameOver}
          />

          {/* Keyboard */}
          <Keyboard onKeyPress={handleKeyPress} usedLetters={usedLetters} />

          {/* New game button */}
          {(gameOver || gameWon) && (
            <div className="text-center mt-8 animate-fade-in">
              <button
                onClick={resetGame}
                className="glass-button bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl"
              >
                🔄 New Game
              </button>
            </div>
          )}

          {/* Footer */}
          <footer className="text-center mt-12">
            <div className="glass inline-block mx-auto px-4 py-2 rounded-full backdrop-blur-sm text-gray-700 dark:text-white text-xs opacity-90">
              <p>✝️ Powered by Free Use Bible API • Curated Bible words</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;

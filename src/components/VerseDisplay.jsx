import React from 'react';

export default function VerseDisplay({ verseData, loading, dailyWord, gameWon, gameOver }) {
  if (!gameWon && !gameOver) return null;
  
  if (loading) {
    return (
      <div className="glass-card p-6 animate-pulse">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mx-auto mb-3"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mx-auto"></div>
      </div>
    );
  }
  
  if (!verseData) return null;
  
  return (
    <div className="glass-card p-6 animate-slide-up">
      <div className="text-center">
        <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
          📖 Today's Verse
        </div>
        <p className="text-lg italic text-gray-800 dark:text-gray-100">
          "{verseData.text}"
        </p>
        <p className="text-sm font-semibold mt-3 text-blue-600 dark:text-blue-400">
          {verseData.reference} ({verseData.translation})
        </p>
        
        {/* Lose state - word reveal */}
        {!gameWon && gameOver && (
          <div className="mt-4 p-3 glass rounded-xl bg-red-500/20 dark:bg-red-500/10 border border-red-500/30">
            <p className="font-semibold text-red-800 dark:text-red-200">
              The word was: <span className="uppercase text-2xl font-bold">{dailyWord?.word}</span>
            </p>
            <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
              💡 {dailyWord?.hint}
            </p>
          </div>
        )}
        
        {/* Win state - celebration */}
        {gameWon && (
          <div className="mt-4 p-3 glass rounded-xl bg-green-500/20 dark:bg-green-500/10 border border-green-500/30">
            <p className="font-semibold text-green-800 dark:text-green-200">
              🎉 Perfect! Great job! 🎉
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
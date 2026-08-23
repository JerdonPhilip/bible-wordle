import React, { useState } from 'react';
import { Trophy, Frown, BookOpen, Lightbulb, Check, Share2, RotateCcw, Cross } from 'lucide-react';

export default function EndGameModal({
  open,
  gameWon,
  dailyWord,
  guesses,
  wordLength,
  verseData,
  loadingVerse,
  onClose,
  onPlayAgain,
}) {
  const [copied, setCopied] = useState(false);
  if (!open) return null;

  const getStatus = (guess, pos) => {
    if (dailyWord.word[pos] === guess[pos]) return 'correct';
    if (dailyWord.word.includes(guess[pos])) return 'present';
    return 'absent';
  };

  const EMOJI = { correct: '🟩', present: '🟨', absent: '⬛' };

  const shareText = () => {
    const grid = guesses
      .map((g) => g.split('').map((_, i) => EMOJI[getStatus(g, i)]).join(''))
      .join('\n');
    return `Bible Wordle ${guesses.length}/6 ${gameWon ? '' : '(X/6)'}\n${grid}`;
  };

  const handleShare = async () => {
    const text = shareText();
    try {
      if (navigator.share) {
        await navigator.share({ text });
      } else {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      /* user cancelled */
    }
  };

  return (
    <>
      <div className="overlay-backdrop" />
      <section role="dialog" aria-label="Game result" className="modal-panel text-center scroll-y">
        <div
          className={`mx-auto mb-2 w-14 h-14 rounded-2xl flex items-center justify-center ${
            gameWon
              ? 'bg-emerald-500/15 text-emerald-500'
              : 'bg-red-500/15 text-red-500'
          }`}
        >
          {gameWon ? <Trophy size={30} strokeWidth={2} /> : <Frown size={30} strokeWidth={2} />}
        </div>
        <h2 className={`text-xl font-extrabold font-display ${gameWon ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
          {gameWon ? 'Blessed! You got it!' : 'Out of tries'}
        </h2>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">The word was</p>
        <p className="text-3xl font-extrabold tracking-widest uppercase text-blue-600 dark:text-blue-400">
          {dailyWord?.word}
        </p>
        {dailyWord?.hint && (
          <p className="flex items-center justify-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mt-1">
            <Lightbulb size={12} strokeWidth={2.25} aria-hidden="true" />
            {dailyWord.hint}
          </p>
        )}

        <div className="my-4 border-t border-gray-200 dark:border-white/10" />

        {loadingVerse ? (
          <div className="py-4 space-y-2" aria-busy="true">
            <div className="h-3 rounded bg-gray-300/70 dark:bg-white/10 w-3/4 mx-auto animate-pulse" />
            <div className="h-3 rounded bg-gray-300/70 dark:bg-white/10 w-1/2 mx-auto animate-pulse" />
          </div>
        ) : verseData ? (
          <div>
            <p className="flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold">
              <BookOpen size={13} strokeWidth={2.25} aria-hidden="true" />
              Verse of the day
            </p>
            <p className="italic text-[15px] leading-relaxed text-gray-800 dark:text-gray-100 mt-1">
              “{verseData.text}”
            </p>
            <p className="text-xs font-bold mt-2 text-purple-600 dark:text-purple-400">
              — {verseData.reference} ({verseData.translation})
            </p>
          </div>
        ) : null}

        <div className="flex gap-2 mt-5">
          <button
            type="button"
            onClick={handleShare}
            className="flex-1 py-3 rounded-xl font-semibold glass-card text-gray-700 dark:text-white transition-all duration-200 active:scale-[0.97] inline-flex items-center justify-center gap-1.5"
          >
            {copied ? (
              <>
                <Check size={16} strokeWidth={2.5} /> Copied!
              </>
            ) : (
              <>
                <Share2 size={16} strokeWidth={2.25} /> Share
              </>
            )}
          </button>
          <button type="button" onClick={onPlayAgain} className="primary-btn inline-flex items-center justify-center gap-1.5 font-bold">
            <RotateCcw size={16} strokeWidth={2.5} aria-hidden="true" />
            New Game
          </button>
        </div>

        {!gameWon && (
          <button type="button" onClick={onClose} className="block mx-auto mt-3 text-xs text-gray-500 dark:text-gray-400 underline underline-offset-2">
            View my board
          </button>
        )}

        <p className="flex items-center justify-center gap-1 text-[10px] text-gray-400 dark:text-white/30 mt-4">
          <Cross size={10} strokeWidth={2.25} aria-hidden="true" />
          Powered by Free Use Bible API
        </p>
      </section>
    </>
  );
}

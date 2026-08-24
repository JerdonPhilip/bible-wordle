import React, { useEffect, useState } from 'react';
import { Trophy, Frown, BookOpen, Lightbulb, Check, Share2, RotateCcw, Cross, Quote, Eye, Flame } from 'lucide-react';
import { getWordDefinition } from '../utils/dictionaryApi';
import { scoreGuess } from '../utils/wordScoring';
import CountdownTimer from './CountdownTimer';

export default function EndGameModal({
  open,
  gameWon,
  dailyWord,
  guesses,
  wordLength,
  verseData,
  loadingVerse,
  isDaily,
  puzzleNumber,
  streak,
  maxStreak,
  revealed,
  onClose,
  onPlayAgain,
}) {
  const [copied, setCopied] = useState(false);
  const [definition, setDefinition] = useState(null);
  const [loadingDefinition, setLoadingDefinition] = useState(false);

  // Fetch an English dictionary definition for the revealed word
  useEffect(() => {
    if (!open || !dailyWord?.word) return;
    let cancelled = false;
    setDefinition(null);
    setLoadingDefinition(true);
    getWordDefinition(dailyWord.word).then((def) => {
      if (!cancelled) {
        setDefinition(def);
        setLoadingDefinition(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [open, dailyWord?.word]);

  if (!open) return null;

  const getStatuses = (guess) => scoreGuess(guess, dailyWord.word);

  const EMOJI = { correct: '🟩', present: '🟨', absent: '⬛' };

  const shareText = () => {
    const grid = guesses
      .map((g) => getStatuses(g).map((s) => EMOJI[s]).join(''))
      .join('\n');
    const scoreline = gameWon
      ? `${guesses.length}/6`
      : `X/6`;
    const header = isDaily ? `Bible Wordle #${puzzleNumber} ${scoreline}` : `Bible Wordle ${scoreline}`;
    return `${header}\n${grid}${gameWon && streak > 1 ? `\n🔥 Streak: ${streak}` : ''}`;
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
              : revealed
                ? 'bg-blue-500/15 text-blue-500'
                : 'bg-red-500/15 text-red-500'
          }`}
        >
          {gameWon ? (
            <Trophy size={30} strokeWidth={2} />
          ) : revealed ? (
            <Eye size={30} strokeWidth={2} />
          ) : (
            <Frown size={30} strokeWidth={2} />
          )}
        </div>
        <h2 className={`text-xl font-extrabold font-display ${gameWon ? 'text-emerald-600 dark:text-emerald-400' : revealed ? 'text-blue-600 dark:text-blue-400' : 'text-red-600 dark:text-red-400'}`}>
          {gameWon ? 'Blessed! You got it!' : revealed ? 'Answer revealed' : 'Out of tries'}
        </h2>

        {gameWon && isDaily && streak > 1 && (
          <div className="mt-3 mx-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-400/40 text-orange-600 dark:text-orange-300 text-xs font-bold animate-fade-in">
            <Flame size={13} strokeWidth={2.5} aria-hidden="true" />
            {streak}-day streak{streak >= maxStreak ? ' · new record!' : ''}
          </div>
        )}

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

        {loadingDefinition ? (
          <div className="mt-3 py-1.5" aria-busy="true">
            <div className="h-3 rounded bg-gray-300/70 dark:bg-white/10 w-2/3 mx-auto animate-pulse" />
          </div>
        ) : definition?.definition ? (
          <div className="mt-3 mx-auto max-w-sm glass rounded-xl px-3 py-2 animate-fade-in">
            <p className="flex items-start justify-center gap-1.5 text-[13px] leading-snug text-gray-700 dark:text-gray-200">
              <Quote size={12} strokeWidth={2.25} className="shrink-0 mt-0.5 text-blue-500 dark:text-blue-400" aria-hidden="true" />
              <span className="text-left">
                {definition.partOfSpeech && (
                  <em className="text-[11px] text-gray-500 dark:text-gray-400 mr-1">{definition.partOfSpeech}.</em>
                )}
                {definition.definition}
              </span>
            </p>
          </div>
        ) : null}

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

        {isDaily && (
          <div className="mt-4 flex justify-center">
            <CountdownTimer />
          </div>
        )}

        <p className="flex items-center justify-center gap-1 text-[10px] text-gray-400 dark:text-white/30 mt-4">
          <Cross size={10} strokeWidth={2.25} aria-hidden="true" />
          Powered by Free Use Bible API
        </p>
      </section>
    </>
  );
}

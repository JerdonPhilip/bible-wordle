import React, { useEffect, useState } from 'react';
import { scoreGuess } from '../utils/wordScoring';

export default function WordleGrid({ guesses, currentGuess, wordLength, maxGuesses, dailyWord, gameWon, shakeKey, revealed }) {
  const [shaking, setShaking] = useState(false);

  const getStatuses = (guess) => (
    dailyWord ? scoreGuess(guess, dailyWord.word) : Array(guess.length).fill('empty')
  );

  useEffect(() => {
    if (!shakeKey) return;
    setShaking(true);
  }, [shakeKey]);

  const newestRow = guesses.length - 1;
  const emptyRows = maxGuesses - guesses.length - (guesses.length < maxGuesses ? 1 : 0);

  const tileClass = (status) => {
    switch (status) {
      case 'correct': return 'tile tile-correct';
      case 'present': return 'tile tile-present';
      case 'absent': return 'tile tile-absent';
      default: return 'tile tile-empty';
    }
  };

  return (
    <div className="board mx-auto" style={{ '--cols': wordLength }}>
      {guesses.map((guess, idx) => {
        const isNewest = idx === newestRow;
        const statuses = getStatuses(guess);
        return (
          <div
            key={idx}
            className={`board-row ${gameWon && isNewest ? 'win-bounce' : ''}`}
            style={gameWon && isNewest ? { animationDelay: `${wordLength * 140 + 250}ms` } : undefined}
          >
            {guess.split('').map((letter, pos) => {
              const status = statuses[pos] || 'empty';
              const revealDelay = isNewest ? `${pos * 140}ms` : undefined;
              return (
                <div
                  key={pos}
                  className={`${tileClass(status)} ${isNewest ? 'tile-flip' : ''}`}
                  style={{ animationDelay: revealDelay }}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        );
      })}

      {/* Revealed answer row (practice mode "reveal answer") */}
      {revealed && dailyWord && (
        <div className="board-row">
          {dailyWord.word.split('').map((letter, pos) => (
            <div
              key={pos}
              className="tile tile-revealed tile-flip"
              style={{ animationDelay: `${pos * 140}ms` }}
            >
              {letter}
            </div>
          ))}
        </div>
      )}

      {/* Active input row */}
      {guesses.length < maxGuesses && !revealed && (
        <div className={`board-row ${shaking ? 'row-shake' : ''}`} onAnimationEnd={() => setShaking(false)}>
          {Array(wordLength).fill(0).map((_, pos) => {
            const letter = currentGuess[pos];
            return letter ? (
              <div key={`${pos}-${currentGuess.length}-${shakeKey}`} className="tile tile-filled tile-pop">
                {letter}
              </div>
            ) : (
              <div key={pos} className="tile tile-empty" />
            );
          })}
        </div>
      )}

      {/* Remaining empty rows */}
      {Array(emptyRows).fill(0).map((_, idx) => (
        <div key={`empty-${idx}`} className="board-row opacity-50">
          {Array(wordLength).fill(0).map((_, pos) => (
            <div key={pos} className="tile tile-empty" />
          ))}
        </div>
      ))}
    </div>
  );
}

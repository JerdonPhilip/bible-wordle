import React from 'react';

export default function WordleGrid({ guesses, currentGuess, wordLength, maxGuesses, dailyWord }) {
  const emptyRows = maxGuesses - guesses.length - 1;
  
  const getLetterStatus = (guess, position) => {
    if (!dailyWord) return 'empty';
    const letter = guess[position];
    if (!letter) return 'empty';
    
    if (dailyWord.word[position] === letter) return 'correct';
    if (dailyWord.word.includes(letter)) return 'present';
    return 'absent';
  };

  // Responsive tile sizes based on screen width and word length
  const getTileWidth = () => {
    if (wordLength === 5) {
      return 'w-12 h-12 sm:w-14 sm:h-14 text-xl sm:text-2xl';
    }
    if (wordLength === 6) {
      return 'w-10 h-10 sm:w-12 sm:h-12 text-lg sm:text-xl';
    }
    return 'w-9 h-9 sm:w-10 sm:h-10 text-base sm:text-lg';
  };

  return (
    <div className="grid grid-rows-6 gap-1.5 sm:gap-2">
      {guesses.map((guess, idx) => (
        <div key={idx} className="flex gap-1.5 sm:gap-2 justify-center">
          {guess.split('').map((letter, pos) => {
            const status = getLetterStatus(guess, pos);
            let tileClass = "tile " + getTileWidth();
            if (status === 'correct') tileClass += " tile-correct";
            else if (status === 'present') tileClass += " tile-present";
            else if (status === 'absent') tileClass += " tile-absent";
            else tileClass += " tile-empty";
            
            return (
              <div key={pos} className={tileClass}>
                {letter}
              </div>
            );
          })}
        </div>
      ))}
      
      {guesses.length < maxGuesses && (
        <div className="flex gap-1.5 sm:gap-2 justify-center">
          {Array(wordLength).fill(0).map((_, pos) => (
            <div key={pos} className={`tile ${getTileWidth()} tile-empty`}>
              {currentGuess[pos] || ''}
            </div>
          ))}
        </div>
      )}
      
      {Array(emptyRows).fill(0).map((_, idx) => (
        <div key={`empty-${idx}`} className="flex gap-1.5 sm:gap-2 justify-center">
          {Array(wordLength).fill(0).map((_, pos) => (
            <div key={pos} className={`tile ${getTileWidth()} bg-white/10 dark:bg-white/5 border border-white/20`} />
          ))}
        </div>
      ))}
    </div>
  );
}
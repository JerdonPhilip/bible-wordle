// Standard Wordle two-pass letter scoring.
// Pass 1: mark exact-position matches ('correct') and count leftover target letters.
// Pass 2: mark letters with leftovers as 'present' (consuming counts); rest are 'absent'.
// This handles repeated letters correctly, e.g. guess "seeds" vs target "sheep".
export function scoreGuess(guess, target) {
    const length = Math.min(guess.length, target.length);
    const statuses = Array(length).fill('absent');
    const remaining = {};

    for (let i = 0; i < target.length; i++) {
        if (i < length && guess[i] === target[i]) {
            statuses[i] = 'correct';
        } else {
            remaining[target[i]] = (remaining[target[i]] || 0) + 1;
        }
    }

    for (let i = 0; i < length; i++) {
        if (statuses[i] === 'correct') continue;
        const letter = guess[i];
        if (remaining[letter] > 0) {
            statuses[i] = 'present';
            remaining[letter]--;
        }
    }

    return statuses;
}

// Merge a scored guess into accumulated keyboard state { correct, present, absent } Sets
export function mergeKeyboardState(state, guess, statuses) {
    const next = {
        correct: new Set(state.correct),
        present: new Set(state.present),
        absent: new Set(state.absent),
    };
    guess.split('').forEach((letter, idx) => {
        const status = statuses[idx];
        if (status === 'correct') {
            next.correct.add(letter);
            next.present.delete(letter);
            next.absent.delete(letter);
        } else if (status === 'present') {
            next.present.add(letter);
            next.absent.delete(letter);
        } else if (!next.correct.has(letter) && !next.present.has(letter)) {
            next.absent.add(letter);
        }
    });
    return next;
}

// Hard mode rules (standard Wordle):
//  - Any revealed green letter must be kept at its exact position.
//  - Any revealed yellow letter must appear somewhere in the new guess.
export const ordinal = (n) => {
    if (n % 100 >= 11 && n % 100 <= 13) return 'th';
    switch (n % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
};

export function getHardModeViolation(guess, guesses, target) {
    for (const prev of guesses) {
        for (let i = 0; i < target.length; i++) {
            if (prev[i] === target[i] && guess[i] !== target[i]) {
                return `${i + 1}${ordinal(i + 1)} letter must be "${target[i].toUpperCase()}"`;
            }
        }
    }
    for (const prev of guesses) {
        for (let i = 0; i < target.length; i++) {
            const letter = prev[i];
            if (letter !== target[i] && target.includes(letter) && !guess.includes(letter)) {
                return `Your guess must contain "${letter.toUpperCase()}"`;
            }
        }
    }
    return null;
}

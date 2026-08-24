import { getDailyWordForDate, getDailyWord, isValidBibleWord } from '../src/utils/wordList.js';
import { getHardModeViolation } from '../src/utils/hardMode.js';

let failures = 0;
const check = (name, cond) => {
  if (!cond) { failures++; console.log(`FAIL: ${name}`); }
  else { console.log(`ok: ${name}`); }
};

// 1. All-category deterministic daily word
const a1 = getDailyWordForDate(5, 'all', '2026-08-24');
const a2 = getDailyWordForDate(5, 'all', '2026-08-24');
check('all-category daily is deterministic', JSON.stringify(a1) === JSON.stringify(a2));
check('all-category word exists with hint/reference', !!a1?.word && !!a1?.hint && !!a1?.reference);
check('all-category word length matches', a1.word.length === 5);

// 2. Per-category dailies still work
const b1 = getDailyWordForDate(5, 'people', '2026-08-24');
const b2 = getDailyWordForDate(5, 'people', '2026-08-25');
check('people daily deterministic per date', b1.word !== '' && b2.word !== '');
check('people daily stays in people list', isValidBibleWord(b1.word, 5, 'people'));

// 3. Validation against pooled list
check("valid 'all' word passes (david)", isValidBibleWord('david', 5, 'all') === true);
check('invalid word fails for all', isValidBibleWord('zzzzz', 5, 'all') === false);
check('cross-category word passes in all (bread)', isValidBibleWord('bread', 5, 'all') === true);

// 4. Practice mode with all
const p = getDailyWord(7, 'all');
check('practice all returns 7-letter word', !!p?.word && p.word.length === 7);

// 5. Hard mode violations — target 'faith' (no repeated letters)
// Yellow rule only: prev 'trefa' → t,f,a all yellow (must be contained)
check('yellow letter must be reused', getHardModeViolation('txxxx', ['trefa'], 'faith') !== null);
check('all yellows reused passes', getHardModeViolation('aftxx', ['trefa'], 'faith') === null);
// Green rule only: prev 'faxel' → f green @0, a green @1
check('green pos0 enforced', getHardModeViolation('axxxx', ['faxel'], 'faith') !== null);
check('green pos1 enforced', getHardModeViolation('fxxxx', ['faxel'], 'faith') !== null);
check('greens satisfied passes', getHardModeViolation('faxxx', ['faxel'], 'faith') === null);
check('first guess has no constraints', getHardModeViolation('xxxxx', [], 'faith') === null);

process.exit(failures === 0 ? 0 : 1);

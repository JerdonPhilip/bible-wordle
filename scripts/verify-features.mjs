import { getDailyWordForDate, getDailyWord, isValidBibleWord, dateKey, yesterdayKey, getPuzzleNumber } from '../src/utils/wordList.js';
import { getHardModeViolation } from '../src/utils/hardMode.js';
import { scoreGuess, mergeKeyboardState } from '../src/utils/wordScoring.js';
import { BIBLE_WORDS } from '../src/data/bibleWords.js';

let failures = 0;
const check = (name, cond) => {
  if (!cond) { failures++; console.log(`FAIL: ${name}`); }
  else { console.log(`ok: ${name}`); }
};

// ===== Section 1: duplicate-letter scoring =====
const S = (g, t) => scoreGuess(g, t).map(s => s[0]).join('');

check("seeds vs sheep = cpcaa (2nd e spare -> yellow)", S('seeds', 'sheep') === 'cpcaa');
check("speed vs sheep = cpcca", S('speed', 'sheep') === 'cpcca');
check("eerie vs sheep = ppaaa (3rd e exhausted)", S('eerie', 'sheep') === 'ppaaa');
check("eeexx vs sheep = pacaa (only 1 spare e)", S('eeexx', 'sheep') === 'pacaa');
check("peess vs sheep = ppcpa", S('peess', 'sheep') === 'ppcpa');
check('exact match all correct', S('sheep', 'sheep') === 'ccccc');
check('all absent', S('xxxxx', 'sheep') === 'aaaaa');

// keyboard aggregation
const emptyKB = { correct: new Set(), present: new Set(), absent: new Set() };
const k1 = mergeKeyboardState(emptyKB, 'trefa', scoreGuess('trefa', 'faith'));
check('kb: t,f,a marked present', k1.present.has('t') && k1.present.has('f') && k1.present.has('a'));
check('kb: r,e marked absent', k1.absent.has('r') && k1.absent.has('e'));
const k2 = mergeKeyboardState(k1, 'faxxx', scoreGuess('faxxx', 'faith'));
check('kb: yellow upgrades to correct', k2.correct.has('f') && k2.correct.has('a') && !k1.correct.has('f'));

// ===== Section 1: UTC date handling =====
check('dateKey is UTC ISO format', dateKey(new Date('2026-08-24T23:30:00Z')) === '2026-08-24');
// 01:30 in +05:30 is still the previous UTC day — key must say 2026-08-23 everywhere
const crossTz = new Date('2026-08-24T01:30:00+05:30');
check('UTC key independent of local tz', dateKey(crossTz) === '2026-08-23');
check('puzzle number at epoch = 1', getPuzzleNumber(new Date(Date.UTC(2024, 0, 1))) === 1);
check('puzzle number next day = 2', getPuzzleNumber(new Date(Date.UTC(2024, 0, 2))) === 2);

// daily word stable across "timezones": same UTC instant formatted differently
const instA = getDailyWordForDate(5, 'people', '2026-08-24');
const instB = getDailyWordForDate(5, 'people', dateKey(new Date(Date.UTC(2026, 7, 24, 12))));
check('daily word keyed by UTC date string only', JSON.stringify(instA) === JSON.stringify(instB));

// ===== Section 1: no cross-category duplicates remain =====
let dupesFound = 0;
for (const categories of Object.values(BIBLE_WORDS)) {
  const seen = new Set();
  for (const entries of Object.values(categories)) {
    for (const e of entries) {
      if (seen.has(e.word)) dupesFound++;
      seen.add(e.word);
    }
  }
}
check('no duplicate words within any word length', dupesFound === 0);

// ===== Regression: prior features still pass =====
const a1 = getDailyWordForDate(5, 'all', '2026-08-24');
const a2 = getDailyWordForDate(5, 'all', '2026-08-24');
check('all-category daily is deterministic', JSON.stringify(a1) === JSON.stringify(a2));
check("valid 'all' word passes", isValidBibleWord('david', 5, 'all') === true);
check("bread valid in things, invalid in concepts", isValidBibleWord('bread', 5, 'things') && !isValidBibleWord('bread', 5, 'concepts'));
const p = getDailyWord(7, 'all');
check('practice all returns 7-letter word', !!p?.word && p.word.length === 7);
check('hard mode yellow reuse enforced', getHardModeViolation('txxxx', ['trefa'], 'faith') !== null);
check('hard mode greens satisfied passes', getHardModeViolation('faxxx', ['faxel'], 'faith') === null);

console.log(failures === 0 ? '\nALL CHECKS PASSED' : `\n${failures} CHECKS FAILED`);
process.exit(failures === 0 ? 0 : 1);

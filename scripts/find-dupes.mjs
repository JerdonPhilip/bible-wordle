import { BIBLE_WORDS } from '../src/data/bibleWords.js';

for (const [length, categories] of Object.entries(BIBLE_WORDS)) {
  const seen = new Map();
  for (const [cat, entries] of Object.entries(categories)) {
    for (const e of entries) {
      if (seen.has(e.word)) {
        console.log(`${length}-letter "${e.word}": ${seen.get(e.word)} AND ${cat}`);
      } else {
        seen.set(e.word, cat);
      }
    }
  }
}
console.log('done');

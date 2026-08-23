import { getWordList, getAllValidBibleWords, GAME_CONFIG } from '../data/bibleWords';

// ---------- Date helpers ----------
const PUZZLE_EPOCH = new Date(2024, 0, 1); // Jan 1 2024 = puzzle #1

export function dateKey(d = new Date()) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
}

export function yesterdayKey() {
    return dateKey(new Date(Date.now() - 86400000));
}

export function getPuzzleNumber(d = new Date()) {
    return Math.max(1, Math.floor((d - PUZZLE_EPOCH) / 86400000) + 1);
}

// FNV-1a string hash → 32-bit uint
function hashSeed(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
}

// ---------- Word picking ----------
function pickEntry(wordLength, category, seedStr) {
    const list = getWordList(wordLength, category);
    if (list.length === 0) return null;
    const index = hashSeed(seedStr) % list.length;
    return list[index];
}

function buildDaily(entry, category, wordLength) {
    return {
        word: entry.word,
        reference: entry.reference || "Psalm 119:105",
        translation: "kjv",
        hint: entry.hint,
        category,
        length: wordLength
    };
}

// Random word (Practice mode)
export function getDailyWord(wordLength = 5, category = 'people') {
    const fallback = { word: "jesus", reference: "Matthew 1:21", hint: "You shall call His name ___" };
    const entry = pickEntry(wordLength, category, `random-${Date.now()}-${Math.random()}`) || fallback;
    return buildDaily(entry, category, wordLength);
}

// Deterministic word for a given date + settings (Daily mode).
// Same date + same length/category => same word for every player.
export function getDailyWordForDate(wordLength = 5, category = 'people', key = dateKey()) {
    const entry = pickEntry(wordLength, category, `bible-wordle-${key}-${wordLength}-${category}`);
    return buildDaily(entry, category, wordLength);
}

// Validate if word is in Bible word list
export function isValidBibleWord(word, wordLength, category) {
    const wordList = getWordList(wordLength, category);
    return wordList.some(item => item.word.toLowerCase() === word.toLowerCase());
}

// Get all valid words for current game
export function getValidWordsForGame(wordLength, category) {
    return getWordList(wordLength, category).map(item => item.word.toLowerCase());
}

export { getAllValidBibleWords, GAME_CONFIG };

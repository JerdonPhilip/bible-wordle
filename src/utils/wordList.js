import { getWordList, getAllValidBibleWords, GAME_CONFIG } from '../data/bibleWords';

// Get random word from selected category and length
export function getDailyWord(wordLength = 5, category = 'people') {
    const wordList = getWordList(wordLength, category);
    if (wordList.length === 0) {
        return { word: "jesus", reference: "Matthew 1:21", translation: "kjv", hint: "You shall call His name ___" };
    }

    // Get random word from list
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const selectedWord = wordList[randomIndex];

    // Find verse reference (you'll need to map these)
    const verseMap = {
        "jesus": "Matthew 1:21",
        "moses": "Exodus 3:14",
        "david": "1 Samuel 17:45",
        "paul": "Acts 9:15",
        "grace": "Ephesians 2:8",
        "faith": "Hebrews 11:1",
        "egypt": "Exodus 12:51",
        "altar": "Genesis 8:20",
        "flood": "Genesis 7:17",
        "peace": "John 14:27",
        "truth": "John 14:6",
        "light": "John 8:12",
        "bread": "John 6:35",
        "elijah": "1 Kings 18:21",
        "esther": "Esther 4:14",
        "samuel": "1 Samuel 3:10",
        "isaiah": "Isaiah 6:1",
        "daniel": "Daniel 6:22",
        "canaan": "Genesis 17:8",
        "locust": "Exodus 10:14",
        "tablet": "Exodus 31:18",
        "scroll": "Jeremiah 36:2",
        "exodus": "Exodus 12:41",
        "prayer": "Matthew 6:9",
        "redeem": "Ruth 4:4",
        "abraham": "Genesis 17:5",
        "timothy": "1 Timothy 1:2",
        "ezekiel": "Ezekiel 37:3",
        "jericho": "Joshua 6:20",
        "bethany": "John 11:18",
        "babylon": "Jeremiah 29:10",
        "corinth": "1 Corinthians 1:2",
        "ephesus": "Ephesians 1:1",
        "serpent": "Genesis 3:1",
        "justice": "Micah 6:8",
        "worship": "John 4:24",
        "forgive": "Matthew 6:14"
    };

    return {
        word: selectedWord.word,
        reference: verseMap[selectedWord.word] || "Psalm 119:105",
        translation: "kjv",
        hint: selectedWord.hint,
        category: category,
        length: wordLength
    };
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

export { GAME_CONFIG };
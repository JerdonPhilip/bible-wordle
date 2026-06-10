// Free Dictionary API - No API key required
// Source: https://dictionaryapi.dev/
const DICTIONARY_API = 'https://api.dictionaryapi.dev/api/v2/entries/en';

// Cache for validated words to reduce API calls
const wordCache = new Map();

export async function isValidEnglishWord(word) {
    // Check cache first
    if (wordCache.has(word)) {
        return wordCache.get(word);
    }

    try {
        const response = await fetch(`${DICTIONARY_API}/${word.toLowerCase()}`);
        const isValid = response.status === 200;

        // Cache the result
        wordCache.set(word, isValid);

        // Limit cache size (keep last 1000 words)
        if (wordCache.size > 1000) {
            const firstKey = wordCache.keys().next().value;
            wordCache.delete(firstKey);
        }

        return isValid;
    } catch (error) {
        console.error('Dictionary API error:', error);
        // If API fails, allow the word (fallback)
        return true;
    }
}

// Get word definition (for extra feature)
export async function getWordDefinition(word) {
    try {
        const response = await fetch(`${DICTIONARY_API}/${word.toLowerCase()}`);
        if (!response.ok) return null;

        const data = await response.json();
        if (data && data[0]) {
            return {
                word: data[0].word,
                phonetic: data[0].phonetic,
                definition: data[0].meanings[0]?.definitions[0]?.definition,
                partOfSpeech: data[0].meanings[0]?.partOfSpeech,
                example: data[0].meanings[0]?.definitions[0]?.example
            };
        }
        return null;
    } catch (error) {
        console.error('Error fetching definition:', error);
        return null;
    }
}
// Free Dictionary API - No API key required
// Source: https://dictionaryapi.dev/
const DICTIONARY_API = 'https://api.dictionaryapi.dev/api/v2/entries/en';

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
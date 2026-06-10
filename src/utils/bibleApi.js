const BIBLE_API_BASE = 'https://bible-api.com';

export async function fetchVerse(reference, translation = 'kjv') {
    try {
        const response = await fetch(`${BIBLE_API_BASE}/${reference}?translation=${translation}`);
        if (!response.ok) throw new Error('Failed to fetch verse');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Bible API error:', error);
        return null;
    }
}

export async function getVerseForWord(word, reference, translation = 'kjv') {
    try {
        const verse = await fetchVerse(reference, translation);
        if (verse && verse.text) {
            // Clean up verse text (remove verse numbers, extra spaces)
            const cleanText = verse.text.replace(/\[\d+\]/g, '').trim();
            return {
                text: cleanText,
                reference: verse.reference,
                translation: translation.toUpperCase()
            };
        }
        return null;
    } catch (error) {
        console.error('Error fetching verse:', error);
        return null;
    }
}
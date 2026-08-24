import { useState, useCallback } from 'react';
import { getVerseForWord } from '../../utils/bibleApi';

// Loads the victory verse for the current word
export function useVerse() {
    const [verseData, setVerseData] = useState(null);
    const [loadingVerse, setLoadingVerse] = useState(false);

    const load = useCallback(async (word, reference, translation) => {
        setLoadingVerse(true);
        const verse = await getVerseForWord(word, reference, translation);
        if (verse) {
            setVerseData(verse);
        }
        setLoadingVerse(false);
    }, []);

    return { verseData, loadingVerse, load };
}

import { useState, useEffect, useCallback } from 'react';
import { getDailyWord, isValidBibleWord, getValidWordsForGame } from '../utils/wordList';
import { getVerseForWord } from '../utils/bibleApi';

const MAX_GUESSES = 6;

export function useBibleWordle() {
    const [dailyWord, setDailyWord] = useState(null);
    const [guesses, setGuesses] = useState([]);
    const [currentGuess, setCurrentGuess] = useState('');
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [verseData, setVerseData] = useState(null);
    const [loadingVerse, setLoadingVerse] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [wordLength, setWordLength] = useState(5);
    const [category, setCategory] = useState('people');
    const [validWords, setValidWords] = useState([]);
    const [usedLetters, setUsedLetters] = useState({
        correct: new Set(),
        present: new Set(),
        absent: new Set()
    });
    const [shakeKey, setShakeKey] = useState(0);
    const showHint = !gameOver && !gameWon && guesses.length >= 4;

    // Load new game when length or category changes
    useEffect(() => {
        startNewGame();
    }, [wordLength, category]);

    const startNewGame = async () => {
        const word = getDailyWord(wordLength, category);
        setDailyWord(word);
        setGuesses([]);
        setCurrentGuess('');
        setGameOver(false);
        setGameWon(false);
        setErrorMessage('');
        setUsedLetters({ correct: new Set(), present: new Set(), absent: new Set() });

        // Set valid words for this game
        const words = getValidWordsForGame(wordLength, category);
        setValidWords(words);

        await loadVerse(word.word, word.reference);
    };

    const loadVerse = async (word, reference) => {
        setLoadingVerse(true);
        const verse = await getVerseForWord(word, reference);
        if (verse) {
            setVerseData(verse);
        }
        setLoadingVerse(false);
    };

    const checkLetter = useCallback((letter, index) => {
        if (!dailyWord) return 'absent';
        if (dailyWord.word[index] === letter) return 'correct';
        if (dailyWord.word.includes(letter)) return 'present';
        return 'absent';
    }, [dailyWord]);

    const updateUsedLetters = useCallback((guess) => {
        const newUsed = {
            correct: new Set(usedLetters.correct),
            present: new Set(usedLetters.present),
            absent: new Set(usedLetters.absent)
        };

        guess.split('').forEach((letter, idx) => {
            if (dailyWord.word[idx] === letter) {
                newUsed.correct.add(letter);
            } else if (dailyWord.word.includes(letter)) {
                newUsed.present.add(letter);
            } else {
                newUsed.absent.add(letter);
            }
        });

        setUsedLetters(newUsed);
    }, [dailyWord, usedLetters]);

    const fail = (message) => {
        setErrorMessage(message);
        setShakeKey(k => k + 1);
    };

    const submitGuess = useCallback(() => {
        setErrorMessage('');

        if (gameOver) {
            fail('Game is over. Start a new game!');
            return;
        }

        if (currentGuess.length !== wordLength) {
            fail(`Word must be ${wordLength} letters long`);
            return;
        }

        if (guesses.includes(currentGuess)) {
            fail(`You already guessed "${currentGuess.toUpperCase()}"`);
            return;
        }

        // Validate against Bible word list
        if (!isValidBibleWord(currentGuess, wordLength, category)) {
            fail(`"${currentGuess.toUpperCase()}" is not a valid Bible word in this category`);
            return;
        }

        const newGuesses = [...guesses, currentGuess];
        setGuesses(newGuesses);

        updateUsedLetters(currentGuess);

        if (currentGuess === dailyWord.word) {
            setGameWon(true);
            setGameOver(true);
        } else if (newGuesses.length === MAX_GUESSES) {
            setGameOver(true);
        }

        setCurrentGuess('');
    }, [currentGuess, dailyWord, guesses, gameOver, updateUsedLetters, wordLength, category]);

    const handleKeyPress = useCallback((key) => {
        if (gameOver) return;

        if (key === 'ENTER') {
            submitGuess();
        } else if (key === 'BACKSPACE') {
            setCurrentGuess(prev => prev.slice(0, -1));
            setErrorMessage('');
        } else if (/^[a-zA-Z]$/.test(key) && currentGuess.length < wordLength) {
            setCurrentGuess(prev => (prev + key.toLowerCase()).slice(0, wordLength));
            setErrorMessage('');
        }
    }, [currentGuess, gameOver, submitGuess, wordLength]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                handleKeyPress('ENTER');
            } else if (e.key === 'Backspace') {
                handleKeyPress('BACKSPACE');
            } else if (e.key.length === 1 && /[a-zA-Z]/i.test(e.key)) {
                handleKeyPress(e.key);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyPress]);

    const resetGame = () => {
        startNewGame();
    };

    const changeWordLength = (length) => {
        setWordLength(length);
    };

    const changeCategory = (newCategory) => {
        setCategory(newCategory);
    };

    return {
        dailyWord,
        guesses,
        currentGuess,
        gameOver,
        gameWon,
        verseData,
        loadingVerse,
        usedLetters,
        errorMessage,
        clearError: () => setErrorMessage(''),
        wordLength,
        category,
        submitGuess,
        showHint,
        shakeKey,
        handleKeyPress,
        resetGame,
        changeWordLength,
        changeCategory,
        MAX_GUESSES
    };
}
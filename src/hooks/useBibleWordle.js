import { useState, useEffect, useCallback, useRef } from 'react';
import { getDailyWord, getDailyWordForDate, isValidBibleWord, getPuzzleNumber } from '../utils/wordList';
import { getHardModeViolation } from '../utils/hardMode';
import { scoreGuess, mergeKeyboardState } from '../utils/wordScoring';
import { MAX_GUESSES, STORAGE_KEYS, TRANSLATIONS, DEFAULT_TRANSLATION } from '../config';
import { useStats } from './bible-wordle/useStats';
import { useVerse } from './bible-wordle/useVerse';

export function useBibleWordle() {
    const [mode, setMode] = useState(() => localStorage.getItem(STORAGE_KEYS.mode) || 'daily');
    const [hardMode, setHardMode] = useState(() => localStorage.getItem(STORAGE_KEYS.hardMode) === 'true');
    const [translation, setTranslation] = useState(() => localStorage.getItem(STORAGE_KEYS.translation) || DEFAULT_TRANSLATION);
    const [dailyWord, setDailyWord] = useState(null);
    const [guesses, setGuesses] = useState([]);
    const [currentGuess, setCurrentGuess] = useState('');
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [revealed, setRevealed] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [wordLength, setWordLength] = useState(5);
    const [category, setCategory] = useState('people');
    const [usedLetters, setUsedLetters] = useState({
        correct: new Set(),
        present: new Set(),
        absent: new Set()
    });
    const [shakeKey, setShakeKey] = useState(0);

    const { verseData, loadingVerse, loadVerse } = useVerse();

    // Progressive hints: stage 1 = first letter, stage 2 = full hint, stage 3 = + last letter
    const hintStage = gameOver || gameWon ? 3 : guesses.length >= 5 ? 3 : guesses.length >= 4 ? 2 : guesses.length >= 2 ? 1 : 0;

    // Load new game when length, category, or mode changes
    useEffect(() => {
        startNewGame();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [wordLength, category, mode]);

    // Re-fetch the verse when the translation changes (game stays intact)
    const skipTranslationEffect = useRef(true);
    useEffect(() => {
        if (skipTranslationEffect.current) {
            skipTranslationEffect.current = false;
            return;
        }
        if (dailyWord) {
            loadVerse(dailyWord.word, dailyWord.reference, translation);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [translation]);

    const startNewGame = async () => {
        const word = mode === 'daily'
            ? getDailyWordForDate(wordLength, category)
            : getDailyWord(wordLength, category);
        setDailyWord(word);
        setGuesses([]);
        setCurrentGuess('');
        setGameOver(false);
        setGameWon(false);
        setRevealed(false);
        setErrorMessage('');
        setUsedLetters({ correct: new Set(), present: new Set(), absent: new Set() });
        await loadVerse(word.word, word.reference, translation);
    };

    const updateUsedLetters = useCallback((guess) => {
        setUsedLetters(prev => mergeKeyboardState(prev, guess, scoreGuess(guess, dailyWord.word)));
    }, [dailyWord]);

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

        if (!isValidBibleWord(currentGuess, wordLength, category)) {
            fail(`"${currentGuess.toUpperCase()}" is not a valid Bible word in this category`);
            return;
        }

        if (hardMode && guesses.length > 0) {
            const violation = getHardModeViolation(currentGuess, guesses, dailyWord.word);
            if (violation) {
                fail(violation);
                return;
            }
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
    }, [currentGuess, dailyWord, guesses, gameOver, hardMode, updateUsedLetters, wordLength, category]);

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

    const resetGame = () => startNewGame();

    const changeWordLength = (length) => setWordLength(length);

    const changeCategory = (newCategory) => setCategory(newCategory);

    const changeMode = (newMode) => {
        localStorage.setItem(STORAGE_KEYS.mode, newMode);
        setMode(newMode);
    };

    const changeHardMode = (enabled) => {
        localStorage.setItem(STORAGE_KEYS.hardMode, String(enabled));
        setHardMode(enabled);
    };

    const changeTranslation = (code) => {
        if (!TRANSLATIONS.some(t => t.code === code)) return;
        localStorage.setItem(STORAGE_KEYS.translation, code);
        setTranslation(code);
    };

    // Practice-mode only: quit and reveal the answer without a win
    const revealAnswer = () => {
        if (mode !== 'practice' || gameOver || gameWon || !dailyWord) return;
        setRevealed(true);
        setGameOver(true);
    };

    // Stats are recorded once per day for finished daily games
    const { stats, resetStats } = useStats(
        gameOver && mode === 'daily' && !!dailyWord,
        gameWon,
        guesses.length
    );

    return {
        mode,
        changeMode,
        hardMode,
        changeHardMode,
        translation,
        changeTranslation,
        dailyWord,
        guesses,
        currentGuess,
        gameOver,
        gameWon,
        revealed,
        revealAnswer,
        verseData,
        loadingVerse,
        usedLetters,
        errorMessage,
        clearError: () => setErrorMessage(''),
        wordLength,
        category,
        submitGuess,
        hintStage,
        shakeKey,
        handleKeyPress,
        resetGame,
        resetStats,
        stats,
        puzzleNumber: dailyWord ? getPuzzleNumber() : null,
        changeWordLength,
        changeCategory,
        MAX_GUESSES
    };
}

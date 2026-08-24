import { useState, useEffect, useCallback, useRef } from 'react';
import { getDailyWord, getDailyWordForDate, isValidBibleWord, getValidWordsForGame, dateKey, yesterdayKey, getPuzzleNumber } from '../utils/wordList';
import { getVerseForWord } from '../utils/bibleApi';
import { getHardModeViolation } from '../utils/hardMode';
import { scoreGuess, mergeKeyboardState } from '../utils/wordScoring';

const MAX_GUESSES = 6;
const STATS_KEY = 'bible-wordle-stats-v1';
const MODE_KEY = 'bible-wordle-mode';
const HARD_MODE_KEY = 'bible-wordle-hard-mode';

const EMPTY_STATS = {
    played: 0,
    wins: 0,
    curStreak: 0,
    maxStreak: 0,
    dist: [0, 0, 0, 0, 0, 0],
    lastFinished: '',   // dateKey of the last recorded daily game
    lastWinDate: '',    // dateKey of last win (for streak continuity)
};

const loadStats = () => {
    try {
        const raw = localStorage.getItem(STATS_KEY);
        return raw ? { ...EMPTY_STATS, ...JSON.parse(raw) } : { ...EMPTY_STATS };
    } catch {
        return { ...EMPTY_STATS };
    }
};

export function useBibleWordle() {
    const [mode, setMode] = useState(() => localStorage.getItem(MODE_KEY) || 'daily');
    const [hardMode, setHardMode] = useState(() => localStorage.getItem(HARD_MODE_KEY) === 'true');
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
    const [stats, setStats] = useState(loadStats);

    // Record each finished daily game exactly once per day
    const statsRef = useRef(stats);
    statsRef.current = stats;

    // Progressive hints: stage 1 = first letter, stage 2 = full hint, stage 3 = + last letter
    const hintStage = gameOver || gameWon ? 3 : guesses.length >= 5 ? 3 : guesses.length >= 4 ? 2 : guesses.length >= 2 ? 1 : 0;

    // Load new game when length, category, or mode changes
    useEffect(() => {
        startNewGame();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [wordLength, category, mode]);

    const startNewGame = async () => {
        const word = mode === 'daily'
            ? getDailyWordForDate(wordLength, category)
            : getDailyWord(wordLength, category);
        setDailyWord(word);
        setGuesses([]);
        setCurrentGuess('');
        setGameOver(false);
        setGameWon(false);
        setErrorMessage('');
        setUsedLetters({ correct: new Set(), present: new Set(), absent: new Set() });

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
    }, [currentGuess, dailyWord, guesses, gameOver, updateUsedLetters, wordLength, category, hardMode]);

    // Stats: record once per day for daily mode
    useEffect(() => {
        if (!(gameOver && mode === 'daily') || !dailyWord) return;
        const today = dateKey();
        if (statsRef.current.lastFinished === today) return;

        setStats(prev => {
            const s = {
                ...prev,
                played: prev.played + 1,
                dist: [...prev.dist],
                lastFinished: today,
                lastWinDate: prev.lastWinDate
            };
            if (gameWon) {
                s.wins += 1;
                s.dist[guesses.length - 1] = (s.dist[guesses.length - 1] || 0) + 1;
                s.curStreak = s.lastWinDate === yesterdayKey() ? prev.curStreak + 1 : 1;
                s.maxStreak = Math.max(prev.maxStreak, s.curStreak);
                s.lastWinDate = today;
            } else {
                s.curStreak = 0;
            }
            try { localStorage.setItem(STATS_KEY, JSON.stringify(s)); } catch { /* storage full */ }
            return s;
        });
    }, [gameOver, gameWon, guesses.length, mode, dailyWord]);

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

    const changeMode = (newMode) => {
        localStorage.setItem(MODE_KEY, newMode);
        setMode(newMode);
    };

    const changeHardMode = (enabled) => {
        localStorage.setItem(HARD_MODE_KEY, String(enabled));
        setHardMode(enabled);
    };

    const resetStats = () => {
        const fresh = { ...EMPTY_STATS, dist: [...EMPTY_STATS.dist] };
        localStorage.setItem(STATS_KEY, JSON.stringify(fresh));
        setStats(fresh);
    };

    return {
        mode,
        changeMode,
        hardMode,
        changeHardMode,
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

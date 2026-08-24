// Centralized app constants
export const MAX_GUESSES = 6;

export const STORAGE_KEYS = {
    stats: 'bible-wordle-stats-v1',
    mode: 'bible-wordle-mode',
    hardMode: 'bible-wordle-hard-mode',
    translation: 'bible-wordle-translation',
};

// Translations available from bible-api.com (public domain)
export const TRANSLATIONS = [
    { code: 'kjv', label: 'KJV', name: 'King James Version' },
    { code: 'web', label: 'WEB', name: 'World English Bible' },
    { code: 'bbe', label: 'BBE', name: 'Bible in Basic English' },
    { code: 'darby', label: 'DARBY', name: 'Darby Translation' },
];

export const DEFAULT_TRANSLATION = 'kjv';

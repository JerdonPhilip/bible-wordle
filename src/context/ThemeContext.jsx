import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const STORAGE_KEY = 'bible-wordle-theme';
// Matches the body backgrounds in index.css
const CHROME_COLORS = { light: '#e4e8f3', dark: '#0b1020' };

export const useTheme = () => useContext(ThemeContext);

// Mirrors the inline script in index.html so React state matches
// the class that was already applied before first paint.
const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    localStorage.setItem(STORAGE_KEY, theme);

    const meta = document.getElementById('meta-theme-color');
    if (meta) meta.setAttribute('content', CHROME_COLORS[theme]);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

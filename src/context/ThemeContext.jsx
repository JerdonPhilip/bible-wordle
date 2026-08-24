import React, { createContext, useContext, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

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

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

  const toggleTheme = (event) => {
    const flip = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

    if (prefersReducedMotion()) {
      flip();
      return;
    }

    // Modern browsers: circular reveal expanding from the toggle button
    if (typeof document.startViewTransition === 'function') {
      const rect = event?.currentTarget?.getBoundingClientRect();
      const x = rect ? rect.left + rect.width / 2 : window.innerWidth - 48;
      const y = rect ? rect.top + rect.height / 2 : 40;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = document.startViewTransition(() => {
        // Commit the React re-render synchronously so the "new" snapshot
        // captures the updated UI
        flushSync(flip);
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`
            ]
          },
          {
            duration: 450,
            easing: 'ease-in-out',
            pseudoElement: '::view-transition-new(root)'
          }
        );
      }).catch(() => { /* transition skipped */ });
      return;
    }

    // Fallback: brief global color cross-fade
    const root = document.documentElement;
    root.classList.add('theme-fade');
    requestAnimationFrame(() => {
      flip();
      setTimeout(() => root.classList.remove('theme-fade'), 450);
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

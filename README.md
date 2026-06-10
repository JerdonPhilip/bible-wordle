===============================================================================
BIBLE WORDLE – README
===============================================================================

A premium, glassmorphism‑styled Wordle game featuring Bible‑specific words 
(people, places, events, concepts, animals, things) with 5, 6 and 7‑letter 
categories. Built with React, Vite, TailwindCSS and the Free Use Bible API.

-------------------------------------------------------------------------------
FEATURES
-------------------------------------------------------------------------------

- Daily Bible Word – Randomly selected from a curated list of hundreds of 
  Bible words.
- Multiple Categories – People, Places, Events, Concepts, Animals, Things.
- Variable Word Length – Play with 5, 6 or 7‑letter words.
- Hint System – Hint appears after 4 incorrect guesses.
- Dark / Light Mode – Fully supported with smooth toggle.
- Glassmorphism UI – Frosted glass cards, glowing tiles, animated background 
  blobs.
- Responsive Design – Works on desktop, tablet and mobile.
- Real‑time Validation – Only accepts valid Bible words from the curated list.
- Verse Reveal – Shows a related Bible verse after winning or losing.
- Keyboard Support – Physical and on‑screen keyboard with visual feedback.

-------------------------------------------------------------------------------
TECH STACK
-------------------------------------------------------------------------------

- React 18          – Frontend framework
- Vite              – Build tool and dev server
- TailwindCSS       – Utility‑first CSS with custom animations
- Free Use Bible API – No‑key Bible verse fetching (https://bible-api.com)
- Custom Word Database – Hand‑curated Bible words (500+ entries)

-------------------------------------------------------------------------------
INSTALLATION
-------------------------------------------------------------------------------

1. Clone the repository
   git clone https://github.com/yourusername/bible-wordle.git
   cd bible-wordle

2. Install dependencies
   npm install

3. Start development server
   npm run dev
   Then open http://localhost:3000 (or the port shown).

4. Build for production
   npm run build

5. Preview production build
   npm run preview

-------------------------------------------------------------------------------
DEPLOYMENT TO GITHUB PAGES
-------------------------------------------------------------------------------

1. Update package.json – Set your GitHub username in the "homepage" field:
   "homepage": "https://yourusername.github.io/bible-wordle"

2. Deploy
   npm run deploy

   Your app will be live at https://yourusername.github.io/bible-wordle

-------------------------------------------------------------------------------
HOW TO PLAY
-------------------------------------------------------------------------------

1. Choose a word length (5, 6 or 7 letters) and a category (People, Places, etc.).
2. Guess a Bible word by typing or using the on‑screen keyboard.
3. After each guess, tiles change colour:
     Green  – Correct letter, correct position
     Yellow – Correct letter, wrong position
     Gray   – Letter not in the word
4. You have 6 guesses.
5. After 4 incorrect guesses, a hint appears.
6. Win or lose, a Bible verse related to the word is revealed.

-------------------------------------------------------------------------------
PROJECT STRUCTURE
-------------------------------------------------------------------------------

bible-wordle/
├── public/
├── src/
│   ├── components/
│   │   ├── CategorySelector.jsx
│   │   ├── Keyboard.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── VerseDisplay.jsx
│   │   └── WordleGrid.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   └── bibleWords.js          (curated word lists 5‑7 letters)
│   ├── hooks/
│   │   └── useBibleWordle.js      (game logic)
│   ├── utils/
│   │   ├── bibleApi.js            (Free Bible API calls)
│   │   └── wordList.js            (word retrieval & validation)
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.txt

-------------------------------------------------------------------------------
CUSTOMISING THE WORD LIST
-------------------------------------------------------------------------------

To add more Bible words, edit src/data/bibleWords.js.
Each entry requires:
  - word  – lowercase, 5‑7 letters
  - hint  – short clue for the player

Example:
  people: [
    { word: "joseph", hint: "Dreamer, sold into slavery, became ruler in Egypt" },
  ]

For verses, update the verseMap in src/utils/wordList.js.

-------------------------------------------------------------------------------
DARK / LIGHT MODE
-------------------------------------------------------------------------------

The theme is controlled by the ThemeContext and stored in localStorage.
The toggle button is in the top‑right corner. All components adapt dynamically.

-------------------------------------------------------------------------------
LICENSE
-------------------------------------------------------------------------------

MIT – feel free to use, modify and distribute.

-------------------------------------------------------------------------------
ACKNOWLEDGEMENTS
-------------------------------------------------------------------------------

- Free Use Bible API      https://github.com/wldeh/bible-api
- TailwindCSS             https://tailwindcss.com
- React                   https://reactjs.org
- Vite                    https://vitejs.dev

-------------------------------------------------------------------------------
TROUBLESHOOTING
-------------------------------------------------------------------------------

Issue: API verse not loading
Solution: The Free Bible API may be rate‑limited. Wait a few seconds and retry.

Issue: Word validation rejects a correct word
Solution: Add the word to the correct category/length in bibleWords.js.

Issue: Dark mode not saving
Solution: Check that localStorage is enabled in your browser.

Issue: Keyboard not working
Solution: Ensure no other input field is focused. Click the game area.

-------------------------------------------------------------------------------
Enjoy the game! ✝️🎮
-------------------------------------------------------------------------------
# Cosmeow — Memory Game

A memory game about cat astronauts. Flip the cards, remember where each cat is hiding and find all 8 pairs in as few moves as possible.

Built with plain HTML, CSS and vanilla JavaScript, with no libraries or frameworks.

## Features

- 16 cards (8 pairs) shuffled with the Fisher–Yates algorithm on every load and every new game.
- 3D card flip animation.
- Move and pair counters with a progress indicator.
- A mismatched pair stays visible for about a second, then flips back. The board is locked until then.
- Win dialog with the final number of moves.
- Leaderboard with the top 10 results (fewest moves first, earlier game wins a tie). Results are stored in `localStorage` and survive page reloads.
- Responsive layout for desktop, tablet and mobile. The board always fits the screen without scrolling.
- Keyboard accessible: cards and buttons are real `<button>` elements, dialogs close with Escape.

## How to play

1. Click a card to flip it, then click another one.
2. If the two cards match, they stay open. If not, they flip back.
3. Every two flipped cards count as one move.
4. Find all 8 pairs to finish the game and get on the leaderboard.

Use **New game** to restart at any time and **Leaderboard** to see your best results.

## Run locally

The JavaScript is split into ES modules, so the game has to be served over HTTP. Opening `index.html` directly from the file system will not work.

1. Clone the repository:

   ```bash
   git clone git@github.com:aleskarova/memory-game.git
   cd memory-game
   ```

2. Start a local static server in the project folder. Any of these works:
   - **VS Code:** install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, open `index.html` and click **Go Live**.
   - **Node.js:**

     ```bash
     npx serve .
     ```

   - **Python 3:**

     ```bash
     python3 -m http.server 8000
     ```

3. Open the address the server prints (for example, `http://localhost:8000`) in your browser.

No build step or dependencies are needed.

## Project structure

```
memory-game/
├── index.html          # Empty <body>; the whole UI is created with JavaScript
├── styles.css          # Imports all files from styles/
├── styles/             # Variables, base layout, header, board and modal styles
├── src/
│   ├── main.js         # Entry point: builds the page and starts the game
│   ├── game.js         # Game state and rules
│   ├── components/     # Header, buttons, stats, board, cards, dialogs
│   ├── data/cards.js   # Card data
│   └── utils/          # DOM helper, shuffle, localStorage
└── assets/             # Card art, logo and icons (SVG)
```

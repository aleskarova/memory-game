import { createBoard, renderBoard } from './components/board.js';
import { createHeader } from './components/header.js';
import { createDeck } from './game.js';
import { createElement } from './utils/dom.js';

const header = createHeader({
  onNewGame: () => console.log('New game!'),
  onLeaderboard: () => console.log('Leaderboard!'),
});

const board = createBoard((uid) => console.log(`Card ${uid} clicked`));

const game = createElement('section', { className: 'game' }, [board]);

const main = createElement('main', { className: 'main' }, [game]);

const app = createElement('div', { className: 'app' }, [header, main]);

document.body.append(app);

renderBoard(createDeck());

import { createBoard } from './components/board.js';
import { createHeader } from './components/header.js';
import { createStats } from './components/stats.js';
import { handleCardClick, startNewGame } from './game.js';
import { createElement } from './utils/dom.js';

const header = createHeader({
  onNewGame: () => console.log('New game!'),
  onLeaderboard: () => console.log('Leaderboard!'),
});

const board = createBoard(handleCardClick);

const game = createElement('section', { className: 'game' }, [
  createStats(),
  board,
]);

const main = createElement('main', { className: 'main' }, [game]);

const app = createElement('div', { className: 'app' }, [header, main]);

document.body.append(app);

startNewGame();

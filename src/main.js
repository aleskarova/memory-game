import { createBoard } from './components/board.js';
import { createHeader } from './components/header.js';
import { createModal } from './components/modal.js';
import { createSidebar } from './components/sidebar.js';
import { handleCardClick, startNewGame } from './game.js';
import { el } from './utils/dom.js';

const modal = createModal();

const header = createHeader({
  onNewGame: startNewGame,
  onLeaderboard: () => console.log('Таблица лидеров'),
});

const board = createBoard(handleCardClick);

const main = el('main', { className: 'layout' }, [createSidebar(), board]);
const app = el('div', { className: 'app' }, [header, main]);

document.body.append(app);

startNewGame();

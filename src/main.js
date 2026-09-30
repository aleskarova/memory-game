import { createBoard } from './components/board.js';
import { createHeader } from './components/header.js';
import { createSidebar } from './components/sidebar.js';
import { startNewGame } from './game.js';
import { el } from './utils/dom.js';

const header = createHeader({
  onNewGame: () => console.log('Новая игра'),
  onLeaderboard: () => console.log('Таблица лидеров'),
});

const board = createBoard((uid) => console.log('Клик по карточке', uid));

const main = el('main', { className: 'layout' }, [createSidebar(), board]);
const app = el('div', { className: 'app' }, [header, main]);

document.body.append(app);

startNewGame();

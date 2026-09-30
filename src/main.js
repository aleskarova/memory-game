import { createHeader } from './components/header.js';
import { createSidebar } from './components/sidebar.js';
import { el } from './utils/dom.js';

const header = createHeader({
  onNewGame: () => console.log('Новая игра'),
  onLeaderboard: () => console.log('Таблица лидеров'),
});

const board = el('section', {
  className: 'board',
  attrs: { 'aria-label': 'Игровое поле' },
});

const main = el('main', { className: 'layout' }, [createSidebar(), board]);
const app = el('div', { className: 'app' }, [header, main]);

document.body.append(app);

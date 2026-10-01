import { createHeader } from './components/header.js';
import { createElement } from './utils/dom.js';

const header = createHeader({
  onNewGame: () => console.log('New game!'),
  onLeaderboard: () => console.log('Leaderboard!'),
});

const main = createElement('main', { className: 'main' });

const app = createElement('div', { className: 'app' }, [header, main]);

console.log(app);
document.body.append(app);

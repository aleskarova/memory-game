import { createElement } from './dom.js';
import { createHeader } from './header.js';

const header = createHeader({
  onNewGame: () => console.log('New game!'),
  onLeaderboard: () => console.log('Leaderboard!'),
});

const main = createElement('main', { className: 'main' });

const app = createElement('div', { className: 'app' }, [header, main]);

console.log(app);
document.body.append(app);

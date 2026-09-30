import { el } from '../utils/dom.js';

function createIntro() {
  const title = el('h1', { className: 'intro__title' }, [
    'Найди пары',
    el('br'),
    'в бездне',
  ]);

  return el('div', { className: 'intro' }, [
    el('p', { className: 'intro__eyebrow', text: 'Погружение · 4 000 м' }),
    title,
    el('p', {
      className: 'intro__text',
      text: 'Открывай по две карточки и запоминай, где прячутся обитатели глубин. Чем меньше ходов — тем выше ты в таблице.',
    }),
  ]);
}

export function createSidebar() {
  return el('aside', { className: 'sidebar' }, [createIntro()]);
}

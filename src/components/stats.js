import { CARDS } from '../data/cards.js';
import { createElement } from '../utils/dom.js';

let movesValue = null;
let pairsValue = null;
let dots = [];

function createStat(label, valueChildren) {
  return createElement('div', { className: 'stat' }, [
    createElement('span', { className: 'stat__label', text: label }),
    createElement('p', { className: 'stat__value' }, valueChildren),
  ]);
}

export function createStats() {
  movesValue = createElement('span', { text: '0' });
  pairsValue = createElement('span', { text: '0' });

  const movesStat = createStat('Moves', [movesValue]);
  const pairsStat = createStat('Pairs', [
    pairsValue,
    createElement('span', { text: ` / ${CARDS.length}` }),
  ]);

  dots = CARDS.map(() => {
    return createElement('span', { className: 'dot' });
  });

  const dotsContainer = createElement('div', { className: 'dots' }, dots);

  pairsStat.append(
    createElement(
      'div',
      { className: 'progress', attrs: { 'aria-hidden': true } },
      [dotsContainer],
    ),
  );

  return createElement(
    'div',
    { className: 'stats', attrs: { 'aria-live': 'polite' } },
    [movesStat, pairsStat],
  );
}

export function updateStats(moves, pairs) {
  movesValue.textContent = String(moves);
  pairsValue.textContent = String(pairs);

  dots.forEach((dot, index) => {
    dot.classList.toggle('is-filled', index < pairs);
  });
}

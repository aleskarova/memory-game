import { CREATURES } from '../data/creatures.js';
import { el } from '../utils/dom.js';

let movesValue = null;
let pairsValue = null;
let segments = [];

function createStat(label, valueChildren) {
  return el('div', { className: 'stat' }, [
    el('span', { className: 'stat__label', text: label }),
    el('p', { className: 'stat__value' }, valueChildren),
  ]);
}

export function createStats() {
  movesValue = el('span', { text: '0' });
  pairsValue = el('span', { text: '0' });
  segments = CREATURES.map(() =>
    el('span', { className: 'progress__segment' }),
  );

  const movesStat = createStat('Ходы', [movesValue]);
  const pairsStat = createStat('Пары', [
    pairsValue,
    el('span', { className: 'stat__total', text: ` / ${CREATURES.length}` }),
  ]);

  pairsStat.append(
    el(
      'div',
      { className: 'progress', attrs: { 'aria-hidden': 'true' } },
      segments,
    ),
  );

  return el('div', { className: 'stats', attrs: { 'aria-live': 'polite' } }, [
    movesStat,
    pairsStat,
  ]);
}

export function updateStats(moves, pairs) {
  movesValue.textContent = String(moves);
  pairsValue.textContent = String(pairs);

  segments.forEach((segment, index) => {
    segment.classList.toggle('is-filled', index < pairs);
  });
}

import { el } from '../utils/dom.js';
import { createCard } from './card.js';

let boardElement = null;

export function createBoard(onCardClick) {
  boardElement = el('section', {
    className: 'board',
    attrs: { 'aria-label': 'Игровое поле' },
  });

  boardElement.addEventListener('click', (event) => {
    const cardElement = event.target.closest('.card');
    if (cardElement) {
      onCardClick(cardElement.dataset.uid);
    }
  });

  return boardElement;
}

export function renderBoard(deck) {
  const cards = deck.map((card) => createCard(card));
  boardElement.replaceChildren(...cards);
}

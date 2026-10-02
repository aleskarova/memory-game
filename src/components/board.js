import { CARDS } from '../data/cards.js';
import { createDeck } from '../game.js';
import { createElement } from '../utils/dom.js';
import { createCard } from './card.js';

let boardElement = null;

export function createBoard(onCardClick) {
  boardElement = createElement('div', {
    className: 'board',
    attrs: { 'aria-label': 'Game board' },
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

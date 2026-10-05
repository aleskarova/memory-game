import { CARDS } from '../data/cards.js';
import { createDeck } from '../game.js';
import { createElement } from '../utils/dom.js';
import { CLOSED_CARD_LABEL, createCard } from './card.js';

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

function getCardElement(card) {
  return boardElement.querySelector(`[data-uid="${card.uid}"]`);
}

export function showCard(card) {
  const cardElement = getCardElement(card);
  cardElement.classList.add('is-open');
  cardElement.setAttribute('aria-label', card.name);
}

export function markMatched(cards) {
  cards.forEach((card) => {
    const cardElement = getCardElement(card);
    cardElement.classList.add('is-matched');
    cardElement.setAttribute('aria-label', `${card.name}, found pair`);
    cardElement.setAttribute('aria-disabled', true);
  });
}

export function hideCards(cards) {
  cards.forEach((card) => {
    const cardElement = getCardElement(card);
    console.log(cardElement);
    cardElement.classList.remove('is-open', 'is-mismatch');
    cardElement.setAttribute('aria-label', CLOSED_CARD_LABEL);
  });
}

export function markMismatch(cards) {
  cards.forEach((card) => {
    getCardElement(card).classList.add('is-mismatch');
  });
}

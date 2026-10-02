import { CARDS } from './data/cards.js';
import { createElement } from './utils/dom.js';
import { shuffle } from './utils/shuffle.js';

export function createDeck() {
  const cards = [...CARDS, ...CARDS].map((card, index) => ({
    uid: String(index),
    pairId: card.id,
    name: card.name,
    image: card.image,
  }));

  return shuffle(cards);
}

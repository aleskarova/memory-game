import { CREATURES } from './data/creatures.js';
import { shuffle } from './utils/shuffle.js';

export function createDeck() {
  const cards = [...CREATURES, ...CREATURES].map((creature, index) => ({
    uid: String(index),
    pairId: creature.id,
    name: creature.name,
    image: creature.image,
  }));

  return shuffle(cards);
}

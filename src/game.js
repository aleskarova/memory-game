import { renderBoard } from './components/board.js';
import { updateStats } from './components/stats.js';
import { CREATURES } from './data/creatures.js';
import { shuffle } from './utils/shuffle.js';

const state = {
  deck: [],
  openedCards: [],
  matchedIds: new Set(),
  moves: 0,
  isLocked: false,
  isFinished: false,
  mismatchTimer: null,
};

export function createDeck() {
  const cards = [...CREATURES, ...CREATURES].map((creature, index) => ({
    uid: String(index),
    pairId: creature.id,
    name: creature.name,
    image: creature.image,
  }));

  return shuffle(cards);
}

export function startNewGame() {
  state.deck = createDeck();
  state.openedCards = [];
  state.matchedIds = new Set();
  state.moves = 0;
  state.isLocked = false;
  state.isFinished = false;
  state.mismatchTimer = null;

  renderBoard(state.deck);
  updateStats(state.moves, state.matchedIds.size);
}

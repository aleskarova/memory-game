import { markMatched, renderBoard, showCard } from './components/board.js';
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

export function handleCardClick(uid) {
  if (state.isLocked || state.isFinished) {
    return;
  }

  const card = state.deck.find((item) => item.uid === uid);
  const isOpened = state.openedCards.includes(card);
  const isMatched = state.matchedIds.has(card.pairId);

  if (isOpened || isMatched) {
    return;
  }

  state.openedCards.push(card);
  showCard(card);

  if (state.openedCards.length < 2) {
    return;
  }

  state.moves += 1;
  const [first, second] = state.openedCards;

  if (first.pairId === second.pairId) {
    state.matchedIds.add(first.pairId);
    markMatched([first, second]);
  }

  state.openedCards = [];
  updateStats(state.moves, state.matchedIds.size);
}

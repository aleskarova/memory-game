import { createElement } from '../utils/dom.js';

export const CLOSED_CARD_LABEL = 'Closed card';

export function createCard(card) {
  const back = createElement('img', {
    className: 'card__back',
    attrs: { src: 'assets/cards/back.svg', alt: '' },
  });

  const face = createElement('img', {
    className: 'card__face',
    attrs: { src: card.image, alt: '' },
  });

  return createElement(
    'button',
    {
      className: 'card',
      attrs: {
        type: 'button',
        'data-uid': card.uid,
        'aria-label': CLOSED_CARD_LABEL,
      },
    },
    [back, face],
  );
}

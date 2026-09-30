import { el } from '../utils/dom.js';

export const CLOSED_CARD_LABEL = 'Закрытая карточка';

export function createCard(card) {
  const back = el('div', { className: 'card__back' });

  const front = el('div', { className: 'card__front' }, [
    el('img', {
      className: 'card__image',
      attrs: { src: card.image, alt: '', draggable: 'false' },
    }),
    el('span', { className: 'card__name', text: card.name }),
  ]);

  const inner = el('div', { className: 'card__inner' }, [back, front]);

  return el(
    'button',
    {
      className: 'card',
      attrs: {
        type: 'button',
        'data-uid': card.uid,
        'arial-label': CLOSED_CARD_LABEL,
      },
    },
    [inner],
  );
}

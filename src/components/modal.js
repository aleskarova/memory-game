import { createElement } from '../utils/dom.js';

export function openModal({ content, actions, className = '' }) {
  const modalActions = createElement(
    'div',
    { className: 'modal__actoins' },
    actions,
  );

  const modalBox = createElement('div', { className: 'modal__box' }, [
    ...content,
    modalActions,
  ]);

  const dialog = createElement('dialog', { className: `modal ${className}` }, [
    modalBox,
  ]);
}

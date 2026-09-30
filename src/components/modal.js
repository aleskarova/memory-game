import { el } from '../utils/dom.js';

export function createModal() {
  const content = el('div', { className: 'modal__content' });

  const closeButton = el(
    'button',
    {
      className: 'modal__close',
      attrs: { type: 'button', 'aria-label': 'Закрыть' },
    },
    [
      el('span', {
        className: 'icon icon--close',
        attrs: { 'aria-hidden': 'true' },
      }),
    ],
  );

  const dialog = el('dialog', { className: 'modal' }, [closeButton, content]);
  document.body.append(dialog);

  function open(children, label) {
    content.replaceChildren(...children);
    dialog.setAttribute('aria-lable', label);
    dialog.showModal();
  }

  function close() {
    dialog.close();
  }

  closeButton.addEventListener('click', close);

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      close();
    }
  });

  return { open, close };
}

import { createElement } from '../utils/dom.js';
import { createButton } from './button.js';

function createModal({ content, actions, className = '' }) {
  const modalActions = createElement(
    'div',
    { className: 'modal__actions' },
    actions,
  );

  const modalBox = createElement('div', { className: 'modal__box' }, [
    ...content,
    modalActions,
  ]);

  return createElement('dialog', { className: `modal ${className}` }, [
    modalBox,
  ]);
}

function openModal(modal) {
  document.body.append(modal);
  modal.showModal();
  modal.focus(); // showModal() focuses the first button, which shows its focus ring
  document.body.classList.add('no-scroll');
}

function closeModal(modal) {
  document.body.classList.remove('no-scroll');
  modal.remove();
}

function createWinModal(onRestart) {
  let dialog;

  const images = [
    createElement('img', { attrs: { src: 'assets/cards/comet.svg', alt: '' } }),
    createElement('img', { attrs: { src: 'assets/cards/nova.svg', alt: '' } }),
    createElement('img', {
      attrs: { src: 'assets/cards/rocket.svg', alt: '' },
    }),
  ];
  const imageContainer = createElement(
    'div',
    { className: 'win__crew' },
    images,
  );

  const title = createElement('h2', {
    className: 'modal__title',
    text: 'Mission complete!',
  });

  const text = createElement('p', {
    className: 'modal__text',
    text: 'You found all 8 pairs in',
  });

  const winResultText = [
    createElement('span', { className: 'win__moves' }),
    createElement('span', { text: ' moves' }),
  ];
  const winResult = createElement(
    'p',
    { className: 'win__result' },
    winResultText,
  );

  const restartButton = createButton({
    label: 'New game',
    image: 'assets/icons/restart.svg',
    variant: 'primary',
    onClick: () => {
      dialog.close();
      onRestart();
    },
  });
  const closeButton = createButton({
    label: 'Close',
    image: '',
    variant: 'secondary',
    onClick: () => dialog.close(),
  });

  dialog = createModal({
    content: [imageContainer, title, text, winResult],
    actions: [restartButton, closeButton],
    className: 'modal--win',
  });
  dialog.addEventListener('close', () => closeModal(dialog));

  return dialog;
}

export function openWinModal(onRestart) {
  const winModal = createWinModal(onRestart);
  openModal(winModal);
}

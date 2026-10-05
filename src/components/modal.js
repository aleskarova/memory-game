import { createElement } from '../utils/dom.js';
import { formatDate, loadResults } from '../utils/storage.js';
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

function createEmptyLeaderboard() {
  const image = createElement('img', {
    attrs: { src: 'assets/cards/back.svg', alt: '' },
  });
  const title = createElement('p', {
    className: 'leaderboard-empty__title',
    text: 'No results yet',
  });

  const text = createElement('p', {
    className: 'leaderboard-empty__text',
    text: 'Find all 8 pairs to get your first score on the board.',
  });

  return createElement('div', { className: 'leaderboard-empty' }, [
    image,
    title,
    text,
  ]);
}

function createLeaderboardTable(results) {
  const headRow = createElement('tr', {}, [
    createElement('th', { className: 'leaderboard__rank', text: 'Rank' }, []),
    createElement('th', { text: 'Moves' }, []),
    createElement('th', { className: 'leaderboard__date', text: 'Date' }, []),
  ]);

  const resultRows = results.map(({ moves, date }, index) => {
    return createElement('tr', {}, [
      createElement('td', { className: 'leaderboard__rank' }, [
        createElement('span', {
          className: 'rank-badge',
          text: `${index + 1}`,
        }),
      ]),
      createElement('td', {
        className: 'leaderboard__moves',
        text: `${moves}`,
      }),
      createElement('td', {
        className: 'leaderboard__date',
        text: formatDate(date),
      }),
    ]);
  });

  return createElement('table', { className: 'leaderboard' }, [
    createElement('thead', {}, [headRow]),
    createElement('tbody', {}, resultRows),
  ]);
}

function createLeaderboardModal(results = []) {
  let dialog;
  const title = createElement('h2', {
    className: 'modal__title',
    text: 'Leaderboard',
  });
  const subtitle = createElement('p', {
    className: 'modal__text',
    text:
      results.length > 0
        ? 'Top 10 games, fewest moves first.'
        : 'Your 10 best games will appear here.',
  });
  const heading = createElement('div', { className: 'modal__heading' }, [
    title,
    subtitle,
  ]);

  const tableOrEmpty =
    results.length > 0
      ? createLeaderboardTable(results)
      : createEmptyLeaderboard();

  const closeButton = createButton({
    label: 'Close',
    onClick: () => {
      dialog.close();
    },
  });

  dialog = createModal({
    content: [heading, tableOrEmpty],
    actions: [closeButton],
    className: 'modal--leaderboard',
  });
  dialog.addEventListener('close', () => closeModal(dialog));

  return dialog;
}

export function openLeaderboard() {
  const results = loadResults();
  const leaderboard = createLeaderboardModal(results);
  openModal(leaderboard);
}

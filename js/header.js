import { createButton } from './button.js';
import { createElement } from './dom.js';

function createLogo() {
  const image = createElement('img', {
    attrs: { src: 'assets/logo.svg', alt: '' },
  });
  const text = createElement('span', {
    text: 'Cosmeow',
  });

  return createElement(
    'div',
    {
      className: 'logo',
    },
    [image, text],
  );
}

export function createHeader({ onNewGame, onLeaderboard }) {
  const leaderboardButton = createButton({
    label: 'Leaderboard',
    image: 'assets/icons/trophy.svg',
    variant: 'secondary',
    onClick: onLeaderboard,
  });

  const newGameButton = createButton({
    label: 'New game',
    image: 'assets/icons/restart.svg',
    variant: 'primary',
    onClick: onNewGame,
  });

  const actions = createElement('div', { className: 'header__actions' }, [
    leaderboardButton,
    newGameButton,
  ]);

  return createElement('header', { className: 'header' }, [
    createLogo(),
    actions,
  ]);
}

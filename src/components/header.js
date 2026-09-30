import { el } from '../utils/dom.js';
import { createButton } from './button.js';

function createLogo() {
  const mark = el('img', {
    className: 'logo__mark',
    attrs: { src: 'assets/favicon.svg', alt: '', width: '44', height: '44' },
  });

  const text = el('div', { className: 'logo__text' }, [
    el('span', { className: 'logo__title', text: 'ABYSS' }),
    el('span', { className: 'logo__subtitle', text: 'memory of the deep' }),
  ]);

  return el('div', { className: 'logo' }, [mark, text]);
}

export function createHeader({ onNewGame, onLeaderboard }) {
  const leaderboardButton = createButton({
    label: 'Таблица лидеров',
    icon: 'trophy',
    variant: 'secondary',
    onClick: onLeaderboard,
  });

  const newGameButton = createButton({
    label: 'Новая игра',
    icon: 'restart',
    variant: 'primary',
    onClick: onNewGame,
  });

  const actions = el('div', { className: 'header__actions' }, [
    leaderboardButton,
    newGameButton,
  ]);

  return el('header', { className: 'header' }, [createLogo(), actions]);
}

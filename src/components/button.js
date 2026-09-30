import { el } from '../utils/dom.js';

export function createButton({ label, icon, variant = 'secondary', onClick }) {
  const children = [];

  if (icon) {
    children.push(
      el('span', {
        className: `icon icon--${icon}`,
        attrs: { 'aria-hidden': 'true' },
      }),
    );
  }

  children.push(el('span', { className: 'btn__label', text: label }));

  return el(
    'button',
    {
      className: `btn btn--${variant}`,
      attrs: { type: 'button' },
      on: onClick ? { click: onClick } : {},
    },
    children,
  );
}

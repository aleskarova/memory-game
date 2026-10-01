import { createElement } from './dom.js';

export function createButton({ label, image, variant = 'secondary', onClick }) {
  const children = [];

  if (image) {
    children.push(
      createElement('img', {
        className: 'button__image',
        attrs: { src: image, alt: '' },
      }),
    );
  }

  children.push(
    createElement('span', { className: 'button__text', text: label }),
  );

  return createElement(
    'button',
    {
      className: `button button--${variant}`,
      attrs: { 'aria-label': label },
      on: onClick ? { click: onClick } : {},
    },
    children,
  );
}

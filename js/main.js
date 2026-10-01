import { createElement } from './dom.js';

const h1 = createElement('h1', { text: 'HEADER' });
console.log(h1);

document.body.appendChild(h1);

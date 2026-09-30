import { CREATURES } from './data/creatures.js';
import { el } from './utils/dom.js';

const p = el('p', { text: 'test' });

document.body.appendChild(p);

console.log(CREATURES.length);

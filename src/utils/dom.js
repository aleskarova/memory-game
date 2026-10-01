export function createElement(tag, options = {}, children = []) {
  const element = document.createElement(tag);

  const { className, text, attrs = {}, on = {} } = options;

  if (className) {
    element.className = className;
  }

  if (text !== undefined) {
    element.textContent = text;
  }

  Object.entries(attrs).forEach(([name, value]) =>
    element.setAttribute(name, value),
  );

  Object.entries(on).forEach(([event, handler]) =>
    element.addEventListener(event, handler),
  );

  element.append(...children);
  return element;
}

export function el(tag, options = {}, children = []) {
  const node = document.createElement(tag);
  const { className, text, attrs = {}, on = {} } = options;

  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  Object.entries(attrs).forEach(([key, value]) =>
    node.setAttribute(key, value),
  );
  Object.entries(on).forEach(([event, handler]) =>
    node.addEventListener(event, handler),
  );
  children.forEach((child) => node.append(child));

  return node;
}

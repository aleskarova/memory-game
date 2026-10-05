const KEY = 'cosmeow-results';
const MAX_RESULTS = 10;

export function loadResults() {
  try {
    const storageResults = localStorage.getItem(KEY);
    return storageResults !== null ? JSON.parse(storageResults) : [];
  } catch {
    return [];
  }
}

export function saveResult(moves) {
  const results = loadResults();
  results.push({ moves, date: Date.now() });
  results.sort((a, b) => a.moves - b.moves || a.date - b.date);

  const topResults = results.slice(0, MAX_RESULTS);
  localStorage.setItem(KEY, JSON.stringify(topResults));
}

export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

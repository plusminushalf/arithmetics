const hasStorage = (function() {
  try {
    localStorage.setItem('mod', 'mod');
    localStorage.removeItem('mod');
    return true;
  } catch (exception) {
    return false;
  }
}());

export function setItem(key, value) {
  if (hasStorage) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export function removeItem(key) {
  if (hasStorage) {
    localStorage.removeItem(key);
  }
}

export function getItem(key) {
  if (hasStorage) {
    return JSON.parse(localStorage.getItem(key));
  }
}

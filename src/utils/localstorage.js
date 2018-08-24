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
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (exception) {
      // pass
    }
  }
}

export function removeItem(key) {
  if (hasStorage) {
    try {
      localStorage.removeItem(key);
    } catch (exception) {
      // pass
    }
  }
}

export function getItem(key) {
  if (hasStorage) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (exception) {
      return {};
    }
  }
}

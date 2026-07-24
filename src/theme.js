const STORAGE_KEY = "darkMode";
const DARK_CLASS = "dark";

export function initTheme() {
  const isDark = readThemePreference();
  applyTheme(isDark);
}

export function toggleTheme() {
  const isDark = document.documentElement.classList.contains(DARK_CLASS);
  applyTheme(!isDark);
}

function applyTheme(isDark) {
  document.documentElement.classList[isDark ? "add" : "remove"](DARK_CLASS);
  localStorage.setItem(STORAGE_KEY, isDark ? "1" : "0");
}

function readThemePreference() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored !== null) return stored === "1";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

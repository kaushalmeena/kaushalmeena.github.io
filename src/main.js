import "./style.css";
import { initTheme, toggleTheme } from "./utils";

initTheme();

// Initialize theme switcher with accessibility
const themeSwitch = document.querySelector("#theme-switch");
if (themeSwitch) {
  // Set initial aria-pressed state
  const isDark = document.documentElement.classList.contains("dark");
  themeSwitch.setAttribute("aria-pressed", isDark.toString());

  themeSwitch.addEventListener("click", () => {
    toggleTheme();
    // Update aria-pressed after theme change
    const isDarkAfter = document.documentElement.classList.contains("dark");
    themeSwitch.setAttribute("aria-pressed", isDarkAfter.toString());
  });
}

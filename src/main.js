import "./style.css";
import { initTheme, toggleTheme } from "./theme";

initTheme();

const themeSwitch = document.querySelector("#theme-switch");
if (themeSwitch) {
  themeSyncAria(themeSwitch);

  themeSwitch.addEventListener("click", () => {
    toggleTheme();
    themeSyncAria(themeSwitch);
  });
}

function themeSyncAria(button) {
  const isDark = document.documentElement.classList.contains("dark");
  button.setAttribute("aria-pressed", String(isDark));
}

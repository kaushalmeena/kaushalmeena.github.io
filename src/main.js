import "./style.css";

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
}

document.querySelector("#theme-switch").addEventListener("click", toggleTheme);

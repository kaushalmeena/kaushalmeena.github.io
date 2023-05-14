import "./style.css";
import { initTheme, toggleTheme } from "./utils";

initTheme();

document.querySelector("#theme-switch").addEventListener("click", toggleTheme);

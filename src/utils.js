import { DARK_MODE_CLASS, DARK_MODE_LOCAL_STORAGE_KEY } from "./constants";

export const fetchDarkMode = () => {
	let mode = false;
	const value = localStorage.getItem(DARK_MODE_LOCAL_STORAGE_KEY);
	if (value) {
		mode = value === "1";
	} else {
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		mode = media.matches;
	}
	return mode;
};

export const storeDarkMode = (mode) => {
	const value = mode ? "1" : "0";
	localStorage.setItem(DARK_MODE_LOCAL_STORAGE_KEY, value);
};

export function changeTheme(mode) {
	if (mode) {
		document.documentElement.classList.add(DARK_MODE_CLASS);
	} else {
		document.documentElement.classList.remove(DARK_MODE_CLASS);
	}
	storeDarkMode(mode);
}

export const initTheme = () => {
	const mode = fetchDarkMode();
	changeTheme(mode);
};

export const toggleTheme = () => {
	const mode = document.documentElement.classList.contains(DARK_MODE_CLASS);
	changeTheme(!mode);
};

// Function to get the stored theme or default to system preference
export const getStoredTheme = () => {
  // Retrieve the theme value from localStorage
  const storedTheme = localStorage.getItem("theme");

   // If a theme is found in localStorage, return true for "dark" or false for "light"
  if (storedTheme) return storedTheme === "dark";

  // If no theme is stored, check the system's color scheme preference and return true for dark mode
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

// Function to set the theme in localStorage
export const setStoredTheme = (isDarkMode) => {
  // Store the theme in localStorage, either "dark" or "light"
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
};

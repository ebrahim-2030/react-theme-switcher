import React, { useEffect, useState } from "react";
import { RiMoonClearFill } from "react-icons/ri";
import { getStoredTheme, setStoredTheme } from "../utils/theme-utils";
import { MdSunny } from "react-icons/md";

const ThemeSwitcher = () => {
  // Get the stored theme and initialize state
  const [isDarkMode, setIsDarkMode] = useState(getStoredTheme);

  useEffect(() => {
    // Apply the dark mode class to the document element based on state
    document.documentElement.classList.toggle("dark", isDarkMode);

    // Store the current theme in localStorage
    setStoredTheme(isDarkMode);
  }, [isDarkMode]); // Depend on `isDarkMode` to run effect when it changes

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)} // Toggle the theme
      className="text-2xl text-[#444] dark:text-white transition-all duration-500"
    >
      {/* Conditionally render icons based on dark mode state */}
      {isDarkMode ? <MdSunny /> : <RiMoonClearFill />}
    </button>
  );
};

export default ThemeSwitcher;

"use client";
import { useEffect, useState } from "react";
import "./ThemeSwitcher.css";
import PropTypes from "prop-types";
import Image from "next/image";
import moon from "../ThemeSwitcher/ThemeIcons/Moon.png";
import sun from "../ThemeSwitcher/ThemeIcons/Sun.png";

///workspaces/cs220-portfolio-danielsgroup/src/components/ThemeSwitcher/ThemeIcons/Moon.png
const ThemeSwitcher = ({ darkClassName }) => {
  // Check the user's preferred color scheme
  // const prefersDarkMode = useMemo(() => {
  /* complete me */
  // FIXME: look into the `prefers-color-scheme: dark` media querydark ${darkClassName}
  //  return window.matchMedia(`prefers-color-scheme: dark`).matches;
  //}, []);

  // State to hold the selected theme
  const [isDarkMode, setIsDarkMode] = useState();

  // Apply the selected theme (dark or light) when the component mounts
  useEffect(() => {
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    //applyTheme();
    setIsDarkMode(darkTheme);
  }, []);

  // Toggle between dark and light mode
  useEffect(
    () => {
      const applyTheme = () => {
        isDarkMode ? document.body.classList.add(darkClassName) : document.body.classList.remove(darkClassName);
      };
      applyTheme();
    },
    [isDarkMode],
    darkClassName
  );

  const toggleTheme = () => {
    //setIsDarkMode((before) => !before);
    setIsDarkMode(!isDarkMode);
  };

  // Apply the selected theme by adding/removing a class to the body element

  return (
    <div className="container">
      <button
        data-testid="themeSwitcherButton"
        className="btn shadow-lg shadow-indigo-500/40 w-12 h-10 "
        onClick={toggleTheme}
      >
        {isDarkMode ? (
          <Image
            className="rounded-full  pt-4  mb-5 object-cover border-3 border-white "
            src={moon}
            alt="Image Not Found"
            width={24}
            height={24}
          />
        ) : (
          <Image
            className="rounded-full pt-4  mb-5 object-cover border-3 border-white"
            src={sun}
            alt="Image Not Found"
            width={24}
            height={24}
          />
        )}
      </button>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  darkClassName: PropTypes.string,
};

ThemeSwitcher.defaultProps = {
  darkClassName: "dark",
};
export default ThemeSwitcher;

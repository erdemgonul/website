"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Moon from "public/svg/moon.svg";
import Sun from "public/svg/sun.svg";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isLight = theme === "light";

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <label className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle ${isLight ? "enabled" : "disabled"}`}>
        <div className="icons">
          <Sun className="sun" />
          <Moon className="moon" />
        </div>
        <input
          aria-label="theme-switcher"
          id="toggle"
          name="toggle"
          type="checkbox"
          defaultChecked={isLight}
          onClick={toggleTheme}
        />
      </div>
    </label>
  );
};

export default ThemeChanger;

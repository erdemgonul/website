import { useTheme } from "next-themes";

import Moon from "public/svg/moon.svg";
import Sun from "public/svg/sun.svg";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  const isLight = theme === "light";

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <label className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle ${isLight ? "enabled" : "disabled"}`}>
        <span className="hidden">
          {isLight ? "Enable Light Mode" : "Enable Dark Mode"}
        </span>
        <div className="icons">
          <Sun />
          <Moon />
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={isLight}
          onClick={toggleTheme}
        />
      </div>
    </label>
  );
};

export default ThemeChanger;

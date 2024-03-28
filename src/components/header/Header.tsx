import { useState } from "react";
import darkmodeIcon from "../../assets/icons/darkmode.svg";
import githubDark from "../../assets/icons/github-white.svg";
import github from "../../assets/icons/github.svg";
import lightmodeIcon from "../../assets/icons/lightmode.svg";
import { useTheme } from "../../context/ThemeContext";
import Menu from "../menu/Menu";

export default function Header() {
  const { isDarkmode, toggleDarkmode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <button onClick={toggleDarkmode}>
            <img
              src={isDarkmode ? lightmodeIcon : darkmodeIcon}
              alt="sun icon"
              className="darkmode"
              id="darkmode"
            />
          </button>

          <div className="header__right">
            <a
              href="https://github.com/ellensofia"
              className="header__github-link"
            >
              <img
                src={isDarkmode ? githubDark : github}
                alt="icon github"
                className="header__github-icon"
              />
            </a>

            <div className="language-button btn">
              <span className="sv-btn lang--active">SV</span>{" "}
              <span className="en-btn"> EN</span>
            </div>

            <div className="menu__btn btn" onClick={toggleMenu}>
              <div
                className={menuOpen ? "menu__burger--open" : "menu__burger"}
              ></div>
            </div>
          </div>
        </div>
      </header>
      <Menu menuOpen={menuOpen} toggleMenuOpen={toggleMenu} />
    </>
  );
}

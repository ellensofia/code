import { useState } from "react";
/* import githubDark from "../../assets/icons/github-white.svg";
import github from "../../assets/icons/github.svg"; */
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "../../context/TranslationContext";
import Menu from "../menu/Menu";

export default function Header() {
  const { isDarkmode, toggleDarkmode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleTranslation, activeLang } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <div className="header__left">
            <button onClick={toggleDarkmode}>
              <span>{isDarkmode ? "Dark" : "Light"}</span>
            </button>
            <a
              href="https://github.com/ellensofia"
              className="header__github-link"
            >
              Github
            </a>

            <div className="language-button btn">
              <span
                className={
                  activeLang === "sv" ? "sv-btn lang--active" : "sv-btn"
                }
                onClick={toggleTranslation}
              >
                SV
              </span>{" "}
              <span
                className={
                  activeLang === "en" ? "en-btn lang--active" : "en-btn"
                }
                onClick={toggleTranslation}
              >
                {" "}
                EN
              </span>
            </div>
          </div>

          <div className="header__right">
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

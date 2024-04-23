import { useRef, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "../../context/TranslationContext";
import Menu from "../menu/Menu";

export default function Header() {
  const { isDarkmode, toggleDarkmode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const { changeActiveLang, activeLang } = useTranslation();
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleKeyEnterPress =
    (funcType: string) => (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (funcType === "menu") {
          toggleMenu();
        } else if (funcType === "darkmode") {
          toggleDarkmode();
        }
      }
    };

  const handleKeyEnterPressTranslation =
    (lang: "sv" | "en") => (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        changeActiveLang(lang);
      }
    };

  return (
    <>
      <header className="header" tabIndex={0}>
        <div className="header__inner">
          <div className="header__left">
            <button
              onClick={toggleDarkmode}
              ref={menuBtnRef}
              onKeyDown={handleKeyEnterPress("darkmode")}
              aria-label="Toggle darkmode button"
            >
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
                tabIndex={0}
                role="button"
                aria-label="Button to change site language to swedish"
                onClick={() => changeActiveLang("sv")}
                onKeyDown={handleKeyEnterPressTranslation("sv")}
              >
                SV
              </span>
              {"  "}
              <span
                className={
                  activeLang === "en" ? "en-btn lang--active" : "en-btn"
                }
                tabIndex={0}
                role="button"
                aria-label="Button to change site language to english"
                onClick={() => changeActiveLang("en")}
                onKeyDown={handleKeyEnterPressTranslation("en")}
              >
                {" "}
                EN
              </span>
            </div>
          </div>

          <div className="header__right">
            <div
              className="menu__btn btn"
              onClick={toggleMenu}
              onKeyDown={handleKeyEnterPress("menu")}
              tabIndex={0}
              role="button"
              aria-label="Menu button"
            >
              <div
                className={menuOpen ? "menu__burger--open" : "menu__burger"}
              />
            </div>
          </div>
        </div>
      </header>
      <Menu
        menuOpen={menuOpen}
        toggleMenuOpen={toggleMenu}
        menuBtnRef={menuBtnRef}
      />
    </>
  );
}

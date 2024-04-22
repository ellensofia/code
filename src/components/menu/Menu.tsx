import { useEffect, useRef } from "react";
import { useTranslation } from "../../context/TranslationContext";

interface Props {
  menuOpen: boolean;
  toggleMenuOpen: () => void;
  menuBtnRef: React.RefObject<HTMLButtonElement | HTMLDivElement>;
}

export default function Menu({ menuOpen, toggleMenuOpen, menuBtnRef }: Props) {
  const { activeLang } = useTranslation();
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const links = menuRef.current?.querySelectorAll<HTMLAnchorElement>("a");
      const menuBtn = menuBtnRef.current;

      if (menuOpen && e.key === "Tab" && links && links.length > 0) {
        const lastLink = links[links.length - 1];

        if (document.activeElement === lastLink) {
          e.preventDefault();
          if (menuBtn) {
            menuBtn.focus();
          }
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <nav className={menuOpen ? "menu--open" : "menu"} ref={menuRef}>
      <ul className="menu__list">
        <li className="menu__item">
          <a
            href="#about"
            className="menu__link link1"
            onClick={toggleMenuOpen}
            tabIndex={0}
          >
            {activeLang === "sv" ? translation.sv.about : translation.en.about}
          </a>
        </li>
        <li className="menu__item">
          <a
            href="#projects"
            className="menu__link link2"
            onClick={toggleMenuOpen}
            tabIndex={0}
          >
            {activeLang === "sv"
              ? translation.sv.projects
              : translation.en.projects}
          </a>
        </li>
        <li className="menu__item">
          <a
            href="#contact"
            className="menu__link link3"
            onClick={toggleMenuOpen}
            tabIndex={0}
          >
            {activeLang === "sv"
              ? translation.sv.contact
              : translation.en.contact}
          </a>
        </li>
      </ul>
    </nav>
  );
}

const translation = {
  sv: {
    about: "Om mig",
    projects: "Mina projekt",
    contact: "Kontakt",
  },
  en: {
    about: "About",
    projects: "My project",
    contact: "Contact",
  },
};

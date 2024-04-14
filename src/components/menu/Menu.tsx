import { useTranslation } from "../../context/TranslationContext";

interface Props {
  menuOpen: boolean;
  toggleMenuOpen: () => void;
}

export default function Menu({ menuOpen, toggleMenuOpen }: Props) {
  const { activeLang } = useTranslation();
  return (
    <nav className={menuOpen ? "menu--open" : "menu"}>
      <ul className="menu__list">
        <li className="menu__item">
          <a
            href="#about"
            className="menu__link link1"
            onClick={toggleMenuOpen}
          >
            {activeLang === "sv" ? translation.sv.about : translation.en.about}
          </a>
        </li>
        <li className="menu__item">
          <a
            href="#projects"
            className="menu__link link2"
            onClick={toggleMenuOpen}
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

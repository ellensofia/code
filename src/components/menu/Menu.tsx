interface Props {
  menuOpen: boolean;
  toggleMenuOpen: () => void;
}

export default function Menu({ menuOpen, toggleMenuOpen }: Props) {
  return (
    <nav className={menuOpen ? "menu--open" : "menu"}>
      <ul className="menu__list">
        <li className="menu__item">
          <a
            href="#about"
            className="menu__link link1"
            onClick={toggleMenuOpen}
          >
            Om mig
          </a>
        </li>
        <li className="menu__item">
          <a
            href="#projects"
            className="menu__link link2"
            onClick={toggleMenuOpen}
          >
            Mina projekt
          </a>
        </li>
        <li className="menu__item">
          <a
            href="#contact"
            className="menu__link link3"
            onClick={toggleMenuOpen}
          >
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}

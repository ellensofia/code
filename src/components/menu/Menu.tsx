export default function Menu() {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <a href="#about" className="menu__link link1">
            Om mig
          </a>
        </li>
        <li className="menu__item">
          <a href="#projects" className="menu__link link2">
            Mina projekt
          </a>
        </li>
        <li className="menu__item">
          <a href="#contact" className="menu__link link3">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <h4 className="hero__title hidden">Hej Jag heter</h4>
          <h1 className="hero__title hidden">Ellen Dahlgren</h1>
          <h2 className="hero__subtitle hidden">Front end developer student</h2>
          <a href="#contact" className="hero__btn btn hidden">
            Kontakta mig
          </a>
        </div>
        <a href="#about" className="hero__link-down hidden">
          <img
            src="assets/icons/chevron-darkmode.svg"
            alt="arrow pointing down"
            className="hero__icon-down"
          />
        </a>
      </div>
    </section>
  );
}

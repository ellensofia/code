import arrow from "../../../../src/assets/icons/arrow-right-white.svg";
import arrowLight from "../../../../src/assets/icons/arrow-right.svg";
import { useTheme } from "../../../context/ThemeContext";
import { useTranslation } from "../../../context/TranslationContext";

export default function Contact() {
  const { activeLang } = useTranslation();
  const { isDarkmode } = useTheme();

  return (
    <>
      <div className="anchor" id="contact"></div>

      <section className="contact">
        <div className="contact__inner">
          <h3 className="contact__title hidden">
            {activeLang === "sv"
              ? translations.sv.contact
              : translations.en.contact}
          </h3>
          <div className="contact__icons">
            <a
              href="https://www.linkedin.com/in/ellen-dahlgren/"
              className="contact__link hidden"
            >
              <img className="arrow" src={isDarkmode ? arrow : arrowLight} />
              Linked in
            </a>
            <a
              href="mailto:ellendahlgren@medieinstitutet.se"
              className="contact__link hidden"
            >
              <img className="arrow" src={isDarkmode ? arrow : arrowLight} />
              ellensofiadahlgren@outlook.com
            </a>
            <a href="" className="contact__link hidden">
              <img className="arrow" src={isDarkmode ? arrow : arrowLight} />
              0700223329
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

const translations = {
  sv: {
    contact: "Kontakta mig",
  },
  en: {
    contact: "Contact",
  },
};

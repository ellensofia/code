import { useTranslation } from "../../../context/TranslationContext";

export default function Contact() {
  const { activeLang } = useTranslation();
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
              <span>Linked in</span>
            </a>
            <a
              href="mailto:ellendahlgren@medieinstitutet.se"
              className="contact__link hidden"
            >
              <span>ellensofiadahlgren@outlook.com</span>
            </a>
            <a href="" className="contact__link hidden">
              <span>0700223329</span>
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

import { useTranslation } from "../../../context/TranslationContext";
import MyScene from "./MyScene";

export default function Hero() {
  const { activeLang } = useTranslation();

  return (
    <section className="hero">
      <MyScene />
      <div className="hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title hidden">
            {activeLang === "sv"
              ? translations.sv.frontend
              : translations.en.frontend}
          </h1>
          <h4>
            {" "}
            {activeLang === "sv"
              ? translations.sv.subtitle
              : translations.en.subtitle}
          </h4>
          {/*     <h5 className="hero__title hidden">
            {activeLang === "sv"
            ? translations.sv.subtitle
            : translations.en.subtitle}
          </h5> */}
          {/*       <a href="#projects" className="hidden">
            {activeLang === "sv" ? translations.sv.work : translations.en.work}
          </a> */}
        </div>
      </div>
    </section>
  );
}

const translations = {
  sv: {
    frontend: "Frontend utvecklare",
    subtitle: "Hej, jag heter Ellen Dahlgren",

    /*     work: "Titta på mina projekt",
     */
  },
  en: {
    frontend: "Front end developer",
    subtitle: "Hello, I'm Ellen Dahlgren",

    /*     work: "See some of my work",
     */
  },
};

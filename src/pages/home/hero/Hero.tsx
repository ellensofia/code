import { useEffect, useState } from "react";
import arrow from "../../../../src/assets/icons/arrow-right-white.svg";
import arrowLight from "../../../../src/assets/icons/arrow-right.svg";
import { useTheme } from "../../../context/ThemeContext";
import { useTranslation } from "../../../context/TranslationContext";
import MyScene from "./MyScene";

export default function Hero() {
  const { activeLang } = useTranslation();
  const { isDarkmode } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <h4 className="hidden">
            {activeLang === "sv"
              ? translations.sv.subtitle
              : translations.en.subtitle}
          </h4>
        </div>
        <div className="hero__lower hidden">
          {isMobile ? (
            <a href="#about">
              <img
                className="arrow__down"
                src={isDarkmode ? arrow : arrowLight}
              />
            </a>
          ) : (
            <span>
              <img className="arrow" src={isDarkmode ? arrow : arrowLight} />

              {activeLang === "sv"
                ? translations.sv.interact
                : translations.en.interact}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

const translations = {
  sv: {
    frontend: "Frontend utvecklare",
    subtitle: "Hej, jag heter Ellen Dahlgren",
    about: "Om mig",
    interact: "Dra muspekaren över kloten för att rotera",
    contact: "Kontakt",
  },
  en: {
    frontend: "Front end developer",
    subtitle: "Hello, I'm Ellen Dahlgren",
    about: "About",
    interact: "Drag the mouse pointer over the globe to rotate",
    contact: "Contact",
  },
};

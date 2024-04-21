/* import Hover, { ICursorPosition } from "../../../Hover";
 */ import image from "../../../assets/images/portrait.jpeg";
import { useTranslation } from "../../../context/TranslationContext";
export default function About() {
  const { activeLang } = useTranslation();

  return (
    <>
      <div className="anchor" id="about" style={{ position: "relative" }} />

      <section className="about">
        <div className="about__inner">
          <img
            src={image}
            alt="portrait of Ellen Dahlgren"
            className="about__img"
          />
          <div className="about__copy">
            <h2 className="about__title hidden">
              {activeLang === "sv"
                ? translations.sv.about
                : translations.en.about}
            </h2>
            <p className="about__text hidden">
              Snart utexad frontend student med passion för UI-design. I maj
              blir jag klar med min utbildning front end developer på
              medieinstitutet. Sedan innan har jag en ettårig utbildning i
              webbdesign och webbutveckling på Karlskoga folkhögskola. Jag har
              alltid varit kreativt lagd och har tidigare sysslat mycket med
              konst och haft några utställningar. Sedan jag funnit webbdesign
              har jag hittat ett nytt kreativt utlopp som jag tycker är otroligt
              givande. Programmering var inte ett självklart val för mig. Jag
              har tidigare arbetat inom vården, på äldreboende och som personlig
              assistent.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

const translations = {
  sv: { about: "Om mig", story: "hejhej" },
  en: { about: "About me", story: "hellohello" },
};

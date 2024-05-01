import image from "../../../assets/images/portrait.jpeg";
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
            className="about__img hidden"
          />
          <div className="about__copy">
            <h2 className="about__title hidden">
              {activeLang === "sv"
                ? translations.sv.about
                : translations.en.about}
            </h2>
            <p className="about__text hidden">
              {activeLang === "sv"
                ? translations.sv.story
                : translations.en.story}
            </p>
            <p className="about__text hidden">
              {activeLang === "sv"
                ? translations.sv.story2
                : translations.en.story2}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

const translations = {
  sv: {
    about: "Om mig",
    story:
      "Snart utexad frontend student med passion för UI-design. I maj blir jag klar med utbildningen front end developer på Medieinstitutet. Som en del av utbildningen kommer jag att ha genomfört en sexmånaders praktik på Handelsbanken där jag främst har jobbat med React och TypeScript.  ",
    story2:
      "Tidigare har jag arbetat inom vården, på äldreboenden och som personlig assistent men ville hitta ett yrke som utmanar min kreativa sida. Som person är jag nyfiken och driven. Jag trivs bäst när jag får arbeta i team där man kan kombinera olika perspektiv för att få fram det bästa resultatet.",
  },
  en: {
    about: "About me",
    story:
      "I'm a soon-to-be frontend graduate with a passion for UI design. In May I will finish my front end developer education at the Media Institute. As a part of my education I will have completed a six-month internship at Handelsbanken where I maily worked with React and TypeScript. ",
    story2:
      "I used to work in healthcare, at nursing homes and as a personal assistant but wanted to find a career that challenged my creative side. As a person I am very curious and driven. I enjoy working in teams and combining different perspectives to create the best end-product.",
  },
};

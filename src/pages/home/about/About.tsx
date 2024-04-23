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
      "Snart utexad frontend student med passion för UI-design. I maj blir jag klar med min utbildning front end developer på Medieinstitutet. Som en del av min utbildning kommer jag att ha genomfört en sexmånaders praktik på Handelsbanken där jag främst har jobbat med React och TypeScript. Sedan innan har jag en ettårig utbildning i webbdesign och webbutveckling på Karlskoga folkhögskola. Jag har alltid varit kreativt lagd och har tidigare sysslat mycket med konst och haft några utställningar. Sedan jag funnit webbdesign har jag hittat ett nytt kreativt utlopp som jag tycker är otroligt givande. ",
    story2:
      "Tidigare arbetade jag inom vården, på äldreboende och som personlig assistent men ville hitta ett yrke som utmanar min kreativa sida. Som person är jag väldigt nyfiken och har en stark vilja att lösa problem. Jag trivs bäst när jag får arbeta i team där man kan kombinera olika perspektiv för att skapa användarvänliga och intuitiva webbsidor.",
  },
  en: {
    about: "About me",
    story:
      "I'm a soon-to-be frontend graduate with a passion for UI design. In May I will finish my front end developer education at the Media Institute. As a part of my education I will have completed a six-month internship at Handelsbanken where I maily worked with React and TypeScript. Prior to this I completed a one-year program in web design and web development at Karlskoga Folkhögskola. I have always been creative and have previously created art and had a few exhibitions. Since finding web design I have found a new creative outlet which I find incredibly rewarding. ",
    story2:
      "I used to work in healthcare, nursing homes and as a personal assistant but wanted to find a career that challenged my creative side. As a person I am very curious and have a strong desire to solve problems. I enjoy working in teams and combining different perspectives to create user-friendly and intuitive web pages.",
  },
};

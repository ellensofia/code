import { useTranslation } from "../../../context/TranslationContext";

export default function Tech() {
  const { activeLang } = useTranslation();

  return (
    <div className="programming">
      <div className="programming__inner">
        <h3 className="hidden programming__title">
          {activeLang === "sv" ? translations.sv.title : translations.en.title}
        </h3>
        <div className="hidden programming__columns">
          <div className="hidden programming__column-1 programming__column">
            <p className="hidden programming__item">HTML</p>
            <p className="hidden programming__item">CSS</p>
            <p className="hidden programming__item">Sass/SCSS</p>
            <p className="hidden programming__item">Emotion</p>
          </div>
          <div className="hidden programming__column-2 programming__column">
            <p className="hidden programming__item">Javascript</p>
            <p className="hidden programming__item">Typescript</p>
            <p className="hidden programming__item">React</p>
            <p className="hidden programming__item">Wordpress</p>
          </div>
          <div className="hidden programming__column-2 programming__column">
            <p className="hidden programming__item">Node.js</p>
            <p className="hidden programming__item">Next.js</p>
            <p className="hidden programming__item">Mongo DB</p>
            <p className="hidden programming__item">Mongoose</p>
          </div>
          <div className="hidden programming__column-3 programming__column">
            <p className="hidden programming__item">Illustrator</p>
            <p className="hidden programming__item">XD</p>
            <p className="hidden programming__item">Figma</p>
            <p className="hidden programming__item">Photoshop</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const translations = {
  sv: {
    title: "Programmering & designverktyg",
  },
  en: {
    title: "Programing & design tools",
  },
};

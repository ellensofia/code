import { useTranslation } from "../../../context/TranslationContext";

export default function Tech() {
  const { activeLang } = useTranslation();
  const tech = [
    { value: "HTML", class: "underline" },
    { value: "CSS", class: "underline" },
    { value: "Typescript", class: "underline" },
    { value: "React", class: "bold" },
    { value: "Sanity", class: "" },
    { value: "Sass/Scss", class: "" },
    { value: "Emotion", class: "" },
    { value: "Wordpress", class: "" },
    { value: "Node.js", class: "" },
    { value: "Next.js", class: "" },
    { value: "Javascript", class: "underline" },
    { value: "Mongo DB", class: "" },
    { value: "Mongoose", class: "" },
    { value: "XD", class: "bold" },
    { value: "Illustrator", class: "" },
    { value: "Figma", class: "bold" },
    { value: "Git", class: "bold" },
    { value: "Photoshop", class: "" },
  ];
  return (
    <div className="programming">
      <div className="programming__inner">
        <h2 className="hidden programming__title">
          {activeLang === "sv" ? translations.sv.title : translations.en.title}
        </h2>
        <div className="hidden programming__columns">
          <div className="hidden programming__column-1 programming__column">
            {tech &&
              tech.map((item, i) => (
                <div key={i}>
                  <p
                    className={
                      item.class.length > 0
                        ? "hidden programming__item " + item.class
                        : "hidden programming__item"
                    }
                  >
                    {item.value}
                  </p>
                </div>
              ))}
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

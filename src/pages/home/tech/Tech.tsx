import { useTranslation } from "../../../context/TranslationContext";

export default function Tech() {
  const { activeLang } = useTranslation();
  const tech = [
    { value: "HTML", class: "" },
    { value: "CSS", class: "" },
    { value: "Typescript", class: "" },
    { value: "React", class: "" },
    { value: "Sanity", class: "" },
    { value: "Sass/Scss", class: "" },
    { value: "Emotion", class: "" },
    { value: "Wordpress", class: "" },
    { value: "Node.js", class: "" },
    { value: "Next.js", class: "" },
    { value: "Javascript", class: "" },
    { value: "Mongo DB", class: "" },
    { value: "Mongoose", class: "" },
    { value: "XD", class: "" },
    { value: "Illustrator", class: "" },
    { value: "Figma", class: "" },
    { value: "Git", class: "" },
  ];
  return (
    <div className="programming">
      <div className="programming__inner">
        <h2 className="hidden programming__title">
          {activeLang === "sv" ? translations.sv.title : translations.en.title}
        </h2>
        <h2 className="hidden programming__title">
          {activeLang === "sv"
            ? translations.sv.design
            : translations.en.design}
        </h2>

        <div className="hidden programming__column">
          {tech &&
            tech.map((item, i) => (
              <p
                key={i}
                className={
                  item.class.length > 0
                    ? "hidden programming__item " + item.class
                    : "hidden programming__item"
                }
              >
                {item.value}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}

const translations = {
  sv: {
    title: "Programmering &",
    design: "designverktyg",
  },
  en: {
    title: "Programing &",
    design: "design tools",
  },
};

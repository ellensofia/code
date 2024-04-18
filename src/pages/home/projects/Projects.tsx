import pixelPerfectIpad from "../../../assets/images/pixelPerfect-ipad.png";
import pixelPerfectMobile from "../../../assets/images/pixelPerfect-mobile.png";
import pixelPerfect from "../../../assets/images/pixelPerfect.png";
import takeNBakeIpad from "../../../assets/images/take-n-bake-ipad.png";
import takeNBakePhone from "../../../assets/images/take-n-bake-phone.png";
import takeNBake from "../../../assets/images/take-n-bake.png";
import foodFinderipad from "./../../../assets/images/food-finder-ipad.png";
import foodFinderphone from "./../../../assets/images/food-finder-phone.png";
import foodFinder from "./../../../assets/images/food-finder.png";
import oasisIpad from "./../../../assets/images/oasis-ipad.png";
import oasisPhone from "./../../../assets/images/oasis-phone.png";
import oasis from "./../../../assets/images/oasis.png";
import pieceBypieceipad from "./../../../assets/images/piece-by-piece-ipad.png";
import pieceBypiecephone from "./../../../assets/images/piece-by-piece-phone.png";
import pieceBypiece from "./../../../assets/images/piece-by-piece.png";

import { useState } from "react";
import githubIcon from "../../../assets/icons/github.svg";
import { useTranslation } from "../../../context/TranslationContext";

export default function Projects() {
  const [isProjectOpen, setIsProjectOpen] = useState(true);
  const { activeLang } = useTranslation();

  const toggleOpenProject = () => {
    setIsProjectOpen(!isProjectOpen);
  };

  return (
    <>
      <div className="anchor" id="projects"></div>
      <section className="projects">
        <div className="projects__inner">
          <h3 className="projects__title hidden">
            {activeLang === "sv"
              ? translations.sv.projects
              : translations.en.projects}
          </h3>
          <h6 className="projects__subtitle hidden">
            {activeLang === "sv"
              ? translations.sv.openLink
              : translations.en.openLink}
          </h6>
          <div className="projects__container" onClick={toggleOpenProject}>
            <div className="project">
              <picture>
                <source
                  media="(max-width: 560px)"
                  srcSet={pixelPerfectMobile}
                />
                <source media="(max-width: 870px)" srcSet={pixelPerfectIpad} />
                <source media="(min-width: 870px)" srcSet={pixelPerfect} />
                <img src="" alt="" className="project__img" />
              </picture>
              <div
                className={
                  isProjectOpen ? `project__copy` : `project__copy visible`
                }
              >
                <div>
                  <div>
                    <h5 className="project__title project__title2">
                      Pixel perfect innovations
                    </h5>
                    <p className="project__text project__text2">
                      {activeLang === "sv"
                        ? translations.sv.project4
                        : translations.en.project4}
                    </p>
                  </div>
                </div>
                <div className="project__lower">
                  <span className="project__tools">
                    HTML | CSS | Javascript
                  </span>
                  <div className="flex">
                    <a href="https://pixelperfectinnovations.netlify.app/">
                      <span className="project__link2">Demo</span>
                    </a>
                    <a href="https://github.com/ellensofia/portfolio-web-agency">
                      <img src={githubIcon} alt="" className="github-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <picture>
                <source media="(max-width: 560px)" srcSet={oasisPhone} />
                <source media="(max-width: 870px)" srcSet={oasisIpad} />
                <source media="(min-width: 870px)" srcSet={oasis} />
                <img src="" alt="" className="project__img" />
              </picture>
              <div
                className={
                  isProjectOpen ? `project__copy` : `project__copy visible`
                }
              >
                <div>
                  <h5 className="project__title project__title7">Oasis</h5>
                  <p className="project__text project__text7">
                    {activeLang === "sv"
                      ? translations.sv.project3
                      : translations.en.project3}
                  </p>
                </div>
                <div className="project__lower">
                  <span className="project__tools">Typescript | React</span>
                  <div className="flex">
                    <a href="https://papaya-lamington-fca010.netlify.app/">
                      <span className="project__link1">Demo</span>
                    </a>
                    <a href="https://github.com/ellensofia/food-finder">
                      <img src={githubIcon} alt="" className="github-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="project">
              <picture>
                <source media="(max-width: 560px)" srcSet={pieceBypiecephone} />
                <source media="(max-width: 870px)" srcSet={pieceBypieceipad} />
                <source media="(min-width: 870px)" srcSet={pieceBypiece} />
                <img src="" alt="" className="project__img" />
              </picture>
              <div
                className={
                  isProjectOpen ? `project__copy` : `project__copy visible`
                }
              >
                <div>
                  <h5 className="project__title project__title8">
                    Piece by piece
                  </h5>
                  <p className="project__text project__text8">
                    {activeLang === "sv"
                      ? translations.sv.project1
                      : translations.en.project1}
                  </p>
                </div>
                <div className="project__lower">
                  <span className="project__tools">
                    Typescript | React | HTML | MUI
                  </span>
                  <div className="flex">
                    <a href="https://main--piece-by-piece.netlify.app/">
                      <span className="project__link">Demo</span>
                    </a>
                    <a href="https://github.com/ellensofia/webshop-piece-by-piece">
                      <img src={githubIcon} alt="" className="github-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <picture>
                <source media="(max-width: 560px)" srcSet={foodFinderphone} />
                <source media="(max-width: 870px)" srcSet={foodFinderipad} />
                <source media="(min-width: 870px)" srcSet={foodFinder} />
                <img src="" alt="" className="project__img" />
              </picture>
              <div
                className={
                  isProjectOpen ? `project__copy` : `project__copy visible`
                }
              >
                <div>
                  <h5 className="project__title project__title7">
                    Food finder
                  </h5>
                  <p className="project__text project__text7">
                    Detta är en React-app som skapats i grupp. Appen heter
                    Food-finder och hjälper användaren att hitta recept baserat
                    på vilka ingredienser de har hemma.
                  </p>
                </div>
                <div className="project__lower">
                  <span className="project__tools">
                    Typescript | React | HTML
                  </span>
                  <div className="flex">
                    <a href="https://papaya-lamington-fca010.netlify.app/">
                      <span className="project__link1">Demo</span>
                    </a>
                    <a href="https://github.com/ellensofia/food-finder">
                      <img src={githubIcon} alt="" className="github-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <picture>
                <source media="(max-width: 560px)" srcSet={takeNBakePhone} />
                <source media="(max-width: 870px)" srcSet={takeNBakeIpad} />
                <source media="(min-width: 870px)" srcSet={takeNBake} />
                <img src="" alt="" className="project__img" />
              </picture>
              <div
                className={
                  isProjectOpen ? `project__copy` : `project__copy visible`
                }
              >
                <div>
                  <h5 className="project__title project__title6">
                    Take 'n bake
                  </h5>
                  <p className="project__text project__text6">
                    Detta är ett spel som är skapat med p5 och Javascript och
                    koden är strukturerad på ett objektorienterat sätt. Vi
                    arbetade i grupp och tog fram design och idé tillsammans.
                    Spelet kan tyvärr bara visas i fullscreen på desktop.
                  </p>
                </div>
                <div className="project__lower">
                  <span className="project__tools">
                    Javascript | P5 | HTML | CSS
                  </span>
                  <a href="https://github.com/ellensofia/take-n-bake-game">
                    <span className="project__link1">Source code</span>
                    <img src={githubIcon} alt="" className="github-icon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="project">
              <picture>
                <source media="(max-width: 560px)" srcSet={oasisPhone} />
                <source media="(max-width: 870px)" srcSet={oasisIpad} />
                <source media="(min-width: 870px)" srcSet={oasis} />
                <img src="" alt="" className="project__img" />
              </picture>
              <div
                className={
                  isProjectOpen ? `project__copy` : `project__copy visible`
                }
              >
                <div>
                  <div>
                    <h5 className="project__title project__title4">Dine pal</h5>
                    <p className="project__text project__text4">
                      {activeLang === "sv"
                        ? translations.sv.project4
                        : translations.en.project4}
                    </p>
                  </div>
                </div>
                <div className="project__lower">
                  <span className="project__tools">
                    React | TypeScript | Scss | next.js | mongoDb | prisma
                  </span>
                  <a href="https://oasis-webshop.netlify.app/">
                    <span className="project__link4">Demo</span>
                  </a>
                  <a href={"https://github.com/ellensofia/e-commerce"}>
                    <img src={githubIcon} alt="" className="github-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const translations = {
  sv: {
    projects: "Projekt",
    openLink: "Klicka på projekten för att se mer",
    project1:
      "Detta är en webshop som jag byggt tillsammans med två klasskamrater. Vi använde oss av React, Typescript och MUI för att skapa gränssnitt för användare och admin.",
    project2:
      "Oasis E-Shop är en skoluppgift. Uppgiften var att skapa ett fiktivt märke med en grafisk profil och utveckla en e-handel med minst två produkter. Projektet är byggt med React, Typescript och Styled Components.",
    project2Title: "Oasis hudvård",
    project3:
      "Detta är en React-app som skapats i grupp. Appen heter Food-finder och hjälper användaren att hitta recept baserat på vilka ingredienser de har hemma.",
    project4:
      "Sidan är gjort för en fiktiv webbyrå. Detta var ett gruppprojekt där vi arbetade med scrum. Projektet är gjort i React, TypeScript och Styled Components.",
    project5: "",
    story: "hejhej",
  },
  en: {
    projects: "Projects",
    openLink: "Click on the projects to see more",
    project1:
      "This is a webshop that I built with two classmates. Vi used React, Typescript and MUI to create an interface for both user and admin.",
    project2:
      "Oasis E-Shop is a school project. The assignment required the creation of a fictitious brand with a graphic profile and the development of an online store to sell a minimum of two products or services. The project was built using React, TypeScript, and Styled Components.",
    project2Title: "Oasis skincare",
    project3: "",
    project4: "",
    project5: "",
    story: "hellohello",
  },
};

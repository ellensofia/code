import appleIpad from "../../../assets/images/apple-ipad.png";
import applePhone from "../../../assets/images/apple-phone.png";
import apple from "../../../assets/images/apple.png";
import calendarIpad from "../../../assets/images/calendar-ipad.png";
import calendarMobile from "../../../assets/images/calendar-mobile.png";
import calendar from "../../../assets/images/calendar.png";
import korpenIpad from "../../../assets/images/korpen-ipad.png";
import korpenMobile from "../../../assets/images/korpen-mobile.png";
import korpen from "../../../assets/images/korpen.png";
import takeNBakeIpad from "../../../assets/images/take-n-bake-ipad.png";
import takeNBakePhone from "../../../assets/images/take-n-bake-phone.png";
import takeNBake from "../../../assets/images/take-n-bake.png";
import foodFinderipad from "./../../../assets/images/food-finder-ipad.png";
import foodFinderphone from "./../../../assets/images/food-finder-phone.png";
import foodFinder from "./../../../assets/images/food-finder.png";
import pieceBypieceipad from "./../../../assets/images/piece-by-piece-ipad.png";
import pieceBypiecephone from "./../../../assets/images/piece-by-piece-phone.png";
import pieceBypiece from "./../../../assets/images/piece-by-piece.png";

import {
  default as game,
  default as gameIpad,
  default as gameMobile,
} from "../../../assets/images/textgame.png";

import yogibearIpad from "../../../assets/images/yogi-ipad.png";
import yogibearMobile from "../../../assets/images/yogi-mobile.png";
import yogibear from "../../../assets/images/yogibear.png";

import githubIcon from "../../../assets/icons/github.svg";

export default function Projects() {
  return (
    <>
      {" "}
      <div className="anchor" id="projects"></div>
      <section className="projects">
        <div className="projects__inner">
          <h3 className="projects__title hidden">Mina projekt</h3>
          <h6 className="projects__subtitle hidden">
            Klicka på projekten för att se mer
          </h6>
          <div className="projects__container">
            <div className="project">
              <picture>
                <source media="(max-width: 560px)" srcSet={pieceBypiecephone} />
                <source media="(max-width: 870px)" srcSet={pieceBypieceipad} />
                <source media="(min-width: 870px)" srcSet={pieceBypiece} />
                <img src="" alt="" className="project__img" />
              </picture>
              <div className="project__copy">
                <h5 className="project__title project__title8">
                  Piece by piece
                </h5>
                <p className="project__text project__text8">
                  Detta är en webshop som jag byggt tillsammans med två
                  klasskamrater. Vi använde oss av React, Typescript och MUI för
                  att skapa gränssnitt för användare och admin.
                </p>
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
              <div className="project__copy">
                <h5 className="project__title project__title7">Food finder</h5>
                <p className="project__text project__text7">
                  Detta är en React-app som skapats i grupp. Appen heter
                  Food-finder och hjälper användaren att hitta recept baserat på
                  vilka ingredienser de har hemma.
                </p>
                <div className="project__lower">
                  <span className="project__tools">
                    Typescript | React | HTML{" "}
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
              <div className="project__copy">
                <h5 className="project__title project__title6">Take 'n bake</h5>
                <p className="project__text project__text6">
                  Detta är ett spel som är skapat med p5 och Javascript och
                  koden är strukturerad på ett objektorienterat sätt. Vi
                  arbetade i grupp och tog fram design och idé tillsammans.
                  Spelet kan tyvärr bara visas i fullscreen på desktop.
                </p>
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
                <source media="(max-width: 560px)" srcSet={applePhone} />
                <source media="(max-width: 870px)" srcSet={appleIpad} />
                <source media="(min-width: 870px)" srcSet={apple} />
                <img src="" alt="" className="project__img" />
              </picture>
              <div className="project__copy">
                <h5 className="project__title project__title1">Apple</h5>
                <p className="project__text project__text1">
                  I detta projekt arbetade vi i grupp och hade som uppgift att
                  återskapa startsidan av en befintlig hemsida med hjälp av html
                  och css.
                </p>
                <div className="project__lower">
                  <span className="project__tools">HTML | CSS</span>
                  <a href="https://ellensofia.github.io/apple/">
                    <span className="project__link1">Demo</span>
                    <img src={githubIcon} alt="" className="github-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <picture>
                <source media="(max-width: 560px)" srcSet={calendarMobile} />
                <source media="(max-width: 870px)" srcSet={calendarIpad} />
                <source media="(min-width: 870px)" srcSet={calendar} />
                <img src="" alt="" className="project__img" />
              </picture>
              <div className="project__copy">
                <h5 className="project__title project__title5">Kalender</h5>
                <p className="project__text project__text5">
                  Ett grupprojekt där vi skapade en kalender där användaren kan
                  lägga till todos.
                </p>
                <div className="project__lower">
                  <span className="project__tools">
                    Javascript | HTML | CSS
                  </span>
                  <a href="https://ellensofia.github.io/kalender/">
                    <span className="project__link5">Demo</span>
                    <img src={githubIcon} alt="" className="github-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <picture>
                <source media="(max-width: 560px)" srcSet={korpen} />
                <source media="(max-width: 870px)" srcSet={korpenIpad} />
                <source media="(min-width: 870px)" srcSet={korpenMobile} />
                <img src="" alt="" className="project__img" />
              </picture>
              <div className="project__copy">
                <div>
                  <h5 className="project__title project__title2">
                    Korpens hantverksbutik
                  </h5>
                  <p className="project__text project__text2">
                    I det här projektet arbetade vi i grupp med att modernisera
                    en befintlig hemsida. Vi valde att göra om Korpens
                    hantverksbutik.
                  </p>
                </div>
                <div className="project__lower">
                  <span className="project__tools">
                    HTML | CSS | Javascript
                  </span>
                  <a href="https://ellensofia.github.io/Korpen/">
                    <span className="project__link2">Demo</span>
                    <img src={githubIcon} alt="" className="github-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <picture>
                <source media="(max-width: 560px)" srcSet={gameMobile} />
                <source media="(max-width: 870px)" srcSet={gameIpad} />
                <source media="(min-width: 870px)" srcSet={game} />
                <img src="" alt="" className="project__img" />
              </picture>
              <div className="project__copy">
                <div>
                  <h5 className="project__title project__title3">
                    Textbaserat spel
                  </h5>
                  <p className="project__text project__text3">
                    Det här är en texbaserad interaktiv historia gjort med
                    javascript.
                  </p>
                </div>
                <div className="project__lower">
                  <span className="project__tools">
                    HTML | CSS | Javascript
                  </span>
                  <a href="https://ellensofia.github.io/Lab-1/">
                    <span className="project__link3">Demo</span>
                    <img src={githubIcon} alt="" className="github-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <picture>
                <source media="(max-width: 560px)" srcSet={yogibearMobile} />
                <source media="(max-width: 870px)" srcSet={yogibearIpad} />
                <source media="(min-width: 870px)" srcSet={yogibear} />
                <img src="" alt="" className="project__img" />
              </picture>
              <div className="project__copy">
                <div>
                  <h5 className="project__title project__title4">Yogibear</h5>
                  <p className="project__text project__text4">
                    Denna sida har jag kodat upp efter en befintlig XD design.
                    Målet var att få den pixel perfekt.
                  </p>
                </div>
                <div className="project__lower">
                  <span className="project__tools">HTML | CSS</span>
                  <a href="https://ellensofia.github.io/Yogibear/">
                    <span className="project__link4">Demo</span>
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

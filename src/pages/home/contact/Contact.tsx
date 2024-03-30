import linkedInLightIcon from "../../../assets/icons/linkedin-white.svg";
import linkedInIcon from "../../../assets/icons/linkedin.svg";
import mailLightIcon from "../../../assets/icons/mail-white.svg";
import mailIcon from "../../../assets/icons/mail.svg";
import phoneLightIcon from "../../../assets/icons/phone-white.svg";
import phoneIcon from "../../../assets/icons/phone.svg";
import { useTheme } from "../../../context/ThemeContext";

export default function Contact() {
  const { isDarkmode } = useTheme();
  return (
    <>
      <div className="anchor" id="contact"></div>

      <section className="contact">
        <div className="contact__inner">
          <h3 className="contact__title hidden">Kontakta mig</h3>
          <div className="contact__icons">
            <a
              href="https://www.linkedin.com/in/ellen-dahlgren/"
              className="contact__link hidden"
            >
              <img
                src={isDarkmode ? linkedInLightIcon : linkedInIcon}
                alt="icon linked in"
                className="contact__linkedin"
              />
              <span>Linked in</span>
            </a>
            <a
              href="mailto:ellendahlgren@medieinstitutet.se"
              className="contact__link hidden"
            >
              <img
                src={isDarkmode ? mailLightIcon : mailIcon}
                alt="mail icon"
                className="contact__mail"
              />
              <span>ellen.dahlgren@medieinstitutet.se</span>
            </a>
            <a href="" className="contact__link hidden">
              <img
                src={isDarkmode ? phoneLightIcon : phoneIcon}
                alt="phone icon"
                className="contact__phone"
              />
              <span>0700223329</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";
import "./style/hero-style.css";
import hero from "../../assets/images/hero.png";
const Hero = () => {
  const scrollToSection = (id: string, buttonName: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero_section_container">
      <div className="hero_section_description_buttons">
        <div className="hero_section_title">
          <h1 className="hero_title_text">
            Tritt heute bei und entschlüssele die Erfolgsgeheimnisse des
          </h1>

          <h1 className="hero_title_text_underline">Dropshippings!</h1>
        </div>
        <div className="hero_section_paragraphs">
          <p className="hero_paragraph_text">
            Bist du bereit, in die Welt des Dropshippings einzutauchen und deine
            unternehmerischen Träume in die Realität umzusetzen?
          </p>
          <p className="hero_paragraph_text_bold">
            Entwickle dich mit uns zum Dropshipping-Meister. Unsere erfahrenen
            Experten bieten Einblicke und Unterstützung für deinen
            E-Commerce-Erfolg.
          </p>
        </div>

        <div className="hero_section_buttons">
          <button className="hero_button">
            <span
              className="hero_button_text"
              onClick={() =>
                scrollToSection("Schulung/Seminare", "Schulung/Seminare")
              }
            >
              Schulung/Seminare
            </span>
          </button>
          <button
            className="hero_button"
            onClick={() => scrollToSection("Mentor-ship", "Mentor-ship")}
          >
            <span className="hero_button_text">Mentor-ship</span>
          </button>
        </div>
      </div>
      <div className="hero_section_image">
        <img src={hero} alt="hero" className="image_hero" />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Header from "../../components/header/Header";
import "./style/home-style.css";
import Hero from "../../components/sectionhero/Hero";
import UberUns from "../../components/sectionuberuns/UberUns";
import Schulung from "../../components/sectionschulung/Schulung";
import MentorShip from "../../components/sectionmentorship/MentorShip";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home_screen_container">
      <Header />
      <div className="hero_section">
        <Hero />
      </div>
      <div className="hero_statistics">
        <div className="hero_statistics_container">
          <p className="hero_statistics_text first">
            Meisterhaft gestaltete Lektionen
          </p>
          <p className="hero_statistics_text border_none">
            Praxisnahe Fallstudien
          </p>
          <p className="hero_statistics_text  third">Fortlaufende Unterstützung</p>
          <p className="hero_statistics_text hero_statistics_last">
            Praktische Tipps und Strategien
          </p>
        </div>
      </div>
      <div className="uber_uns_section">
        <UberUns />
      </div>
      <div className="unsere_angebote_section">
        <h2 className="unsere_angebote_title">Unsere Angebote</h2>

        <Schulung />
        <MentorShip />
      </div>
      <div className="footer_section">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

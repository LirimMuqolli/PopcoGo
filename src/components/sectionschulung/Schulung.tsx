import React from "react";
import "./style/schulung-style.css";
import photo from "../../assets/images/1.png";
import { useNavigate } from "react-router-dom";

const Schulung = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/fragen");
  };

  return (
    <div className="schulung_section_container" id="Schulung/Seminare">
      <div className="schulung_description_and_button">
        <h1 className="schulung_section_title">Schulung/Seminare</h1>
        <div className="schulung_description">
          <p className="schulung_section_paragraph">
            Wir bieten seminare und schulungen für Neueinsteiger im Bereich
            e-commerce und Propshipping.... Profitieren Sic von unseren
            Erfahrengen und Sternten sic mit Ihrem eigenen, ortsunabhangigen
            online-shop voll durch.
          </p>
          <p className="schulung_section_paragraph">
            Aufgrund der starken Nachfrage, sind unsere schulungen und seminare
            meist überbucht, von daher brauchen wir eine kleine Bewerbung, damit
            wir eine Vorselektion Heffen können
          </p>
          <p className="schulung_section_paragraph">
            Unser seminare werden finden in regel-mässigen Abständen statt. Über
            die genauen Termine informieren wir sie nach dem ausfüllen der
            Bewerbung.
          </p>
          <p className="schulung_section_paragraph_bold">
            Ein seminar dauert 2 Tage und kosten CHF / Euro 5500,-. Die Hälte
            ist Ivoraus zu zanten, den Rest direkt am seminar.
          </p>
        </div>
        <button className="schulung_button" onClick={handleButtonClick}>
          <span className="schulung_button_text">Bewerben</span>
        </button>
      </div>
      <div className="schulung_image_container">
        <img src={photo} alt="schulung" className="image_schulung" />
      </div>
    </div>
  );
};

export default Schulung;

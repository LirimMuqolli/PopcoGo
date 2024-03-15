import React from "react";
import "./style/fragen-style.css";
import Formwrapper from "../../../components/formwrapper/Formwrapper";
import Header from "../../../components/header/Header";
import { useNavigate, useParams } from "react-router-dom";

const Fragen = () => {
  const navigate = useNavigate();
  const { step }: { step?: string } = useParams();
  const handleHomeButtonClick = () => {
    navigate("/");
  };
  const handleStartStepsButtonClick = () => {
    navigate("/step/1");
  };
  return (
    <div className="fragen">
      <Header />
      <div className="fragen_container">
        <Formwrapper title="Bevor wir beginnen, müssen wir Ihnen einige Fragen stellen">
          <div className="fragen_description">
            <p className="fragen_text">
              Dieser Fragebogen stellt Ihnen einige Fragen zu Ihrer aktuellen
              Situation im Bereich Dropshipping, sofern Sie einen Online-Shop
              betreiben. Wir möchten mehr über Ihr Unternehmen erfahren,
              insbesondere in Bezug auf Ihren gegenwärtigen Gewinn. Ihre
              Teilnahme ist äußerst wichtig und trägt dazu bei, wertvolle
              Einblicke in die Branche zu gewinnen.
            </p>
            <p className="fragen_text">
              Vielen Dank für Ihre Zeit und Ihr Engagement.
            </p>
          </div>
          <div className="fragen_buttons">
            <button
              className="fragen_button_white"
              onClick={handleHomeButtonClick}
            >
              <span className="fragen_button_white_text">
                Zurück zur Startseite
              </span>
            </button>
            <button
              className="fragen_button_blue"
              onClick={handleStartStepsButtonClick}
            >
              <span className="fragen_button_blue_text">
                Fragebogen starten
              </span>
            </button>
          </div>
        </Formwrapper>
      </div>
    </div>
  );
};

export default Fragen;

import React from "react";
import "./style/uber-uns-style.css";
import { VectorIcon } from "../../assets/svg/VectorIcon";
const UberUns = () => {
  return (
    <div className="uber_uns_section_container">
      <div className="uber_uns_text_and_vector_icon">
        <h1 className="uber_uns_text">Über Uns</h1>
        <VectorIcon />
      </div>
      <div className="uber_uns_description">
        <div className="uber_uns_first_description">
          <h2 className="uber_uns_title">Wer sind wir</h2>
          <p className="uber_uns_paragraph">
            Wir definieren die Reise zum Dropshipping-Erfolg neu. Als
            leidenschaftliche Unternehmer und Branchenexperten verpflichten wir
            uns, Sie durch die komplexe Kunst des E-Commerce zu führen. Bei
            popcoGO geht es um Ermächtigung, nicht nur Bildung. Unsere Mission:
            Sie mit Wissen, Strategien und unerschütterlicher Unterstützung für
            Dropshipping-Erfolg auszustatten.
          </p>
        </div>
        <div className="uber_uns_second_description">
          <h2 className="uber_uns_title">Unsere Wurzeln</h2>
          <p className="uber_uns_paragraph">
            Gegründet von visionären Pionieren und Branchenexperten, sind wir
            stolz auf unsere Plattform, die auf Fachwissen, Innovation und
            tiefem Verständnis basiert. Gemeinsam gestalten wir einen Weg des
            kontinuierlichen Wachstums und der unternehmerischen Exzellenz.
          </p>
        </div>
        <div className="uber_uns_third_description">
          <h2 className="uber_uns_title">Was sind unsere stärken</h2>
          <p className="uber_uns_paragraph">
            Unsere Fachkompetenz, innovative Herangehensweise und das tiefe
            Verständnis für popcoGO ermöglichen es uns, maßgeschneiderte
            Lösungen zu entwickeln. Durch kontinuierliche Weiterentwicklung und
            das Streben nach Exzellenz setzen wir uns dafür ein, Ihnen stets
            erstklassige Dienstleistungen zu bieten. Bei [Ihrem Unternehmen]
            sind unsere Stärken Ihre Vorteile auf dem Weg zum Erfolg.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UberUns;

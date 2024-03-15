import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FirstStep from "./firststep/FirstStep";
import SecondStep from "./secondstep/SecondStep";
import Header from "../../components/header/Header";
import "./multistep-style.css";
import { ArrowLeftIcon } from "../../assets/svg/ArrowLeftIcon";
import ThirdStep from "./thirdstep/ThirdStep";
import FourthStep from "./fourthstep/FourthStep";
import FifthStep from "./fifthstep/FifthStep";
import SixthStep from "./sixthstep/SixthStep";
import Formwrapper from "../../components/formwrapper/Formwrapper";
import axios from "axios";
import { FormDataContext } from "../services/globalstate/FormDataProvider";

const MultiStepForm = () => {
  const navigate = useNavigate();
  const { formData } = useContext(FormDataContext);

  const { step }: { step?: string } = useParams();
  const [currentStep, setCurrentStep] = useState(parseInt(step || "1", 10));

  useEffect(() => {
    setCurrentStep(parseInt(step || "1", 10));
  }, [step]);

  const goToStep = (stepNumber: number) => {
    navigate(`/step/${stepNumber}`);
    setCurrentStep(stepNumber);
  };

  const nextStep = () => {
    const next = currentStep + 1;
    goToStep(next);
  };

  const prevStep = () => {
    if (currentStep === 1) {
      navigate("/fragen");
    } else {
      const prev = currentStep - 1;
      goToStep(prev);
    }
  };

  const handleNextStep = () => {
    nextStep();
  };

  let stepDescription = "";

  switch (currentStep) {
    case 1:
      stepDescription = "Persönliche Informationen";
      break;
    case 2:
      stepDescription = "Online-Shop vorhanden?";
      break;
    case 3:
      stepDescription = "Domain name";
      break;
    case 4:
      stepDescription = "Dein Umsatz";
      break;
    case 5:
      stepDescription = "Ihr Umsatz";
      break;
    case 6:
      stepDescription = "Zeitmanagement";
      break;
    default:
      break;
  }
  useEffect(() => {
    const submitFormData = async () => {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          formData
        );
        console.log("Response:", response);

        if (response.status === 200 || response.status === 201) {
          console.log("Form submitted successfully");
        }
      } catch (error) {
        console.error("Error submitting form data:", error);
      }
    };

    if (currentStep === 7) {
      submitFormData();
    }
  }, [currentStep, formData]);
  return (
    <div className="steps_container">
      <Header />
      <div className="steps_wrapper">
        {currentStep !== 7 && (
          <div className="button_previous_and_show_steps">
            <button onClick={prevStep} className="button_previous">
              <ArrowLeftIcon />
              <span className="button_previous_text">Zurück</span>
            </button>
            <div className="show_steps_description">
              <p className="show_steps">Schritt {currentStep}/6</p>
              {/* Displaying step description */}
              <h1 className="show_description_steps">{stepDescription}</h1>
            </div>
          </div>
        )}
        <div className="step">
          {currentStep === 1 && <FirstStep onNext={handleNextStep} />}
          {currentStep === 2 && <SecondStep onNext={handleNextStep} />}
          {currentStep === 3 && <ThirdStep onNext={handleNextStep} />}
          {currentStep === 4 && <FourthStep onNext={handleNextStep} />}
          {currentStep === 5 && <FifthStep onNext={handleNextStep} />}
          {currentStep === 6 && <SixthStep onNext={handleNextStep} />}
          {currentStep === 7 && (
            <div className="umfrage_container">
              <Formwrapper title="Umfrage abgeschlossen">
                <p className="completed_message">
                  Vielen Dank für das Ausfüllen des Fragebogens. Wir verzeichnen
                  eine sehr hohe Nachfrage nach unseren Mentorings und Seminaren
                  und werden uns so schnell wie möglich bei Ihnen melden.
                  Aufgrund der hohen Anfragen kann dies jedoch einige Zeit in
                  Anspruch nehmen. Wir schätzen Ihr Interesse und Ihre Geduld.
                </p>
                <div className="home_button_container">
                  <button onClick={() => navigate("/")} className="home_button">
                    <span className="home_button_text">
                      Zurück zur Startseite
                    </span>
                  </button>
                </div>
              </Formwrapper>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;

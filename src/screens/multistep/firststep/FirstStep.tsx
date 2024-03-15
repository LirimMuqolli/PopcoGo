import React, { useContext, useEffect, useState, useRef } from "react";
import "./style/first-step-style.css";
import Formwrapper from "../../../components/formwrapper/Formwrapper";
import { FormDataContext } from "../../services/globalstate/FormDataProvider";

const FirstStep = ({ onNext }: { onNext: () => void }) => {
  const { formData, setFormData } = useContext(FormDataContext);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isAlterValid, setIsAlterValid] = useState<boolean>(true);
  const nameRef = useRef<HTMLInputElement>(null);
  const vornameRef = useRef<HTMLInputElement>(null);
  const alterRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const validateEmail = (email: string) => {
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  };

  const validateAlter = (alter: string) => {
    setIsAlterValid(/^\d+$/.test(alter));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
    sessionStorage.setItem("formData", JSON.stringify(formData));
    setTimeout(() => {
      sessionStorage.removeItem("formData");
    }, 5 * 60 * 1000);
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.vorname.trim() !== "" &&
      formData.alter.trim() !== "" &&
      formData.email.trim() !== "" &&
      isEmailValid &&
      isAlterValid
    );
  };

  useEffect(() => {
    const storedFormData = sessionStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [setFormData]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const nextElement = e.currentTarget
        .nextElementSibling as HTMLInputElement | null;
      if (nextElement) {
        nextElement.focus();
      } else {
        handleSubmit(e);
      }
    }
  };

  return (
    <Formwrapper title="Bitte geben Sie Ihre persönlichen Informationen an.">
      <form onSubmit={handleSubmit} className="first_step">
        <div className="form_control_container">
          <label className="form_control">
            Name*
            <input
              ref={nameRef}
              autoFocus
              required
              className="input_form_control"
              type="text"
              placeholder="John"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              onKeyDown={handleKeyDown}
            />
          </label>
          <label className="form_control">
            Vorname*
            <input
              ref={vornameRef}
              required
              className="input_form_control"
              type="text"
              placeholder="Bitte geben Sie Ihren Vornamen ein"
              value={formData.vorname}
              onChange={(e) =>
                setFormData({ ...formData, vorname: e.target.value })
              }
              onKeyDown={handleKeyDown}
            />
          </label>
          <label className={`form_control ${!isAlterValid ? "error" : ""}`}>
            Alter*
            <input
              ref={alterRef}
              required
              type="number"
              accept="number"
              pattern="[0-9]*"
              className={`input_form_control ${
                !isAlterValid ? "input_error" : ""
              }`}
              placeholder="Bitte geben Sie Ihr Alter ein"
              value={formData.alter}
              onChange={(e) => {
                setFormData({ ...formData, alter: e.target.value });
                validateAlter(e.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
            {!isAlterValid && (
              <span className="error_message">
                Bitte geben Sie eine gültige Alter ein.
              </span>
            )}
          </label>
          <label className={`form_control ${!isEmailValid ? "error" : ""}`}>
            Email-Adresse*
            <input
              ref={emailRef}
              required
              className={`input_form_control ${
                !isEmailValid ? "input_error" : ""
              }`}
              placeholder="Bitte geben Sie Ihre E-Mail-Adresse ein"
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                validateEmail(e.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
            {!isEmailValid && (
              <span className="error_message">
                Bitte geben Sie eine gültige E-Mail-Adresse ein.
              </span>
            )}
          </label>
        </div>
        <div className="first_step_button_wrapper">
          <button
            type="submit"
            className="button_next_step"
            disabled={!isFormValid()}
          >
            <span className="button_next_step_text">Nächster</span>
          </button>
        </div>
      </form>
    </Formwrapper>
  );
};

export default FirstStep;

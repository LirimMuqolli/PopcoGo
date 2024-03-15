import React, { useContext, useEffect, useState } from "react";
import Formwrapper from "../../../components/formwrapper/Formwrapper";
import "./style/secondstep-style.css";
import { FormDataContext } from "../../services/globalstate/FormDataProvider";
const SecondStep = ({ onNext }: { onNext: () => void }) => {
  const { formData, setFormData } = useContext(FormDataContext);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      hasOnlineShop: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
    sessionStorage.setItem("secondStepFormData", JSON.stringify(formData));
    // Clear session storage after 5 minutes
    setTimeout(() => {
      sessionStorage.removeItem("secondStepFormData");
    }, 5 * 60 * 1000); // 5 minutes in milliseconds
  };
  const isButtonDisabled = !(
    formData.hasOnlineShop === "Ja" || formData.hasOnlineShop === "Nein"
  );
  useEffect(() => {
    const storedFormData = sessionStorage.getItem("secondStepFormData");
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
  return (
    <Formwrapper title="Haben Sie bereits einen Online-Shep">
      <form onSubmit={handleSubmit} className="second_step">
        <div className="form_control_checkbox">
          <label
            className={`checkbox_label ${
              formData.hasOnlineShop === "Ja" ? "selected" : ""
            }`}
          >
            <input
              type="checkbox"
              value="Ja"
              checked={formData.hasOnlineShop === "Ja"}
              onChange={handleCheckboxChange}
            />
            <div className="second_step_description">
              <h2 className="second_step_description_title">Ja</h2>
              <p className="second_step_description_text">
                Ich hatte oder habe einen Online-Shop.
              </p>
            </div>
          </label>

          <label
            className={`checkbox_label ${
              formData.hasOnlineShop === "Nein" ? "selected" : ""
            }`}
          >
            <input
              type="checkbox"
              value="Nein"
              checked={formData.hasOnlineShop === "Nein"}
              onChange={handleCheckboxChange}
            />
            <div className="second_step_description">
              <h2 className="second_step_description_title">Nein</h2>
              <p className="second_step_description_text">
                Ich habe noch nie einen Online-Shop besessen.
              </p>
            </div>
          </label>
        </div>
        <div className="first_step_button_wrapper">
          <button
            type="submit"
            className="button_next_step"
            disabled={isButtonDisabled}
          >
            <span className="button_next_step_text">Nächster</span>
          </button>
        </div>
      </form>
    </Formwrapper>
  );
};

export default SecondStep;

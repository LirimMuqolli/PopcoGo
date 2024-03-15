import React, { useContext, useEffect, useState } from "react";
import Formwrapper from "../../../components/formwrapper/Formwrapper";
import "./style/fifthstep-style.css";
import { FormDataContext } from "../../services/globalstate/FormDataProvider";
const FifthStep = ({ onNext }: { onNext: () => void }) => {
  const { formData, setFormData } = useContext(FormDataContext);
  const [selection, setSelection] = useState<string>(formData.revenue);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelection(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      revenue: e.target.value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
    sessionStorage.setItem("fifthStepFormData", JSON.stringify(formData));
    // Clear session storage after 5 minutes
    setTimeout(() => {
      sessionStorage.removeItem("fifthStepFormData");
    }, 5 * 60 * 1000); // 5 minutes in milliseconds
  };
  const isButtonDisabled = !(
    selection === "€0 - €500" ||
    selection === "€500 - €1000" ||
    selection === "€1000 - €5000" ||
    selection === "€5000+"
  );
  useEffect(() => {
    const storedFormData = sessionStorage.getItem("fifthStepFormData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
      setSelection(JSON.parse(storedFormData).revenue);
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
    <Formwrapper title="Was ist ihr umsatz">
      <form onSubmit={handleSubmit} className="step_container">
        <div className="form_control_checkbox">
          <label
            className={`checkbox_label ${
              selection === "€0 - €500" ? "selected" : ""
            }`}
          >
            <input
              type="checkbox"
              value="€0 - €500"
              checked={selection === "€0 - €500"}
              onChange={handleCheckboxChange}
            />
            <div className="second_step_description">
              <h2 className="second_step_description_title">€0 - €500</h2>
            </div>
          </label>

          <label
            className={`checkbox_label ${
              selection === "€500 - €1000" ? "selected" : ""
            }`}
          >
            <input
              type="checkbox"
              value="€500 - €1000"
              checked={selection === "€500 - €1000"}
              onChange={handleCheckboxChange}
            />
            <div className="second_step_description">
              <h2 className="second_step_description_title">€500 - €1000</h2>
            </div>
          </label>
          <label
            className={`checkbox_label ${
              selection === "€1000 - €5000" ? "selected" : ""
            }`}
          >
            <input
              type="checkbox"
              value="€1000 - €5000"
              checked={selection === "€1000 - €5000"}
              onChange={handleCheckboxChange}
            />
            <div className="second_step_description">
              <h2 className="second_step_description_title">€1000 - €5000</h2>
            </div>
          </label>

          <label
            className={`checkbox_label ${
              selection === "€5000+" ? "selected" : ""
            }`}
          >
            <input
              type="checkbox"
              value="€5000+"
              checked={selection === "€5000+"}
              onChange={handleCheckboxChange}
            />
            <div className="second_step_description">
              <h2 className="second_step_description_title">€5000+</h2>
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

export default FifthStep;

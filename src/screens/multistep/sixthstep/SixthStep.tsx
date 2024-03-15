import React, { useContext, useEffect, useState } from "react";
import Formwrapper from "../../../components/formwrapper/Formwrapper";
import { FormDataContext } from "../../services/globalstate/FormDataProvider";
const SixthStep = ({ onNext }: { onNext: () => void }) => {
  const { formData, setFormData } = useContext(FormDataContext);
  const [selection, setSelection] = useState<string>(formData.timeInvestment);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelection(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      timeInvestment: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
    sessionStorage.setItem("sixthStepFormData", JSON.stringify(formData));
    // Clear session storage after 5 minutes
    setTimeout(() => {
      sessionStorage.removeItem("sixthStepFormData");
    }, 5 * 60 * 1000); // 5 minutes in milliseconds
  };
  const isButtonDisabled = !(
    selection === "1-2 Stunden" ||
    selection === "2-4 Stunden" ||
    selection === "4-6 Stunden"
  );
  useEffect(() => {
    const storedFormData = sessionStorage.getItem("sixthStepFormData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
      setSelection(JSON.parse(storedFormData).timeInvestment);
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
    <Formwrapper title="Wie viel zeit können sie pro woche in den Shop investieren?">
      <form onSubmit={handleSubmit} className="step_container">
        <div className="form_control_checkbox">
          <label
            className={`checkbox_label ${
              selection === "1-2 Stunden" ? "selected" : ""
            }`}
          >
            <input
              type="checkbox"
              value="1-2 Stunden"
              checked={selection === "1-2 Stunden"}
              onChange={handleCheckboxChange}
            />
            <div className="second_step_description">
              <h2 className="second_step_description_title">1-2 Stunden</h2>
            </div>
          </label>

          <label
            className={`checkbox_label ${
              selection === "2-4 Stunden" ? "selected" : ""
            }`}
          >
            <input
              type="checkbox"
              value="2-4 Stunden"
              checked={selection === "2-4 Stunden"}
              onChange={handleCheckboxChange}
            />
            <div className="second_step_description">
              <h2 className="second_step_description_title">2-4 Stunden</h2>
            </div>
          </label>
          <label
            className={`checkbox_label ${
              selection === "4-6 Stunden" ? "selected" : ""
            }`}
          >
            <input
              type="checkbox"
              value="4-6 Stunden"
              checked={selection === "4-6 Stunden"}
              onChange={handleCheckboxChange}
            />
            <div className="second_step_description">
              <h2 className="second_step_description_title">4-6 Stunden</h2>
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

export default SixthStep;

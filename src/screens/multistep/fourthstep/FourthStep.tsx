import React, { useContext, useEffect, useState } from "react";
import Formwrapper from "../../../components/formwrapper/Formwrapper";
import { FormDataContext } from "../../services/globalstate/FormDataProvider";

const FourthStep = ({ onNext }: { onNext: () => void }) => {
  const { formData, setFormData } = useContext(FormDataContext);
  const [selection, setSelection] = useState<string>(formData.salesStatus);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelection(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      salesStatus: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
    sessionStorage.setItem("fourthStepFormData", JSON.stringify(formData));
    // Clear session storage after 5 minutes
    setTimeout(() => {
      sessionStorage.removeItem("fourthStepFormData");
    }, 5 * 60 * 1000); // 5 minutes in milliseconds
  };
  const isButtonDisabled = !(selection === "Ja" || selection === "Nein");
  useEffect(() => {
    const storedFormData = sessionStorage.getItem("fourthStepFormData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
      setSelection(JSON.parse(storedFormData).salesStatus);
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
    <Formwrapper title="Erzielen Sie bereits umsatz damit?">
      <form onSubmit={handleSubmit} className="second_step">
        <div className="form_control_checkbox">
          <label
            className={`checkbox_label ${selection === "Ja" ? "selected" : ""}`}
          >
            <input
              type="checkbox"
              value="Ja"
              checked={selection === "Ja"}
              onChange={handleCheckboxChange}
            />
            <div className="second_step_description">
              <h2 className="second_step_description_title">Ja</h2>
              <p className="second_step_description_text">
                Ich erziele bereits Umsatz mit meinem Online-Shop.
              </p>
            </div>
          </label>

          <label
            className={`checkbox_label ${
              selection === "Nein" ? "selected" : ""
            }`}
          >
            <input
              type="checkbox"
              value="Nein"
              checked={selection === "Nein"}
              onChange={handleCheckboxChange}
            />
            <div className="second_step_description">
              <h2 className="second_step_description_title">Nein</h2>
              <p className="second_step_description_text">
                Ich erziele keinen Umsatz mit meinem Online-Shop.
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

export default FourthStep;

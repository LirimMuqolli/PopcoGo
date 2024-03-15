import React, { useContext, useEffect, useState } from "react";
import Formwrapper from "../../../components/formwrapper/Formwrapper";
import "./style/thirdstep-style.css";
import { FormDataContext } from "../../services/globalstate/FormDataProvider";
const ThirdStep = ({ onNext }: { onNext: () => void }) => {
  const { formData, setFormData } = useContext(FormDataContext);
  const [domain, setDomain] = useState<string>(formData.domain);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDomain(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      domain: e.target.value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
    sessionStorage.setItem("thirdStepFormData", JSON.stringify(formData));
    // Clear session storage after 5 minutes
    setTimeout(() => {
      sessionStorage.removeItem("thirdStepFormData");
    }, 5 * 60 * 1000); // 5 minutes in milliseconds
  };
  useEffect(() => {
    const storedFormData = sessionStorage.getItem("thirdStepFormData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
      setDomain(JSON.parse(storedFormData).domain);
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
  const isButtonDisabled = domain.trim() === "";
  return (
    <Formwrapper title="Wie ist die Domain ihres shops">
      <form onSubmit={handleSubmit} className="third_step">
        <div className="third_step_container">
          <label className="form_control_third_step">
            Domainnamen *
            <input
              autoFocus
              required
              className="input_form_control"
              type="text"
              placeholder="www.ebay.com"
              value={domain}
              onChange={handleInputChange}
            />
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

export default ThirdStep;

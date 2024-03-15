import React, { ReactNode } from "react";
import "./style/formwrapper-style.css";
type FormWrapperProps = {
  title?: string;
  children: ReactNode;
};
const Formwrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <div className="formwrapper_container">
      <h2 className="formwrapper_title">{title}</h2>
      {children}
      
    </div>
  );
};

export default Formwrapper;

import React, { createContext, useState, ReactNode } from "react";

interface FormDataContextProps {
  formData: {
    name: string;
    email: string;
    alter: string;
    vorname: string;
    hasOnlineShop: string;
    domain: string;
    salesStatus: string;
    revenue: string;
    timeInvestment: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      alter: string;
      vorname: string;
      hasOnlineShop: string;
      domain: string;
      salesStatus: string;
      revenue: string;
      timeInvestment: string;
    }>
  >;
}

export const FormDataContext = createContext<FormDataContextProps>({
  formData: {
    name: "",
    email: "",
    alter: "",
    vorname: "",
    hasOnlineShop: "",
    domain: "",
    salesStatus: "",
    revenue: "",
    timeInvestment: "",
  },
  setFormData: () => {},
});

interface FormDataProviderProps {
  children: ReactNode;
}

export const FormDataProvider: React.FC<FormDataProviderProps> = ({
  children,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    alter: "",
    vorname: "",
    hasOnlineShop: "",
    domain: "",
    salesStatus: "",
    revenue: "",
    timeInvestment: "",
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

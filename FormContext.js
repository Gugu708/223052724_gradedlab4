import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    creditCardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const updateFormData = (key, value) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

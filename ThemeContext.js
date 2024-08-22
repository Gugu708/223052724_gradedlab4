import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    textColor: '#000000',
    backgroundColor: '#ffffff',
  });

  const updateTheme = (key, value) => {
    setTheme((prevTheme) => ({ ...prevTheme, [key]: value }));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

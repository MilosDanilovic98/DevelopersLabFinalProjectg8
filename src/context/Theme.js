import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeChange, setTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{ themeChange, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

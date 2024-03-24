// ThemeContext.js
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextType {
  isDarkmode: boolean;
  toggleDarkmode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkmode: true,
  toggleDarkmode: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDarkmode, setIsDarkmode] = useState(true);

  useEffect(() => {
    applyTheme(isDarkmode);
  }, [isDarkmode]);

  const toggleDarkmode = () => {
    setIsDarkmode(!isDarkmode);
  };

  const applyTheme = (isDarkmode: boolean) => {
    if (isDarkmode) {
      document.documentElement.classList.add("darkmode");
    } else {
      document.documentElement.classList.remove("darkmode");
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkmode, toggleDarkmode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

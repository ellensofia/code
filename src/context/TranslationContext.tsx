import { ReactNode, createContext, useContext, useState } from "react";

interface TranslationContextType {
  activeLang: "sv" | "en";
  toggleTranslation: () => void;
}

const TranslationContext = createContext<TranslationContextType>({
  activeLang: "sv",
  toggleTranslation: () => {},
});

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeLang, setActiveLang] = useState<"sv" | "en">("sv");

  const toggleTranslation = () => {
    setActiveLang((prevLang) => (prevLang === "sv" ? "en" : "sv"));
  };

  return (
    <TranslationContext.Provider value={{ activeLang, toggleTranslation }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);

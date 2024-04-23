import { ReactNode, createContext, useContext, useState } from "react";

interface TranslationContextType {
  activeLang: "sv" | "en";
  changeActiveLang: (language: "sv" | "en") => void;
}

const TranslationContext = createContext<TranslationContextType>({
  activeLang: "sv",
  changeActiveLang: () => {},
});

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeLang, setActiveLang] = useState<
    TranslationContextType["activeLang"]
  >(() => {
    const savedLang = localStorage.getItem("language");
    return savedLang ? JSON.parse(savedLang) : "sv";
  });

  const changeActiveLang = (language: "sv" | "en") => {
    localStorage.setItem("language", JSON.stringify(language));
    setActiveLang(language);
  };

  return (
    <TranslationContext.Provider value={{ activeLang, changeActiveLang }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);

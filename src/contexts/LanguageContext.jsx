import { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('trustin-language');
    return savedLanguage || 'en';
  });

  // Persist language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('trustin-language', language);
  }, [language]);

  // Function to cycle through languages: en -> es -> fr -> en
  const toggleLanguage = () => {
    setLanguage(prevLang => {
      if (prevLang === 'en') return 'es';
      if (prevLang === 'es') return 'fr';
      return 'en';
    });
  };

  // Function to set a specific language
  const setLanguagePreference = (lang) => {
    if (lang === 'en' || lang === 'es' || lang === 'fr') {
      setLanguage(lang);
    }
  };

  const value = {
    language,
    toggleLanguage,
    setLanguagePreference,
    isEnglish: language === 'en',
    isSpanish: language === 'es',
    isFrench: language === 'fr'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

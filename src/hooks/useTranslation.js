import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

// Import English content
import * as homeContentEN from '../data/en/homeContent';
import * as aboutContentEN from '../data/en/aboutContent';
import * as processContentEN from '../data/en/processContent';
import * as faqContentEN from '../data/en/faqContent';
import * as faqDataEN from '../data/en/faqData';
import * as contactContentEN from '../data/en/contactContent';
import * as layoutContentEN from '../data/en/layoutContent';

// Import Spanish content
import * as homeContentES from '../data/es/homeContent';
import * as aboutContentES from '../data/es/aboutContent';
import * as processContentES from '../data/es/processContent';
import * as faqContentES from '../data/es/faqContent';
import * as faqDataES from '../data/es/faqData';
import * as contactContentES from '../data/es/contactContent';
import * as layoutContentES from '../data/es/layoutContent';

// Import French content
import * as homeContentFR from '../data/fr/homeContent';
import * as aboutContentFR from '../data/fr/aboutContent';
import * as processContentFR from '../data/fr/processContent';
import * as faqContentFR from '../data/fr/faqContent';
import * as faqDataFR from '../data/fr/faqData';
import * as contactContentFR from '../data/fr/contactContent';
import * as layoutContentFR from '../data/fr/layoutContent';

const translations = {
  en: {
    homeContent: homeContentEN,
    aboutContent: aboutContentEN,
    processContent: processContentEN,
    faqContent: faqContentEN,
    faqData: faqDataEN,
    contactContent: contactContentEN,
    layoutContent: layoutContentEN
  },
  es: {
    homeContent: homeContentES,
    aboutContent: aboutContentES,
    processContent: processContentES,
    faqContent: faqContentES,
    faqData: faqDataES,
    contactContent: contactContentES,
    layoutContent: layoutContentES
  },
  fr: {
    homeContent: homeContentFR,
    aboutContent: aboutContentFR,
    processContent: processContentFR,
    faqContent: faqContentFR,
    faqData: faqDataFR,
    contactContent: contactContentFR,
    layoutContent: layoutContentFR
  }
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }

  const { language, toggleLanguage, setLanguagePreference, isEnglish, isSpanish, isFrench } = context;

  // Return the translations for the current language
  return {
    t: translations[language],
    language,
    toggleLanguage,
    setLanguagePreference,
    isEnglish,
    isSpanish,
    isFrench
  };
};

import  { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Define prop types for LanguageProvider
LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          {language === 'en'
            ? '© 2024 Info Demo. All rights reserved.'
            : '© 2024 Nsɛm Ho Nhwɛso. Hokwan nyinaa wɔ yɛn.'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
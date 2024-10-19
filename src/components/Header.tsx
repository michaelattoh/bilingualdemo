import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          {language === 'en' ? 'Info Demo' : 'Nsɛm Ho Nhwɛso'}
        </h1>
        <button
          onClick={() => setLanguage(language === 'en' ? 'twi' : 'en')}
          className="flex items-center bg-white text-blue-600 px-3 py-1 rounded-full"
        >
          <Globe size={18} className="mr-2" />
          {language === 'en' ? 'Switch to Twi' : 'Sesa kɔ Borɔfo'}
        </button>
      </div>
    </header>
  );
};

export default Header;
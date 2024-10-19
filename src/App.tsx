import React from 'react';
import { Globe } from 'lucide-react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <InfoSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
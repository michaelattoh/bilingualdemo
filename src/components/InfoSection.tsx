import React from 'react';
import { useLanguage } from '../LanguageContext';

const content = {
  en: {
    title: 'Welcome to Our Informational Demo',
    intro: 'This demo showcases a multilingual website with content in English and Twi.',
    sections: [
      {
        title: 'About Ghana',
        text: 'Ghana is a country located in West Africa, known for its rich culture, diverse wildlife, and beautiful landscapes.',
      },
      {
        title: 'Ghanaian Cuisine',
        text: 'Ghanaian cuisine is diverse and flavorful, featuring dishes like jollof rice, fufu, and waakye.',
      },
      {
        title: 'Languages of Ghana',
        text: 'While English is the official language, Ghana is home to over 80 indigenous languages, including Twi, Ewe, and Ga.',
      },
    ],
  },
  twi: {
    title: 'Akwaaba Wɔ Yɛn Nsɛm Ho Nhwɛso',
    intro: 'Saa nhwɛso yi kyerɛ website a wɔde kasa ahorow abɔ mu, a ɛwɔ nsɛm wɔ Borɔfo ne Twi mu.',
    sections: [
      {
        title: 'Ghana Ho Nsɛm',
        text: 'Ghana yɛ ɔman a ɛwɔ Abibirem Atɔe, a wɔnim no wɔ ne amammerɛ a ɛyɛ fɛ, mmoa ne nnua ahorow, ne asase fɛɛfɛ ho.',
      },
      {
        title: 'Ghana Aduane',
        text: 'Ghana aduane yɛ ahorow ne dɛ, a ɛka aduane bi te sɛ jollof, fufu, ne waakye ho.',
      },
      {
        title: 'Ghana Kasa Ahorow',
        text: 'Ɛwom sɛ Borɔfo ne kasa titiriw no, Ghana wɔ kasa ahorow bɛyɛ 80 a ɛfiri hɔ ara, a Twi, Ewe, ne Ga ka ho.',
      },
    ],
  },
};

const InfoSection: React.FC = () => {
  const { language } = useLanguage();
  const { title, intro, sections } = content[language];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-gray-800">{title}</h2>
      <p className="text-xl text-center text-gray-600">{intro}</p>
      <div className="grid md:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{section.title}</h3>
            <p className="text-gray-600">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
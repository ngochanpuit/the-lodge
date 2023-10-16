import { TranslationContext } from '@/contexts/translation.context';
import { translations } from '@/utils/translation';
import React, { useState } from 'react';

interface TranslationProviderProps {
  children: React.ReactNode;
}

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  const [language, setLanguage] = useState<'en' | 'vi'>('vi');

  const t = (key: string) => translations[language][key] || key;

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

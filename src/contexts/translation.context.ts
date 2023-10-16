import { createContext, Dispatch, SetStateAction } from 'react';

export interface TranslationContextType {
  language: 'en' | 'vi';
  setLanguage: Dispatch<SetStateAction<'en' | 'vi'>>;
  t: (key: string) => string;
}

export const TranslationContext = createContext<TranslationContextType>({
  language: 'vi',
  setLanguage: () => {},
  t: (key: string) => key,
});

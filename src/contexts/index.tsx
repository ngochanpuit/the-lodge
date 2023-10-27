import { initialEventFormData } from '@/utils';
import { EventFormData } from '@/utils/types';
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

type ContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  formData: EventFormData;
  setFormData: Dispatch<SetStateAction<EventFormData>>;
};

const initialState = {
  loading: false,
  setLoading: () => {},
  formData: initialEventFormData,
  setFormData: () => {},
};

export const GlobalContext = createContext<ContextType>(initialState);

export default function GlobalState({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialEventFormData);

  return (
    <GlobalContext.Provider value={{ loading, setLoading, formData, setFormData }}>
      {children}
    </GlobalContext.Provider>
  );
}

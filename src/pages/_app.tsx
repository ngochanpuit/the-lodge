import { AppProps } from 'next/app';
import '../styles/globals.scss';
import { TranslationProvider } from '@/providers/TranslationProvider';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TranslationProvider>
      <Component {...pageProps} />;
    </TranslationProvider>
  );
}

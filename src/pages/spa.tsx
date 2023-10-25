import Breadcrumb from '@/components/Breadcrum';
import Header from '@/components/Header';
import Admin from '@/components/layout/Admin';
import { TranslationContext } from '@/contexts/translation.context';
import Head from 'next/head';
import { useContext } from 'react';

export default function SpaPage() {
  const { t } = useContext(TranslationContext);

  const breadcrumbItems = [
    { href: '/', label: t('home') },
    { href: '', label: 'Spa' },
  ];
  return (
    <Admin>
      <Head>
        <title>{t('events')}</title>
      </Head>
      <Breadcrumb items={breadcrumbItems} />

      <div className="spa-wrap">
        <img className="img-banner" src="images/spa.jpg" alt="" />
        <div className="spa-content">
          <h1 className="md:text-6xl text-4xl bold text-white">Cooming soon...</h1>
        </div>
      </div>
    </Admin>
  );
}

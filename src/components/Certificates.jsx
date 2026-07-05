import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Certificates() {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-brand-darker py-16 text-center text-white">
      <h2 className="font-display text-3xl font-bold uppercase tracking-wider">
        {t('certificates.title')}
      </h2>
    </section>
  );
}
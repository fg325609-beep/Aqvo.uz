import React from 'react';
import { GiBullHorns } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="relative">
      <div className="relative isolate overflow-hidden bg-brand-dark py-20 sm:py-28">
        <img
          src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1600&q=60"
          alt="Natural ingredients"
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />

        <div className="mx-auto max-w-3xl px-4 text-center text-white sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-wide sm:text-4xl">
            {t('about.title')}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            {t('about.description')}
          </p>
        </div>
      </div>
    </section>
  );
}
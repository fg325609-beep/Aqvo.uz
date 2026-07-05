import React from 'react';
import { GiBullHorns } from 'react-icons/gi';

export default function About() {
  return (
    <section id="about" className="relative" aria-labelledby="about-heading">
      <div className="relative isolate overflow-hidden bg-brand-dark py-20 sm:py-28">
        <img
          src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1600&q=60"
          alt="Yog'och stol ustida tabiiy mahsulot ingredientlari"
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />

        <div className="mx-auto max-w-3xl px-4 text-center text-white sm:px-6 lg:px-8">
          <h2
            id="about-heading"
            className="font-display text-3xl font-extrabold uppercase tracking-wide sm:text-4xl"
          >
            AQVO brendi haqida
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            AQVO — O'zbekistonda tabiiy va sifatli oziq-ovqat mahsulotlarini ishlab
            chiqarishga ixtisoslashgan brend. Biz mahalliy fermer xo'jaliklaridan
            olingan xomashyolardan foydalanamiz va zamonaviy texnologiyalar
            yordamida mahsulotning tabiiy ta'mi va foydali xususiyatlarini saqlab
            qolamiz. Har bir bosqichda sifat nazorati orqali sizga faqat eng
            yaxshisini taqdim etamiz.
          </p>
        </div>
      </div>
    </section>
  );
}

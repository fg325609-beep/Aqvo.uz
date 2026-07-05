import React from 'react';
import { GiBullHorns } from 'react-icons/gi';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-brand px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start">
        <h1
          id="hero-heading"
          className="font-display text-6xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Tabiiy
          <br />
          Mahsulotlar
        </h1>

        <p className="mt-8 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
          AQVO — tabiatning eng sara ne'matlarini siz uchun to'playdi. Har bir
          bankada yillar davomida sinalgan retseptlar, faqat tabiiy ingredientlar
          va zamonaviy ishlab chiqarish standartlari mujassam. Oilangiz dasturxoni
          uchun ishonchli tanlov.
        </p>

        <button
          type="button"
          className="mt-10 flex h-16 w-16 items-center justify-center rounded-full bg-brand-dark ring-4 ring-white/20 transition-transform hover:scale-105"
          aria-label="Mahsulotlar katalogini ko'rish"
          title="Mahsulotlar katalogini ko'rish"
          onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <GiBullHorns className="h-8 w-8 text-accent" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

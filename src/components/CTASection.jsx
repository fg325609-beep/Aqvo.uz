import React from 'react';
import { GiBullHorns } from 'react-icons/gi';

export default function CTASection() {
  return (
    <section
      className="bg-brand py-14 text-center text-white"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2
          id="cta-heading"
          className="font-display text-2xl font-extrabold uppercase leading-tight tracking-wide sm:text-3xl"
        >
          Sizning AQVO bilan lahzalaringiz
        </h2>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#order"
            className="w-full rounded-full border-2 border-white px-8 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-brand sm:w-auto"
            title="Biz bilan bog'lanish"
            aria-label="Biz bilan bog'lanish"
          >
            Bog'lanish
          </a>
          <a
            href="#about"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-dark px-8 py-3 text-sm font-semibold transition-colors hover:bg-black sm:w-auto"
            title="AQVO haqida ko'proq bilish"
            aria-label="AQVO haqida ko'proq bilish"
          >
            <GiBullHorns className="h-5 w-5 text-accent" aria-hidden="true" />
            Ko'proq bilish
          </a>
        </div>
      </div>
    </section>
  );
}

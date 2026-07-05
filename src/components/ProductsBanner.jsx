import React from 'react';
import { GiBullHorns } from 'react-icons/gi';

const PRODUCTS = [
  {
    src: 'https://placehold.co/220x220/7a1414/f2d9b8?text=AQVO+Sous',
    alt: "AQVO tabiiy pomidor sousi bankada",
  },
  {
    src: 'https://placehold.co/220x220/3d2b1f/e8c99a?text=AQVO+Murabbo',
    alt: "AQVO uzum murabbosi shisha bankada",
  },
  {
    src: 'https://placehold.co/220x220/c0392b/ffffff?text=AQVO+Ajika',
    alt: "AQVO achchiq ajika sousi qutida",
  },
  {
    src: 'https://placehold.co/220x220/e67e22/3d1c00?text=Mazali+JIZ',
    alt: "AQVO Mazali JIZ konservasi bankada",
  },
];

export default function ProductsBanner() {
  return (
    <section
      id="products"
      className="bg-brand-light py-8"
      aria-label="Mahsulotlar banneri"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-4 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
        {PRODUCTS.slice(0, 2).map((p) => (
          <img
            key={p.alt}
            src={p.src}
            alt={p.alt}
            width={220}
            height={220}
            loading="lazy"
            className="mx-auto aspect-square w-full max-w-[140px] rounded-lg object-cover shadow-lg sm:max-w-[160px]"
          />
        ))}

        <div className="col-span-2 flex items-center justify-center gap-2 py-4 font-display text-2xl font-extrabold text-brand-dark sm:col-span-4 sm:order-first sm:hidden">
          <GiBullHorns className="h-8 w-8" aria-hidden="true" />
          AQVO
        </div>

        <div className="col-span-2 hidden items-center justify-center gap-2 font-display text-3xl font-extrabold text-brand-dark sm:col-span-2 sm:flex">
          <GiBullHorns className="h-10 w-10" aria-hidden="true" />
          AQVO
        </div>

        {PRODUCTS.slice(2, 4).map((p) => (
          <img
            key={p.alt}
            src={p.src}
            alt={p.alt}
            width={220}
            height={220}
            loading="lazy"
            className="mx-auto aspect-square w-full max-w-[140px] rounded-lg object-cover shadow-lg sm:max-w-[160px]"
          />
        ))}
      </div>
    </section>
  );
}

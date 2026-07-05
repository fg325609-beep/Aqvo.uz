import React from 'react';

const CERTIFICATES = [
  { src: 'https://placehold.co/220x300/ffffff/1a1a1a?text=ISO+22000', alt: "ISO 22000 oziq-ovqat xavfsizligi sertifikati" },
  { src: 'https://placehold.co/220x300/ffffff/1a1a1a?text=HALAL', alt: "AQVO mahsulotlari uchun Halal sertifikati" },
  { src: 'https://placehold.co/220x300/ffffff/1a1a1a?text=Sifat+Guvohnomasi', alt: "Davlat standarti sifat muvofiqlik guvohnomasi" },
  { src: 'https://placehold.co/220x300/ffffff/1a1a1a?text=Ekologik+Sertifikat', alt: "Ekologik toza mahsulot sertifikati" },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-brand-darker px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="certificates-heading"
    >
      <div className="mx-auto max-w-6xl text-center">
        <h2
          id="certificates-heading"
          className="font-display text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl"
        >
          Bizning sertifikatlarimiz
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {CERTIFICATES.map((cert) => (
            <img
              key={cert.alt}
              src={cert.src}
              alt={cert.alt}
              width={220}
              height={300}
              loading="lazy"
              className="mx-auto aspect-[3/4] w-full max-w-[160px] rounded-md object-cover shadow-lg ring-1 ring-white/10"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

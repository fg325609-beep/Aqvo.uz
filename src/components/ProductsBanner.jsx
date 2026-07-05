import React from 'react';
import { GiBullHorns } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';
import bgImage from './img/orqa fon.jpg';
import cert1 from './img/sertificat.png';
import cert2 from './img/sertificat (2).png';
import cert3 from './img/sertificat (3).png';
import cert4 from './img/sertificat (4).png';
import bonka from './img/bonka.jpg';
import pamidorVsBonka from './img/pamidor vs bonka.jpg';
import tonkaVsBonka from './img/tonka vs bonka.jpg';
import banner2 from './img/banner (2).jpg';

const PRODUCTS = [
  { id: 1, src: bonka, badge: 'new' },
  { id: 2, src: pamidorVsBonka, badge: 'discount' },
  { id: 3, src: tonkaVsBonka, badge: 'our' },
  { id: 4, src: banner2, badge: 'special' },
];

const CERTIFICATES = [cert1, cert2, cert3, cert4];

function ProductItem({ src, badgeKey }) {
  const { t } = useTranslation();
  return (
    <div className="relative flex flex-col items-center group">
      <img
        src={src}
        alt={t(`products.${badgeKey}`)}
        className="h-40 md:h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(241,196,15,0.5)]"
      />
      <span className="mt-4 bg-[#f1c40f] text-black font-extrabold px-6 py-1 rounded-sm text-sm tracking-wider uppercase shadow-lg group-hover:bg-yellow-400 transition-colors">
        {t(`products.${badgeKey}`)}
      </span>
    </div>
  );
}

export default function ProductsBanner() {
  const { t } = useTranslation();
  return (
    <section
      id="products"
      className="w-full flex flex-col"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative w-full py-16 bg-red-800/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-10 px-6">
          <div className="flex w-full justify-around sm:w-2/5">
            {PRODUCTS.slice(0, 2).map((p) => (
              <ProductItem key={p.id} src={p.src} badgeKey={p.badge} />
            ))}
          </div>
          <div className="flex flex-col items-center text-white">
            <GiBullHorns className="h-24 w-24 mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
            <span className="font-black text-5xl tracking-[0.2em] drop-shadow-lg">AQVO</span>
            <p className="text-sm mt-2 text-yellow-300 font-medium">{t('products.subtitle')}</p>
          </div>
          <div className="flex w-full justify-around sm:w-2/5">
            {PRODUCTS.slice(2, 4).map((p) => (
              <ProductItem key={p.id} src={p.src} badgeKey={p.badge} />
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 px-6 text-center text-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
        <div className="relative z-10">
          <h2 className="text-5xl font-black uppercase mb-8 drop-shadow-lg tracking-wider">
            {t('products.title')}
          </h2>
          <p className="max-w-3xl mx-auto text-lg opacity-95 leading-relaxed">
            {t('products.description')}
          </p>
        </div>
      </div>

      <div className="py-16 bg-black/40 backdrop-blur-md">
        <h3 className="text-center text-white text-3xl font-bold mb-10 tracking-wide">
          {t('certificates.title')}
        </h3>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {CERTIFICATES.map((cert, i) => (
            <div key={i} className="relative group">
              <img
                src={cert}
                alt={`Certificate ${i + 1}`}
                className="w-full h-auto rounded-lg shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
              />
              <div className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
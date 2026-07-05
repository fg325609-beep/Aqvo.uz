import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GiBullHorns } from 'react-icons/gi';
import ProductCard from './ProductCard.jsx';
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

export default function ProductsBanner() {
  const { t } = useTranslation();
  return (
    <section
      id="products"
      className="w-full relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative py-20 bg-gradient-to-b from-red-900/90 via-red-800/80 to-red-900/90 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-16 text-center"
          >
            <div className="flex items-center gap-4 mb-4">
              <GiBullHorns className="h-12 w-12 text-[#b89564] drop-shadow-lg" />
              <h2 className="font-display text-4xl sm:text-5xl font-black tracking-[0.15em] text-white drop-shadow-lg">
                AQVO
              </h2>
            </div>
            <p className="text-[#b89564] text-sm font-medium tracking-widest uppercase">
              {t('products.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} src={product.src} badgeKey={product.badge} index={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 px-6 text-center text-white bg-gradient-to-b from-black/50 to-black/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-black uppercase mb-6 drop-shadow-lg tracking-wider">
            {t('products.title')}
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg opacity-90 leading-relaxed">
            {t('products.description')}
          </p>
        </motion.div>
      </div>

      <div className="py-16 bg-black/50 backdrop-blur-md">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white text-2xl sm:text-3xl font-bold mb-10 tracking-wide"
        >
          {t('certificates.title')}
        </motion.h3>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6">
          {CERTIFICATES.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src={cert}
                alt={`Certificate ${i + 1}`}
                className="w-full h-auto transition-all duration-500"
              />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
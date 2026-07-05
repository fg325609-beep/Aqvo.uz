import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const GALLERY_TOP = [
  'src/components/img/jiz1.jpg', 'src/components/img/jiz2.jpg',
  'src/components/img/jiz3.jpg', 'src/components/img/myaco.jpg',
  'src/components/img/jiz3.jpg', 'src/components/img/myaco.jpg',
  'src/components/img/til.jpg', 'src/components/img/jiz4.jpg',
  'src/components/img/til.jpg', 'src/components/img/jiz4.jpg',
];

const GALLERY_BOTTOM = [
  'src/components/img/til.jpg', 'src/components/img/myaco.jpg',
  'src/components/img/jiz1.jpg', 'src/components/img/jiz2.jpg',
  'src/components/img/jiz1.jpg', 'src/components/img/jiz2.jpg',
  'src/components/img/jiz3.jpg', 'src/components/img/banner (2).jpg',
  'src/components/img/pamidor.jpg', 'src/components/img/qalampir.jpg',
  'src/components/img/pamidor.jpg', 'src/components/img/qalampir.jpg',
];

export default function Gallery() {
  const { t } = useTranslation();
  return (
    <section id="gallery" className="bg-gradient-to-b from-[#901717] to-[#7a1212] py-16 overflow-hidden w-full">
      <style>{`
        @keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-left { animation: scrollLeft 40s linear infinite; }
        .animate-right { animation: scrollRight 40s linear infinite; }
        .animate-left:hover, .animate-right:hover { animation-play-state: paused; }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 px-6"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white drop-shadow-lg">
          {t('gallery.title')}
        </h2>
        <p className="text-white/60 text-sm mt-2">{t('gallery.subtitle')}</p>
      </motion.div>

      <div className="flex w-full flex-col gap-6">
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-3 animate-left px-3">
            {[...GALLERY_TOP, ...GALLERY_TOP].map((src, i) => (
              <div key={`top-${i}`} className="relative group flex-shrink-0">
                <img
                  src={src}
                  alt="AQVO"
                  className="h-36 w-36 sm:h-44 sm:w-44 rounded-2xl object-cover shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full overflow-hidden">
          <div className="flex gap-3 animate-right px-3">
            {[...GALLERY_BOTTOM, ...GALLERY_BOTTOM].map((src, i) => (
              <div key={`bottom-${i}`} className="relative group flex-shrink-0">
                <img
                  src={src}
                  alt="AQVO"
                  className="h-36 w-36 sm:h-44 sm:w-44 rounded-2xl object-cover shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
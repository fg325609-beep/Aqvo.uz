import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const InstagramIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

export default function CTASection() {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-gradient-to-r from-[#901717] via-[#7a1212] to-[#901717] py-16 sm:py-20 text-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#b89564]/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row md:px-10 relative z-10"
      >
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-widest drop-shadow-lg">
            {t('cta.title')}
          </h2>
          <img
            src="src/components/img/aqvo_logo.png"
            alt="AQVO"
            className="mt-4 h-12 w-auto object-contain drop-shadow-xl"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            href="https://www.instagram.com/aqvo.uz/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium transition-all hover:bg-white hover:text-[#901717] hover:shadow-lg bg-white/5 backdrop-blur-sm"
          >
            <InstagramIcon />
            {t('cta.instagram')}
          </motion.a>
          <motion.a
            href="https://t.me/aqvo_uz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium transition-all hover:bg-white hover:text-[#901717] hover:shadow-lg bg-white/5 backdrop-blur-sm"
          >
            <Send className="h-4 w-4" />
            {t('cta.telegram')}
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
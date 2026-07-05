import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ProductCard({ src, badgeKey, index }) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-[#b89564]/40 transition-all"
    >
      <div className="relative overflow-hidden rounded-xl mb-4">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          src={src}
          alt={t(`products.${badgeKey}`)}
          className="w-full h-48 sm:h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="absolute top-3 left-3 bg-[#f1c40f] text-black font-extrabold px-3 py-1 rounded-lg text-xs tracking-wider uppercase shadow-lg">
          {t(`products.${badgeKey}`)}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white font-semibold text-sm">{t(`products.${badgeKey}`)}</h3>
          <p className="text-white/50 text-xs mt-0.5">AQVO</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-[#b89564] p-2.5 text-white shadow-lg hover:bg-[#a07f52] transition-colors"
          aria-label="Add to cart"
        >
          <ShoppingCart className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}
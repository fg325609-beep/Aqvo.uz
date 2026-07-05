import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ProductCard({ src, badgeKey, index }) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group relative bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-4 sm:p-5 border border-white/5 hover:border-[#b89564]/30 transition-all duration-500"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative overflow-hidden rounded-2xl mb-4 sm:mb-5 bg-gradient-to-b from-black/20 to-transparent">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          src={src}
          alt={t(`products.${badgeKey}`)}
          className="w-full h-48 sm:h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="absolute top-3 left-3 bg-gradient-to-r from-[#f1c40f] to-[#f39c12] text-black font-extrabold px-3 py-1 rounded-xl text-[10px] tracking-wider uppercase shadow-lg shadow-[#f1c40f]/20">
          {t(`products.${badgeKey}`)}
        </span>
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-md rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Star className="h-3 w-3 text-[#f1c40f]" fill="#f1c40f" />
          <span className="text-white text-[10px] font-medium">5.0</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <h3 className="text-white font-semibold text-sm sm:text-base group-hover:text-[#b89564] transition-colors duration-300">
            {t(`products.${badgeKey}`)}
          </h3>
          <p className="text-white/30 text-xs">AQVO</p>
          <p className="text-[#b89564] text-sm font-bold">280 000 UZS</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-2xl bg-gradient-to-r from-[#b89564] to-[#a07f52] p-3 text-white shadow-lg shadow-[#b89564]/20 hover:shadow-[#b89564]/40 transition-all duration-300"
          aria-label="Add to cart"
        >
          <ShoppingCart className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}
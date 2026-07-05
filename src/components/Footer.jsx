import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const InstagramIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="w-full bg-gradient-to-b from-[#3a1111] to-[#2a0a0a] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="src/components/img/aqvo_logo.png"
              alt="AQVO"
              className="h-10 w-auto object-contain drop-shadow-xl"
            />
            <p className="mt-4 text-white/50 text-xs leading-relaxed">
              {t('products.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{t('nav.contact')}</h4>
            <div className="space-y-2">
              <a href="tel:+998957724444" className="flex items-center gap-2 text-white/60 hover:text-white text-xs transition-colors">
                <Phone className="h-3.5 w-3.5" />
                +998957724444
              </a>
              <a href="tel:+998996440101" className="flex items-center gap-2 text-white/60 hover:text-white text-xs transition-colors">
                <Phone className="h-3.5 w-3.5" />
                +998996440101
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{t('nav.home')}</h4>
            <div className="space-y-2 text-white/60 text-xs">
              {['hero', 'products', 'about', 'gallery'].map((item) => (
                <a key={item} href={`#${item}`} className="block hover:text-white transition-colors">
                  {t(`nav.${item}`)}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Social</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/aqvo.uz/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#b89564] hover:text-white transition-all"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://t.me/aqvo_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#b89564] hover:text-white transition-all"
              >
                <Send className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 text-center">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} AQVO. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
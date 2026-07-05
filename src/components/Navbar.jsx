import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ShoppingBag } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'uz', label: 'UZB' },
  { code: 'en', label: 'ENG' },
  { code: 'ru', label: 'RUS' },
];

const NAV_ITEMS = [
  { key: 'home', href: '#hero' },
  { key: 'products', href: '#products' },
  { key: 'about', href: '#about' },
  { key: 'gallery', href: '#gallery' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#3a1111]/90 backdrop-blur-xl shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-md group-hover:blur-lg transition-all" />
              <img
                src="src/components/img/aqvo_logo.png"
                alt="AQVO"
                className="relative h-8 w-auto object-contain drop-shadow-xl"
              />
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item.key}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="text-sm font-medium text-white/80 hover:text-white transition-all relative group"
              >
                {t(`nav.${item.key}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b89564] transition-all group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-all px-3 py-1.5 rounded-lg hover:bg-white/5"
              >
                {LANGUAGES.find((l) => l.code === i18n.language)?.label || 'UZB'}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-28 rounded-xl bg-[#3a1111]/95 backdrop-blur-xl shadow-2xl border border-white/10 overflow-hidden"
                  >
                    {LANGUAGES.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { i18n.changeLanguage(l.code); setLangOpen(false); }}
                        className={`w-full px-4 py-2.5 text-sm text-left text-white/80 hover:text-white hover:bg-white/5 transition-all ${
                          i18n.language === l.code ? 'bg-white/10 text-white font-bold' : ''
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.a
              href="#order"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b89564] to-[#a07f52] px-6 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-[#b89564]/30 transition-shadow"
            >
              <ShoppingBag className="h-4 w-4" />
              {t('nav.contact')}
            </motion.a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-white p-2"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-[#3a1111]/95 backdrop-blur-xl shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <span className="font-bold text-lg text-white">AQVO</span>
                <button onClick={() => setMobileOpen(false)} className="text-white/70 hover:text-white p-1">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="px-6 py-6 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all text-sm font-medium"
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                ))}
              </div>

              <div className="px-6 py-6 border-t border-white/10">
                <p className="text-xs text-white/50 mb-3">{t('nav.language')}</p>
                <div className="flex gap-2">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { i18n.changeLanguage(l.code); setMobileOpen(false); }}
                      className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        i18n.language === l.code
                          ? 'bg-[#b89564] text-white'
                          : 'bg-white/5 text-white/70 hover:bg-white/10'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="px-6 py-6 border-t border-white/10">
                <a
                  href="#order"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-[#b89564] to-[#a07f52] px-6 py-3 text-sm font-semibold text-white shadow-lg"
                >
                  <ShoppingBag className="h-4 w-4" />
                  {t('nav.contact')}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ShoppingBag } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'uz', label: "O'zbek" },
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
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
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#2a0808]/95 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/5'
            : 'bg-gradient-to-b from-black/40 to-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-12 h-16 sm:h-20">
          <a href="#hero" className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#b89564]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="src/components/img/aqvo_logo.png"
              alt="AQVO"
              className="relative h-7 sm:h-8 w-auto object-contain drop-shadow-2xl"
            />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item.key}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                className="relative px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-all duration-300 group"
              >
                {t(`nav.${item.key}`)}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#b89564] to-[#d4a574] transition-all duration-300 group-hover:w-full rounded-full" />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white transition-all duration-300 px-3 py-2 rounded-xl hover:bg-white/5"
              >
                <span className="text-[10px] opacity-50">
                  {LANGUAGES.find((l) => l.code === i18n.language)?.label?.slice(0, 2)?.toUpperCase() || 'UZ'}
                </span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-36 rounded-2xl bg-[#1a0505]/95 backdrop-blur-2xl shadow-2xl border border-white/10 overflow-hidden"
                  >
                    {LANGUAGES.map((l, i) => (
                      <button
                        key={l.code}
                        onClick={() => { i18n.changeLanguage(l.code); setLangOpen(false); }}
                        className={`w-full px-4 py-3 text-sm text-left transition-all duration-200 ${
                          i18n.language === l.code
                            ? 'text-[#b89564] bg-[#b89564]/10 font-semibold'
                            : 'text-white/60 hover:text-white hover:bg-white/5'
                        } ${i !== LANGUAGES.length - 1 ? 'border-b border-white/5' : ''}`}
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
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#b89564] via-[#c9a475] to-[#a07f52] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#b89564]/20 hover:shadow-[#b89564]/40 transition-all duration-300"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              {t('nav.contact')}
            </motion.a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
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
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl"
            />
            <motion.aside
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-80 bg-gradient-to-b from-[#1a0505] to-[#2a0808] shadow-2xl border-l border-white/5"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                <img src="src/components/img/aqvo_logo.png" alt="AQVO" className="h-6 w-auto" />
                <button onClick={() => setMobileOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white/60 hover:text-white transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="px-4 py-6 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3.5 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 text-sm font-medium"
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                ))}
              </div>

              <div className="px-4 py-6 border-t border-white/5">
                <p className="text-[10px] text-white/30 uppercase tracking-widest mb-3 px-4">{t('nav.language')}</p>
                <div className="space-y-1 px-4">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { i18n.changeLanguage(l.code); setMobileOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                        i18n.language === l.code
                          ? 'bg-[#b89564]/10 text-[#b89564] font-semibold'
                          : 'text-white/50 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="px-4 py-6 border-t border-white/5">
                <a
                  href="#order"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-[#b89564] to-[#a07f52] px-6 py-3.5 text-sm font-semibold text-white shadow-lg"
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
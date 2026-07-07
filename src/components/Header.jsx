import React, { useState, useEffect } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { MdArrowDropDown } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'uz', label: 'UZ' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((o) => !o);
  const changeLang = (code) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  return (
    <>
      <header className={`fixed left-0 top-0 z-50 w-full px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
        scrolled
          ? 'bg-[#2a0808]/95 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/5 pt-2 pb-2'
          : 'bg-transparent pt-6'
      }`}>
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-[#3a1111]/90 backdrop-blur-md px-6 py-2.5 shadow-xl"
          aria-label={t('nav.home')}
        >
          <div className="hidden flex-1 items-center gap-8 md:flex">
            <a href="#hero" className="text-[15px] font-medium text-white/90 transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              {t('nav.home')}
            </a>
            <a href="#about" className="text-[15px] font-medium text-white/90 transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              {t('nav.about')}
            </a>
            <a href="#products" className="text-[15px] font-medium text-white/90 transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              {t('nav.products')}
            </a>
            <a href="#gallery" className="text-[15px] font-medium text-white/90 transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              {t('nav.gallery')}
            </a>
          </div>

          <a
            href="#hero"
            className="flex flex-shrink-0 items-center justify-center transition-transform hover:scale-105"
            title="AQVO"
            aria-label="AQVO"
          >
            <img
              src="src/components/img/aqvo_logo.png"
              alt="AQVO"
              className="h-8 w-auto object-contain drop-shadow-md"
            />
          </a>

          <div className="hidden flex-1 items-center justify-end gap-6 md:flex">
            <div className="relative">
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-0.5 text-[15px] font-medium text-white/90 transition-all hover:text-white"
                aria-label={t('nav.language')}
              >
                {LANGUAGES.find((l) => l.code === i18n.language)?.label || 'UZ'}
                <MdArrowDropDown className={`h-5 w-5 transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-24 rounded-lg bg-[#3a1111] shadow-xl border border-white/10 overflow-hidden">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => changeLang(l.code)}
                      className={`w-full px-4 py-2 text-sm text-left text-white hover:bg-white/10 transition-colors ${i18n.language === l.code ? 'bg-white/10 font-bold' : ''}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#order"
              className="rounded-full bg-[#b89564] px-8 py-2 text-[15px] font-semibold text-white transition-all hover:bg-[#a07f52] hover:shadow-lg hover:shadow-[#b89564]/30"
            >
              {t('nav.contact')}
            </a>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex flex-1 justify-end items-center rounded-md p-2 text-white md:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <HiX className="h-7 w-7" /> : <HiOutlineMenu className="h-7 w-7" />}
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
        aria-hidden="true"
      />

      <aside
        id="mobile-drawer-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-y-0 right-0 z-50 w-72 bg-[#3a1111]/95 backdrop-blur-md shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <span className="font-display text-lg font-bold text-white drop-shadow-md">{t('nav.home')}</span>
          <button
            type="button"
            onClick={toggleMenu}
            className="rounded-md p-1 text-white hover:bg-white/10 focus:outline-none transition-colors"
            aria-label="Close"
          >
            <HiX className="h-6 w-6" />
          </button>
        </div>

        <ul className="flex flex-col px-6 py-6 space-y-4">
          {[
            { href: '#hero', label: t('nav.home') },
            { href: '#about', label: t('nav.about') },
            { href: '#products', label: t('nav.products') },
            { href: '#gallery', label: t('nav.gallery') },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block text-lg font-medium text-white transition-all hover:text-gray-300 hover:translate-x-1"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-4 flex items-center justify-between border-t border-white/10">
            <span className="text-white">{t('nav.language')}:</span>
            <div className="flex gap-2">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { changeLang(l.code); toggleMenu(); }}
                  className={`text-sm px-2 py-1 rounded transition-colors ${
                    i18n.language === l.code ? 'bg-white/20 text-white font-bold' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </li>
          <li className="pt-4">
            <a
              href="#order"
              className="flex w-full justify-center rounded-full bg-[#b89564] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#a07f52] hover:shadow-lg"
              onClick={toggleMenu}
            >
              {t('nav.contact')}
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}

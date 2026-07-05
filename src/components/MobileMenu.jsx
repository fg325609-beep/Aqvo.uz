import React from 'react';
import { HiX } from 'react-icons/hi';
import { GiBullHorns } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'uz', label: 'UZ' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
];

export default function MobileMenu({ isOpen, onClose }) {
  const { t, i18n } = useTranslation();

  const NAV_LINKS = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.products'), href: '#products' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#order' },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        id="mobile-drawer-menu"
        className={`fixed right-0 top-0 z-50 h-full w-64 max-w-[80vw] transform bg-gray-100 text-brand-dark shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between border-b border-gray-300 px-5 py-4">
          <span className="flex items-center gap-2 font-display text-lg font-extrabold">
            <GiBullHorns className="h-6 w-6 text-brand" aria-hidden="true" />
            AQVO
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-brand-dark"
            aria-label="Close menu"
          >
            <HiX className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <ul className="flex flex-col gap-1 px-5 py-4 text-sm font-semibold">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={onClose}
                className="block rounded-md px-2 py-3 transition-colors hover:bg-brand/10"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-2 flex gap-2 px-5" role="group" aria-label="Language selection">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => { i18n.changeLanguage(lang.code); onClose(); }}
              className={`rounded-md border px-3 py-1.5 text-xs font-bold transition-colors ${
                i18n.language === lang.code
                  ? 'bg-brand text-white border-brand'
                  : 'border-gray-300 bg-white text-brand-dark hover:bg-brand hover:text-white'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { GiBullHorns } from 'react-icons/gi';

const NAV_LINKS = [
  { label: "Bosh sahifa", href: "#hero" },
  { label: "Mahsulotlar", href: "#products" },
  { label: "Brend haqida", href: "#about" },
  { label: "Sertifikatlar", href: "#certificates" },
];

export default function Header({ isMenuOpen, onToggleMenu }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-brand-dark text-white shadow-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Asosiy navigatsiya"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 font-display text-xl font-extrabold tracking-wide"
          aria-label="AQVO — bosh sahifaga qaytish"
          title="AQVO bosh sahifasi"
        >
          <GiBullHorns className="h-7 w-7 text-accent" aria-hidden="true" />
          AQVO
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-accent"
                title={link.label}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* CTA button - desktop */}
          <a
            href="#order"
            className="hidden rounded-full bg-white/10 px-5 py-2 text-sm font-semibold ring-1 ring-white/40 transition-colors hover:bg-white hover:text-brand-dark sm:inline-block"
            title="Biz bilan bog'lanish"
            aria-label="Biz bilan bog'lanish"
          >
            Bog'lanish
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={onToggleMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
            aria-label={isMenuOpen ? "Menyuni yopish" : "Menyuni ochish"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-drawer-menu"
            title={isMenuOpen ? "Menyuni yopish" : "Menyuni ochish"}
          >
            <HiOutlineMenu className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
}

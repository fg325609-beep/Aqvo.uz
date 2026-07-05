import React, { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { MdArrowDropDown } from 'react-icons/md';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="absolute left-0 top-6 z-40 w-full px-4 sm:px-6 lg:px-8">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-[#3a1111]/90 backdrop-blur-md px-6 py-2.5 shadow-xl"
          aria-label="Asosiy navigatsiya"
        >
          {/* Chap tomon: Menyular (Desktop) */}
          <div className="hidden flex-1 items-center gap-8 md:flex">
            <a
              href="#hero"
              className="text-[15px] font-medium text-white/90 transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            >
              Bosh sahifa
            </a>
            <a
              href="#about"
              className="text-[15px] font-medium text-white/90 transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            >
              Biz haqimizda
            </a>
            <a
              href="#products"
              className="text-[15px] font-medium text-white/90 transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            >
              Mahsulotlar
            </a>
            <a
              href="#gallery"
              className="text-[15px] font-medium text-white/90 transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            >
              Galereya
            </a>
          </div>

          {/* Markaz: Rasm Logotip */}
          <a
            href="#hero"
            className="flex flex-shrink-0 items-center justify-center transition-transform hover:scale-105"
            title="AQVO bosh sahifasi"
            aria-label="AQVO — bosh sahifaga qaytish"
          >
            <img
              src="src/components/img/aqvo_logo.png"
              alt="AQVO Brend Logotipi"
              className="h-8 w-auto object-contain drop-shadow-md"
            />
          </a>

          {/* O'ng tomon: Til va Bog'lanish tugmasi (Desktop) */}
          <div className="hidden flex-1 items-center justify-end gap-6 md:flex">
            {/* Til tanlash */}
            <button className="flex items-center gap-0.5 text-[15px] font-medium text-white/90 transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              UZB <MdArrowDropDown className="h-5 w-5" />
            </button>

            {/* Bog'lanish tugmasi */}
            <a
              href="#order"
              className="rounded-full bg-[#b89564] px-8 py-2 text-[15px] font-semibold text-white transition-all hover:bg-[#a07f52] hover:shadow-lg hover:shadow-[#b89564]/30"
            >
              Bog'lanish
            </a>
          </div>

          {/* Mobil menyu ochish tugmasi */}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex flex-1 justify-end items-center rounded-md p-2 text-white md:hidden"
            aria-label="Menyuni ochish"
          >
            <HiOutlineMenu className="h-7 w-7" aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* --- MOBILE MODAL (DRAWER) QISMI --- */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
        aria-hidden="true"
      />

      <div
        id="mobile-drawer-menu"
        className={`fixed inset-y-0 right-0 z-50 w-72 bg-[#3a1111]/95 backdrop-blur-md shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <span className="font-display text-lg font-bold text-white drop-shadow-md">Menyu</span>
          <button
            type="button"
            onClick={toggleMenu}
            className="rounded-md p-1 text-white hover:bg-white/10 focus:outline-none transition-colors"
          >
            <HiX className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <ul className="flex flex-col px-6 py-6 space-y-4">
          <li>
            <a
              href="#hero"
              className="block text-lg font-medium text-white transition-all hover:text-gray-300 hover:translate-x-1"
              onClick={toggleMenu}
            >
              Bosh sahifa
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-lg font-medium text-white transition-all hover:text-gray-300 hover:translate-x-1"
              onClick={toggleMenu}
            >
              Biz haqimizda
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="block text-lg font-medium text-white transition-all hover:text-gray-300 hover:translate-x-1"
              onClick={toggleMenu}
            >
              Mahsulotlar
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="block text-lg font-medium text-white transition-all hover:text-gray-300 hover:translate-x-1"
              onClick={toggleMenu}
            >
              Galereya
            </a>
          </li>
          <li className="pt-4 flex items-center justify-between border-t border-white/10">
            <span className="text-white">Til:</span>
            <button className="flex items-center gap-1 text-white font-medium">
              UZB <MdArrowDropDown className="h-5 w-5" />
            </button>
          </li>
          <li className="pt-4">
            <a
              href="#order"
              className="flex w-full justify-center rounded-full bg-[#b89564] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#a07f52] hover:shadow-lg"
              onClick={toggleMenu}
            >
              Bog'lanish
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
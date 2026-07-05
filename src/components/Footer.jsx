import React from 'react';
import { GiBullHorns } from 'react-icons/gi';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand px-4 py-6 text-center text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 text-xs sm:flex-row sm:justify-between sm:text-sm">
        <a
          href="#hero"
          className="flex items-center gap-1.5 font-display font-bold"
          aria-label="AQVO — bosh sahifaga qaytish"
          title="AQVO bosh sahifasi"
        >
          <GiBullHorns className="h-4 w-4" aria-hidden="true" />
          AQVO
        </a>
        <p>
          &copy; {year} AQVO. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
}

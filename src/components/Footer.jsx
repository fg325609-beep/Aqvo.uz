import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="w-full bg-[#3a1111] py-8 text-center text-white/70 text-sm">
      <p>&copy; {new Date().getFullYear()} AQVO. {t('footer.rights')}</p>
    </footer>
  );
}
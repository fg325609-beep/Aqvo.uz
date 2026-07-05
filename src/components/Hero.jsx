import React, { useState } from 'react';
import { HiX } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { sendToTelegram } from '../telegram.js';

const REGIONS = ['tashkent', 'samarkand', 'bukhara', 'fergana', 'namangan', 'andijan', 'khorezm', 'surkhandarya', 'kashkadarya'];
const SERVICES = ['delivery', 'pickup'];

export default function HeroSection() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', phone: '', telegram: '', region: '', service: '', message: '',
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setNotification(null);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNotification(null);
    try {
      await sendToTelegram(formData, "Hero modal");
      setNotification({ type: 'success', message: t('modal.success') });
      setFormData({ firstName: '', lastName: '', phone: '', telegram: '', region: '', service: '', message: '' });
    } catch {
      setNotification({ type: 'error', message: t('modal.error') });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes scrollText { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
        .animate-scroll { display: inline-block; animation: scrollText 20s linear infinite; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.5s ease-out; }
      `}</style>

      <section
        id="hero"
        className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#901717] pt-20"
      >
        <div className="w-full overflow-hidden whitespace-nowrap">
          <h1 className="animate-scroll font-display text-[8rem] font-black uppercase tracking-widest text-white md:text-[12rem] lg:text-[16rem]">
            {t('hero.title')}
          </h1>
        </div>

        <div className="absolute bottom-10 left-0 flex w-full max-w-7xl items-end justify-between px-6 sm:px-10 lg:px-16">
          <div className="max-w-md text-sm font-medium leading-relaxed text-white/90 sm:text-base">
            <p>{t('hero.description')}</p>
          </div>

          <button
            onClick={toggleModal}
            className="group flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border border-white/40 bg-[#4a0b0b] transition-all hover:scale-105 hover:bg-[#3a0808] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] sm:h-24 sm:w-24"
            aria-label={t('hero.orderButton')}
            title={t('hero.orderButton')}
          >
            <img
              src="src/components/img/madal logo.png"
              alt="AQVO"
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12"
            />
          </button>
        </div>
      </section>

      <div
        role="dialog"
        aria-modal="true"
        aria-label={t('modal.title')}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-md transition-opacity duration-300 ${
          isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={(e) => { if (e.target === e.currentTarget && !loading) toggleModal(); }}
      >
        <div
          className={`relative w-full max-w-3xl rounded-lg bg-gray-600/95 p-6 shadow-2xl transition-all duration-300 sm:p-10 ${
            isModalOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
          }`}
        >
          <button
            onClick={toggleModal}
            disabled={loading}
            className="absolute right-4 top-4 text-white transition-colors hover:text-gray-300 disabled:opacity-50"
            aria-label="Close"
          >
            <HiX className="h-7 w-7" />
          </button>

          <div className="mb-4 flex flex-col items-center justify-center border-b border-white/10 pb-4">
            <img
              src="src/components/img/madal logo.png"
              alt="AQVO"
              className="h-16 w-auto object-contain drop-shadow-md sm:h-20"
            />
          </div>

          {notification && (
            <div
              className={`mb-4 p-4 rounded-md text-center font-medium animate-fade-in-up ${
                notification.type === 'success'
                  ? 'bg-green-500/20 text-green-200 border border-green-400/40'
                  : 'bg-red-500/20 text-red-200 border border-red-400/40'
              }`}
              role="alert"
            >
              {notification.message}
            </div>
          )}

          <form className="mt-4 flex flex-col gap-8" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col">
                <input
                  type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                  placeholder={t('modal.firstName')}
                  className="border-b border-white/50 bg-transparent py-2 text-white placeholder-white/70 focus:border-white focus:outline-none"
                  required disabled={loading}
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                  placeholder={t('modal.lastName')}
                  className="border-b border-white/50 bg-transparent py-2 text-white placeholder-white/70 focus:border-white focus:outline-none"
                  required disabled={loading}
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="tel" name="phone" value={formData.phone} onChange={handleChange}
                  placeholder={t('modal.phone')}
                  className="border-b border-white/50 bg-transparent py-2 text-white placeholder-white/70 focus:border-white focus:outline-none"
                  required disabled={loading}
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text" name="telegram" value={formData.telegram} onChange={handleChange}
                  placeholder={t('modal.telegram')}
                  className="border-b border-white/50 bg-transparent py-2 text-white placeholder-white/70 focus:border-white focus:outline-none"
                  disabled={loading}
                />
              </div>
              <div className="flex flex-col">
                <select
                  name="region" value={formData.region} onChange={handleChange}
                  className="border-b border-white/50 bg-transparent py-2 text-white focus:border-white focus:outline-none [&>option]:bg-gray-700 [&>option]:text-white"
                  required disabled={loading}
                >
                  <option value="" disabled>{t('modal.region')}</option>
                  {REGIONS.map((r) => (
                    <option key={r} value={r}>{t(`regions.${r}`)}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <select
                  name="service" value={formData.service} onChange={handleChange}
                  className="border-b border-white/50 bg-transparent py-2 text-white focus:border-white focus:outline-none [&>option]:bg-gray-700 [&>option]:text-white"
                  required disabled={loading}
                >
                  <option value="" disabled>{t('modal.service')}</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{t(`services.${s}`)}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <textarea
                name="message" value={formData.message} onChange={handleChange}
                placeholder={t('modal.message')} rows="4"
                className="resize-none rounded-md border border-white/50 bg-transparent p-3 text-white placeholder-white/70 focus:border-white focus:outline-none"
                disabled={loading}
              />
            </div>

            <button
              type="submit" disabled={loading}
              className="mt-2 w-full rounded-md bg-[#e5801a] py-3.5 text-lg font-bold text-white transition-all hover:bg-[#cf7112] focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading && (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              )}
              {loading ? t('modal.sending') : t('modal.submit')}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
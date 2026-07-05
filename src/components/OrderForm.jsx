import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { sendToTelegram } from '../telegram.js';
import bgImage from './img/bg rasm.jpg';

const REGIONS = ['tashkent', 'samarkand', 'bukhara', 'fergana', 'namangan'];
const SERVICES = ['delivery', 'pickup'];

export default function OrderForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '', surname: '', phone: '', telegram: '', region: '', service: '', message: '',
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNotification(null);
    try {
      await sendToTelegram(formData, "OrderForm");
      setNotification({ type: 'success', message: t('modal.success') });
      setFormData({ name: '', surname: '', phone: '', telegram: '', region: '', service: '', message: '' });
    } catch {
      setNotification({ type: 'error', message: t('modal.error') });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="order"
      className="relative w-full py-20 px-6"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row items-center relative z-10">
        <div className="flex-1 text-white">
          <h2 className="text-3xl font-bold uppercase leading-tight md:text-4xl drop-shadow-lg">
            {t('order.title')}
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-gray-200 md:text-base">
            {t('order.description')}
          </p>
          <div className="mt-8 text-sm text-white space-y-1">
            <p className="font-semibold text-yellow-300/90">{t('order.contactLabel')}</p>
            <p className="font-semibold">📞 Tel: +998957724444</p>
            <p className="font-semibold">📞 Tel: +998996440101</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <span className="text-yellow-300">🕐</span>
              <span className="text-xs">{t('order.hours')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <span className="text-yellow-300">🚚</span>
              <span className="text-xs">{t('order.freeDelivery')}</span>
            </div>
          </div>
        </div>

        <form
          className="flex w-full flex-1 flex-col gap-6 bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
          onSubmit={handleSubmit}
          noValidate
        >
          {notification && (
            <div
              className={`p-4 rounded-md text-center font-medium animate-fade-in-up ${
                notification.type === 'success'
                  ? 'bg-green-500/20 text-green-200 border border-green-400/40'
                  : 'bg-red-500/20 text-red-200 border border-red-400/40'
              }`}
              role="alert"
            >
              {notification.message}
            </div>
          )}

          <style>{`
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            .animate-fade-in-up { animation: fadeInUp 0.4s ease-out; }
          `}</style>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <input
              name="name" value={formData.name} onChange={handleChange}
              placeholder={t('order.name')}
              className="bg-transparent border-b border-white/50 py-2 text-white outline-none placeholder:text-gray-300 focus:border-yellow-300 transition-colors"
              required disabled={loading}
            />
            <input
              name="surname" value={formData.surname} onChange={handleChange}
              placeholder={t('order.surname')}
              className="bg-transparent border-b border-white/50 py-2 text-white outline-none placeholder:text-gray-300 focus:border-yellow-300 transition-colors"
              required disabled={loading}
            />
            <input
              name="phone" value={formData.phone} onChange={handleChange}
              placeholder={t('order.phone')}
              className="bg-transparent border-b border-white/50 py-2 text-white outline-none placeholder:text-gray-300 focus:border-yellow-300 transition-colors"
              required disabled={loading}
            />
            <input
              name="telegram" value={formData.telegram} onChange={handleChange}
              placeholder={t('order.telegram')}
              className="bg-transparent border-b border-white/50 py-2 text-white outline-none placeholder:text-gray-300 focus:border-yellow-300 transition-colors"
              disabled={loading}
            />
            <select
              name="region" value={formData.region} onChange={handleChange}
              className="bg-transparent border-b border-white/50 py-2 text-white outline-none focus:border-yellow-300 transition-colors [&>option]:text-black"
              required disabled={loading}
            >
              <option value="" disabled>{t('order.region')}</option>
              {REGIONS.map((r) => (
                <option key={r} value={r}>{t(`regions.${r}`)}</option>
              ))}
            </select>
            <select
              name="service" value={formData.service} onChange={handleChange}
              className="bg-transparent border-b border-white/50 py-2 text-white outline-none focus:border-yellow-300 transition-colors [&>option]:text-black"
              required disabled={loading}
            >
              <option value="" disabled>{t('order.service')}</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>{t(`services.${s}`)}</option>
              ))}
            </select>
          </div>

          <textarea
            name="message" value={formData.message} onChange={handleChange}
            rows="4" placeholder={t('order.message')}
            className="bg-transparent border border-white/50 p-3 text-white outline-none placeholder:text-gray-300 rounded-md focus:border-yellow-300 transition-colors resize-none"
            disabled={loading}
          />

          <button
            type="submit" disabled={loading}
            className="w-full bg-[#e67e22] py-3 text-white font-bold rounded hover:bg-[#d35400] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
          >
            {loading && (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            )}
            {loading ? t('order.sending') : t('order.submit')}
          </button>
        </form>
      </div>
    </section>
  );
}
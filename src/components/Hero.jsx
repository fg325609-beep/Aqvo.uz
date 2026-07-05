import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { sendToTelegram } from '../telegram.js';

const REGIONS = ['tashkent', 'samarkand', 'bukhara', 'fergana', 'namangan', 'andijan', 'khorezm', 'surkhandarya', 'kashkadarya'];
const SERVICES = ['delivery', 'pickup'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', phone: '', telegram: '', region: '', service: '', message: '',
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNotification(null);
    try {
      await sendToTelegram(formData, 'Hero modal');
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
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full bg-gradient-to-br from-[#901717] via-[#7a1212] to-[#5c0d0d]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#b89564]/[0.05] rounded-full blur-3xl" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center justify-center w-full px-5 sm:px-6 text-center"
        >
          <motion.div variants={itemVariants} className="mb-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#b89564] text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase backdrop-blur-sm">
              AQVO
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-wide text-white leading-[1.1] sm:leading-none"
          >
            Tabiiy mahsulotlar!
            <br />
            <span className="text-[#b89564]">Sifat va ishonch!</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 sm:mt-6 max-w-lg mx-auto text-white/50 text-xs sm:text-sm md:text-base leading-relaxed px-2"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 sm:mt-10 w-full max-w-[280px] sm:max-w-xs mx-auto">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#b89564] to-[#a07f52] px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-2xl hover:shadow-[#b89564]/40 transition-shadow active:scale-[0.98]"
            >
              <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
              {t('hero.orderButton')}
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-12 flex items-center gap-6 sm:gap-8 text-white/30"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#b89564]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-widest">O'zbekiston</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#b89564]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-widest">Tabiiy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#b89564]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-widest">Sifatli</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-white/15 flex items-start justify-center pt-1.5 sm:pt-2"
          >
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white/30" />
          </motion.div>
        </motion.div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-md"
            onClick={(e) => { if (e.target === e.currentTarget && !loading) setIsModalOpen(false); }}
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="relative w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl bg-gradient-to-b from-gray-700 to-gray-800 p-5 sm:p-8 shadow-2xl border-t sm:border border-white/10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                disabled={loading}
                className="absolute right-3 top-3 sm:right-4 sm:top-4 text-white/50 hover:text-white transition-colors disabled:opacity-50 z-10"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              <div className="mb-5 sm:mb-6 text-center pt-2">
                <img
                  src="src/components/img/madal logo.png"
                  alt="AQVO"
                  className="h-12 sm:h-14 w-auto mx-auto object-contain drop-shadow-xl"
                />
                <p className="text-white/50 text-[10px] sm:text-xs mt-2 uppercase tracking-widest">
                  {t('modal.title')}
                </p>
              </div>

              <AnimatePresence>
                {notification && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mb-3 sm:mb-4 p-3 sm:p-3.5 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-2.5 ${
                      notification.type === 'success'
                        ? 'bg-green-500/15 text-green-200 border border-green-400/30'
                        : 'bg-red-500/15 text-red-200 border border-red-400/30'
                    }`}
                    role="alert"
                  >
                    {notification.type === 'success' ? <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" /> : <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />}
                    <span>{notification.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} noValidate className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  {[
                    { name: 'firstName', type: 'text', placeholder: t('modal.firstName'), required: true },
                    { name: 'lastName', type: 'text', placeholder: t('modal.lastName'), required: true },
                    { name: 'phone', type: 'tel', placeholder: t('modal.phone'), required: true },
                    { name: 'telegram', type: 'text', placeholder: t('modal.telegram'), required: false },
                  ].map((field) => (
                    <input
                      key={field.name}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      disabled={loading}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#b89564] focus:ring-1 focus:ring-[#b89564]/30 transition-all"
                    />
                  ))}
                  <select
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-sm text-white focus:outline-none focus:border-[#b89564] focus:ring-1 focus:ring-[#b89564]/30 transition-all [&>option]:bg-gray-700"
                  >
                    <option value="" disabled>{t('modal.region')}</option>
                    {REGIONS.map((r) => (
                      <option key={r} value={r}>{t(`regions.${r}`)}</option>
                    ))}
                  </select>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-sm text-white focus:outline-none focus:border-[#b89564] focus:ring-1 focus:ring-[#b89564]/30 transition-all [&>option]:bg-gray-700"
                  >
                    <option value="" disabled>{t('modal.service')}</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{t(`services.${s}`)}</option>
                    ))}
                  </select>
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('modal.message')}
                  rows={3}
                  disabled={loading}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 sm:px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#b89564] focus:ring-1 focus:ring-[#b89564]/30 transition-all resize-none"
                />

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.01 } : {}}
                  whileTap={!loading ? { scale: 0.99 } : {}}
                  className="w-full rounded-xl bg-gradient-to-r from-[#e5801a] to-[#cf7112] py-3.5 text-sm font-bold text-white shadow-lg hover:shadow-[#e5801a]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t('modal.sending')}
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-4 w-4" />
                      {t('modal.submit')}
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
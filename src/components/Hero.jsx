import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, CheckCircle, AlertCircle, Loader2, Sparkles, Shield, Leaf } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { sendToTelegram } from '../telegram.js';

const REGIONS = ['tashkent', 'samarkand', 'bukhara', 'fergana', 'namangan', 'andijan', 'khorezm', 'surkhandarya', 'kashkadarya'];
const SERVICES = ['delivery', 'pickup'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
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
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7a0e0e] via-[#901717] to-[#4a0808]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(184,149,100,0.08)_0%,transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#b89564]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-white/5 rounded-full blur-[100px]" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center justify-center w-full px-5 sm:px-6 text-center"
        >
          <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#b89564] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-md shadow-lg">
              <Sparkles className="h-3 w-3" />
              AQVO
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-wide text-white leading-[1.1] sm:leading-none drop-shadow-2xl"
          >
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Tabiiy mahsulotlar!
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#b89564] via-[#d4a574] to-[#c9a475] bg-clip-text text-transparent">
              Sifat va ishonch!
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 sm:mt-6 max-w-lg mx-auto text-white/40 text-xs sm:text-sm md:text-base leading-relaxed px-2"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 sm:mt-10 w-full max-w-[280px] sm:max-w-xs mx-auto">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group relative w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#b89564] via-[#c9a475] to-[#a07f52] px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-2xl shadow-[#b89564]/20 hover:shadow-[#b89564]/40 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
              <span className="relative z-10">{t('hero.orderButton')}</span>
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-12 flex items-center gap-6 sm:gap-10"
          >
            {[
              { icon: Shield, label: "O'zbekiston" },
              { icon: Leaf, label: 'Tabiiy' },
              { icon: Sparkles, label: 'Sifatli' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/30 group cursor-default">
                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#b89564]/10 transition-colors duration-300">
                  <item.icon className="h-3 w-3 text-white/40 group-hover:text-[#b89564] transition-colors duration-300" />
                </div>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest group-hover:text-white/50 transition-colors duration-300">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-white/10 flex items-start justify-center pt-1.5 sm:pt-2"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white/30"
            />
          </motion.div>
        </motion.div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-xl"
            onClick={(e) => { if (e.target === e.currentTarget && !loading) setIsModalOpen(false); }}
          >
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="relative w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl bg-gradient-to-b from-[#2a0a0a] to-[#1a0505] p-6 sm:p-8 shadow-2xl border-t sm:border border-white/5 max-h-[90vh] overflow-y-auto"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b89564]/30 to-transparent" />

              <button
                onClick={() => setIsModalOpen(false)}
                disabled={loading}
                className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all disabled:opacity-50"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="mb-6 text-center pt-2">
                <div className="relative inline-flex">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#b89564]/20 to-transparent rounded-full blur-xl" />
                  <img src="src/components/img/madal logo.png" alt="AQVO" className="relative h-14 sm:h-16 w-auto mx-auto object-contain drop-shadow-2xl" />
                </div>
                <p className="text-white/30 text-[10px] sm:text-xs mt-3 uppercase tracking-[0.2em]">{t('modal.title')}</p>
              </div>

              <AnimatePresence>
                {notification && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mb-4 p-3.5 rounded-2xl text-xs sm:text-sm font-medium flex items-center gap-3 ${
                      notification.type === 'success'
                        ? 'bg-green-500/10 text-green-200 border border-green-500/20'
                        : 'bg-red-500/10 text-red-200 border border-red-500/20'
                    }`}
                    role="alert"
                  >
                    {notification.type === 'success' ? <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" /> : <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />}
                    <span>{notification.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} noValidate className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                      className="w-full bg-white/5 border border-white/5 rounded-2xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#b89564]/50 focus:bg-white/5 focus:ring-1 focus:ring-[#b89564]/20 transition-all duration-300"
                    />
                  ))}
                  <select
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#b89564]/50 focus:ring-1 focus:ring-[#b89564]/20 transition-all duration-300 [&>option]:bg-[#1a0505]"
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
                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#b89564]/50 focus:ring-1 focus:ring-[#b89564]/20 transition-all duration-300 [&>option]:bg-[#1a0505]"
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
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#b89564]/50 focus:ring-1 focus:ring-[#b89564]/20 transition-all duration-300 resize-none"
                />

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.01, y: -1 } : {}}
                  whileTap={!loading ? { scale: 0.99 } : {}}
                  className="w-full rounded-2xl bg-gradient-to-r from-[#b89564] via-[#c9a475] to-[#a07f52] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#b89564]/20 hover:shadow-[#b89564]/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
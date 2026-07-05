import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, Phone, Clock, Truck } from 'lucide-react';
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

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNotification(null);
    try {
      await sendToTelegram(formData, 'OrderForm');
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
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-tight drop-shadow-lg">
              {t('order.title')}
            </h2>
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-gray-200">
              {t('order.description')}
            </p>

            <div className="mt-8 space-y-3">
              <p className="font-semibold text-[#b89564] text-sm">{t('order.contactLabel')}</p>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="h-4 w-4 text-[#b89564]" />
                <span className="font-medium">+998957724444</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="h-4 w-4 text-[#b89564]" />
                <span className="font-medium">+998996440101</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <Clock className="h-3.5 w-3.5 text-[#b89564]" />
                <span className="text-xs text-white/80">{t('order.hours')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <Truck className="h-3.5 w-3.5 text-[#b89564]" />
                <span className="text-xs text-white/80">{t('order.freeDelivery')}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl"
            >
              <AnimatePresence>
                {notification && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mb-4 p-4 rounded-xl text-sm font-medium flex items-center gap-3 ${
                      notification.type === 'success'
                        ? 'bg-green-500/15 text-green-200 border border-green-400/30'
                        : 'bg-red-500/15 text-red-200 border border-red-400/30'
                    }`}
                    role="alert"
                  >
                    {notification.type === 'success' ? <CheckCircle className="h-5 w-5 flex-shrink-0" /> : <AlertCircle className="h-5 w-5 flex-shrink-0" />}
                    {notification.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'name', placeholder: t('order.name'), required: true },
                  { name: 'surname', placeholder: t('order.surname'), required: true },
                  { name: 'phone', placeholder: t('order.phone'), required: true },
                  { name: 'telegram', placeholder: t('order.telegram'), required: false },
                ].map((field) => (
                  <input
                    key={field.name}
                    type={field.name === 'phone' ? 'tel' : 'text'}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required={field.required}
                    disabled={loading}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#b89564] focus:ring-1 focus:ring-[#b89564]/30 transition-all text-sm"
                  />
                ))}
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b89564] focus:ring-1 focus:ring-[#b89564]/30 transition-all text-sm [&>option]:bg-gray-700"
                >
                  <option value="" disabled>{t('order.region')}</option>
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
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b89564] focus:ring-1 focus:ring-[#b89564]/30 transition-all text-sm [&>option]:bg-gray-700"
                >
                  <option value="" disabled>{t('order.service')}</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{t(`services.${s}`)}</option>
                  ))}
                </select>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('order.message')}
                rows={3}
                disabled={loading}
                className="w-full mt-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#b89564] focus:ring-1 focus:ring-[#b89564]/30 transition-all text-sm resize-none"
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? { scale: 1.01 } : {}}
                whileTap={!loading ? { scale: 0.99 } : {}}
                className="w-full mt-4 rounded-xl bg-gradient-to-r from-[#e67e22] to-[#d35400] py-3.5 text-sm font-bold text-white shadow-lg hover:shadow-[#e67e22]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t('order.sending')}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {t('order.submit')}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Leaf, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FEATURES = [
  { icon: Shield, key: 'quality' },
  { icon: Leaf, key: 'natural' },
  { icon: Award, key: 'certified' },
];

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-brand-dark to-[#4a0e0e] py-20 sm:py-28">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1600&q=60"
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/95" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wide text-white leading-tight">
              {t('about.title')}
            </h2>
            <div className="w-20 h-1 bg-[#b89564] mt-6 mb-8 rounded-full" />
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              {t('about.description')}
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {FEATURES.map((feature, i) => (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/5"
                >
                  <feature.icon className="h-5 w-5 text-[#b89564] flex-shrink-0" />
                  <span className="text-white/70 text-xs font-medium uppercase tracking-wider">
                    {t(`about.${feature.key}`)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=800&q=80"
                alt="AQVO"
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#b89564]/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/5 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
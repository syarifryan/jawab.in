'use client';
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ui/ScrollReveal';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'web',
      icon: 'language',
      bg: 'bg-[var(--color-primary)]',
      textColor: 'text-[var(--color-text-dark)]',
      borderColor: 'border-b-[3px] border-[var(--color-border)]',
      rotation: 'hover:rotate-1',
    },
    {
      id: 'iot',
      icon: 'router',
      bg: 'bg-[var(--color-mint)]',
      textColor: 'text-[var(--color-text-dark)]',
      borderColor: 'border-b-[3px] border-[var(--color-border)]',
      rotation: '-rotate-1',
    },
    {
      id: 'skripsi',
      icon: 'school',
      bg: 'bg-[var(--color-secondary)]',
      textColor: 'text-white',
      borderColor: 'border-b-[3px] border-white',
      rotation: 'hover:rotate-1',
    },
    {
      id: 'jurnal',
      icon: 'article',
      bg: 'bg-[var(--color-accent)]',
      textColor: 'text-[var(--color-text-dark)]',
      borderColor: 'border-b-[3px] border-[var(--color-border)]',
      rotation: 'rotate-1',
    },
    {
      id: 'ai',
      icon: 'smart_toy',
      bg: 'bg-[var(--color-lavender)]',
      textColor: 'text-[var(--color-text-dark)]',
      borderColor: 'border-b-[3px] border-[var(--color-border)]',
      rotation: '-rotate-1',
    },
    {
      id: 'design',
      icon: 'design_services',
      bg: 'bg-[var(--color-orange)]',
      textColor: 'text-[var(--color-text-dark)]',
      borderColor: 'border-b-[3px] border-[var(--color-border)]',
      rotation: 'rotate-1',
    },
  ];

  return (
    <section id="layanan" className="px-4 md:px-16 py-20 bg-[var(--color-bg-dark)] border-y-[4px] border-[var(--color-border)] text-white relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 w-96 h-96 border-[4px] border-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase inline-block bg-[var(--color-bg-dark)] px-12 py-6 border-[4px] border-white shadow-[8px_8px_0px_0px_#FFFFFF] rotate-2">
              {t('services.title')}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 80}>
              <div className={`${service.bg} ${service.textColor} p-8 border-[4px] border-white shadow-[6px_6px_0px_0px_#FFFFFF] hover:-translate-y-3 transition-all ${service.rotation}`}>
                <span
                  className="material-symbols-outlined text-6xl mb-6 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {service.icon}
                </span>
                <h3 className={`font-display text-2xl font-black uppercase mb-3 ${service.borderColor} pb-2`}>
                  {t(`services.${service.id}.title` as any)}
                </h3>
                <p className="font-body text-base font-bold">{t(`services.${service.id}.desc` as any)}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

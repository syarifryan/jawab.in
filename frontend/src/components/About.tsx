'use client';
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ui/ScrollReveal';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="tentang" className="px-4 md:px-16 py-20 bg-[var(--color-bg-light)] border-b-[4px] border-[var(--color-border)] relative">
      {/* Floating primitive */}
      <div className="absolute -top-12 left-1/4 w-24 h-24 bg-[var(--color-lavender)] neo-border neo-shadow rotate-12 z-20"></div>

      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Left: Text */}
          <div className="w-full lg:w-1/2">
            <ScrollReveal>
              <h2 className="font-display text-5xl md:text-6xl font-black uppercase mb-20 inline-block bg-[var(--color-primary)] px-8 py-4 neo-border neo-shadow -rotate-2 title-shadow">
                {t('about.badge')}
              </h2>
            </ScrollReveal>
            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <p className="font-body text-lg font-bold leading-relaxed text-[var(--color-text-dark)]">
                  {t('about.title')}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="font-body text-base leading-relaxed text-[var(--color-text-dark)] opacity-80">
                  {t('about.desc')}
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Right: USP Cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <ScrollReveal delay={300}>
              <div className="bg-[var(--color-primary)] p-8 neo-border neo-shadow flex items-start gap-8 hover:-translate-y-2 transition-transform group">
                <div className="bg-white p-3 neo-border group-hover:rotate-12 transition-transform shrink-0">
                  <span className="material-symbols-outlined text-5xl block" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-black uppercase mb-2">{t('about.usp1.title')}</h3>
                  <p className="font-body font-bold text-base">{t('about.usp1.desc')}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="bg-[var(--color-secondary)] p-8 neo-border neo-shadow flex items-start gap-8 text-white ml-0 md:ml-12 hover:-translate-y-2 transition-transform group -rotate-1">
                <div className="bg-white p-3 neo-border group-hover:-rotate-12 transition-transform shrink-0 text-[var(--color-text-dark)]">
                  <span className="material-symbols-outlined text-5xl block" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-black uppercase mb-2">{t('about.usp2.title')}</h3>
                  <p className="font-body font-bold text-base">{t('about.usp2.desc')}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

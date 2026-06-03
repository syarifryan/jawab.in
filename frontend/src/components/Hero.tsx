'use client';
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ui/ScrollReveal';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="beranda" className="relative min-h-[90vh] flex items-center overflow-hidden border-b-[4px] border-[var(--color-border)] pt-24">
      {/* Background Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="font-display font-black text-[25vw] leading-none opacity-10 -rotate-[8deg] text-stroke-3">
          JAWAB
        </span>
      </div>

      {/* Floating Decorations */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-[var(--color-mint)] neo-border neo-shadow rotate-12 hidden md:block animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-[var(--color-secondary)] neo-border neo-shadow -rotate-6 hidden md:block"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-[var(--color-accent)] neo-border neo-shadow rotate-45 hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-2/3 text-left">
            <ScrollReveal delay={100}>
              <div className="inline-block bg-[var(--color-accent)] text-white px-4 py-2 neo-border neo-shadow mb-8 -rotate-2 font-black text-xl uppercase">
                #1 Academic Solution
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h1 className="font-display text-5xl md:text-[64px] lg:text-[80px] uppercase mb-8 leading-none font-black text-[var(--color-text-dark)]">
                Solusi Akademik <br/>
                <span className="inline-block relative">
                  &amp; <span className="bg-[var(--color-primary)] px-6 py-2 neo-border inline-block rotate-[-3deg] title-shadow">Digital</span>
                </span><br/>
                Terpercaya
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="font-body text-lg md:text-xl text-[var(--color-text-dark)] max-w-xl mb-12 border-l-[6px] border-[var(--color-primary)] pl-6 py-2 italic font-bold">
                {t('hero.desc')}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex flex-wrap gap-6">
                <button 
                  onClick={() => document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[var(--color-primary)] text-[var(--color-text-dark)] border-[4px] border-[var(--color-border)] px-10 py-6 font-display text-xl uppercase font-black neo-shadow hover:neo-shadow-hover active:neo-shadow-active transition-all -rotate-1"
                >
                  {t('hero.cta1')}
                </button>
                <button 
                  onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)] border-[4px] border-[var(--color-border)] px-10 py-6 font-display text-xl uppercase font-black neo-shadow hover:neo-shadow-hover active:neo-shadow-active transition-all rotate-1"
                >
                  {t('hero.cta2')}
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Stats Content */}
          <div className="w-full lg:w-1/3">
            <ScrollReveal delay={500}>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-[var(--color-mint)] p-6 neo-border neo-shadow rotate-1 hover:rotate-0 transition-transform">
                  <h3 className="font-display font-black text-6xl mb-2 text-[var(--color-text-dark)]">100+</h3>
                  <p className="font-body font-black uppercase text-xl text-[var(--color-text-dark)]">{t('stats.projects')}</p>
                </div>
                <div className="bg-[var(--color-secondary)] p-6 neo-border neo-shadow -rotate-2 hover:rotate-0 transition-transform text-white ml-0 md:ml-8">
                  <h3 className="font-display font-black text-6xl mb-2">98%</h3>
                  <p className="font-body font-black uppercase text-xl">{t('stats.rating')}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

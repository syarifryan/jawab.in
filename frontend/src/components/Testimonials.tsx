'use client';
import React, { useState, useEffect } from 'react';
import { ScrollReveal } from './ui/ScrollReveal';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Fallback data if API is unavailable
const FALLBACK_TESTIMONIALS = [
  {
    id: '1',
    content: 'Sangat terbantu dengan layanan bimbingan skripsinya. Tim responsif dan memberikan arahan yang solutif. Lulus tepat waktu!',
    name: 'Andi R.',
    role: 'Mahasiswa Teknik Informatika',
    stars: 5,
    avatar_color: 'accent',
  },
  {
    id: '2',
    content: 'Project website company profile diselesaikan dengan cepat dan desainnya brutal abis! Sesuai dengan brief yang diberikan.',
    name: 'Sarah W.',
    role: 'CEO Digital Startup',
    stars: 4,
    avatar_color: 'mint',
  },
];

interface Testimonial {
  id: string;
  content: string;
  name: string;
  role: string;
  stars: number;
  avatar_color: string;
}

// Map avatar_color to Tailwind class
const AVATAR_COLOR_MAP: Record<string, string> = {
  accent: 'bg-[var(--color-accent)]',
  mint: 'bg-[var(--color-mint)]',
  primary: 'bg-[var(--color-primary)]',
  lavender: 'bg-[var(--color-lavender)]',
  orange: 'bg-[var(--color-orange)]',
  secondary: 'bg-[var(--color-secondary)]',
};

const QUOTE_COLOR_MAP: Record<string, string> = {
  accent: 'text-[var(--color-accent)]',
  mint: 'text-[var(--color-mint)]',
  primary: 'text-[var(--color-primary)]',
  lavender: 'text-[var(--color-lavender)]',
  orange: 'text-[var(--color-orange)]',
  secondary: 'text-[var(--color-secondary)]',
};

const STAR_COLOR_MAP: Record<string, string> = {
  accent: 'text-[var(--color-primary)]',
  mint: 'text-[var(--color-mint)]',
  primary: 'text-[var(--color-primary)]',
  lavender: 'text-[var(--color-lavender)]',
  orange: 'text-[var(--color-orange)]',
  secondary: 'text-[var(--color-secondary)]',
};

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(FALLBACK_TESTIMONIALS);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch(`${API_URL}/api/testimonials`);
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          setTestimonials(data.data);
        }
      } catch {
        console.log('[Testimonials] API unavailable — using fallback data');
      }
    }
    fetchTestimonials();
  }, []);

  const cardConfigs = [
    { cardRotate: 'rotate-1', cardOffset: '', avatarRotate: 'rotate-3' },
    { cardRotate: '-rotate-1', cardOffset: 'lg:translate-y-12', avatarRotate: '-rotate-3' },
  ];

  return (
    <section id="review" className="px-4 md:px-16 py-20 bg-[var(--color-secondary)] border-y-[4px] border-[var(--color-border)] relative overflow-hidden">
      {/* Floating primitives */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[var(--color-accent)] neo-border neo-shadow rotate-12 opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-[var(--color-primary)] neo-border neo-shadow -rotate-12 opacity-50"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase inline-block bg-white px-10 py-6 neo-border neo-shadow text-[var(--color-text-dark)] -rotate-2 title-shadow">
              Apa Kata Mereka?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {testimonials.map((testi, index) => {
            const config = cardConfigs[index % cardConfigs.length];
            const quoteColor = QUOTE_COLOR_MAP[testi.avatar_color] || QUOTE_COLOR_MAP.primary;
            const starColor = STAR_COLOR_MAP[testi.avatar_color] || STAR_COLOR_MAP.primary;
            const avatarBg = AVATAR_COLOR_MAP[testi.avatar_color] || AVATAR_COLOR_MAP.accent;

            return (
              <ScrollReveal key={testi.id} delay={index * 150}>
                <div className={`bg-white p-8 md:p-12 neo-border neo-shadow relative ${config.cardRotate} ${config.cardOffset}`}>
                  {/* Quote icon */}
                  <div className="absolute -top-8 -left-8 bg-[var(--color-text-dark)] border-[4px] border-white p-2">
                    <span className={`material-symbols-outlined text-7xl ${quoteColor} block`} style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                  </div>

                  {/* Stars */}
                  <div className={`flex ${starColor} mb-6`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' ${i < testi.stars ? 1 : 0}` }}>
                        {i < testi.stars ? 'star' : 'star_half'}
                      </span>
                    ))}
                  </div>

                  <p className="font-display text-2xl font-black mb-8 leading-snug text-[var(--color-text-dark)]">&ldquo;{testi.content}&rdquo;</p>

                  <div className="flex items-center gap-6 pt-8 border-t-[3px] border-[var(--color-border)]">
                    <div className={`w-16 h-16 ${avatarBg} neo-border flex items-center justify-center font-display font-black text-2xl ${config.avatarRotate}`}>
                      {testi.name[0]}
                    </div>
                    <div>
                      <h4 className="font-display font-black uppercase text-xl text-[var(--color-text-dark)]">{testi.name}</h4>
                      <p className="font-body font-bold text-[var(--color-text-dark)] opacity-70">{testi.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

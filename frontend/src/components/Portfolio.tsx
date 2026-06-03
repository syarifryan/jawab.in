'use client';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ui/ScrollReveal';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

type FilterType = 'all' | 'web' | 'iot' | 'ai';

// Fallback data if API is unavailable
const FALLBACK_PROJECTS = [
  {
    id: '1',
    title: 'Sistem Informasi Akademik',
    category: 'web',
    image_url: '/images/air_quality_monitoring.png',
    description: 'Portal akademik terintegrasi untuk kampus digital modern.',
    tag: 'Web Development',
    tag_color: 'primary',
    card_rotate: 'rotate-1',
  },
  {
    id: '2',
    title: 'Smart Green House',
    category: 'iot',
    image_url: '/images/blackout_mitigation.png',
    description: 'Otomatisasi pertanian berbasis sensor cerdas dan cloud data.',
    tag: 'IoT Solutions',
    tag_color: 'mint',
    card_rotate: '-rotate-1',
  },
  {
    id: '3',
    title: 'Prediksi Pasar Saham',
    category: 'ai',
    image_url: '/images/trash_detection.png',
    description: 'Model machine learning untuk analisis sentimen & tren pasar.',
    tag: 'AI & Analysis',
    tag_color: 'lavender',
    card_rotate: 'rotate-1',
  },
];

interface Project {
  id: string;
  title: string;
  category: string;
  image_url: string;
  description: string;
  tag: string;
  tag_color: string;
  card_rotate: string;
}

// Map tag_color from DB to Tailwind class
const TAG_COLOR_MAP: Record<string, string> = {
  primary: 'bg-[var(--color-primary)]',
  mint: 'bg-[var(--color-mint)]',
  lavender: 'bg-[var(--color-lavender)]',
  accent: 'bg-[var(--color-accent)]',
  orange: 'bg-[var(--color-orange)]',
  secondary: 'bg-[var(--color-secondary)]',
};

export function Portfolio() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterType>('all');
  const [projects, setProjects] = useState<Project[]>(FALLBACK_PROJECTS);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(`${API_URL}/api/projects`);
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          setProjects(data.data);
        }
      } catch {
        // Silently use fallback data
        console.log('[Portfolio] API unavailable — using fallback data');
      }
    }
    fetchProjects();
  }, []);

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  const filters: { key: FilterType; label: string; activeColor: string; hoverColor: string; rotate: string }[] = [
    { key: 'all', label: 'All', activeColor: 'bg-[var(--color-primary)]', hoverColor: 'hover:bg-[var(--color-primary)]', rotate: '-rotate-1' },
    { key: 'web', label: 'Web', activeColor: 'bg-[var(--color-mint)]', hoverColor: 'hover:bg-[var(--color-mint)]', rotate: 'rotate-2' },
    { key: 'iot', label: 'IoT', activeColor: 'bg-[var(--color-lavender)]', hoverColor: 'hover:bg-[var(--color-lavender)]', rotate: '-rotate-1' },
    { key: 'ai', label: 'AI', activeColor: 'bg-[var(--color-accent)]', hoverColor: 'hover:bg-[var(--color-accent)]', rotate: 'rotate-1' },
  ];

  const tagRotates = ['rotate-[-2deg]', 'rotate-[2deg]', 'rotate-[-3deg]'];

  return (
    <section id="portfolio" className="px-4 md:px-16 py-20 bg-[var(--color-bg-light)]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header row */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <ScrollReveal>
            <div className="relative">
              <h2 className="font-display text-5xl md:text-6xl font-black uppercase bg-[var(--color-secondary)] text-white px-10 py-6 neo-border neo-shadow inline-block rotate-1 title-shadow">
                {t('portfolio.badge')}
              </h2>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-[var(--color-accent)] neo-border neo-shadow rotate-12"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-wrap gap-3">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`border-[4px] border-[var(--color-border)] px-6 py-3 font-display font-black uppercase transition-all neo-shadow ${f.rotate} ${
                    filter === f.key
                      ? `${f.activeColor} text-[var(--color-text-dark)]`
                      : `bg-white text-[var(--color-text-dark)] ${f.hoverColor}`
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <div className={`bg-[var(--color-bg-light)] neo-border neo-shadow flex flex-col h-full hover:scale-[1.02] transition-transform overflow-visible ${project.card_rotate}`}>
                {/* Image */}
                <div className="h-64 border-b-[4px] border-[var(--color-border)] bg-cover bg-center relative overflow-visible">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  {/* Tape decoration */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] w-24 h-8 bg-white/40 border border-black/10 backdrop-blur-sm z-10"></div>
                  {/* Bleeding tag */}
                  <div className={`absolute -bottom-5 left-5 ${TAG_COLOR_MAP[project.tag_color] || TAG_COLOR_MAP.primary} border-[4px] border-[var(--color-border)] px-4 py-1 text-sm font-display font-black uppercase neo-shadow ${tagRotates[index % tagRotates.length]} z-10`}>
                    {project.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-10 flex flex-col flex-grow bg-white">
                  <h3 className="font-display text-2xl font-black mb-3 leading-tight text-[var(--color-text-dark)]">{project.title}</h3>
                  <p className="font-body text-[var(--color-text-dark)] text-sm mb-6 flex-grow font-bold opacity-70">{project.description}</p>
                  <button className="w-full bg-[var(--color-text-dark)] text-white border-[4px] border-[var(--color-border)] px-6 py-4 font-display font-black uppercase hover:bg-[var(--color-primary)] hover:text-[var(--color-text-dark)] transition-all neo-shadow-hover">
                    {t('portfolio.btn')}
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

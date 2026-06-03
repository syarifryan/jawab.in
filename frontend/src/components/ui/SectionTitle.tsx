import React from 'react';

interface SectionTitleProps {
  badge: string;
  title: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
}

export function SectionTitle({ badge, title, subtitle, className = '', dark = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <div className={`inline-block px-4 py-1 mb-4 neo-border font-bold text-sm uppercase ${dark ? 'bg-[var(--color-bg-dark)] text-white border-white' : 'bg-[var(--color-primary)] text-black'}`}>
        ★ {badge}
      </div>
      <h2 className={`font-display font-bold text-4xl md:text-5xl uppercase mb-2 ${dark ? 'text-white' : 'text-black'}`}>
        {title}
      </h2>
      <div className={`h-2 w-24 mb-6 neo-border ${dark ? 'bg-white border-white' : 'bg-[var(--color-accent)]'}`}></div>
      {subtitle && (
        <p className={`font-body text-lg max-w-2xl ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

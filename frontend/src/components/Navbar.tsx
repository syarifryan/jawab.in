'use client';
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'About',        href: '#tentang',    hover: 'hover:bg-[var(--color-lavender)]',rotate: '-rotate-1' },
    { label: 'Services',     href: '#layanan',   hover: 'hover:bg-[var(--color-mint)]',    rotate: '-rotate-1' },
    { label: 'Portfolio',    href: '#portfolio',  hover: 'hover:bg-[var(--color-accent)]',  rotate: 'rotate-1'  },
    { label: 'Testimonials', href: '#review',     hover: 'hover:bg-[var(--color-orange)]',  rotate: 'rotate-1'  },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full border-b-[4px] border-[var(--color-border)] bg-[var(--color-bg-light)] flex justify-between items-center px-4 md:px-16 h-24 z-50">
        {/* Brand */}
        <div
          className="font-display text-3xl font-black tracking-tighter text-[var(--color-text-dark)] hover:rotate-2 transition-transform cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          JAWAB.IN
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`text-[var(--color-text-dark)] font-black uppercase ${link.hover} transition-all px-4 py-2 border-[4px] border-transparent hover:border-[var(--color-border)] ${link.rotate}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right: Lang + CTA + Mobile Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="hidden md:block bg-[var(--color-lavender)] text-[var(--color-text-dark)] border-[4px] border-[var(--color-border)] px-4 py-2 font-black neo-btn"
          >
            {language === 'id' ? 'EN | ID' : 'ID | EN'}
          </button>
          <button
            onClick={() => scrollTo('#kontak')}
            className="bg-[var(--color-primary)] text-[var(--color-text-dark)] border-[4px] border-[var(--color-border)] px-6 py-2 font-black neo-btn"
          >
            Get Started
          </button>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center ml-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 border-[4px] border-[var(--color-border)] bg-white neo-shadow active:neo-shadow-active"
            >
              <div className="w-6 h-0.5 bg-[var(--color-text-dark)] mb-1.5"></div>
              <div className="w-6 h-0.5 bg-[var(--color-text-dark)] mb-1.5"></div>
              <div className="w-6 h-0.5 bg-[var(--color-text-dark)]"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--color-bg-light)] pt-24 flex flex-col items-center">
          <div className="flex flex-col space-y-4 text-center w-full px-4 pt-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-[var(--color-text-dark)] font-black uppercase ${link.hover} transition-all px-4 py-4 border-[4px] border-[var(--color-border)] bg-white ${link.rotate}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className="font-display font-black text-xl px-6 py-4 border-[4px] border-[var(--color-border)] bg-[var(--color-lavender)]"
            >
              {language === 'id' ? 'Switch to English' : 'Ganti ke Indonesia'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

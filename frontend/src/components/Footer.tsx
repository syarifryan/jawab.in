'use client';
import React from 'react';

export function Footer() {
  return (
    <footer className="w-full border-t-[4px] border-[var(--color-border)] bg-[#333123] py-20 px-4 md:px-16 overflow-hidden relative">
      {/* Giant BG text */}
      <div className="absolute bottom-[-20%] left-[-5%] text-[15vw] font-black text-white opacity-5 pointer-events-none select-none uppercase">
        JAWAB.IN
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-20 relative z-10">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <div className="font-display text-4xl font-black text-[var(--color-primary)] mb-4 hover:scale-110 transition-transform cursor-default">JAWAB.IN</div>
          <p className="font-display font-black uppercase text-sm tracking-widest text-[var(--color-bg-light)] opacity-70">Digital Solutions & Academic Excellence</p>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-display font-black text-white text-xl border-b-[4px] border-[var(--color-accent)] inline-block mb-4">© 2024 JAWAB.IN</p>
          <p className="font-body font-bold text-[var(--color-bg-light)] opacity-60">ALL RIGHTS RESERVED • INDONESIA</p>
        </div>

        {/* Social */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://www.instagram.com/jawab.innn/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--color-accent)] text-white neo-border px-4 py-2 font-display font-black uppercase hover:-rotate-12 transition-transform"
          >
            IG
          </a>
          <a
            href="https://wa.me/6285198143231"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--color-secondary)] text-white neo-border px-4 py-2 font-display font-black uppercase hover:rotate-12 transition-transform"
          >
            LI
          </a>
          <a
            href="mailto:jawab.innn@gmail.com"
            className="bg-[var(--color-mint)] text-[var(--color-text-dark)] neo-border px-4 py-2 font-display font-black uppercase hover:-rotate-12 transition-transform"
          >
            TW
          </a>
        </div>
      </div>
    </footer>
  );
}

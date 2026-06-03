'use client';
import React, { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Commented out for testing so user can see the loading screen on every refresh
    // if (sessionStorage.getItem('jawab_in_loaded')) {
    //   setIsVisible(false);
    //   return;
    // }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem('jawab_in_loaded', 'true');
          }, 1200);
          return 100;
        }
        // Much slower increment: mostly 1, occasionally 2
        const diff = Math.random() < 0.8 ? 1 : 2;
        return Math.min(prev + diff, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-[var(--color-bg-light)] flex flex-col items-center justify-center transition-transform duration-700 ease-in-out ${progress === 100 ? '-translate-y-full' : ''}`}>
      <div className="relative mb-8">
        {/* Floating decorations */}
        <div className="absolute -top-12 -left-12 w-8 h-8 bg-[var(--color-mint)] neo-border animate-spin"></div>
        <div className="absolute -bottom-8 -right-12 w-10 h-10 bg-[var(--color-accent)] neo-border rounded-full animate-bounce"></div>

        <h1 className="font-display font-black text-6xl md:text-8xl title-shadow text-[var(--color-text-dark)]">
          JAWAB.IN
        </h1>
        <p className="font-display font-bold text-center mt-2 text-xl md:text-2xl tracking-widest uppercase">
          Solusi Akademik & Digital
        </p>
      </div>

      <div className="w-[300px] h-[20px] neo-border neo-shadow bg-white relative overflow-hidden mt-12">
        <div
          className="h-full bg-[var(--color-primary)] border-r-[3px] border-border transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="font-display font-bold mt-4 text-sm">{progress}%</p>
    </div>
  );
}

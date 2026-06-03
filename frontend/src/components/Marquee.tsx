'use client';
import React from 'react';

export function Marquee() {
  const text = 'Professional • Trusted • Innovative • ';

  return (
    <div className="bg-[var(--color-bg-dark)] py-6 border-b-[4px] border-[var(--color-border)] overflow-hidden flex whitespace-nowrap">
      <div className="animate-marquee flex gap-12 items-center shrink-0">
        <span className="text-white font-black text-2xl uppercase">{text.repeat(4)}</span>
        <span className="text-white font-black text-2xl uppercase" aria-hidden="true">{text.repeat(4)}</span>
      </div>
    </div>
  );
}

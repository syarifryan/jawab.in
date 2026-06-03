import React from 'react';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  children: React.ReactNode;
}

export function NeoButton({ variant = 'primary', children, className = '', ...props }: NeoButtonProps) {
  const baseClasses = 'px-6 py-3 font-display font-bold uppercase transition-all duration-200 neo-border neo-shadow hover:neo-shadow-hover hover:-translate-y-0.5 hover:-translate-x-0.5 active:neo-shadow-active active:translate-y-1 active:translate-x-1';
  
  const variants = {
    primary: 'bg-[var(--color-primary)] text-[var(--color-text-dark)]',
    secondary: 'bg-[var(--color-secondary)] text-[var(--color-text-light)]',
    dark: 'bg-[var(--color-bg-dark)] text-[var(--color-text-light)]',
    outline: 'bg-transparent text-[var(--color-text-dark)]'
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

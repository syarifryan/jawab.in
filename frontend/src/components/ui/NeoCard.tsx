import React from 'react';

interface NeoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  bg?: string;
  hoverEffect?: boolean;
}

export function NeoCard({ children, bg = 'bg-white', hoverEffect = true, className = '', ...props }: NeoCardProps) {
  const hoverClasses = hoverEffect ? 'transition-all duration-200 hover:-translate-y-1 hover:-translate-x-1 hover:neo-shadow-hover' : '';
  
  return (
    <div className={`neo-border neo-shadow ${bg} ${hoverClasses} p-6 md:p-8 ${className}`} {...props}>
      {children}
    </div>
  );
}

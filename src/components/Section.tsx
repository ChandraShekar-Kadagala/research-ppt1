import React, { type ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  return (
    <section
      id={id}
      className={`min-h-screen w-full relative flex items-center justify-center overflow-hidden py-20 ${className}`}
    >
      <div className="absolute inset-0 z-0 bg-grid pointer-events-none opacity-[0.15]"></div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};

export default Section;

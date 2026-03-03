import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title?: string;
  bgColor?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, bgColor = 'bg-background', className, children }) => {
  return (
    <section 
      id={id} 
      className={cn('py-16 md:py-24 px-6 lg:px-12', bgColor, className)}
    >
      <div className="max-w-[1440px] mx-auto">
        {title && (
          <div className="mb-12 md:mb-16">
            <h2 className="section-title">{title}</h2>
            <div className="w-24 h-1 bg-accent"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;

import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  bgColor?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  children, 
  bgColor = "bg-background", 
  className = "" 
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${bgColor} ${className}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* TITOLO SEZIONE: Font Gothic, Spessore 900 (Black), Maiuscolo */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary mb-12 md:mb-16 font-gothic font-black uppercase tracking-tight">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
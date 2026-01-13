import React from 'react';
import Section from '@/components/Section';
import { TIMELINE_DATA } from '@/data/constants';

const TraguardiSection: React.FC = () => {
  return (
    <Section id="traguardi" title="I TRAGUARDI" bgColor="bg-muted" className="pt-10 md:pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {TIMELINE_DATA.map((item, index) => (
          <div 
            key={index} 
            className="p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-background group transition-all duration-300 min-h-[400px] cursor-pointer border border-border hover:border-accent"
          >
            <div>
              <span className="heading-transition text-7xl md:text-8xl text-muted group-hover:text-accent transition-colors duration-300 block mb-8 leading-none">
                {item.year.split('-')[0]}
              </span>
            </div>
            <div>
              <h3 className="text-primary font-black text-xl md:text-2xl uppercase mb-4 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="mt-16 text-center">
        <p className="text-muted-foreground text-lg mb-6">
          Il percorso continua. Ogni traguardo è un nuovo punto di partenza.
        </p>
      </div>
    </Section>
  );
};

export default TraguardiSection;

import React from 'react';
import Section from '@/components/Section';
import { TIMELINE_DATA } from '@/data/constants';
import { ArrowRight } from 'lucide-react';

const TraguardiSection: React.FC = () => {
  return (
    <Section id="traguardi" title="I TRAGUARDI" bgColor="bg-muted" className="pt-10 md:pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TIMELINE_DATA.map((item, index) => (
          <div 
            key={index} 
            className="p-6 md:p-8 flex flex-col bg-background rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[220px]"
          >
            <span className="text-accent font-bold text-3xl md:text-4xl mb-3">
              {item.year.split('-')[0]}
            </span>
            <h3 className="text-primary font-bold text-base md:text-lg uppercase mb-2 leading-tight">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
              {item.description}
            </p>
            <a href="#" className="text-primary font-semibold text-sm uppercase flex items-center gap-2 hover:text-accent transition-colors">
              LEGGI TUTTO <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TraguardiSection;

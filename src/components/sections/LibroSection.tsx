import React from 'react';
import Section from '@/components/Section';

const LibroSection: React.FC = () => {
  return (
    <Section id="libro" title="IL LIBRO" bgColor="bg-muted">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Book Cover */}
        <div className="flex justify-center">
          <div className="relative w-[280px] md:w-[320px] h-[420px] md:h-[480px] bg-primary rounded-r-2xl shadow-2xl flex flex-col items-center justify-center text-center p-8 transform hover:scale-105 transition-transform duration-500">
            {/* Fake Book Spine details */}
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-primary-foreground/10 border-r border-primary-foreground/10"></div>
            
            <span className="text-primary-foreground/30 font-black uppercase tracking-widest text-sm mb-4">
              MATTEO MIGLIORE
            </span>
            <h3 className="text-primary-foreground font-black text-3xl md:text-4xl uppercase leading-tight mb-8">
              RITORNO<br/>AL<br/>FUTURO
            </h3>
            <div className="w-12 h-1 bg-accent mb-8"></div>
            <span className="text-primary-foreground/50 text-xs uppercase tracking-widest">
              Edizione 2023
            </span>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col items-start text-left">
          {/* The Quote */}
          <div className="mb-8 border-l-4 border-accent pl-6">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight italic">
              "Una testimonianza generazionale, scritta mentre le cose accadevano."
            </p>
          </div>

          {/* Body Text */}
          <div className="prose prose-lg text-muted-foreground mb-10 leading-relaxed">
            <p className="mb-6">
              Questo è il mio primo libro. Duecento pagine che raccontano un'esperienza vissuta in prima persona, 
              ricca di passaggi inattesi, responsabilità precoci e momenti decisivi.
            </p>
            <p>
              Non è un manuale e non è un racconto celebrativo. È il tentativo di fermare una fase della vita 
              e restituirle senso, raccontando scelte, incontri e difficoltà maturate nel tempo.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="btn-brand-primary">
              ACQUISTA ORA
            </button>
            <button className="btn-brand-outline">
              LEGGI L'INTRODUZIONE
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LibroSection;

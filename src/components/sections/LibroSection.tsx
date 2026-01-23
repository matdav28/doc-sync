import React from 'react';
import Section from '@/components/Section';
import { ArrowUpRight } from 'lucide-react';
import bookCover from '@/assets/book-cover.png';

const LibroSection: React.FC = () => {
  return (
    <Section id="libro" title="IL LIBRO" bgColor="bg-muted">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Book Cover Image */}
        <div className="flex justify-center">
          <div className="relative w-[280px] md:w-[320px] transform hover:scale-105 transition-transform duration-500">
            <img 
              src={bookCover}
              alt="Ritorno al Futuro - Copertina del libro di Matteo Migliore"
              className="w-full h-auto rounded-r-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col items-start text-left">
          {/* The Quote - Much Larger */}
          <div className="mb-10 border-l-4 border-accent pl-6">
            <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-primary leading-tight italic">
              "Una testimonianza generazionale, scritta mentre le cose accadevano."
            </p>
          </div>

          {/* Body Text */}
          <div className="prose prose-xl text-muted-foreground mb-10 leading-relaxed">
            <p className="text-lg md:text-xl mb-6">
              Questo è il mio primo libro. Duecento pagine che raccontano un'esperienza vissuta in prima persona, 
              ricca di passaggi inattesi, responsabilità precoci e momenti decisivi.
            </p>
            <p className="text-lg md:text-xl">
              Non è un manuale e non è un racconto celebrativo. È il tentativo di fermare una fase della vita 
              e restituirle senso, raccontando scelte, incontri e difficoltà maturate nel tempo.
            </p>
          </div>

          {/* Amazon Button */}
          <a 
            href="https://amzn.eu/d/1FZlJfp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-black uppercase text-base hover:bg-accent hover:text-accent-foreground transition-all duration-300 active:scale-95 group"
          >
            <span>SCOPRI SU AMAZON</span>
            <ArrowUpRight size={20} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default LibroSection;
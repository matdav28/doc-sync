import React from 'react';
import { ArrowDown } from 'lucide-react';
import matteoHero from '@/assets/matteo-hero.jpeg';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-screen bg-primary flex items-center justify-center overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full h-full flex flex-col md:flex-row items-center justify-between py-10 md:py-0 pt-32 md:pt-0">
        
        {/* Left: Circular Image Layer */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start relative z-10 mb-8 md:mb-0">
          <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-[10px] border-primary-foreground/10 bg-primary/50">
            <img 
              src={matteoHero}
              alt="Matteo Migliore" 
              className="w-full h-full object-cover object-top" 
            />
          </div>
        </div>

        {/* Right: Typography & Pill CTA (SWAPPED TEXTS) */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left z-20 pl-0 md:pl-12 lg:pl-20">
          <h3 className="text-accent font-black tracking-[0.3em] uppercase mb-4 text-xs md:text-sm">
            UN SISTEMA DI INFORMAZIONE
          </h3>
          <h1 className="text-primary-foreground font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6 uppercase heading-transition">
            MATTEO<br/>MIGLIORE.
          </h1>
          <p className="text-primary-foreground text-lg md:text-xl lg:text-2xl font-medium mb-8 max-w-lg leading-relaxed">
            Identità, Proposte e Futuro.
          </p>

          {/* CTA - Pill Shape with Red Hover & Arrow Down */}
          <a 
            href="#chi-sono" 
            className="group flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 rounded-full font-black uppercase text-base hover:bg-accent hover:text-accent-foreground transition-all duration-300 active:scale-95"
          >
            <span>Scopri di più</span>
            <div className="bg-accent text-accent-foreground p-1.5 rounded-full group-hover:bg-primary-foreground group-hover:text-primary transition-colors duration-300">
              <ArrowDown size={16} strokeWidth={3} className="group-hover:translate-y-1 transition-transform duration-300" />
            </div>
          </a>
        </div>
      </div>

      {/* SCROLL INDICATOR (Mouse Animation) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary-foreground/80 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

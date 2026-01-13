import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-screen bg-primary flex items-center justify-center overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full h-full flex flex-col md:flex-row items-center justify-between py-10 md:py-0 pt-32 md:pt-0">
        
        {/* Left: Circular Image Layer */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start relative z-10 mb-8 md:mb-0">
          <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-[10px] border-primary-foreground/10 bg-primary/50">
            <img 
              src="https://raw.githubusercontent.com/m-migliore/assets/main/matteo_arc.jpg" 
              alt="Matteo Migliore" 
              className="w-full h-full object-cover object-top" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop";
              }}
            />
          </div>
        </div>

        {/* Right: Typography & Pill CTA */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left z-20 pl-0 md:pl-12 lg:pl-20">
          <h3 className="text-accent font-black tracking-[0.3em] uppercase mb-4 text-xs md:text-sm">
            MATTEO MIGLIORE
          </h3>
          <h1 className="text-primary-foreground font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] mb-6 uppercase heading-transition">
            UN SISTEMA <br/> DI INFORMAZIONE.
          </h1>
          <p className="text-primary-foreground text-lg md:text-xl lg:text-2xl font-medium mb-8 max-w-lg leading-relaxed">
            Identità, Proposte e Futuro.
          </p>

          {/* CTA - Pill Shape */}
          <a 
            href="#chi-sono" 
            className="flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 rounded-full font-black uppercase text-base hover:bg-muted transition-all duration-300 active:scale-95"
          >
            <span>SCOPRI DI PIÙ</span>
            <div className="bg-accent p-1.5 rounded-full text-accent-foreground">
              <ArrowRight size={16} strokeWidth={3} />
            </div>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#chi-sono" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

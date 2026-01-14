import React from 'react';
import Section from '@/components/Section';
import { PROJECTS_DATA } from '@/data/constants';
import { Lightbulb, Leaf, Map, ArrowRight } from 'lucide-react';

const getProjectIcon = (id: string) => {
  switch (id) {
    case 'EURONESS':
      return <Lightbulb className="w-8 h-8 text-primary-foreground" />;
    case 'GREENACTION':
      return <Leaf className="w-8 h-8 text-primary-foreground" />;
    case 'ENIGMA LAB':
      return <Map className="w-8 h-8 text-primary-foreground" />;
    default:
      return <Lightbulb className="w-8 h-8 text-primary-foreground" />;
  }
};

const ProgettiSection: React.FC = () => {
  return (
    <Section id="progetti" title="PROGETTI" bgColor="bg-background">
      <p className="text-muted-foreground text-xl max-w-3xl mb-12 leading-relaxed">
        Idee che nascono dall'osservazione del territorio e dalla volontà di migliorarlo. 
        Progetti concreti per una comunità più consapevole e partecipe.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project) => (
          <div 
            key={project.id}
            className="group relative w-full bg-primary rounded-3xl p-10 border-4 border-transparent hover:border-accent transition-all duration-300 flex flex-col items-start shadow-none cursor-pointer h-full min-h-[350px]"
          >
            <div className="w-16 h-16 bg-primary-foreground/10 rounded-full mb-8 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
              {getProjectIcon(project.id)}
            </div>
            
            <h3 className="text-primary-foreground font-black text-2xl md:text-3xl uppercase mb-4 leading-tight">
              {project.name}
            </h3>
            
            <p className="text-primary-foreground/80 text-base leading-relaxed flex-grow">
              {project.description}
            </p>
            
            <button className="mt-8 flex items-center gap-2 text-primary-foreground font-bold text-sm uppercase tracking-wider group-hover:text-accent transition-colors duration-300">
              SCOPRI DI PIÙ
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </button>
            
            <div className="mt-4 w-12 h-1 bg-accent"></div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProgettiSection;

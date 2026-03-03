import React from 'react';
import { Link } from 'react-router-dom';
import Section from '@/components/Section';
import { ArrowRight } from 'lucide-react';
import logoCri from '@/assets/logo-cri.png';
import logoLegambiente from '@/assets/logo-legambiente.png';
import logoAgesci from '@/assets/logo-agesci.png';

const services = [
  { 
    id: "croce-rossa", 
    title: "CROCE ROSSA ITALIANA", 
    desc: "Un anno di servizio presso la Croce Rossa Italiana. Assistenza, trasporto sanitario, supporto alle persone in difficoltà. Un'esperienza che ti cambia per sempre.",
    logo: logoCri
  },
  { 
    id: "legambiente", 
    title: "LEGAMBIENTE", 
    desc: "Una mano per l'ambiente. Circolo 'A Valata' di Pozzallo. Ambientalismo attivo e responsabilità quotidiana per la tutela del nostro territorio e delle nostre radici.",
    logo: logoLegambiente
  },
  { 
    id: "agesci", 
    title: "A.G.E.S.C.I.", 
    desc: "Educare, educarsi, servire. Dal Gruppo Pozzallo 1 al servizio educativo come capo nel Gruppo Ispica 2. Lo scoutismo come scuola di cittadinanza e di servizio al prossimo.",
    logo: logoAgesci
  }
];

const ServizioCivileSection: React.FC = () => {
  return (
    <Section id="servizio-civile" title="SERVIZIO CIVILE" bgColor="bg-background">
      <p className="text-muted-foreground text-xl max-w-3xl mb-12 leading-relaxed">
        L'impegno nel sociale come scuola di vita e di cittadinanza attiva. 
        Un anno dedicato agli altri, che ha cambiato il mio modo di vedere il mondo.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {services.map((service) => (
          <Link 
            key={service.id}
            to={`/dettaglio/${service.id}`}
            className="p-10 md:p-12 lg:p-16 bg-background flex flex-col items-start h-full group border border-border hover:border-accent transition-all cursor-pointer"
          >
            <div className="w-24 h-24 mb-10 flex items-center justify-center">
              <img 
                src={service.logo} 
                alt={`Logo ${service.title}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h3 className="heading-transition text-3xl md:text-4xl mb-8 text-foreground group-hover:text-accent transition-colors font-black uppercase">
              {service.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg flex-grow">
              {service.desc}
            </p>
            <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:text-accent transition-colors duration-300">
              SCOPRI DI PIÙ
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default ServizioCivileSection;
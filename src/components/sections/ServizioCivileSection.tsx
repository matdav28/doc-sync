import React from 'react';
import Section from '@/components/Section';
import { Heart, Users, HandHeart } from 'lucide-react';

const ServizioCivileSection: React.FC = () => {
  return (
    <Section id="servizio-civile" title="SERVIZIO CIVILE" bgColor="bg-background">
      <p className="text-muted-foreground text-xl max-w-3xl mb-12 leading-relaxed">
        L'impegno nel sociale come scuola di vita e di cittadinanza attiva. 
        Un anno dedicato agli altri, che ha cambiato il mio modo di vedere il mondo.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {/* Card 1 */}
        <div className="p-10 md:p-12 lg:p-16 bg-background flex flex-col items-start h-full group border border-border hover:border-accent transition-all">
          <div className="w-20 h-20 bg-accent/10 flex items-center justify-center mb-10 border-4 border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
            <Heart size={48} strokeWidth={2} className="text-accent group-hover:text-accent-foreground" />
          </div>
          <h3 className="heading-transition text-3xl md:text-4xl mb-8 text-foreground group-hover:text-accent transition-colors">
            CROCE ROSSA ITALIANA
          </h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Un anno di servizio presso la Croce Rossa Italiana. Assistenza, trasporto sanitario, 
            supporto alle persone in difficoltà. Un'esperienza che ti cambia per sempre.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-10 md:p-12 lg:p-16 bg-background flex flex-col items-start h-full group border border-border hover:border-accent transition-all">
          <div className="w-20 h-20 bg-accent/10 flex items-center justify-center mb-10 border-4 border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
            <Users size={48} strokeWidth={2} className="text-accent group-hover:text-accent-foreground" />
          </div>
          <h3 className="heading-transition text-3xl md:text-4xl mb-8 text-foreground group-hover:text-accent transition-colors">
            COMUNITÀ
          </h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Il servizio civile è stata l'occasione per conoscere la mia comunità da un'altra prospettiva. 
            Non da studente, ma da cittadino attivo che si mette a disposizione.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-10 md:p-12 lg:p-16 bg-background flex flex-col items-start h-full group border border-border hover:border-accent transition-all">
          <div className="w-20 h-20 bg-accent/10 flex items-center justify-center mb-10 border-4 border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
            <HandHeart size={48} strokeWidth={2} className="text-accent group-hover:text-accent-foreground" />
          </div>
          <h3 className="heading-transition text-3xl md:text-4xl mb-8 text-foreground group-hover:text-accent transition-colors">
            VALORI
          </h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Umanità, imparzialità, neutralità, indipendenza, volontariato, unità, universalità. 
            I sette principi della Croce Rossa che porto con me ogni giorno.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ServizioCivileSection;

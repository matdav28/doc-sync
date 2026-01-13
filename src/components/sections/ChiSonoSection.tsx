import React from 'react';
import Section from '@/components/Section';

const ChiSonoSection: React.FC = () => {
  return (
    <Section id="chi-sono" title="CHI SONO" bgColor="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Text Content */}
        <div className="order-2 lg:order-1">
          <div className="mb-8">
            <span className="text-accent/20 font-black text-8xl leading-none block mb-[-40px] select-none">01</span>
            <h3 className="text-primary font-black text-3xl md:text-4xl uppercase mb-6 relative">
              LE RADICI
            </h3>
          </div>
          <div className="prose prose-lg text-muted-foreground leading-relaxed">
            <p className="mb-6">
              Mi chiamo Matteo Migliore. Sono nato a Pozzallo, in provincia di Ragusa, nel 2002. 
              Ho iniziato il mio percorso di impegno civico dalla scuola, come rappresentante d'istituto.
            </p>
            <p className="mb-6">
              Da lì è nato tutto: la voglia di migliorare le cose, di partecipare alle decisioni, 
              di essere parte attiva della comunità. Non come spettatore, ma come costruttore.
            </p>
            <p>
              Oggi studio Giurisprudenza all'Università di Bologna e continuo il mio impegno 
              nella rappresentanza studentesca e nella politica giovanile.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&fit=crop"
                alt="Pozzallo, Sicilia"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-2xl font-black uppercase text-sm">
              Pozzallo, Sicilia
            </div>
          </div>
        </div>
      </div>

      {/* Second block - La Formazione */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-24">
        {/* Left: Image */}
        <div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop"
                alt="Università di Bologna"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div>
          <div className="mb-8">
            <span className="text-accent/20 font-black text-8xl leading-none block mb-[-40px] select-none">02</span>
            <h3 className="text-primary font-black text-3xl md:text-4xl uppercase mb-6 relative">
              LA FORMAZIONE
            </h3>
          </div>
          <div className="prose prose-lg text-muted-foreground leading-relaxed">
            <p className="mb-6">
              Ho frequentato il Liceo Scientifico "Giorgio La Pira" di Pozzallo, dove sono stato 
              eletto rappresentante d'istituto nell'anno scolastico 2019-2020.
            </p>
            <p>
              Attualmente frequento la Facoltà di Giurisprudenza presso l'Alma Mater Studiorum - 
              Università di Bologna, dove sono rappresentante nel Dipartimento di Scienze Giuridiche.
            </p>
          </div>
        </div>
      </div>

      {/* Third block - La Politica Reale */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-24">
        {/* Left: Text */}
        <div>
          <div className="mb-8">
            <span className="text-accent/20 font-black text-8xl leading-none block mb-[-40px] select-none">03</span>
            <h3 className="text-primary font-black text-3xl md:text-4xl uppercase mb-6 relative">
              LA POLITICA REALE
            </h3>
          </div>
          <div className="prose prose-lg text-muted-foreground leading-relaxed">
            <p className="mb-6">
              Nel 2022 ho scelto di entrare nei Giovani Democratici, il movimento giovanile del 
              Partito Democratico. Una scelta di campo, convinta e consapevole.
            </p>
            <p>
              Sono stato Segretario dei GD Ragusa dal 2022 al 2025 e oggi ricopro il ruolo di 
              Tesoriere e Delegato al Tesseramento nella Segreteria Regionale GD Sicilia.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=600&fit=crop"
                alt="Impegno politico"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Identity Box - Il Futuro */}
      <div className="bg-primary rounded-3xl p-10 md:p-16 text-primary-foreground relative overflow-hidden mt-24">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 flex flex-col justify-center">
            <h2 className="font-black text-4xl md:text-5xl uppercase mb-6 leading-tight">
              UN'IDENTITÀ<br/>IN COSTRUZIONE.
            </h2>
            <div className="w-24 h-2 bg-accent mb-6"></div>
          </div>
          <div className="md:col-span-7">
            <p className="text-xl leading-relaxed font-medium text-primary-foreground/90 mb-6">
              Terminata l'esperienza scolastica, ho portato il mio impegno all'Università di Bologna. 
              Essere rappresentante è un lavoro spesso silenzioso, ma essenziale.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              La politica non è solo partecipazione, è costruzione. È farsi carico dei problemi 
              collettivi e provare a risolverli insieme. È questo che cerco di fare ogni giorno.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ChiSonoSection;

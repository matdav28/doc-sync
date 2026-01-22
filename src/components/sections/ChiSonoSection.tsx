import React from 'react';
import Section from '@/components/Section';

const ChiSonoSection: React.FC = () => {
  return (
    <Section id="chi-sono" title="CHI SONO" bgColor="bg-background">
      {/* 01: LE RADICI */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Text Content */}
        <div className="order-2 lg:order-1">
          <div className="mb-8">
            <span className="text-accent/20 font-black text-8xl leading-none block mb-[-40px] select-none">01</span>
            <h3 className="text-primary font-black text-4xl md:text-5xl uppercase mb-6 relative">
              LE RADICI
            </h3>
          </div>
          <div className="prose prose-xl text-muted-foreground leading-relaxed">
            <p className="mb-6 text-lg md:text-xl">
              Non come spettatore passivo, ma come costruttore. Ho iniziato il mio percorso di impegno civico dalla scuola, come Rappresentante di Istituto.
            </p>
            <p className="text-lg md:text-xl">
              Da lì è nato tutto: la voglia di migliorare le cose, di partecipare alle decisioni, di essere parte attiva della comunità.
            </p>
          </div>
        </div>

        {/* Right: Image - REMOVED LABEL */}
        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&fit=crop"
                alt="Pozzallo, Sicilia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 02: LA FORMAZIONE */}
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
            <h3 className="text-primary font-black text-4xl md:text-5xl uppercase mb-6 relative">
              LA FORMAZIONE
            </h3>
          </div>
          <div className="prose prose-xl text-muted-foreground leading-relaxed">
            <p className="mb-6 text-lg md:text-xl">
              Ho frequentato l'Università di Bologna dove sono stato, per tre anni, Rappresentante degli Studenti nel Dipartimento di Scienze Giuridiche.
            </p>
            <p className="text-lg md:text-xl">
              Un percorso che ha unito lo studio accademico alla pratica della rappresentanza attiva.
            </p>
          </div>
        </div>
      </div>

      {/* 03: LA POLITICA REALE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-24">
        {/* Left: Text */}
        <div>
          <div className="mb-8">
            <span className="text-accent/20 font-black text-8xl leading-none block mb-[-40px] select-none">03</span>
            <h3 className="text-primary font-black text-4xl md:text-5xl uppercase mb-6 relative">
              POLITICA REALE
            </h3>
          </div>
          <div className="prose prose-xl text-muted-foreground leading-relaxed">
            <p className="mb-6 text-lg md:text-xl">
              Segretario Provinciale dei Giovani Dem. della Provincia di Ragusa. Una scelta di campo, convinta e consapevole.
            </p>
            <p className="text-lg md:text-xl">
              Oggi ricopro il ruolo di Tesoriere e Delegato al Tesseramento nella Segreteria Regionale GD Sicilia.
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

      {/* 04: CONTINUARE A IMPEGNARSI - NEW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-24">
        {/* Left: Image */}
        <div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
                alt="Impegno universitario"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div>
          <div className="mb-8">
            <span className="text-accent/20 font-black text-8xl leading-none block mb-[-40px] select-none">04</span>
            <h3 className="text-primary font-black text-4xl md:text-5xl uppercase mb-6 relative">
              CONTINUARE<br/>A IMPEGNARSI
            </h3>
          </div>
          <div className="prose prose-xl text-muted-foreground leading-relaxed">
            <p className="mb-6 text-lg md:text-xl">
              Terminata l'esperienza scolastica, ho scelto di continuare il mio impegno nelle Istituzioni.
            </p>
            <p className="text-lg md:text-xl">
              Essere rappresentante significa ascoltare, confrontarsi, proporre soluzioni. È un lavoro spesso silenzioso, ma essenziale per rendere le istituzioni più giuste e accessibili.
            </p>
          </div>
        </div>
      </div>

      {/* REMOVED IDENTITY BOX */}
    </Section>
  );
};

export default ChiSonoSection;

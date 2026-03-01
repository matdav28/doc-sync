import React from 'react';
import Section from '@/components/Section';

const ChiSonoSection: React.FC = () => {
  return (
    <Section id="chi-sono" title="CHI SONO" bgColor="bg-background">

      {/* 01: LE RADICI */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="mb-8">
            <span className="text-accent/20 font-black text-8xl leading-none block mb-[-40px] select-none">01</span>
            <h3 className="text-primary font-black text-4xl md:text-5xl uppercase mb-6">LE RADICI</h3>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6">
            Non come spettatore passivo, ma come costruttore. Ho iniziato il mio percorso di impegno civico dalla scuola, come Rappresentante di Istituto.
          </p>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Da lì è nato tutto: la voglia di migliorare le cose, di partecipare alle decisioni, di essere parte attiva della comunità.
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
            <img src="radici.jpeg" alt="Pozzallo, Sicilia" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* 02: LA FORMAZIONE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-24">
        <div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
            <img src="formazione.jpeg" alt="Università di Bologna" className="w-full h-full object-cover" />
          </div>
        </div>

        <div>
          <div className="mb-8">
            <span className="text-accent/20 font-black text-8xl leading-none block mb-[-40px] select-none">02</span>
            <h3 className="text-primary font-black text-4xl md:text-5xl uppercase mb-6">LA FORMAZIONE</h3>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6">
            Ho frequentato l'Università di Bologna dove sono stato, per tre anni, Rappresentante degli Studenti nel Dipartimento di Scienze Giuridiche.
          </p>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Un percorso che ha unito lo studio accademico alla pratica della rappresentanza attiva.
          </p>
        </div>
      </div>

      {/* 03: POLITICA REALE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-24">
        {/* IMMAGINE – SOPRA SU MOBILE */}
        <div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
            <img
              src="/gallery/eu-school/eu-2.webp"
              alt="Impegno politico"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TESTO */}
        <div>
          <div className="mb-8">
            <span className="text-accent/20 font-black text-8xl leading-none block mb-[-40px] select-none">03</span>
            <h3 className="text-primary font-black text-4xl md:text-5xl uppercase mb-6">POLITICA REALE</h3>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6">
            Segretario Provinciale dei Giovani Dem. della Provincia di Ragusa. Una scelta di campo, convinta e consapevole.
          </p>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Oggi ricopro il ruolo di Tesoriere e Delegato al Tesseramento nella Segreteria Regionale GD Sicilia.
          </p>
        </div>
      </div>

      {/* 04: CONTINUARE A IMPEGNARSI */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-24">
        <div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
            <img src="impegnarsi.jpeg" alt="Impegno universitario" className="w-full h-full object-cover" />
          </div>
        </div>

        <div>
          <div className="mb-8">
            <span className="text-accent/20 font-black text-8xl leading-none block mb-[-40px] select-none">04</span>
            <h3 className="text-primary font-black text-4xl md:text-5xl uppercase mb-6">
              CONTINUARE<br />A IMPEGNARSI
            </h3>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6">
            Terminata l'esperienza scolastica, ho scelto di continuare il mio impegno nelle Istituzioni.
          </p>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Essere rappresentante significa ascoltare, confrontarsi, proporre soluzioni. È un lavoro spesso silenzioso, ma essenziale.
          </p>
        </div>
      </div>

    </Section>
  );
};

export default ChiSonoSection;

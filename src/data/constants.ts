export interface NewsItem {
  id: string;
  date: string;
  title: string;
  extract: string;
  url: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  details: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  year: string;
  description: string;
  icon?: string;
}

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'news-1',
    date: '10 NOV 2025',
    title: 'MATTEO MIGLIORE DELEGATO REGIONE SICILIA AL CONGRESSO NAZIONALE',
    extract: 'Matteo Migliore nominato delegato della Regione Sicilia al Congresso Nazionale dei Giovani Democratici a Napoli.',
    url: '#'
  },
  {
    id: 'news-2',
    date: '12 AGO 2025',
    title: 'MODICA PREMIA IL CORAGGIO: RICEVUTO IN COMUNE',
    extract: 'Accolto a Palazzo San Domenico dal sindaco Maria Monisteri per il ringraziamento ufficiale della città.',
    url: '#'
  },
  {
    id: 'news-3',
    date: '11 AGO 2025',
    title: "LA LEZIONE DI CIVILTA' DI MATTEO",
    extract: "Una serata d'agosto che difficilmente verrà dimenticata per il gesto di civiltà di Matteo Migliore.",
    url: '#'
  },
  {
    id: 'news-4',
    date: '30 GIU 2025',
    title: 'IL SINDACO RICEVE MATTEO MIGLIORE DOPO SUMMER SCHOOL',
    extract: 'Formazione e dialogo nel cuore delle istituzioni continentali a Bruxelles.',
    url: '#'
  },
  {
    id: 'news-5',
    date: '29 GIU 2025',
    title: 'DALLA SICILIA A BRUXELLES: LA VOCE DEI RAGAZZI IN EUROPA',
    extract: 'Esperienza formativa nelle istituzioni europee per portare la voce dei giovani siciliani.',
    url: '#'
  },
  {
    id: 'news-6',
    date: '16 APR 2023',
    title: 'MATTEO MIGLIORE, RITORNO AL FUTURO',
    extract: "Prima fatica letteraria: una testimonianza generazionale scritta mentre le cose accadevano.",
    url: '#'
  },
  {
    id: 'news-7',
    date: '11 MAR 2023',
    title: 'PUBBLICATO IL PRIMO LIBRO A SOLI VENT\'ANNI',
    extract: 'Un libro che racconta l\'esperienza di rappresentanza studentesca durante la pandemia.',
    url: '#'
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2019",
    title: "RAPPRESENTANTE D'ISTITUTO",
    description: "Al Liceo Scientifico 'Giorgio La Pira' di Pozzallo ho iniziato a guardare la scuola non solo come luogo di studio, ma come luogo da migliorare.",
    details: "Al Liceo Scientifico 'Giorgio La Pira' di Pozzallo ho iniziato a guardare la scuola non solo come luogo di studio, ma come luogo da migliorare."
  },
  {
    year: "2020",
    title: "PRESIDENTE CPS RAGUSA",
    description: "È stato un incarico vero: riunioni, responsabilità, decisioni, confronto costante con istituzioni e territorio in piena fase pandemica.",
    details: "È stato un incarico vero: riunioni, responsabilità, decisioni, confronto costante con istituzioni e territorio in piena fase pandemica."
  },
  {
    year: "2021",
    title: "MEMBRO ORGANO DI GARANZIA",
    description: "Un ruolo delicato: qui non conta 'apparire', conta la correttezza e la tutela dei diritti nel sistema scolastico USR Sicilia.",
    details: "Un ruolo delicato: qui non conta 'apparire', conta la correttezza e la tutela dei diritti nel sistema scolastico USR Sicilia."
  },
  {
    year: "Dal 2022",
    title: "RAPPRESENTANTE UNIBO",
    description: "Nel Dipartimento di Scienze Giuridiche. Qui la rappresentanza cambia forma: è più tecnica, legata ai processi e alle regole.",
    details: "Nel Dipartimento di Scienze Giuridiche. Qui la rappresentanza cambia forma: è più tecnica, legata ai processi e alle regole."
  },
  {
    year: "2022",
    title: "SEGRETARIO GD RAGUSA",
    description: "Una scelta di campo. Credo nella politica come costruzione collettiva, responsabilità e scuola di futuro per i giovani.",
    details: "Una scelta di campo. Credo nella politica come costruzione collettiva, responsabilità e scuola di futuro per i giovani."
  },
  {
    year: "2025",
    title: "SEGRETERIA REGIONALE GD",
    description: "Tesoriere e Delegato al Tesseramento per GD Sicilia. Membro dell'Assemblea Nazionale dei Giovani Democratici.",
    details: "Tesoriere e Delegato al Tesseramento per GD Sicilia. Membro dell'Assemblea Nazionale dei Giovani Democratici."
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'EURONESS',
    name: 'EURONESS',
    year: '',
    description: "Risparmiare, trarre vantaggio, fare del bene. Trasformare il risparmio in uno strumento di solidarietà e crescita collettiva consapevole."
  },
  {
    id: 'GREENACTION',
    name: 'GREENACTION',
    year: '',
    description: "Imparare a differenziare per imparare a scegliere. La raccolta differenziata non come pratica tecnica, ma come esercizio di cittadinanza."
  },
  {
    id: 'ENIGMA LAB',
    name: 'ENIGMA LAB',
    year: '',
    description: "Gioco, città, collaborazione. Trasformare un gioco statico in un'esperienza dinamica urbana per rimettere al centro i talenti del territorio."
  }
];

export const NAV_ITEMS = [
  { label: 'HOME', href: '#home' },
  { label: 'CHI SONO', href: '#chi-sono' },
  { label: 'I TRAGUARDI', href: '#traguardi' },
  { label: 'PROGETTI', href: '#progetti' },
  { label: 'SALA STAMPA', href: '#sala-stampa' },
  { label: 'LIBRO', href: '#libro' },
  { label: 'SERVIZIO CIVILE', href: '#servizio-civile' },
];

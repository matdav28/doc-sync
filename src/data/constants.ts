export interface NewsItem {
  id: string;
  date: string;
  title: string;
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
    date: "10 NOV 2025", 
    title: "MATTEO MIGLIORE DELEGATO REGIONE SICILIA AL CONGRESSO NAZIONALE", 
    url: "https://www.quotidianodiragusa.it/2025/11/10/politica/ragusa-matteo-migliore-delegato-della-regione-sicilia-al-congresso-nazionale-dei-giovani-democratici/?utm_source=dlvr.it&utm_medium=facebook" 
  },
  { 
    id: 'news-2',
    date: "12 AGO 2025", 
    title: "MODICA PREMIA IL CORAGGIO: MATTEO RICEVUTO IN COMUNE", 
    url: "https://www.ragusaoggi.it/modica-premia-il-coraggio-matteo-migliore-ricevuto-in-comune-per-latto-di-civilta-nellepisodio-della-barella/" 
  },
  { 
    id: 'news-3',
    date: "11 AGO 2025", 
    title: "LA LEZIONE DI CIVILTA' DI MATTEO A MARINA DI MODICA", 
    url: "https://www.ragusaoggi.it/marina-di-modica-la-lezione-di-civilta-di-matteo-mentre-balordi-rubano-la-barella-per-ballarci-sopra/" 
  },
  { 
    id: 'news-4',
    date: "30 GIU 2025", 
    title: "IL SINDACO RICEVE MATTEO MIGLIORE DOPO SUMMER SCHOOL UE", 
    url: "https://www.lasicilia.it/news/ragusa/2544654/pozzallo-il-sindaco-riceve-matteo-migliore-che-ha-preso-parte-alla-summer-school-al-parlamento-europeo.html" 
  },
  { 
    id: 'news-5',
    date: "29 GIU 2025", 
    title: "DALLA SICILIA A BRUXELLES: LA VOCE DEI RAGAZZI IN EUROPA", 
    url: "https://www.ragusaoggi.it/dalla-sicilia-a-bruxelles-il-giovane-ragusano-che-porta-la-voce-dei-ragazzi-nel-cuore-delleuropa/" 
  },
  { 
    id: 'news-6',
    date: "16 APR 2023", 
    title: "MATTEO MIGLIORE, RITORNO AL FUTURO", 
    url: "https://gpreport.it/canali/leggimi-perche/matteo-migliore-ritorno-al-futuro/" 
  },
  { 
    id: 'news-7',
    date: "31 MAR 2023", 
    title: "ANGELO DI NATALE. FATTI E OPINIONI CON MATTEO MIGLIORE", 
    url: "https://www.youtube.com/watch?v=XqiEmnhzeZ8" 
  },
  { 
    id: 'news-8',
    date: "04 APR 2023", 
    title: "GIOVANI DEMOCRATICI, CONCLUSA LA FASE COSTITUENTE DEI CIRCOLI", 
    url: "https://reteiblea.it/2023/04/giovani-democratici-della-provincia-di-ragusa-ieri-conclusa-la-fase-costituente-dei-circoli/" 
  },
  { 
    id: 'news-9',
    date: "26 FEB 2022", 
    title: "MATTEO MIGLIORE GUIDERA' I GIOVANI DEMOCRATICI IN PROVINCIA DI RAGUSA", 
    url: "https://www.ragusaoggi.it/matteo-migliore-guidera-i-giovani-democratici-in-provincia-di-ragusa/" 
  },
  { 
    id: 'news-10',
    date: "28 FEB 2022", 
    title: "ANCHE IN PROVINCIA DI RAGUSA NASCE IL GRUPPO DEI GIOVANI DEMOCRATICI", 
    url: "https://www.quotidianodiragusa.it/2022/02/28/politica/anche-in-provincia-di-ragusa-nasce-il-gruppo-dei-giovani-democratici/" 
  },
  { 
    id: 'news-11',
    date: "16 APR 2022", 
    title: "RAPPORTO TRA I GIOVANI E POLITICA: UN CONVEGNO A POZZALLO", 
    url: "https://www.ialmo.it/news/ialmo-news/rapporto-tra-giovani-e-politica-un-convegno-a-pozzallo/" 
  },
  { 
    id: 'news-12',
    date: "07 GIU 2022", 
    title: "RAGUSA: FASE CONCLUSIVA PROGETTO UNICEF 'SCUOLA AMICA'", 
    url: "https://www.unicef.it/comitati-locali/ragusa/a-scicli-la-cerimonia-istituzionale-con-le-scuole-amiche/" 
  },
  { 
    id: 'news-13',
    date: "06 GEN 2021", 
    title: "APERTURA SCUOLE, CONTRARIA LA CONSULTA PROVINCIALE", 
    url: "https://www.ragusaoggi.it/apertura-scuole-contraria-la-consulta-provinciale-studentesca-di-ragusa-ecco-perche/" 
  },
  { 
    id: 'news-14',
    date: "02 LUG 2021", 
    title: "IL GRUPPO DEI GIOVANI DEMOCRATICI SI COSTITUISCE IN PROVINCIA", 
    url: "https://ragusalibera.it/il-gruppo-dei-giovani-democratici-si-costituisce-anche-in-provincia-di-ragusa/" 
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2019",
    title: "RAPPRESENTANTE D'ISTITUTO",
    description: "Al Liceo Scientifico 'Giorgio La Pira' di Pozzallo ho iniziato a guardare la scuola non solo come luogo di studio, ma come luogo da migliorare.",
    details: "Al Liceo Scientifico 'Giorgio La Pira' di Pozzallo ho iniziato a guardare la scuola non solo come luogo di studio, ma come luogo da migliorare. Organizzazione, spazi, assemblee, partecipazione: temi concreti per una scuola viva."
  },
  {
    year: "2020",
    title: "PRESIDENTE CPS RAGUSA",
    description: "È stato un incarico vero: riunioni, responsabilità, decisioni, confronto costante con istituzioni e territorio in piena fase pandemica.",
    details: "È stato un incarico vero: riunioni, responsabilità, decisioni, confronto costante con istituzioni e territorio in piena fase pandemica. Abbiamo gestito l'emergenza, i trasporti e il diritto allo studio in un momento storico senza precedenti."
  },
  {
    year: "2021",
    title: "MEMBRO ORGANO DI GARANZIA",
    description: "Un ruolo delicato: qui non conta 'apparire', conta la correttezza e la tutela dei diritti nel sistema scolastico USR Sicilia.",
    details: "Un ruolo delicato: qui non conta 'apparire', conta la correttezza e la tutela dei diritti nel sistema scolastico USR Sicilia. Un'esperienza istituzionale di alto profilo per garantire equità e rispetto delle norme."
  },
  {
    year: "Dal 2022",
    title: "RAPPRESENTANTE UNIBO",
    description: "Nel Dipartimento di Scienze Giuridiche. Qui la rappresentanza cambia forma: è più tecnica, legata ai processi e alle regole.",
    details: "Nel Dipartimento di Scienze Giuridiche. Qui la rappresentanza cambia forma: è più tecnica, legata ai processi e alle regole. Un lavoro quotidiano per migliorare la didattica e i servizi per gli studenti dell'Alma Mater."
  },
  {
    year: "2022",
    title: "SEGRETARIO GD RAGUSA",
    description: "Una scelta di campo. Credo nella politica come costruzione collettiva, responsabilità e scuola di futuro per i giovani.",
    details: "Una scelta di campo. Credo nella politica come costruzione collettiva, responsabilità e scuola di futuro per i giovani. Abbiamo ricostruito una comunità politica partendo dai territori e dai bisogni della nostra generazione."
  },
  {
    year: "2025",
    title: "SEGRETERIA REGIONALE GD",
    description: "Tesoriere e Delegato al Tesseramento per GD Sicilia. Membro dell'Assemblea Nazionale dei Giovani Democratici.",
    details: "Tesoriere e Delegato al Tesseramento per GD Sicilia. Membro dell'Assemblea Nazionale dei Giovani Democratici. Un impegno che si allarga a livello regionale e nazionale per portare la voce della Sicilia ai tavoli che contano."
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'EURONESS',
    name: 'EURONESS',
    year: '',
    description: "Risparmiare, trarre vantaggio, fare del bene. Trasformare il risparmio in solidarietà."
  },
  {
    id: 'GREENACTION',
    name: 'GREENACTION',
    year: '',
    description: "Imparare a differenziare per imparare a scegliere. La raccolta differenziata come esercizio di cittadinanza."
  },
  {
    id: 'ENIGMA LAB',
    name: 'ENIGMA LAB',
    year: '',
    description: "Gioco, città, collaborazione. Trasformare un gioco statico in un'esperienza urbana dinamica."
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

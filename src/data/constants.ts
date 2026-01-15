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

export interface ProjectDetailItem {
  title: string;
  category: string;
  description: string;
  fullText: string;
  gallery: string[];
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
    date: "11 MAR 2023", 
    title: "MATTEO MIGLIORE PUBBLICA IL PRIMO LIBRO A SOLI VENT'ANNI", 
    url: "#" 
  },
  { 
    id: 'news-10',
    date: "26 FEB 2022", 
    title: "MATTEO MIGLIORE GUIDERA' I GIOVANI DEMOCRATICI IN PROVINCIA DI RAGUSA", 
    url: "https://www.ragusaoggi.it/matteo-migliore-guidera-i-giovani-democratici-in-provincia-di-ragusa/" 
  },
  { 
    id: 'news-11',
    date: "28 FEB 2022", 
    title: "ANCHE IN PROVINCIA DI RAGUSA NASCE IL GRUPPO DEI GIOVANI DEMOCRATICI", 
    url: "https://www.quotidianodiragusa.it/2022/02/28/politica/anche-in-provincia-di-ragusa-nasce-il-gruppo-dei-giovani-democratici/" 
  },
  { 
    id: 'news-12',
    date: "16 APR 2022", 
    title: "RAPPORTO TRA I GIOVANI E POLITICA: UN CONVEGNO A POZZALLO", 
    url: "https://www.ialmo.it/news/ialmo-news/rapporto-tra-giovani-e-politica-un-convegno-a-pozzallo/" 
  },
  { 
    id: 'news-13',
    date: "07 GIU 2022", 
    title: "RAGUSA: FASE CONCLUSIVA PROGETTO UNICEF 'SCUOLA AMICA'", 
    url: "https://www.unicef.it/comitati-locali/ragusa/a-scicli-la-cerimonia-istituzionale-con-le-scuole-amiche/" 
  },
  { 
    id: 'news-14',
    date: "28 SET 2021", 
    title: "L'ASP MONITORA L'INSORGERE DEI CONTAGI. MIGLIORE: \"SITUAZIONE PIU' SERENA\"", 
    url: "#" 
  },
  { 
    id: 'news-15',
    date: "06 GEN 2021", 
    title: "APERTURA SCUOLE, CONTRARIA LA CONSULTA PROVINCIALE", 
    url: "https://www.ragusaoggi.it/apertura-scuole-contraria-la-consulta-provinciale-studentesca-di-ragusa-ecco-perche/" 
  },
  { 
    id: 'news-16',
    date: "02 LUG 2021", 
    title: "IL GRUPPO DEI GIOVANI DEMOCRATICI SI COSTITUISCE IN PROVINCIA", 
    url: "https://ragusalibera.it/il-gruppo-dei-giovani-democratici-si-costituisce-anche-in-provincia-di-ragusa/" 
  },
  { 
    id: 'news-17',
    date: "17 NOV 2019", 
    title: "RENZI CHIAMA ALLE ARMI IL SUO POPOLO. \"CAOS IMPREVEDIBILE\"", 
    url: "#" 
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

export const PROJECTS_DATA: Record<string, ProjectDetailItem> = {
  "euroness": {
    title: "EURONESS",
    category: "Progetto",
    description: "Risparmiare, trarre vantaggio, fare del bene.",
    fullText: "Un progetto nato per trasformare il risparmio in uno strumento di solidarietà. Attraverso Euroness, cerchiamo di creare un modello economico circolare che permetta ai cittadini di trarre vantaggi diretti dalle loro scelte di consumo, reinvestendo una parte del valore generato in progetti di utilità sociale per il territorio.",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  "greenaction": {
    title: "GREENACTION",
    category: "Progetto",
    description: "La raccolta differenziata come esercizio di cittadinanza.",
    fullText: "Imparare a differenziare per imparare a scegliere. GreenAction non è solo una campagna ecologica, ma un percorso di educazione civica. Abbiamo coinvolto le scuole e i quartieri in attività pratiche per dimostrare che la cura dell'ambiente inizia dalle piccole scelte quotidiane.",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  "enigma-lab": {
    title: "ENIGMA LAB",
    category: "Progetto",
    description: "Gioco, città, collaborazione.",
    fullText: "Trasformare un gioco statico in un'esperienza dinamica urbana. Enigma Lab ha portato i giovani a riscoprire i luoghi della città attraverso la gamification, risolvendo enigmi legati alla storia e alla cultura locale, favorendo la collaborazione e il senso di appartenenza.",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  "croce-rossa": {
    title: "CROCE ROSSA ITALIANA",
    category: "Servizio Civile",
    description: "Umanità, imparzialità, neutralità.",
    fullText: "Il servizio civile è stata l'occasione per conoscere la mia comunità da un'altra prospettiva. Non da studente, ma da cittadino attivo che si mette a disposizione. In Croce Rossa ho imparato il valore del soccorso, dell'ascolto e della presenza silenziosa accanto a chi soffre.",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  "legambiente": {
    title: "LEGAMBIENTE",
    category: "Servizio Civile",
    description: "Circolo 'A Valata' di Pozzallo.",
    fullText: "Una mano per l'ambiente. Con il circolo 'A Valata' di Pozzallo abbiamo promosso un ambientalismo attivo, fatto non solo di proteste ma di proposte e azioni concrete per la tutela del nostro territorio e delle nostre radici, difendendo la bellezza della nostra terra.",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  "agesci": {
    title: "A.G.E.S.C.I.",
    category: "Servizio Civile",
    description: "Educare, educarsi, servire.",
    fullText: "Dal Gruppo Pozzallo 1 al servizio educativo come capo nel Gruppo Ispica 2. Lo scoutismo è stata la mia scuola di cittadinanza. 'Lasciare il mondo un po' migliore di come lo abbiamo trovato' non è solo uno slogan, è una bussola per l'impegno politico e sociale.",
    gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  }
};

export const NAV_ITEMS = [
  { label: 'HOME', href: '#home' },
  { label: 'CHI SONO', href: '#chi-sono' },
  { label: 'I TRAGUARDI', href: '#traguardi' },
  { label: 'PROGETTI', href: '#progetti' },
  { label: 'SALA STAMPA', href: '#sala-stampa' },
  { label: 'LIBRO', href: '#libro' },
  { label: 'SERVIZIO CIVILE', href: '#servizio-civile' },
];
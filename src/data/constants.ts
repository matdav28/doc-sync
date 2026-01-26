export interface NewsItem {
  id: string;
  date: string;
  title: string;
  url: string;
}

// AGGIUNTO gallery?: string[]
export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  details: string;
  fullContent: string;
  gallery?: string[]; 
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
    id: "2016-2021-consulta",
    year: "2016-2021",
    title: "CONSULTA GIOVANILE COMUNE DI POZZALLO",
    description: "L'impegno civico nasce dalla partecipazione e dal coinvolgimento diretto dei giovani.",
    details: "Dal 2016, all'età di 14 anni, fino al 2021, ho fatto parte della Consulta Giovanile del Comune di Pozzallo...",
    fullContent: "Dal 2016, all'età di 14 anni, fino al 2021, ho fatto parte della Consulta Giovanile del Comune di Pozzallo, un'esperienza che ha rappresentato il mio primo e più importante percorso di partecipazione attiva alla vita pubblica della città. \n\n\ All'interno della Consulta ho contribuito a promuovere iniziative volte al coinvolgimento dei giovani, favorendo momenti di aggregazione, confronto e socialità, quali, ad esempio, l'organizzazione di tornei di calcio, pallavolo e competizioni di PlayStation."
  },
  {
    id: "2019-rappresentante",
    year: "2019",
    title: "RAPPRESENTANTE D'ISTITUTO",
    description: "Al Liceo Scientifico 'Giorgio La Pira' di Pozzallo ho iniziato a guardare la scuola non solo come un luogo di studio, ma come una comunità da migliorare.",
    details: "Al Liceo Scientifico 'Giorgio La Pira' di Pozzallo ho iniziato a guardare la scuola non solo come un luogo di studio...",
    fullContent: "Al Liceo Scientifico 'Giorgio La Pira' di Pozzallo ho iniziato a guardare la scuola non solo come un luogo di studio, ma come una comunità da migliorare. \n\n\ Mi sono avvicinato ai temi dell'organizzazione scolastica, della qualità degli spazi, del ruolo delle assemblee e della partecipazione studentesca, concentrandomi su aspetti concreti e quotidiani, fondamentali per rendere la scuola un ambiente vivo e inclusivo. \n\n\ Questa è stata la mia prima esperienza di rappresentanza, il momento in cui ho compreso che il cambiamento è possibile quando qualcuno sceglie di assumersi una responsabilità e di impegnarsi in prima persona per il bene collettivo.",
    gallery: [
        "/gallery/rappresentante-istituto/ri-1.webp",
        "/gallery/rappresentante-istituto/ri-2.webp",
        "/gallery/rappresentante-istituto/ri-3.webp",
        "/gallery/rappresentante-istituto/ri-4.webp",
        "/gallery/rappresentante-istituto/ri-5.webp",
        "/gallery/rappresentante-istituto/ri-6.webp",
        "/gallery/rappresentante-istituto/ri-0.webp"


    ]
  },
  {
    id: "2020-presidente-cps",
    year: "2020",
    title: "PRESIDENTE CPS RAGUSA",
    description: "Essere Presidente della Consulta Provinciale degli Studenti della Provincia di Ragusa ha rappresentato per me un incarico vero, concreto e di grande responsabilità.",
    details: "Essere Presidente della Consulta Provinciale degli Studenti della Provincia di Ragusa...",
    fullContent: "Essere Presidente della Consulta Provinciale degli Studenti della Provincia di Ragusa ha rappresentato per me un incarico vero, concreto e di grande responsabilità. Per la prima volta ho avuto l'onore di rappresentare circa 15.000 studenti, venendo eletto all'unanimità in un periodo complesso e delicatissimo, segnato dall'emergenza della pandemia da Covid-19. \n\n\ L'attività della Consulta si è svolta in un contesto senza precedenti, fatto di continue riunioni, decisioni urgenti e confronto costante con le istituzioni e il territorio. \n\n\ Durante l'emergenza ho lavorato a stretto contatto con la Prefettura, contribuendo alla gestione delle criticità legate alla sicurezza, ai trasporti scolastici e alla tutela del diritto allo studio. In qualità di Presidente ho coordinato le rappresentanze di tutti gli istituti scolastici della provincia, portando la voce degli studenti nelle sedi istituzionali e garantendo un dialogo continuo tra scuola, amministrazioni e comunità locali, con l'obiettivo di non lasciare indietro nessuno in uno dei momenti più difficili della nostra storia recente.",
    gallery: [
      "/gallery/cps/cps-5.webp",
      "/gallery/cps/cps-0.webp",
      "/gallery/cps/cps-2.webp",
      "/gallery/cps/cps-3.webp",
      "/gallery/cps/cps-4.webp",
      "/gallery/cps/cps-6.webp"
    ]
  },
  {
    id: "2021-organo-garanzia",
    year: "2021",
    title: "MEMBRO ORGANO DI GARANZIA",
    description: "Sono stato nominato dal Dirigente Generale dell'USR Sicilia come Componente dell'Organo di Garanzia Regionale.",
    details: "Un incarico di particolare responsabilità in cui non conta apparire...",
    fullContent: "Sono stato nominato dal Dirigente Generale dell'USR Sicilia come Componente dell'Organo di Garanzia Regionale, un incarico di particolare responsabilità in cui non conta apparire, ma garantire correttezza, imparzialità e tutela dei diritti nel sistema scolastico. \n\n\ L'Organo di Garanzia Regionale è chiamato a pronunciarsi in ultima istanza sui ricorsi presentati dagli studenti, valutando situazioni spesso complesse nel pieno rispetto delle norme e delle procedure. \n\n\ In questo contesto ho maturato una forte consapevolezza dell'importanza del rigore istituzionale, dell'equilibrio nelle decisioni e del rispetto delle regole come fondamento della credibilità delle istituzioni. \n\n\ È stata un'esperienza di alto profilo istituzionale e formativo, che mi ha insegnato il valore dell'imparzialità e della responsabilità nel tutelare i diritti, soprattutto quando si tratta di garantire equità e giustizia all'interno della scuola.",
    gallery: [
      "/gallery/usr/usr-logo.png",
      ]
  },
  {
    id: "2022-segretario-gd",
    year: "2022",
    title: "SEGRETARIO GD RAGUSA",
    description: "Credo nella politica come costruzione collettiva, assunzione di responsabilità e scuola di futuro per le nuove generazioni.",
    details: "Quando ho iniziato questo percorso, i Giovani Democratici in provincia di Ragusa non erano presenti come organizzazione strutturata.",
    fullContent: "Una scelta di campo. Credo nella politica come costruzione collettiva, assunzione di responsabilità e scuola di futuro per le nuove generazioni. Quando ho iniziato questo percorso, i Giovani Democratici in provincia di Ragusa non erano presenti come organizzazione strutturata. \n\n\ Su proposta dell'On. Nello Dipasquale, ho promosso e fondato i Giovani Democratici della provincia di Ragusa, avviando un lavoro di ricostruzione politica e organizzativa partendo dai territori e dai bisogni reali della nostra generazione. \n\n\ Abbiamo costituito tre circoli intercomunali Ragusa, Modica e Vittoria dotandoli di uno Statuto e di regole condivise, fondamentali per garantire democrazia interna, partecipazione e continuità. In qualità \n\n\ di Segretario provinciale, ho lavorato per costruire una rete di giovani impegnati, organizzando eventi pubblici, dibattiti e momenti di formazione politica, con l'obiettivo di restituire ai giovani uno spazio di confronto, proposta e protagonismo. \n\n\ Un'esperienza che ha dimostrato come la politica, quando nasce dal basso e dai territori, possa tornare a essere uno strumento credibile di partecipazione e cambiamento.",
    gallery: [
      "/gallery/gd/gd-4.webp",
      "/gallery/gd/gd-0.webp",
      "/gallery/gd/gd-1.jpeg",
      "/gallery/gd/gd-2.webp",
      "/gallery/gd/gd-5.webp",
      "/gallery/gd/gd-7.jpeg",
      "/gallery/gd/gd-8.webp",
      "/gallery/gd/gd-9.webp",
      "/gallery/gd/gd-10.jpeg",
      "/gallery/gd/gd-11.webp",
      "/gallery/gd/gd-12.jpeg",
      "/gallery/gd/gd-13.webp",
      "/gallery/gd/gd-14.webp",
      "/gallery/gd/gd-15.webp",
      "/gallery/gd/gd-16.webp",
      "/gallery/gd/gd-17.webp",
      "/gallery/gd/gd-18.webp",
    ]
  },
  {
    id: "2022-rappresentante-unibo",
    year: "Dal 2022",
    title: "RAPPRESENTANTE UNIBO",
    description: "Sono arrivato all'Università di Bologna come matricola e, fin dai primi mesi, sono stato candidato a rappresentare gli studenti del Dipartimento di Scienze Giuridiche.",
    details: "Un segno di fiducia che ho accolto con grande senso di responsabilità. Alle elezioni sono risultato la matricola più votata.",
    fullContent: "Sono arrivato all'Università di Bologna come matricola e, fin dai primi mesi, sono stato candidato a rappresentare gli studenti del Dipartimento di Scienze Giuridiche, un segno di fiducia che ho accolto con grande senso di responsabilità. \n\n\ Alle elezioni sono risultato la matricola più votata e il terzo candidato più votato dell'intero Dipartimento, confermando l'importanza di una rappresentanza credibile e radicata tra gli studenti. In questo contesto la rappresentanza assume una forma diversa: è più tecnica, legata ai processi, ai regolamenti e al funzionamento dell'istituzione universitaria.  Un lavoro quotidiano e spesso silenzioso, finalizzato a migliorare la qualità della didattica e dei servizi offerti agli studenti dell'Alma Mater. \n\n\ Ho partecipato ai Consigli di Dipartimento, alle Commissioni paritetiche docenti-studenti e ai tavoli di confronto con il corpo docente, portando avanti le istanze degli studenti con spirito costruttivo, competenza e attenzione alle regole, nella convinzione che una buona università si costruisca anche attraverso una rappresentanza seria e preparata.",
    gallery: [
      "/gallery/unibo/uni-0.webp",
      "/gallery/unibo/uni-2.webp",
      "/gallery/unibo/uni-3.webp",
      "/gallery/unibo/uni-4.webp"
    ]
  },
  {
    id: "2024-presidente-seggio",
    year: "2024-2025",
    title: "PRESIDENTE DI SEGGIO",
    description: "Al servizio della democrazia e della correttezza del processo di voto, con il compito di garantire trasparenza, legalità e rispetto del voto di ogni cittadino.",
    details: "Sono stato nominato Presidente di seggio elettorale dalla Corte di Appello di Catania per la prima volta nel 2024.",
    fullContent: "Al servizio della democrazia e della correttezza del processo di voto, con il compito di garantire trasparenza, legalità e rispetto del voto di ogni cittadino. \n\n\ Sono stato nominato Presidente di seggio elettorale dalla Corte di Appello di Catania per la prima volta nel 2024, in occasione delle elezioni del Parlamento Europeo. \n\n\ Nel 2025 ho nuovamente ricoperto questo ruolo per lo svolgimento dei cinque quesiti referendari, garantendo il corretto e trasparente svolgimento delle operazioni di voto.",
    gallery: [
      "/gallery/seggio/se-0.webp",
      "/gallery/seggio/se-1.webp",
      "/gallery/seggio/se-2.webp",
      "/gallery/seggio/se-3.webp",
      "/gallery/seggio/se-4.webp",
      "/gallery/seggio/se-5.webp",
      "/gallery/seggio/se-6.webp",
      "/gallery/seggio/se-7.webp",
      "/gallery/seggio/se-8.webp",
      "/gallery/seggio/se-10.webp"
    ]
  },
  {
    id: "2025-summer-school",
    year: "2025",
    title: "SUMMER SCHOOL UE",
    description: "Un'occasione formativa e di confronto nel cuore delle Istituzioni europee.",
    details: "Nel 2025 ho partecipato alla Summer School 'Tutta un'altra Europa', tenutasi presso il Parlamento Europeo a Bruxelles.",
    fullContent: "Un'occasione formativa e di confronto nel cuore delle Istituzioni europee. Nel 2025 ho partecipato alla Summer School 'Tutta un'altra Europa', tenutasi presso il Parlamento Europeo a Bruxelles, come rappresentante dei Giovani Democratici della Provincia di Ragusa. \n\n\ Questa esperienza di tre giorni di formazione, dialogo politico e approfondimento istituzionale ha offerto l'opportunità di confrontarsi con giovani dirigenti e attivisti provenienti da tutta Italia all'interno di un contesto europeo. \n\n\ L'iniziativa si è svolta nel quadro di momenti di studio e confronto dedicati alle sfide contemporanee dell'Unione Europea e alle prospettive future per i giovani nel progetto comunitario.",
    gallery: [
      "/gallery/eu-school/eu-0.webp",
      "/gallery/eu-school/eu-2.webp",
      "/gallery/eu-school/eu-3.jpeg",
      "/gallery/eu-school/eu-4.webp"
    ]
  },
  {
    id: "2025-segreteria-regionale",
    year: "2025",
    title: "SEGRETERIA REGIONALE GD",
    description: "Sono stato nominato da Marco Greco alla fine del 2025 come Tesoriere e Delegato al Tesseramento dei Giovani Democratici Sicilia.",
    details: "Un incarico che amplia il mio impegno politico a livello regionale e nazionale.",
    fullContent: "Sono stato nominato da Marco Greco alla fine del 2025 come Tesoriere e Delegato al Tesseramento dei Giovani Democratici Sicilia, assumendo un incarico che amplia il mio impegno politico a livello regionale e nazionale. \n\n\ Questo ruolo comporta una responsabilità organizzativa e politica fondamentale: lavorare per costruire una rete regionale solida, trasparente e radicata nei territori, capace di dialogare con le realtà locali e di rafforzare la partecipazione dei giovani alla vita del partito. \n\n\ In qualità di Membro dell'Assemblea Nazionale dei Giovani Democratici, porto la voce della Sicilia ai tavoli di confronto nazionali, contribuendo al dibattito politico e alle scelte strategiche dell'organizzazione, con l'obiettivo di rendere i giovani protagonisti e incidere concretamente nelle decisioni del Partito Democratico."
  }
];

export const PROJECTS_DATA: Record<string, ProjectDetailItem> = {
  "euroness": {
    title: "EURONESS",
    category: "Progetto",
    description: "Risparmiare, trarre vantaggio, fare del bene.",
    fullText: "Euroness nasce come un'idea sviluppata in ambito scolastico, con l'obiettivo di promuovere il risparmio e sostenere la realizzazione di progetti per la comunità scolastica. Nel tempo il progetto si è evoluto, trovando oggi applicazione anche nel campo della numismatica, come forma di collezione consapevole e valorizzazione del risparmio. Alla base di Euroness c'è l'idea di trasformare il risparmio in uno strumento di solidarietà. Il progetto mira a costruire un modello economico circolare, capace di generare benefici diretti per i cittadini a partire dalle loro scelte di consumo, reinvestendo una parte del valore prodotto in iniziative di utilità sociale per il territorio. Un'esperienza che unisce educazione economica, responsabilità sociale e attenzione alla comunità, dimostrando come anche piccoli gesti possano contribuire a creare valore condiviso.",
    gallery: [
      "/gallery/euroness/eu-0.webp",
      "/gallery/euroness/eu-1.webp",
      "/gallery/euroness/eu-2.webp",
      "/gallery/euroness/eu-3.webp",
      "/gallery/euroness/eu-4.webp",
      "/gallery/euroness/eu-5.webp",
      "/gallery/euroness/eu-6.webp"
    ]
  },
  "greenaction": {
    title: "GREENACTION",
    category: "Progetto",
    description: "La raccolta differenziata come esercizio di cittadinanza.",
    fullText: "GreenAction è un progetto nato con l'obiettivo di introdurre e rafforzare la raccolta differenziata nelle scuole, partendo dall'educazione ambientale come strumento di crescita civica. Attraverso un approccio pratico e partecipato, abbiamo coinvolto studenti, scuole e quartieri in un percorso di sensibilizzazione concreto e quotidiano. Nel corso dell'iniziativa sono stati raccolti migliaia di tappi di plastica, dimostrando come anche gesti semplici possano generare un impatto reale se condivisi da una comunità consapevole. GreenAction non è stata solo una campagna ecologica, ma un vero e proprio percorso di educazione civica, pensato per trasmettere l'idea che la tutela dell'ambiente nasce dalle scelte di ogni giorno e dalla responsabilità collettiva verso il territorio.",
    gallery: [
      "/gallery/green-action/ga-0.webp",
      "/gallery/green-action/ga-1.webp",
      "/gallery/green-action/ga-2.webp",
      "/gallery/green-action/ga-3.webp",
      "/gallery/green-action/ga-4.webp"
    ]
  },
  "enigma-lab": {
    title: "ENIGMA LAB",
    category: "Progetto",
    description: "Gioco, città, collaborazione.",
    fullText: "Trasformare un gioco statico in un'esperienza dinamica urbana. Enigma Lab ha portato i giovani a riscoprire i luoghi della città attraverso la gamification, risolvendo enigmi legati alla storia e alla cultura locale, favorendo la collaborazione e il senso di appartenenza.",
    gallery: [
      "/gallery/enigma-lab/en-0.webp",
      "/gallery/enigma-lab/en-1.webp",
      "/gallery/enigma-lab/en-2.webp",
      "/gallery/enigma-lab/en-3.webp",
      "/gallery/enigma-lab/en-4.webp"
    ]
  },
  "croce-rossa": {
    title: "CROCE ROSSA ITALIANA",
    category: "Servizio Civile",
    description: "Umanità, imparzialità, neutralità.",
    fullText: "Il servizio civile è stata l'occasione per conoscere la mia comunità da un'altra prospettiva. Non da studente, ma da cittadino attivo che si mette a disposizione. In Croce Rossa ho imparato il valore del soccorso, dell'ascolto e della presenza silenziosa accanto a chi soffre.",
    gallery: [
      "/gallery/croce-rossa/cr-0.webp",
      "/gallery/croce-rossa/cr-1.webp",
      "/gallery/croce-rossa/cr-2.webp",
      "/gallery/croce-rossa/cr-3.webp",
      "/gallery/croce-rossa/cr-4.webp",
      "/gallery/croce-rossa/cr-5.webp",
      "/gallery/croce-rossa/cr-6.webp",
      "/gallery/croce-rossa/cr-7.webp",
      "/gallery/croce-rossa/cr-8.webp",
      "/gallery/croce-rossa/cr-9.webp",
      "/gallery/croce-rossa/cr-10.webp",
      "/gallery/croce-rossa/cr-11.webp",
      "/gallery/croce-rossa/cr-12.webp",
      "/gallery/croce-rossa/cr-13.webp",
      "/gallery/croce-rossa/cr-14.webp"
    ]
  },
  "legambiente": {
    title: "LEGAMBIENTE",
    category: "Servizio Civile",
    description: "Circolo 'A Valata' di Pozzallo.",
    fullText: "Una mano per l'ambiente. Con il circolo 'A Valata' di Pozzallo abbiamo promosso un ambientalismo attivo, fatto non solo di proteste ma di proposte e azioni concrete per la tutela del nostro territorio e delle nostre radici, difendendo la bellezza della nostra terra.",
    gallery: [
      "/gallery/legambiente/la-0.webp",
      "/gallery/legambiente/la-1.webp",
      "/gallery/legambiente/la-2.webp",
      "/gallery/legambiente/la-3.webp",
      "/gallery/legambiente/la-4.webp",
      "/gallery/legambiente/la-5.webp",
      "/gallery/legambiente/la-6.webp",
      "/gallery/legambiente/la-7.webp",
      "/gallery/legambiente/la-8.webp",
      "/gallery/legambiente/la-9.webp",
      "/gallery/legambiente/la-10.webp",
      "/gallery/legambiente/la-11.webp",
      "/gallery/legambiente/la-12.webp",
      "/gallery/legambiente/la-13.webp",
      "/gallery/legambiente/la-14.webp",
      "/gallery/legambiente/la-15.webp",
      "/gallery/legambiente/la-16.webp"
    ]
  },
  "agesci": {
    title: "A.G.E.S.C.I.",
    category: "Servizio Civile",
    description: "Educare, educarsi, servire.",
    fullText: "Dal Gruppo Pozzallo 1 al servizio educativo come capo nel Gruppo Ispica 2. Lo scoutismo è stata la mia scuola di cittadinanza. 'Lasciare il mondo un po' migliore di come lo abbiamo trovato' non è solo uno slogan, è una bussola per l'impegno politico e sociale.",
    gallery: [
      "/gallery/agesci/ag-1.webp",
      "/gallery/agesci/ag-2.webp",
      "/gallery/agesci/ag-3.webp",
      "/gallery/agesci/ag-4.webp",
      "/gallery/agesci/ag-5.webp",
      "/gallery/agesci/ag-6.webp",
      "/gallery/agesci/ag-7.webp",
      "/gallery/agesci/ag-8.webp",
      "/gallery/agesci/ag-9.webp",
      "/gallery/agesci/ag-10.webp",
      "/gallery/agesci/ag-11.webp",
      "/gallery/agesci/ag-12.webp",
      "/gallery/agesci/ag-13.webp",
      "/gallery/agesci/ag-14.webp",
      "/gallery/agesci/ag-15.webp",
      "/gallery/agesci/ag-16.webp",
      "/gallery/agesci/ag-17.webp",
      "/gallery/agesci/ag-18.webp",
      "/gallery/agesci/ag-19.webp",
      "/gallery/agesci/ag-20.webp",
      "/gallery/agesci/ag-21.webp",
      "/gallery/agesci/ag-22.webp"
    ]
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

export const NAV_MENU = {
  traguardi: TIMELINE_DATA.map(t => ({ 
    label: t.year.replace('Dal ', '') + " - " + t.title, 
    href: `/traguardi/${t.id}` 
  })),
  progetti: [
    { label: "EURONESS", href: "/dettaglio/euroness" },
    { label: "GREENACTION", href: "/dettaglio/greenaction" },
    { label: "ENIGMA LAB", href: "/dettaglio/enigma-lab" }
  ],
  servizio: [
    { label: "CROCE ROSSA", href: "/dettaglio/croce-rossa" },
    { label: "LEGAMBIENTE", href: "/dettaglio/legambiente" },
    { label: "A.G.E.S.C.I.", href: "/dettaglio/agesci" }
  ]
};
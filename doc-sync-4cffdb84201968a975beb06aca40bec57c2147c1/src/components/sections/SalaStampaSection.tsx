import React, { useState } from 'react';
import Section from '@/components/Section';
import { NEWS_DATA } from '@/data/constants';
import { ChevronRight, ChevronDown } from 'lucide-react';

const NewsRow: React.FC<{ item: typeof NEWS_DATA[0] }> = ({ item }) => {
  const isDisabled = item.url === '#';
  
  const content = (
    <>
      <div className="w-full md:w-1/4">
        <span className="text-accent font-bold text-lg uppercase tracking-wider">
          {item.date}
        </span>
      </div>
      <div className="w-full md:w-2/4">
        <h3 className="text-foreground font-black text-xl md:text-2xl uppercase leading-tight group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        {isDisabled && (
          <span className="text-muted-foreground text-xs italic mt-1 block">(Link non disponibile)</span>
        )}
      </div>
      {!isDisabled && (
        <div className="w-full md:w-1/4 flex items-center justify-end gap-3">
          <span className="text-muted-foreground text-xs uppercase tracking-wider group-hover:text-accent transition-colors hidden md:block">
            LEGGI L'ARTICOLO
          </span>
          <div className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all">
            <ChevronRight className="text-muted-foreground group-hover:text-accent-foreground transition-colors" />
          </div>
        </div>
      )}
    </>
  );

  if (isDisabled) {
    return (
      <div className="flex flex-col md:flex-row py-8 border-b border-border items-start md:items-center justify-between gap-4 px-4 -mx-4 opacity-60 cursor-not-allowed">
        {content}
      </div>
    );
  }

  return (
    <a 
      href={item.url} 
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col md:flex-row py-8 border-b border-border group hover:bg-muted/50 transition-colors cursor-pointer items-start md:items-center justify-between gap-4 px-4 -mx-4"
    >
      {content}
    </a>
  );
};

const SalaStampaSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const initialItems = NEWS_DATA.slice(0, 3);
  const hiddenItems = NEWS_DATA.slice(3);

  return (
    <Section id="sala-stampa" title="SALA STAMPA" bgColor="bg-background">
      <p className="text-muted-foreground text-xl max-w-3xl mb-12 leading-relaxed">
        Rassegna stampa e comunicati. Segui le notizie e gli aggiornamenti sull'attività politica e sociale.
      </p>
      
      <div className="relative pb-24">
        <div className="border-t border-border">
          {initialItems.map((item) => (
            <NewsRow key={item.id} item={item} />
          ))}
          
          {/* Animated expandable section */}
          <div 
            className="grid transition-all duration-500 ease-in-out"
            style={{
              gridTemplateRows: isExpanded ? '1fr' : '0fr',
            }}
          >
            <div className="overflow-hidden">
              {hiddenItems.map((item) => (
                <NewsRow key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* STICKY FLOATING BUTTON */}
        {hiddenItems.length > 0 && (
          <div className="sticky bottom-8 flex justify-center pointer-events-none mt-8">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="pointer-events-auto bg-primary text-primary-foreground px-8 py-4 rounded-full shadow-2xl hover:bg-accent hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
            >
              <span className="font-black uppercase tracking-wider">
                {isExpanded ? 'MOSTRA MENO' : 'MOSTRA TUTTO'}
              </span>
              <ChevronDown 
                size={20} 
                className={`transition-transform duration-500 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} 
              />
            </button>
          </div>
        )}
      </div>
    </Section>
  );
};

export default SalaStampaSection;
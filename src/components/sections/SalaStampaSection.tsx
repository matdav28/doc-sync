import React, { useState } from 'react';
import Section from '@/components/Section';
import { NEWS_DATA } from '@/data/constants';
import { ChevronRight, ChevronDown } from 'lucide-react';

const NewsRow: React.FC<{ item: typeof NEWS_DATA[0] }> = ({ item }) => (
  <a 
    href={item.url} 
    className="flex flex-col md:flex-row py-8 border-b border-border group hover:bg-muted/50 transition-colors cursor-pointer items-start md:items-center justify-between gap-4 px-4 -mx-4"
  >
    <div className="w-full md:w-1/4">
      <span className="text-accent font-bold text-lg uppercase tracking-wider">
        {item.date}
      </span>
    </div>
    <div className="w-full md:w-2/4">
      <h3 className="text-foreground font-black text-xl md:text-2xl uppercase leading-tight group-hover:text-primary transition-colors">
        {item.title}
      </h3>
    </div>
    <div className="w-full md:w-1/4 flex justify-end">
      <div className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all">
        <ChevronRight className="text-muted-foreground group-hover:text-accent-foreground transition-colors" />
      </div>
    </div>
  </a>
);

const SalaStampaSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const initialItems = NEWS_DATA.slice(0, 3);
  const hiddenItems = NEWS_DATA.slice(3);

  return (
    <Section id="sala-stampa" title="SALA STAMPA" bgColor="bg-background">
      <p className="text-muted-foreground text-xl max-w-3xl mb-12 leading-relaxed">
        Rassegna stampa e comunicati. Segui le notizie e gli aggiornamenti sull'attività politica e sociale.
      </p>
      
      <div className="border-t border-border">
        {initialItems.map((item) => (
          <NewsRow key={item.id} item={item} />
        ))}
        
        {isExpanded && hiddenItems.map((item) => (
          <NewsRow key={item.id} item={item} />
        ))}
      </div>
      
      {hiddenItems.length > 0 && (
        <div className="mt-8 flex justify-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-3 text-primary font-black uppercase tracking-wider hover:text-accent transition-colors"
          >
            <span>{isExpanded ? 'MOSTRA MENO' : 'MOSTRA TUTTO'}</span>
            <div className="w-10 h-10 rounded-full border-2 border-primary group-hover:border-accent group-hover:bg-accent flex items-center justify-center transition-all duration-300">
              <ChevronDown 
                size={20} 
                className={`text-primary group-hover:text-accent-foreground transition-all duration-500 ${isExpanded ? 'rotate-180' : 'rotate-0'} group-hover:scale-110`} 
              />
            </div>
          </button>
        </div>
      )}
    </Section>
  );
};

export default SalaStampaSection;

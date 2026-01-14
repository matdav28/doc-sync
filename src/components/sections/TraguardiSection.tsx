import React from 'react';
import Section from '@/components/Section';
import { TIMELINE_DATA } from '@/data/constants';
import { ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const TraguardiSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = React.useState<typeof TIMELINE_DATA[0] | null>(null);

  return (
    <Section id="traguardi" title="I TRAGUARDI" bgColor="bg-muted" className="pt-10 md:pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TIMELINE_DATA.map((item, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedItem(item)}
            className="p-6 md:p-8 flex flex-col bg-background rounded-2xl border-2 border-border/50 shadow-sm hover:shadow-lg hover:border-l-4 hover:border-accent transition-all duration-300 min-h-[260px] cursor-pointer group"
          >
            <span className="text-accent font-bold text-3xl md:text-4xl mb-3">
              {item.year.replace('Dal ', '')}
            </span>
            <h3 className="text-primary font-bold text-base md:text-lg uppercase mb-2 leading-tight">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
              {item.description}
            </p>
            
            <div className="flex items-center justify-between mt-auto">
              <span className="text-primary font-semibold text-sm uppercase flex items-center gap-2 group-hover:text-accent transition-colors">
                LEGGI TUTTO 
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                <ArrowRight className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <div className="text-accent font-bold text-2xl mb-2">
              {selectedItem?.year}
            </div>
            <DialogTitle className="text-primary font-bold text-xl uppercase">
              {selectedItem?.title}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-muted-foreground text-base leading-relaxed pt-4">
            {selectedItem?.details}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </Section>
  );
};

export default TraguardiSection;

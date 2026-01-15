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
            className="relative p-6 md:p-8 flex flex-col bg-background rounded-2xl border-2 border-border/50 shadow-sm cursor-pointer group min-h-[280px]
              hover:shadow-2xl hover:border-l-4 hover:border-accent hover:scale-[1.02] hover:-translate-y-1
              transition-all duration-300 ease-out"
          >
            {/* Subtle background glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full">
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
                {/* Expanding Arrow Button */}
                <div className="flex items-center gap-0 group/btn">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <ArrowRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider overflow-hidden max-w-0 group-hover:max-w-[120px] transition-all duration-300 ease-out whitespace-nowrap ml-0 group-hover:ml-3">
                    LEGGI TUTTO
                  </span>
                </div>
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
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TIMELINE_DATA } from '@/data/constants';
import { ArrowLeft, ArrowRight, Image as ImageIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TimelineRuler = ({ currentId }: { currentId: string }) => {
  return (
    <div className="w-full overflow-x-auto py-8 mb-10 border-b border-border">
      <div className="flex items-start justify-between min-w-[800px] relative px-4">
        {/* Main Line */}
        <div className="absolute left-0 right-0 top-[28px] h-0.5 bg-border z-0" />
        
        {TIMELINE_DATA.map((item) => {
          const isActive = item.id === currentId;
          return (
            <Link
              key={item.id}
              to={`/traguardi/${item.id}`}
              className="relative z-10 flex flex-col items-center group max-w-[120px]"
            >
              {/* Dot */}
              <div className="relative mb-3">
                <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${isActive ? 'bg-accent border-accent scale-125' : 'bg-background border-muted-foreground group-hover:border-primary group-hover:scale-110'}`} />
                {isActive && (
                  <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                )}
              </div>
              
              {/* Labels */}
              <div className="text-center">
                <span className={`block text-sm font-black transition-colors ${isActive ? 'text-accent' : 'text-muted-foreground group-hover:text-primary'}`}>
                  {item.year.replace('Dal ', '')}
                </span>
                <span className={`block text-[10px] uppercase tracking-wider mt-1 leading-tight transition-colors ${isActive ? 'text-accent' : 'text-muted-foreground/70 group-hover:text-primary/70'}`}>
                  {item.title}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const TraguardiDetail: React.FC = () => {
  const { id } = useParams();
  
  const currentIndex = TIMELINE_DATA.findIndex(t => t.id === id);
  const data = TIMELINE_DATA[currentIndex];
  
  const prevItem = currentIndex > 0 ? TIMELINE_DATA[currentIndex - 1] : null;
  const nextItem = currentIndex < TIMELINE_DATA.length - 1 ? TIMELINE_DATA[currentIndex + 1] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="text-4xl font-black text-primary mb-4">Traguardo non trovato</h1>
            <Link to="/#traguardi" className="text-accent hover:underline">
              Torna ai traguardi
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 md:pt-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          {/* Back Button */}
          <Link
            to="/#traguardi"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Home</span>
          </Link>
          
          {/* Timeline Ruler with Year + Role */}
          <TimelineRuler currentId={data.id} />

          {/* HEADER */}
          <div className="mb-12">
            <span className="text-accent font-black text-5xl md:text-7xl lg:text-8xl">
              {data.year.replace('Dal ', '')}
            </span>
            <h1 className="text-primary font-black text-2xl md:text-4xl lg:text-5xl uppercase mt-2 leading-tight">
              {data.title}
            </h1>
            <div className="w-24 h-1 bg-accent mt-6" />
          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* TEXT COLUMN - Increased text size */}
            <div>
              <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed">
                {data.fullContent || data.details}
              </p>
            </div>

            {/* GALLERY COLUMN */}
            <div className="space-y-6">
              {/* Main Image Placeholder */}
              <div className="aspect-video bg-muted/30 border border-border rounded-2xl flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <ImageIcon size={48} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">FOTO PRINCIPALE</p>
                </div>
              </div>
              
              {/* Mini Carousel */}
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Gallery</p>
                </div>
                <Carousel className="w-full">
                  <CarouselContent className="-ml-2">
                    {[1, 2, 3].map((_, i) => (
                      <CarouselItem key={i} className="pl-2 basis-1/3">
                        <div className="aspect-square bg-muted/30 border border-border rounded-xl flex items-center justify-center">
                          <span className="text-xs text-muted-foreground">FOTO {i + 1}</span>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="absolute -top-8 right-0 flex gap-2">
                    <CarouselPrevious className="static translate-y-0 h-7 w-7" />
                    <CarouselNext className="static translate-y-0 h-7 w-7" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>

          {/* NAVIGATION ARROWS - Graphically Enhanced */}
          <div className="flex justify-between items-stretch mt-20 pt-10 border-t border-border gap-6">
            {prevItem ? (
              <Link
                to={`/traguardi/${prevItem.id}`}
                className="flex items-center gap-5 group bg-gradient-to-r from-muted/40 to-muted/20 hover:from-primary hover:to-primary/80 border border-border hover:border-primary rounded-2xl p-6 md:p-8 flex-1 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary-foreground transition-colors shrink-0 group-hover:scale-110 duration-300">
                  <ArrowLeft className="text-primary-foreground group-hover:text-primary" size={24} />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider group-hover:text-primary-foreground/70 transition-colors">Precedente</span>
                  <p className="text-primary font-black group-hover:text-primary-foreground transition-colors text-base md:text-lg line-clamp-1 uppercase">
                    {prevItem.title}
                  </p>
                </div>
              </Link>
            ) : <div className="flex-1" />}

            {nextItem ? (
              <Link
                to={`/traguardi/${nextItem.id}`}
                className="flex items-center gap-5 group bg-gradient-to-l from-muted/40 to-muted/20 hover:from-primary hover:to-primary/80 border border-border hover:border-primary rounded-2xl p-6 md:p-8 flex-1 transition-all duration-300 text-right flex-row-reverse hover:shadow-xl hover:shadow-primary/20"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary-foreground transition-colors shrink-0 group-hover:scale-110 duration-300">
                  <ArrowRight className="text-primary-foreground group-hover:text-primary" size={24} />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider group-hover:text-primary-foreground/70 transition-colors">Successivo</span>
                  <p className="text-primary font-black group-hover:text-primary-foreground transition-colors text-base md:text-lg line-clamp-1 uppercase">
                    {nextItem.title}
                  </p>
                </div>
              </Link>
            ) : <div className="flex-1" />}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TraguardiDetail;
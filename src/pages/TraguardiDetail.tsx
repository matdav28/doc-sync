import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TIMELINE_DATA } from '@/data/constants';
import { ArrowLeft, ArrowRight, Download, Image as ImageIcon } from 'lucide-react';
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
    <div className="w-full overflow-x-auto py-6 mb-8 border-b border-border">
      <div className="flex items-center justify-between min-w-[700px] relative px-4">
        {/* Main Line */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-border -translate-y-1/2 z-0" />
        
        {TIMELINE_DATA.map((item) => {
          const isActive = item.id === currentId;
          return (
            <Link
              key={item.id}
              to={`/traguardi/${item.id}`}
              className="relative z-10 flex flex-col items-center group"
            >
              <span className={`text-xs font-bold mb-2 transition-colors ${isActive ? 'text-accent' : 'text-muted-foreground group-hover:text-primary'}`}>
                {item.year.replace('Dal ', '')}
              </span>
              
              <div className="relative">
                <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${isActive ? 'bg-accent border-accent scale-125' : 'bg-background border-muted-foreground group-hover:border-primary'}`} />
                {isActive && (
                  <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                )}
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
          
          {/* Timeline Ruler */}
          <TimelineRuler currentId={data.id} />

          {/* HEADER */}
          <div className="mb-10">
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
            {/* TEXT COLUMN */}
            <div>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
                {data.fullContent || data.details}
              </p>
              
              {/* Download Card */}
              <div className="bg-muted/30 border border-border rounded-2xl p-6 flex items-center gap-4 hover:border-accent transition-colors">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Download className="text-accent" size={24} />
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-primary">Documentazione Ufficiale</p>
                  <p className="text-sm text-muted-foreground">Scarica il PDF relativo a questo incarico.</p>
                </div>
                <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-bold text-sm uppercase hover:bg-accent hover:text-accent-foreground transition-colors">
                  SCARICA
                </button>
              </div>
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

          {/* FOOTER NAVIGATION (PREV/NEXT) */}
          <div className="flex justify-between items-stretch mt-16 pt-8 border-t border-border gap-4">
            {prevItem ? (
              <Link
                to={`/traguardi/${prevItem.id}`}
                className="flex items-center gap-4 group bg-muted/20 hover:bg-muted/40 border border-border rounded-2xl p-5 flex-1 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:bg-accent transition-colors shrink-0">
                  <ArrowLeft className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Precedente</span>
                  <p className="text-primary font-bold group-hover:text-accent transition-colors text-sm md:text-base line-clamp-1">
                    {prevItem.title}
                  </p>
                </div>
              </Link>
            ) : <div className="flex-1" />}

            {nextItem ? (
              <Link
                to={`/traguardi/${nextItem.id}`}
                className="flex items-center gap-4 group bg-muted/20 hover:bg-muted/40 border border-border rounded-2xl p-5 flex-1 transition-all text-right flex-row-reverse"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:bg-accent transition-colors shrink-0">
                  <ArrowRight className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Successivo</span>
                  <p className="text-primary font-bold group-hover:text-accent transition-colors text-sm md:text-base line-clamp-1">
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

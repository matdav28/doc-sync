import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TIMELINE_DATA } from '@/data/constants';
import { ArrowLeft, ArrowRight, X, ZoomIn } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Componente TimelineRuler (rimane invariato)
const TimelineRuler = ({ currentId }: { currentId: string }) => {
  return (
    <div className="w-full overflow-x-auto py-8 mb-10 border-b border-border">
      <div className="flex items-start justify-between min-w-[800px] relative px-4">
        <div className="absolute left-0 right-0 top-[28px] h-0.5 bg-border z-0" />
        {TIMELINE_DATA.map((item) => {
          const isActive = item.id === currentId;
          return (
            <Link
              key={item.id}
              to={`/traguardi/${item.id}`}
              className="relative z-10 flex flex-col items-center group max-w-[120px]"
            >
              <div className="relative mb-3">
                <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${isActive ? 'bg-accent border-accent scale-125' : 'bg-background border-muted-foreground group-hover:border-primary group-hover:scale-110'}`} />
                {isActive && (
                  <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                )}
              </div>
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
  
  // Stato per gestire l'immagine a tutto schermo
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  // LOGICA IMMAGINI:
  const allImages = data.gallery || [];
  // 1. La prima immagine è la "Main Image"
  const mainImage = allImages.length > 0 ? allImages[0] : null;
  // 2. Le immagini del carosello sono TUTTE tranne la prima (slice(1))
  const carouselImages = allImages.length > 1 ? allImages.slice(1) : [];

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
            {/* TEXT COLUMN */}
            <div>
              {/* AGGIUNTO whitespace-pre-line QUI SOTTO */}
              <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed whitespace-pre-line">
                {data.fullContent || data.details}
              </p>
            </div>

            {/* GALLERY COLUMN */}
            <div className="space-y-6">
              
              {/* MAIN IMAGE (Solo se esiste) */}
              {mainImage && (
                <div 
                  className="aspect-video bg-muted/30 border border-border rounded-2xl overflow-hidden shadow-sm relative group cursor-pointer"
                  onClick={() => setSelectedImage(mainImage)}
                >
                  <img 
                    src={mainImage} 
                    alt="Foto principale" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Icona Zoom on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" size={48} />
                  </div>
                </div>
              )}
              
              {/* CAROUSEL (Solo se ci sono ALTRE immagini oltre alla prima) */}
              {carouselImages.length > 0 && (
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Altre Foto</p>
                  </div>
                  <Carousel className="w-full">
                    <CarouselContent className="-ml-2">
                      {carouselImages.map((src, i) => (
                        <CarouselItem key={i} className="pl-2 basis-1/3">
                          <div 
                            className="aspect-square bg-muted/30 border border-border rounded-xl overflow-hidden cursor-pointer group relative hover:shadow-md transition-all"
                            onClick={() => setSelectedImage(src)}
                          >
                            <img 
                              src={src} 
                              alt={`Foto ${i + 2}`} // +2 perché partiamo dalla seconda
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
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
              )}
            </div>
          </div>

          {/* NAVIGATION ARROWS */}
          <div className="flex justify-between items-center mt-20 pt-10 border-t border-border">
            {prevItem ? (
              <Link
                to={`/traguardi/${prevItem.id}`}
                className="flex items-center gap-4 group transition-transform duration-300 hover:-translate-x-2"
              >
                <ArrowLeft className="text-accent" size={28} strokeWidth={2.5} />
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider block">Precedente</span>
                  <p className="text-accent font-black text-lg uppercase group-hover:text-primary transition-colors">
                    {prevItem.title}
                  </p>
                </div>
              </Link>
            ) : <div />}

            {nextItem ? (
              <Link
                to={`/traguardi/${nextItem.id}`}
                className="flex items-center gap-4 group text-right transition-transform duration-300 hover:translate-x-2"
              >
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider block">Successivo</span>
                  <p className="text-accent font-black text-lg uppercase group-hover:text-primary transition-colors">
                    {nextItem.title}
                  </p>
                </div>
                <ArrowRight className="text-accent" size={28} strokeWidth={2.5} />
              </Link>
            ) : <div />}
          </div>
        </div>
      </main>
      
      <Footer />

      {/* LIGHTBOX / VISUALIZZATORE A SCHERMO INTERO */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-none shadow-none flex items-center justify-center focus:outline-none">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors backdrop-blur-sm"
          >
            <X size={24} />
          </button>

          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Full screen view" 
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TraguardiDetail;
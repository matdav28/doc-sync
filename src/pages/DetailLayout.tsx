import React, { useState, useCallback, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS_DATA } from '@/data/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const DetailLayout = () => {
  const { id } = useParams();
  const data = PROJECTS_DATA[id as keyof typeof PROJECTS_DATA];
  
  // Stato per gestire l'immagine a tutto schermo
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-black text-primary mb-4">Pagina non trovata</h1>
            <Link to="/" className="text-accent hover:underline">Torna alla Home</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // LOGICA IMMAGINI
  const allImages = data.gallery || [];
  const mainImage = allImages.length > 0 ? allImages[0] : null;
  // Le immagini del carosello sono TUTTE tranne la prima
  const carouselImages = allImages.length > 1 ? allImages.slice(1) : [];

  // NAVIGAZIONE LIGHTBOX
  const handleNext = useCallback(() => {
    if (!selectedImage || allImages.length === 0) return;
    const currentIdx = allImages.indexOf(selectedImage);
    const nextIdx = (currentIdx + 1) % allImages.length;
    setSelectedImage(allImages[nextIdx]);
  }, [selectedImage, allImages]);

  const handlePrev = useCallback(() => {
    if (!selectedImage || allImages.length === 0) return;
    const currentIdx = allImages.indexOf(selectedImage);
    const prevIdx = (currentIdx - 1 + allImages.length) % allImages.length;
    setSelectedImage(allImages[prevIdx]);
  }, [selectedImage, allImages]);

  // Supporto tastiera
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, handleNext, handlePrev]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-12 md:pt-36 md:pb-20">
          
          {/* Tasto Indietro */}
          <div className="mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Home</span>
            </Link>
          </div>

          {/* Intestazione */}
          <div className="mb-12">
            <span className="text-accent font-bold uppercase tracking-wider text-sm mb-4 block">
              {data.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-primary mb-6 leading-tight whitespace-pre-line">
              {data.title}
            </h1>
            <div className="w-24 h-1.5 bg-accent"></div>
          </div>

          {/* GRIGLIA CONTENUTO (Testo a SX, Foto a DX) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
            
            {/* COLONNA SINISTRA: Testo */}
            <div>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed whitespace-pre-line">
                {data.fullText}
              </p>
            </div>
            
            {/* COLONNA DESTRA: Immagini (Main + Gallery) */}
            <div className="space-y-6">
              
              {/* 1. FOTO PRINCIPALE */}
              {mainImage ? (
                <div 
                  className="bg-muted rounded-2xl aspect-video flex items-center justify-center border border-border overflow-hidden shadow-sm relative group cursor-pointer"
                  onClick={() => setSelectedImage(mainImage)}
                >
                  <img 
                    src={mainImage} 
                    alt={`Immagine principale ${data.title}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" size={48} />
                  </div>
                </div>
              ) : (
                <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center border border-border">
                  <span className="text-muted-foreground font-semibold uppercase tracking-wider">
                    NESSUNA FOTO DISPONIBILE
                  </span>
                </div>
              )}

              {/* 2. GALLERIA (Subito sotto la foto principale) */}
              {carouselImages.length > 0 && (
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Altre Foto</p>
                  </div>
                  <Carousel className="w-full">
                    <CarouselContent className="-ml-2">
                      {carouselImages.map((src, index) => (
                        <CarouselItem key={index} className="pl-2 basis-1/3">
                          <div className="p-1">
                            <div 
                              className="bg-muted rounded-xl aspect-square flex items-center justify-center border border-border hover:border-accent transition-all overflow-hidden cursor-pointer group relative shadow-sm hover:shadow-md"
                              onClick={() => setSelectedImage(src)}
                            >
                              <img 
                                src={src} 
                                alt={`Galleria ${data.title} ${index + 2}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                            </div>
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
        </div>
      </main>
      
      <Footer />

      {/* LIGHTBOX */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-none shadow-none flex items-center justify-center focus:outline-none">
          
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-[60] p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors backdrop-blur-sm"
          >
            <X size={24} />
          </button>

          {allImages.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 z-[60] p-3 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors backdrop-blur-sm hover:scale-110"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Full screen view" 
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            />
          )}

          {allImages.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 z-[60] p-3 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors backdrop-blur-sm hover:scale-110"
            >
              <ChevronRight size={32} />
            </button>
          )}

        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DetailLayout;
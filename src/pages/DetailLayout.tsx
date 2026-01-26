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

  // LOGICA IMMAGINI (Identica a Traguardi)
  const allImages = data.gallery || [];
  
  // 1. La prima immagine è la "Main Image" (Copertina)
  const mainImage = allImages.length > 0 ? allImages[0] : null;
  
  // 2. Le immagini del carosello sono TUTTE tranne la prima (.slice(1))
  // Questo evita che la foto grande si ripeta nella striscia piccola
  const carouselImages = allImages.length > 1 ? allImages.slice(1) : [];

  // FUNZIONI NAVIGAZIONE LIGHTBOX (Scorrono su TUTTE le immagini)
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

  // Supporto tastiera (Freccette)
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
            {/* Aggiunto whitespace-pre-line per gestire gli a capo nel titolo */}
            <h1 className="text-5xl md:text-7xl font-black text-primary mb-6 leading-tight whitespace-pre-line">
              {data.title}
            </h1>
            <div className="w-24 h-1.5 bg-accent"></div>
          </div>

          {/* Contenuto Principale */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Testo */}
            <div>
              {/* Aggiunto whitespace-pre-line per gestire i paragrafi */}
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed whitespace-pre-line">
                {data.fullText}
              </p>
            </div>
            
            {/* FOTO PRINCIPALE (La prima della lista) */}
            <div className="space-y-6">
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
                  {/* Icona Zoom che appare all'hover */}
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
            </div>
          </div>

          {/* GALLERIA (Solo le foto successive alla prima) */}
          {carouselImages.length > 0 && (
            <div className="py-12 border-t border-border">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-10 uppercase">
                Altre Foto
              </h2>
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent className="-ml-4">
                  {carouselImages.map((src, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="p-2">
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
                <CarouselPrevious className="hidden md:flex -left-12" />
                <CarouselNext className="hidden md:flex -right-12" />
              </Carousel>
            </div>
          )}
        </div>
      </main>
      
      <Footer />

      {/* LIGHTBOX CON FRECCE DI NAVIGAZIONE */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-none shadow-none flex items-center justify-center focus:outline-none">
          
          {/* Pulsante chiudi */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-[60] p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors backdrop-blur-sm"
          >
            <X size={24} />
          </button>

          {/* Freccia Sinistra (Solo se c'è più di 1 foto totale) */}
          {allImages.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 z-[60] p-3 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors backdrop-blur-sm hover:scale-110"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Immagine */}
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Full screen view" 
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            />
          )}

          {/* Freccia Destra (Solo se c'è più di 1 foto totale) */}
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
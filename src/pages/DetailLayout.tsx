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

  // DATI IMMAGINI
  const hasImages = data.gallery && data.gallery.length > 0;
  const mainImage = hasImages ? data.gallery[0] : null;
  const galleryImages = data.gallery || []; // Per la navigazione servono tutte

  // NAVIGAZIONE
  const handleNext = useCallback(() => {
    if (!selectedImage || galleryImages.length === 0) return;
    const currentIdx = galleryImages.indexOf(selectedImage);
    const nextIdx = (currentIdx + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIdx]);
  }, [selectedImage, galleryImages]);

  const handlePrev = useCallback(() => {
    if (!selectedImage || galleryImages.length === 0) return;
    const currentIdx = galleryImages.indexOf(selectedImage);
    const prevIdx = (currentIdx - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIdx]);
  }, [selectedImage, galleryImages]);

  // Tastiera
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
          
          <div className="mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Home</span>
            </Link>
          </div>

          <div className="mb-12">
            <span className="text-accent font-bold uppercase tracking-wider text-sm mb-4 block">
              {data.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-primary mb-6 leading-tight">
              {data.title}
            </h1>
            <div className="w-24 h-1.5 bg-accent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed whitespace-pre-line">
                {data.fullText}
              </p>
            </div>
            
            <div 
              className="bg-muted rounded-2xl aspect-video flex items-center justify-center border border-border overflow-hidden shadow-sm relative group cursor-pointer"
              onClick={() => mainImage && setSelectedImage(mainImage)}
            >
              {mainImage ? (
                <>
                  <img 
                    src={mainImage} 
                    alt={`Immagine principale ${data.title}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" size={48} />
                  </div>
                </>
              ) : (
                <span className="text-muted-foreground font-semibold uppercase tracking-wider">
                  NESSUNA FOTO DISPONIBILE
                </span>
              )}
            </div>
          </div>

          {hasImages && (
            <div className="py-12 border-t border-border">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-10 uppercase">
                Gallery
              </h2>
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent className="-ml-4">
                  {data.gallery.map((src, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="p-2">
                        <div 
                          className="bg-muted rounded-xl aspect-square flex items-center justify-center border border-border hover:border-accent transition-all overflow-hidden cursor-pointer group relative shadow-sm hover:shadow-md"
                          onClick={() => setSelectedImage(src)}
                        >
                          <img 
                            src={src} 
                            alt={`Galleria ${data.title} ${index + 1}`}
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

      {/* LIGHTBOX CON FRECCE */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-none shadow-none flex items-center justify-center focus:outline-none">
          
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-[60] p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors backdrop-blur-sm"
          >
            <X size={24} />
          </button>

          {galleryImages.length > 1 && (
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

          {galleryImages.length > 1 && (
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
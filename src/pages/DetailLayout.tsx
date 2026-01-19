import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS_DATA } from '@/data/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const DetailLayout = () => {
  const { id } = useParams();
  const data = PROJECTS_DATA[id as keyof typeof PROJECTS_DATA];

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

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
          {/* Navigation - Exact Traguardi Style Match */}
          <div className="mb-12">
            <Link 
              to="/" 
              className="flex items-center gap-4 group transition-transform duration-300 hover:-translate-x-2"
            >
              <ArrowLeft className="text-accent" size={28} strokeWidth={2.5} />
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider block">Torna Indietro</span>
                <p className="text-accent font-black text-lg uppercase group-hover:text-primary transition-colors">
                  HOME
                </p>
              </div>
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12">
            <span className="text-accent font-bold uppercase tracking-wider text-sm mb-4 block">
              {data.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-primary mb-6 leading-tight">
              {data.title}
            </h1>
            <div className="w-24 h-1.5 bg-accent"></div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {data.fullText}
              </p>
            </div>
            {/* Main Image Placeholder */}
            <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center border border-border">
              <span className="text-muted-foreground font-semibold uppercase tracking-wider">
                FOTO PRINCIPALE
              </span>
            </div>
          </div>

          {/* GALLERY SECTION */}
          <div className="py-12 border-t border-border">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-10 uppercase">
              Gallery
            </h2>
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent className="-ml-4">
                {data.gallery.map((src, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <div className="bg-muted rounded-xl aspect-square flex items-center justify-center border border-border hover:border-accent transition-colors">
                        <span className="text-muted-foreground font-semibold uppercase tracking-wider text-sm">
                          FOTO {index + 1}
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DetailLayout;
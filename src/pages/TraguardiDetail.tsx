import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TIMELINE_DATA } from '@/data/constants';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TimelineRuler = ({ currentId }: { currentId: string }) => {
  return (
    <div className="w-full overflow-x-auto py-8 mb-12">
      <div className="flex items-center justify-between min-w-[800px] relative px-4">
        {/* Main Line */}
        <div className="absolute left-0 right-0 top-1/2 h-1 bg-border -translate-y-1/2 z-0" />
        
        {TIMELINE_DATA.map((item, index) => {
          const isActive = item.id === currentId;
          return (
            <Link
              key={item.id}
              to={`/traguardi/${item.id}`}
              className="relative z-10 flex flex-col items-center group"
            >
              {/* Year Label */}
              <span className={`text-sm font-bold mb-3 transition-colors ${isActive ? 'text-accent' : 'text-muted-foreground group-hover:text-primary'}`}>
                {item.year.replace('Dal ', '')}
              </span>
              
              {/* Dot */}
              <div className="relative">
                <div className={`w-5 h-5 rounded-full border-4 transition-all duration-300 ${isActive ? 'bg-accent border-accent scale-125' : 'bg-background border-border group-hover:border-primary'}`} />
                {isActive && (
                  <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                )}
              </div>
              
              {/* Title Label */}
              <span className={`text-xs mt-3 text-center max-w-[100px] leading-tight transition-colors ${isActive ? 'text-primary font-bold' : 'text-muted-foreground group-hover:text-primary'}`}>
                {item.title.split(' ').slice(0, 2).join(' ')}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const TraguardiDetail: React.FC = () => {
  const { id } = useParams();
  const data = TIMELINE_DATA.find(t => t.id === id);

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
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Torna alla Home</span>
          </Link>
          
          {/* Timeline Ruler */}
          <TimelineRuler currentId={data.id} />

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <span className="text-accent font-black text-6xl md:text-8xl">
                {data.year.replace('Dal ', '')}
              </span>
            </div>
            
            <h1 className="text-primary font-black text-3xl md:text-5xl uppercase mb-8 leading-tight">
              {data.title}
            </h1>
            
            <div className="prose prose-xl max-w-none">
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                {data.fullContent}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-border">
              {(() => {
                const currentIndex = TIMELINE_DATA.findIndex(t => t.id === data.id);
                const prevItem = currentIndex > 0 ? TIMELINE_DATA[currentIndex - 1] : null;
                const nextItem = currentIndex < TIMELINE_DATA.length - 1 ? TIMELINE_DATA[currentIndex + 1] : null;
                
                return (
                  <>
                    {prevItem ? (
                      <Link
                        to={`/traguardi/${prevItem.id}`}
                        className="flex flex-col items-start group"
                      >
                        <span className="text-sm text-muted-foreground mb-1">Precedente</span>
                        <span className="text-primary font-bold group-hover:text-accent transition-colors">
                          {prevItem.year} - {prevItem.title}
                        </span>
                      </Link>
                    ) : <div />}
                    
                    {nextItem ? (
                      <Link
                        to={`/traguardi/${nextItem.id}`}
                        className="flex flex-col items-end group"
                      >
                        <span className="text-sm text-muted-foreground mb-1">Successivo</span>
                        <span className="text-primary font-bold group-hover:text-accent transition-colors">
                          {nextItem.year} - {nextItem.title}
                        </span>
                      </Link>
                    ) : <div />}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TraguardiDetail;

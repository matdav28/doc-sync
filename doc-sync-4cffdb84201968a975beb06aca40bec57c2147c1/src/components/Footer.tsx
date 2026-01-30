import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

// ICONA WHATSAPP PERSONALIZZATA
const WhatsappIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const Footer: React.FC = () => {
  
  // Funzione per tornare in cima alla pagina
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-24 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        
        {/* LOGO CLICCABILE */}
        <div className="flex flex-col">
          <Link to="/" onClick={scrollToTop} className="cursor-pointer hover:opacity-90 transition-opacity">
            <img 
              src="/logo-matteo.png" 
              alt="Matteo Migliore" 
              className="w-24 md:w-40 h-auto object-contain" 
            />
          </Link>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="flex flex-col space-y-8">
          <h4 className="heading-stampatello text-[10px] text-blue-300 font-black tracking-widest">SOCIAL MEDIA</h4>
          <div className="flex space-x-10">
            <a 
              href="https://www.facebook.com/matteo.migliore.12" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-70 transition-opacity" 
              aria-label="Facebook"
            >
              <Facebook size={32} strokeWidth={1.5} />
            </a>
            
            <a 
              href="https://www.instagram.com/_matteomigliore_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-70 transition-opacity" 
              aria-label="Instagram"
            >
              <Instagram size={32} strokeWidth={1.5} />
            </a>

            <a 
              href="https://chat.whatsapp.com/GZ3qk2h03DjCY0tuczRWCv" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-70 transition-opacity" 
              aria-label="WhatsApp"
            >
              <WhatsappIcon size={32} />
            </a>
          </div>
        </div>
      </div>
      
      {/* BARRA INFERIORE */}
      <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        {/* COPYRIGHT & CREDITS */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Matteo Migliore. Sistema di Informazione.
          </p>
          <span className="hidden md:inline text-sm opacity-40">|</span>
          <p className="text-sm opacity-60">
            Sito realizzato da{' '}
            <a 
              href="https://dvdstudio.it" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-accent hover:underline transition-colors font-semibold"
            >
              dvdstudio
            </a>
          </p>
        </div>
        
        {/* LINK CURRICULUM */}
        <a 
          href="/curriculum.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm opacity-60 hover:opacity-100 hover:text-accent hover:underline transition-all uppercase tracking-wider font-bold"
        >
          CURRICULUM VITAE
        </a>
      </div>
    </footer>
  );
};

export default Footer;
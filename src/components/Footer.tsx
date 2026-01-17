import React from 'react';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-24 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="flex flex-col">
          <span className="heading-stampatello text-[12px] tracking-[0.5em] leading-none mb-2 opacity-50">MATTEO</span>
          <span className="heading-stampatello text-6xl md:text-7xl font-black leading-none tracking-tighter">MIGLIORE</span>
        </div>

        <div className="flex flex-col space-y-8">
          <h4 className="heading-stampatello text-[10px] text-blue-300 font-black tracking-widest">SOCIAL MEDIA</h4>
          <div className="flex space-x-10">
            <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Facebook">
              <Facebook size={32} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
              <Instagram size={32} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity" aria-label="YouTube">
              <Youtube size={32} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity" aria-label="WhatsApp">
              <MessageCircle size={32} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-primary-foreground/20">
        <p className="text-sm opacity-60">
          © {new Date().getFullYear()} Matteo Migliore. Sistema di Informazione.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
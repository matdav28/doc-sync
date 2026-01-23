import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-24 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="flex flex-col">
          <img 
            src="/logo-matteo.png" 
            alt="Matteo Migliore" 
            className="w-48 md:w-80 h-auto object-contain" 
          />
        </div>
        

        <div className="flex flex-col space-y-8">
          <h4 className="font-display font-medium text-[10px] text-blue-300 tracking-widest uppercase">SOCIAL MEDIA</h4>
          <div className="flex space-x-10">
            <a href="https://www.facebook.com/matteo.migliore.12" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="Facebook">
              <Facebook size={32} strokeWidth={1.5} />
            </a>
            <a href="https://www.instagram.com/_matteomigliore_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
              <Instagram size={32} strokeWidth={1.5} />
            </a>
            <a href="https://chat.whatsapp.com/GZ3qk2h03DjCY0tuczRWCv" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="WhatsApp">
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
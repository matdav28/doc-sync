import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/data/constants';
import NavLink from './NavLink';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        {/* LOGO: MATTEO (900) MIGLIORE (400) */}
        <Link to="/" className="relative z-50 group">
          <div className={`flex items-center gap-2 text-2xl uppercase tracking-wider font-gothic transition-colors duration-300 ${
            (isScrolled || !isHome || isMobileMenuOpen) ? 'text-primary' : 'text-white'
          }`}>
            <span className="font-black">MATTEO</span>
            <span className="font-normal">MIGLIORE</span>
          </div>
        </Link>

        {/* DESKTOP MENU - Font Gothic applicato */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <NavLink 
              key={item.label} 
              href={item.href} 
              label={item.label}
              isScrolled={isScrolled || !isHome}
              className="font-gothic text-lg font-medium tracking-wide"
            />
          ))}
          
          <a 
            href="https://chat.whatsapp.com/GZ3qk2h03DjCY0tuczRWCv" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`px-6 py-2 rounded-full font-gothic font-bold transition-all transform hover:scale-105 ${
              isScrolled || !isHome
                ? 'bg-primary text-white hover:bg-primary/90' 
                : 'bg-white text-primary hover:bg-white/90'
            }`}
          >
            PARTECIPA
          </a>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="lg:hidden relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-primary" size={32} />
          ) : (
            <Menu className={(isScrolled || !isHome) ? 'text-primary' : 'text-white'} size={32} />
          )}
        </button>

        {/* MOBILE MENU OVERLAY */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <nav className="flex flex-col items-center space-y-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={isHome ? item.href : `/${item.href}`}
                className="text-3xl font-gothic font-bold text-primary hover:text-accent transition-colors uppercase tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://chat.whatsapp.com/GZ3qk2h03DjCY0tuczRWCv"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 px-8 py-3 bg-accent text-white rounded-full text-xl font-gothic font-bold hover:bg-accent/90 transition-colors"
            >
              PARTECIPA
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_MENU } from '@/data/constants';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavItemProps {
  title: string;
  anchor: string;
  submenu?: { label: string; href: string }[];
}

const NavItem: React.FC<NavItemProps> = ({ title, anchor, submenu }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  
  const handleMainClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={handleMainClick}
        className="flex items-center gap-1 text-primary-foreground hover:text-accent transition-colors font-sans font-semibold text-sm uppercase tracking-wide py-2"
      >
        {title}
        {submenu && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
      </button>
      
      {submenu && (
        <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          <div className="bg-background border border-border rounded-xl shadow-2xl py-2 min-w-[280px]">
            {submenu.map((item, i) => (
              <Link
                key={i}
                to={item.href}
                className="block px-5 py-3 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleMobileNavClick = (anchor: string) => {
    const isHomePage = location.pathname === '/';
    if (isHomePage) {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-primary'}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex h-20 md:h-24 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-sans text-xl md:text-2xl text-primary-foreground font-black tracking-tight uppercase">
              MATTEO MIGLIORE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <NavItem title="HOME" anchor="#home" />
            <NavItem title="CHI SONO" anchor="#chi-sono" />
            <NavItem title="I TRAGUARDI" anchor="#traguardi" submenu={NAV_MENU.traguardi} />
            <NavItem title="PROGETTI" anchor="#progetti" submenu={NAV_MENU.progetti} />
            <NavItem title="SALA STAMPA" anchor="#sala-stampa" />
            <NavItem title="LIBRO" anchor="#libro" />
            <NavItem title="SERVIZIO CIVILE" anchor="#servizio-civile" submenu={NAV_MENU.servizio} />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-primary-foreground p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-6 flex flex-col space-y-2">
            <button onClick={() => handleMobileNavClick('#home')} className="text-left nav-link text-primary-foreground text-lg w-full py-3 border-b border-primary-foreground/10 font-sans">
              HOME
            </button>
            <button onClick={() => handleMobileNavClick('#chi-sono')} className="text-left nav-link text-primary-foreground text-lg w-full py-3 border-b border-primary-foreground/10 font-sans">
              CHI SONO
            </button>
            
            {/* Traguardi with submenu */}
            <div className="border-b border-primary-foreground/10">
              <button onClick={() => handleMobileNavClick('#traguardi')} className="text-left nav-link text-primary-foreground text-lg w-full py-3 block font-sans">
                I TRAGUARDI
              </button>
              <div className="pl-4 pb-3 space-y-2">
                {NAV_MENU.traguardi.map((item, i) => (
                  <Link key={i} to={item.href} className="block text-primary-foreground/70 text-sm py-1 hover:text-accent font-sans">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Progetti with submenu */}
            <div className="border-b border-primary-foreground/10">
              <button onClick={() => handleMobileNavClick('#progetti')} className="text-left nav-link text-primary-foreground text-lg w-full py-3 block font-sans">
                PROGETTI
              </button>
              <div className="pl-4 pb-3 space-y-2">
                {NAV_MENU.progetti.map((item, i) => (
                  <Link key={i} to={item.href} className="block text-primary-foreground/70 text-sm py-1 hover:text-accent font-sans">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <button onClick={() => handleMobileNavClick('#sala-stampa')} className="text-left nav-link text-primary-foreground text-lg w-full py-3 border-b border-primary-foreground/10 font-sans">
              SALA STAMPA
            </button>
            <button onClick={() => handleMobileNavClick('#libro')} className="text-left nav-link text-primary-foreground text-lg w-full py-3 border-b border-primary-foreground/10 font-sans">
              LIBRO
            </button>

            {/* Servizio Civile with submenu */}
            <div className="border-b border-primary-foreground/10">
              <button onClick={() => handleMobileNavClick('#servizio-civile')} className="text-left nav-link text-primary-foreground text-lg w-full py-3 block font-sans">
                SERVIZIO CIVILE
              </button>
              <div className="pl-4 pb-3 space-y-2">
                {NAV_MENU.servizio.map((item, i) => (
                  <Link key={i} to={item.href} className="block text-primary-foreground/70 text-sm py-1 hover:text-accent font-sans">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import React from 'react';
import { useLocation } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  label: string;
  isScrolled: boolean;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, isScrolled, className = "" }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  // Se non siamo in home e il link è un'ancora (#...), aggiungiamo / davanti per tornare in home
  const finalHref = (!isHome && href.startsWith('#')) ? `/${href}` : href;

  return (
    <a
      href={finalHref}
      className={`relative group transition-colors duration-300 ${className} ${
        isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-white/80'
      }`}
    >
      {label}
      {/* Effetto sottolineatura all'hover */}
      <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
    </a>
  );
};

export default NavLink;
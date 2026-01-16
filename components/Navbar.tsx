
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageView } from '../App';

interface NavbarProps {
  isScrolled: boolean;
  activePage: PageView;
  onNavigate: (page: PageView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, activePage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { name: string; id: PageView }[] = [
    { name: 'Index', id: 'home' },
    { name: 'Agency', id: 'about' },
    { name: 'Solutions', id: 'services' },
    { name: 'Archive', id: 'portfolio' },
    { name: 'Journal', id: 'blog' },
  ];

  const handleNavClick = (id: PageView) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || activePage !== 'home' 
          ? 'bg-black/90 backdrop-blur-xl py-5' 
          : 'bg-transparent py-10'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => handleNavClick('home')} className="flex items-center group">
          <span className="text-2xl font-heading tracking-tighter group-hover:tracking-widest transition-all duration-700">
            SCROLL<span className="text-indigo-600">FUEL</span>
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleNavClick(link.id)}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative group ${
                activePage === link.id ? 'text-indigo-500' : 'text-white/40 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-[1px] bg-indigo-600 transition-all duration-500 ${
                activePage === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </button>
          ))}
          
          <button 
            onClick={() => handleNavClick('contact')}
            className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-105 active:scale-95"
          >
            Start Project
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-10 h-10 flex items-center justify-center bg-white/5 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Overlay Menu */}
      <div 
        className={`fixed inset-0 bg-black z-[-1] flex flex-col justify-center px-12 space-y-8 transition-all duration-700 ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        {navLinks.map((link, idx) => (
          <button 
            key={link.id} 
            onClick={() => handleNavClick(link.id)}
            className="text-6xl font-heading font-bold text-left hover:italic hover:translate-x-4 transition-all duration-500 opacity-60 hover:opacity-100"
            style={{ transitionDelay: `${idx * 50}ms` }}
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

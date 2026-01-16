
import React from 'react';
import { Instagram, Twitter, Linkedin, Github, ArrowUp } from 'lucide-react';
import { PageView } from '../App';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-full bg-grid opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          <div className="md:col-span-5 space-y-10">
            <button onClick={() => onNavigate('home')} className="flex items-center space-x-2">
              <span className="text-2xl font-heading font-bold tracking-tighter">
                SCROLL<span className="text-indigo-500">FUEL</span>
              </span>
            </button>
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-xs">
              Designing high-performance brand ecosystems for the innovators of the next digital era. Est. 2014.
            </p>
            <div className="flex space-x-6">
              {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-500">
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Index</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-gray-500">
              <li><button onClick={() => onNavigate('home')} className="hover:text-indigo-400 transition-colors">Start</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-indigo-400 transition-colors">Agency</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-indigo-400 transition-colors">Services</button></li>
              <li><button onClick={() => onNavigate('portfolio')} className="hover:text-indigo-400 transition-colors">Archive</button></li>
            </ul>
          </div>

          <div className="md:col-span-5 space-y-12">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Direct Connect</h4>
              <p className="text-2xl font-heading font-bold tracking-tighter hover:text-indigo-500 transition-colors cursor-pointer">
                HELLO@SCROLLFUEL.AGENCY
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => onNavigate('contact')}
                className="px-10 py-4 border border-white/10 hover:border-indigo-500 rounded-full text-[10px] font-black uppercase tracking-widest transition-all"
              >
                Start New Project
              </button>
              <button 
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
              >
                <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black tracking-[0.3em] text-white/20 uppercase">
          <p>© 2024 SCROLLFUEL — DESIGN & BRAND ARCHITECTURE</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Sync</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

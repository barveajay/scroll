
import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook, ArrowUp } from 'lucide-react';
import { PageView } from '../App';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'X', href: 'https://x.com/scrollfuel', icon: <Twitter size={18} strokeWidth={1.5} /> },
    { name: 'Facebook', href: 'https://www.facebook.com/scrollfuel.nagpur', icon: <Facebook size={18} strokeWidth={1.5} /> },
    { name: 'Pinterest', href: 'https://in.pinterest.com/scrollfuel/', icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8-8 3.582-8 8z" strokeOpacity="0" fill="currentColor" opacity="0" />
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16c-1.1 0-2-1.1-2-2.5S10.9 11 12 11s2 1.1 2 2.5-0.9 2.5-2 2.5z" strokeOpacity="0.4" />
        <path d="M12 7v5" strokeOpacity="0.6" />
        <path d="M9 11c0 3.5 1.5 5 3 5s3-1.5 3-5" strokeDasharray="2 2" />
      </svg>
    )},
    { name: 'Behance', href: 'https://www.behance.net/scrollfuel60b4', icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0" strokeOpacity="0.1" />
        <path d="M6 8h4a2 2 0 0 1 0 4H6V8zM6 12h5a2 2 0 0 1 0 4H6v-4z" />
        <path d="M14 12h6" />
        <path d="M14 10c0-2 4-2 4 0v2c0 2-4 2-4 0v-2z" />
      </svg>
    )},
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/scrollfuel/', icon: <Linkedin size={18} strokeWidth={1.5} /> },
    { name: 'Instagram', href: 'https://www.instagram.com/scrollfuel/', icon: <Instagram size={18} strokeWidth={1.5} /> }
  ];

  return (
    <footer className="bg-brand-black border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-full bg-grid opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          <div className="md:col-span-5 space-y-10">
            <button onClick={() => onNavigate('home')} className="flex items-center space-x-2">
              <span className="text-2xl font-heading font-bold tracking-tighter text-brand-white">
                SCROLL<span className="text-brand-primary">FUEL</span>
              </span>
            </button>
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-xs">
              Designing high-performance brand ecosystems in <span className="text-brand-accent">Nagpur</span> and beyond. Est. 2014.
            </p>
            <div className="flex flex-wrap gap-6">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-brand-primary transition-all duration-500 hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-white">Index</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-gray-500">
              <li><button onClick={() => onNavigate('home')} className="hover:text-brand-accent transition-colors">Start</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-brand-accent transition-colors">Agency</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-brand-accent transition-colors">Services</button></li>
              <li><button onClick={() => onNavigate('portfolio')} className="hover:text-brand-accent transition-colors">Archive</button></li>
            </ul>
          </div>

          <div className="md:col-span-5 space-y-12">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-white">Direct Connect</h4>
              <a href="mailto:scrollfuel@gmail.com" className="block text-2xl font-heading font-bold tracking-tighter hover:text-brand-primary transition-colors text-brand-white">
                SCROLLFUEL@GMAIL.COM
              </a>
              <p className="text-[10px] font-black tracking-widest text-white/20 uppercase">Official Hub: <span className="text-brand-accent">scrollfuel.in</span></p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => onNavigate('contact')}
                className="px-10 py-4 border border-white/10 hover:border-brand-primary rounded-full text-[10px] font-black uppercase tracking-widest transition-all text-brand-white"
              >
                Start New Project
              </button>
              <button 
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-white hover:text-brand-black transition-all group"
              >
                <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black tracking-[0.3em] text-white/20 uppercase">
          <p>© 2024 SCROLLFUEL — <span className="text-brand-primary/50">DESIGN & BRAND ARCHITECTURE</span></p>
          <div className="flex gap-10">
            <a href="https://scrollfuel.in" target="_blank" className="hover:text-brand-accent transition-colors">scrollfuel.in</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Sync</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

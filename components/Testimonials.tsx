
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Network } from 'lucide-react';

const NetworkArt = () => (
  <svg viewBox="0 0 800 400" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-full opacity-[0.03] pointer-events-none">
    <g stroke="white" strokeWidth="0.5">
      <circle cx="200" cy="100" r="4" />
      <circle cx="600" cy="100" r="4" />
      <circle cx="400" cy="200" r="4" />
      <circle cx="150" cy="300" r="4" />
      <circle cx="650" cy="300" r="4" />
      
      <line x1="200" y1="100" x2="400" y2="200" />
      <line x1="600" y1="100" x2="400" y2="200" />
      <line x1="150" y1="300" x2="400" y2="200" />
      <line x1="650" y1="300" x2="400" y2="200" />
      <line x1="200" y1="100" x2="600" y2="100" strokeDasharray="4 4" />
      <line x1="150" y1="300" x2="650" y2="300" strokeDasharray="4 4" />
    </g>
  </svg>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-brand-black relative overflow-hidden border-t border-white/5">
      <NetworkArt />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <div className="flex justify-center mb-4">
             <Network size={24} className="text-brand-primary opacity-50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-brand-white">TRUSTED BY VISIONARIES</h2>
          <p className="text-gray-500 uppercase text-[10px] tracking-[0.5em] font-bold">Network feedback <span className="text-brand-accent">verified</span></p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={t.id} className="glass-card p-10 rounded-3xl relative group">
              <Quote className="text-brand-primary/10 absolute top-8 right-8 transition-colors group-hover:text-brand-accent/20" size={64} />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-brand-primary/30 group-hover:h-12 transition-all" />
              <p className="text-lg text-gray-300 font-light italic mb-8 leading-relaxed relative z-10">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full ring-1 ring-white/10 group-hover:ring-brand-primary/50 transition-all" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-brand-primary rounded-full border-2 border-brand-black flex items-center justify-center">
                    <div className="w-1 h-1 bg-brand-accent rounded-full animate-pulse" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-brand-white">{t.name}</h4>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Brand Logos Placeholder */}
        <div className="mt-32 pt-20 border-t border-white/5 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-20 grayscale transition-opacity hover:opacity-40 cursor-default">
          {['LOGOTYPE_01', 'LOGOTYPE_02', 'LOGOTYPE_03', 'LOGOTYPE_04', 'LOGOTYPE_05'].map((logo, i) => (
            <span key={i} className="text-xl font-heading font-bold tracking-tighter text-brand-white">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

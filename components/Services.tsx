
import React from 'react';
import { SERVICES } from '../constants';

const ServiceIcon = ({ type }: { type: string }) => {
  // Linear representations of digital marketing concepts
  // Fix: Use React.JSX.Element to avoid global JSX namespace issues
  const icons: Record<string, React.JSX.Element> = {
    Video: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M10 9L15 12L10 15V9Z" />
        <path d="M2 8H22M2 16H22" strokeOpacity="0.3" />
      </svg>
    ),
    Palette: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" strokeDasharray="2 2" />
        <path d="M12 2V6M12 18V22M2 12H6M18 12H22" strokeOpacity="0.4" />
      </svg>
    ),
    Instagram: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
    Code: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <path d="M16 18L22 12L16 6" />
        <path d="M8 6L2 12L8 18" />
        <path d="M13 4L11 20" strokeOpacity="0.5" />
      </svg>
    ),
    TrendingUp: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <path d="M22 7L13.5 15.5L8.5 10.5L2 17" />
        <path d="M16 7H22V13" />
        <path d="M2 4V20H20" strokeOpacity="0.3" />
      </svg>
    ),
    FileText: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" />
        <path d="M14 2V8H20" />
        <path d="M8 13H16M8 17H16M8 9H10" strokeOpacity="0.4" />
      </svg>
    )
  };
  return icons[type] || icons.FileText;
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-black relative">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="space-y-4">
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-indigo-500">Service Map</span>
            <h2 className="text-4xl md:text-7xl font-heading font-bold tracking-tighter leading-none">
              TECHNICAL <br /> SOLUTIONS.
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm font-light leading-relaxed border-l border-white/10 pl-8">
            Modular brand architecture designed for the future of digital engagement. Scalable, cinematic, and precise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className="group p-12 bg-black hover:bg-neutral-900/40 transition-all duration-700 cursor-pointer relative overflow-hidden"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/5 transition-colors group-hover:border-indigo-500/30" />
              
              <div className="relative z-10 space-y-10">
                <div className="text-indigo-500 group-hover:scale-110 transition-transform duration-500">
                  <ServiceIcon type={service.icon} />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-heading tracking-tight group-hover:text-indigo-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light line-clamp-3 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-[9px] font-black tracking-widest text-white/20 uppercase group-hover:text-indigo-500/50 transition-colors">
                    Solution 0{idx + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center group-hover:border-indigo-500/50 transition-all">
                    <div className="w-1 h-1 bg-white group-hover:bg-indigo-500 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

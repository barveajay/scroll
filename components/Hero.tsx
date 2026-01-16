
import React from 'react';
import { ArrowUpRight, MousePointer2 } from 'lucide-react';

const LinearArt = () => (
  <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-40 float-animation">
    {/* Stylized Browser / Social Grid */}
    <rect x="150" y="100" width="500" height="350" rx="20" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" className="line-draw" />
    <path d="M150 160H650" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" className="line-draw" />
    <circle cx="180" cy="130" r="6" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" className="line-draw" />
    <circle cx="210" cy="130" r="6" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" className="line-draw" />
    <circle cx="240" cy="130" r="6" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" className="line-draw" />
    
    {/* Floating Data Nodes */}
    <circle cx="580" cy="180" r="40" stroke="#6366f1" strokeWidth="1" className="line-draw" />
    <path d="M580 140V220M540 180H620" stroke="#6366f1" strokeWidth="1" strokeDasharray="4 4" className="line-draw" />
    
    {/* Marketing Curves */}
    <path d="M200 400C250 350 350 450 450 350S600 300 650 350" stroke="#6366f1" strokeWidth="1" strokeOpacity="0.5" className="line-draw" />
    
    {/* Stylized Feed Items */}
    <rect x="180" y="180" width="120" height="100" rx="8" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
    <rect x="320" y="180" width="120" height="100" rx="8" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
    <rect x="460" y="180" width="120" height="100" rx="8" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
    <rect x="180" y="300" width="260" height="100" rx="8" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
  </svg>
);

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden px-8">
      {/* Background Grid & Art */}
      <div className="absolute inset-0 z-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-video z-0 pointer-events-none">
        <LinearArt />
      </div>

      <div className="relative z-10 max-w-7xl w-full flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">Next-Gen Creative Agency</span>
        </div>

        <h1 className="text-6xl md:text-[8.5vw] font-black font-heading leading-[0.85] tracking-tighter mb-12">
          <span className="reveal-text block">DIGITAL</span>
          <span className="reveal-text block text-indigo-500" style={{ animationDelay: '0.2s' }}>ARCHITECTURE.</span>
        </h1>

        <div className="max-w-2xl mx-auto space-y-12">
          <p className="text-base md:text-xl text-gray-500 font-light leading-relaxed tracking-wide reveal-text" style={{ animationDelay: '0.4s' }}>
            We engineer high-fidelity brand systems through cinematic storytelling and technical precision. Redefining digital presence with linear mastery.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal-text" style={{ animationDelay: '0.6s' }}>
            <button className="group relative w-full sm:w-auto px-12 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.3em] rounded-full transition-all hover:bg-indigo-600 hover:text-white overflow-hidden">
              <span className="relative z-10">Start Project</span>
              <div className="absolute inset-0 bg-indigo-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <button className="flex items-center gap-4 text-xs font-black tracking-[0.3em] uppercase text-white/40 hover:text-white transition-all group">
              View Showcase
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Cursor Mockup element */}
      <div className="absolute bottom-16 right-16 hidden lg:flex items-center gap-4 text-[10px] font-bold tracking-widest text-white/20 uppercase">
        <MousePointer2 size={12} /> Live Preview System V2.4
      </div>
      
      {/* Decorative vertical lines */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute right-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Hero;

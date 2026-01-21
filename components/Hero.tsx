
import React from 'react';
import { ArrowUpRight, MousePointer2, Scan, Hash, Compass, Box } from 'lucide-react';
import { SocialEcosystem3D } from './Linear3DModels';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden px-8">
      {/* Background Grid & Art */}
      <div className="absolute inset-0 z-0 bg-grid opacity-20" />
      
      {/* 3D Isometric Ecosystem Model */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl aspect-square lg:aspect-video z-0 pointer-events-none opacity-50">
        <SocialEcosystem3D />
      </div>

      <div className="relative z-10 max-w-7xl w-full flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md animate-fade-in">
          <Scan size={12} className="text-brand-primary" />
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">Technical Identity Lab</span>
        </div>

        <h1 className="text-6xl md:text-[8.5vw] font-black font-heading leading-[0.85] tracking-tighter mb-12">
          <span className="reveal-text block text-brand-white">DIGITAL</span>
          <span className="reveal-text block text-brand-accent" style={{ animationDelay: '0.2s' }}>ARCHITECTURE.</span>
        </h1>

        <div className="max-w-2xl mx-auto space-y-12">
          <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed tracking-wide reveal-text" style={{ animationDelay: '0.4s' }}>
            We engineer high-fidelity brand systems through cinematic storytelling and technical precision. Redefining digital presence with <span className="text-brand-primary">linear mastery</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal-text" style={{ animationDelay: '0.6s' }}>
            <button className="group relative w-full sm:w-auto px-12 py-5 bg-brand-white text-brand-black font-black text-xs uppercase tracking-[0.3em] rounded-full transition-all hover:bg-brand-primary hover:text-brand-black overflow-hidden">
              <span className="relative z-10">Initialize Sync</span>
              <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <button className="flex items-center gap-4 text-xs font-black tracking-[0.3em] uppercase text-white/40 hover:text-brand-accent transition-all group">
              System Manifest
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating 3D Specs */}
      <div className="absolute top-1/4 left-12 hidden xl:block space-y-4 opacity-20 font-mono text-[10px] tracking-widest uppercase">
        <div className="flex items-center gap-3 text-brand-primary">
           <Box size={10} /> WIREFRAME_MODEL_01
        </div>
        <div className="flex items-center gap-2 text-brand-white"><div className="w-1 h-1 bg-brand-white" /> X: 45.2341</div>
        <div className="flex items-center gap-2 text-brand-white"><div className="w-1 h-1 bg-brand-white" /> Y: 12.0094</div>
        <div className="flex items-center gap-2 font-black text-brand-accent"><div className="w-1 h-1 bg-brand-accent" /> Z: ISOMETRIC_STABLE</div>
      </div>

      <div className="absolute bottom-16 right-16 hidden lg:flex flex-col items-end gap-2 text-[10px] font-bold tracking-widest text-white/20 uppercase">
        <div className="flex items-center gap-4">
           <Compass size={12} className="animate-spin-slow text-brand-primary" /> 
           SYSTEM.VERSION_2.4.0
        </div>
        <div className="flex items-center gap-4">
           <Hash size={12} className="text-brand-accent" />
           AUTH.KEY_ verified
        </div>
      </div>
      
      {/* Decorative vertical lines */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute right-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Hero;


import React from 'react';
import { Activity, BarChart3, Fingerprint } from 'lucide-react';
import { GrowthEngine3D } from './Linear3DModels';

const GrowthLine = () => (
  <svg viewBox="0 0 400 200" className="absolute top-1/2 left-0 w-full h-full opacity-5 pointer-events-none -translate-y-1/2">
    <path 
      d="M0 150 Q 50 140 100 160 T 200 100 T 300 80 T 400 20" 
      fill="none" 
      stroke="white" 
      strokeWidth="1" 
      className="line-draw"
    />
    <circle cx="100" cy="160" r="3" fill="white" />
    <circle cx="200" cy="100" r="3" fill="white" />
    <circle cx="300" cy="80" r="3" fill="white" />
    <circle cx="400" cy="20" r="3" fill="#FFC93B" />
  </svg>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-brand-black relative overflow-hidden border-y border-white/5">
      <GrowthLine />
      
      {/* 3D Growth Engine Art Background */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none">
        <GrowthEngine3D />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-3xl border border-white/5 bg-neutral-900 group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1470" 
                alt="Studio Culture" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
              
              {/* Floating Linear HUDs */}
              <div className="absolute top-8 left-8 p-4 glass-card rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center gap-3 mb-2">
                  <Activity size={10} className="text-brand-primary" />
                  <span className="text-[8px] font-black tracking-widest uppercase text-brand-white">REALTIME ANALYSIS</span>
                </div>
                <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-accent w-3/4 animate-pulse" />
                </div>
              </div>

              <div className="absolute bottom-8 right-8 p-4 glass-card rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center gap-3">
                  <Fingerprint size={10} className="text-brand-accent" />
                  <span className="text-[8px] font-black tracking-widest uppercase text-brand-white">ID: SCROLLFUEL_04</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-primary">The Manifesto</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter leading-[1.1] text-brand-white">
                WE DON'T FOLLOW <br />
                <span className="text-brand-accent italic">TRENDS.</span><br />
                WE CODE THEM.
              </h2>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed font-light border-l-2 border-brand-primary/30 pl-8">
              ScrollFuel is a high-performance design laboratory. We merge the aesthetics of luxury branding with the raw logic of digital marketing algorithms. 
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              {[
                { icon: BarChart3, title: 'LINEAR PRECISION', desc: 'Every pixel serves a purpose in our technical brand ecosystems.', color: 'text-brand-primary' },
                { icon: Activity, title: 'CULTURAL IMPACT', desc: 'Storytelling that transcends screens and creates movement.', color: 'text-brand-accent' }
              ].map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <item.icon size={14} className={item.color} />
                    <h4 className="text-xs font-black tracking-widest uppercase text-brand-white">{item.title}</h4>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-4 text-[10px] font-black tracking-[0.4em] uppercase text-brand-white hover:text-brand-accent transition-all">
              Discover our story
              <div className="h-px w-12 bg-brand-primary group-hover:w-24 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

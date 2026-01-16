
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#030303] relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-3xl border border-white/5 bg-neutral-900 group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1470" 
                alt="Studio Culture" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              {/* Floating Linear HUD */}
              <div className="absolute top-8 left-8 p-4 glass-card rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span className="text-[8px] font-black tracking-widest uppercase">System Status: Creative</span>
                </div>
                <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 w-3/4 animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Background circular linear art */}
            <svg viewBox="0 0 200 200" className="absolute -bottom-20 -left-20 w-80 h-80 opacity-10 animate-spin-slow">
              <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="0.5" strokeDasharray="4 8" />
              <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="0.5" strokeDasharray="1 4" />
            </svg>
          </div>

          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-indigo-500">The Manifesto</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter leading-[1.1]">
                WE DON'T FOLLOW <br />
                <span className="text-indigo-600">TRENDS.</span><br />
                WE CODE THEM.
              </h2>
            </div>

            <p className="text-lg text-gray-500 leading-relaxed font-light border-l-2 border-indigo-500/30 pl-8">
              ScrollFuel is a high-performance design laboratory. We merge the aesthetics of luxury branding with the raw logic of digital marketing algorithms. 
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              {[
                { title: 'LINEAR PRECISION', desc: 'Every pixel serves a purpose in our technical brand ecosystems.' },
                { title: 'CULTURAL IMPACT', desc: 'Storytelling that transcends screens and creates movement.' }
              ].map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-indigo-500">0{idx + 1}</span>
                    <h4 className="text-xs font-black tracking-widest uppercase">{item.title}</h4>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-4 text-[10px] font-black tracking-[0.4em] uppercase hover:text-indigo-400 transition-all">
              Discover our story
              <div className="h-px w-12 bg-indigo-500 group-hover:w-24 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

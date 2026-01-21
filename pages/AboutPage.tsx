
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-black">
      <section className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <div className="text-brand-primary font-bold uppercase tracking-widest mb-4">Our Journey</div>
          <h1 className="text-6xl md:text-8xl font-black font-heading mb-12 tracking-tighter text-brand-white">WE FUEL THE<br/><span className="text-brand-accent italic">INNOVATORS.</span></h1>
          <div className="aspect-[21/9] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 cursor-pointer border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071" 
              className="w-full h-full object-cover" 
              alt="Team Workshop" 
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-start mb-32">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold font-heading text-brand-white">More than just an agency. We are your creative partners.</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Founded in 2014, <span className="text-brand-primary">ScrollFuel</span> was born out of a desire to merge cinematic excellence with strategic marketing precision. We believed that brands deserved more than just ads—they deserved legacies.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Today, we are a global team of directors, designers, and strategists working from our hub. We push the boundaries of what's possible in the digital sphere, one project at a time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-10 glass-card rounded-3xl">
              <div className="text-5xl font-black text-brand-primary mb-2">150+</div>
              <div className="text-gray-400 font-bold uppercase tracking-tighter">Global Clients</div>
            </div>
            <div className="p-10 glass-card rounded-3xl">
              <div className="text-5xl font-black text-brand-accent mb-2">12M+</div>
              <div className="text-gray-400 font-bold uppercase tracking-tighter">Views Generated</div>
            </div>
            <div className="p-10 glass-card rounded-3xl">
              <div className="text-5xl font-black text-brand-white mb-2">42</div>
              <div className="text-gray-400 font-bold uppercase tracking-tighter">Design Awards</div>
            </div>
            <div className="p-10 glass-card rounded-3xl">
              <div className="text-5xl font-black text-brand-primary mb-2">100%</div>
              <div className="text-gray-400 font-bold uppercase tracking-tighter">Creative Focus</div>
            </div>
          </div>
        </div>

        {/* Vision/Mission Section */}
        <div className="bg-brand-primary rounded-[3rem] p-12 md:p-24 text-center">
          <h2 className="text-4xl md:text-6xl font-black font-heading mb-8 leading-tight text-brand-black">WE BELIEVE IN BOLD<br/>MOVES ONLY.</h2>
          <p className="text-xl md:text-2xl text-brand-black/80 max-w-3xl mx-auto leading-relaxed">
            Our mission is to empower brands to speak loudly in a world that never stops talking. We provide the <span className="font-bold">fuel</span>; you provide the vision.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

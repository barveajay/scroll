
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black font-heading mb-4">Trusted By Visionaries</h2>
          <p className="text-gray-500">Don't take our word for it, hear from our partners.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass-card p-10 rounded-3xl relative">
              <Quote className="text-indigo-600/20 absolute top-8 right-8" size={64} />
              <p className="text-lg text-gray-300 italic mb-8 leading-relaxed relative z-10">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-indigo-600/20" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Brand Logos Placeholder */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale contrast-125">
          {['LOGO 1', 'LOGO 2', 'LOGO 3', 'LOGO 4', 'LOGO 5'].map((logo, i) => (
            <span key={i} className="text-2xl font-black font-heading tracking-widest">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


import React from 'react';
import { SERVICES } from '../constants';
import { Video, Palette, Instagram, Code, TrendingUp, FileText, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, any> = {
  Video, Palette, Instagram, Code, TrendingUp, FileText
};

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <div className="text-indigo-500 font-bold uppercase tracking-widest mb-4">Our Expertise</div>
          <h1 className="text-6xl md:text-8xl font-black font-heading mb-8 tracking-tighter">POWERING YOUR <span className="text-gradient">DIGITAL</span> ENGINE.</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            We provide full-spectrum digital solutions. Whether you're a startup looking for identity or an enterprise seeking a cinematic campaign, we have the tools.
          </p>
        </div>

        <div className="space-y-32">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                <div className="lg:w-1/2">
                  <div className="w-20 h-20 rounded-3xl bg-indigo-600/10 flex items-center justify-center mb-8 text-indigo-500">
                    <Icon size={40} />
                  </div>
                  <h2 className="text-4xl font-black font-heading mb-6 tracking-tight">{service.title}</h2>
                  <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    {service.description} We go beyond the basics to ensure your brand stands out with high-fidelity production and strategic precision.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {['Strategic Planning', 'Expert Execution', 'Premium Quality', 'Post-Launch Support'].map((feat) => (
                      <li key={feat} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle2 size={18} className="text-indigo-500" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="aspect-video rounded-3xl overflow-hidden glass-card">
                    <img 
                      src={`https://images.unsplash.com/photo-${1500000000000 + idx * 10000}?auto=format&fit=crop&q=80&w=1200`}
                      className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                      alt={service.title} 
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;


import React from 'react';
// Fix: Added missing ArrowUpRight import from lucide-react
import { Send, Globe, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-indigo-500">Transmission</span>
              <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter leading-none">
                SYNC <br />WITH US.
              </h2>
              <p className="text-gray-500 max-w-sm text-sm font-light leading-relaxed">
                Ready to initiate brand architecture? Secure a dedicated slot for a cinematic briefing.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: MapPin, label: 'Studio', value: 'Downtown Arts Dist., LA' },
                { icon: Mail, label: 'Secure Email', value: 'hello@scrollfuel.agency' },
                { icon: Globe, label: 'Availability', value: 'Global HQ' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
                    <item.icon size={18} className="text-gray-500 group-hover:text-indigo-500 transition-colors" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-black uppercase tracking-widest text-indigo-500/50 mb-1">{item.label}</span>
                    <span className="block text-sm font-bold text-gray-400 group-hover:text-white transition-colors">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-16 rounded-[2.5rem] border border-white/5">
              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="relative">
                    <input 
                      type="text" 
                      required
                      placeholder="Ident Name"
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-white text-sm font-light placeholder:text-gray-700"
                    />
                    <span className="absolute bottom-0 left-0 h-[1px] bg-indigo-500 w-0 transition-all duration-500" />
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      required
                      placeholder="Protocol Email"
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-white text-sm font-light placeholder:text-gray-700"
                    />
                  </div>
                </div>

                <div className="relative">
                  <select className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-white text-sm font-light appearance-none cursor-pointer">
                    <option className="bg-black">Project Type: Brand Architecture</option>
                    <option className="bg-black">Project Type: Cinematic Strategy</option>
                    <option className="bg-black">Project Type: Technical Deployment</option>
                    <option className="bg-black">Project Type: Full Ecosystem</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                <div className="relative">
                  <textarea 
                    rows={4} 
                    placeholder="Brief objective..."
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-white text-sm font-light placeholder:text-gray-700 resize-none"
                  />
                </div>

                <button className="group relative w-full py-6 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-[0.5em] rounded-2xl transition-all overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Initialize Sync <Send size={14} />
                  </span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;

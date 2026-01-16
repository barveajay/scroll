
import React from 'react';
import ContactForm from '../components/ContactForm';
import { MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const WHATSAPP_NUMBER = "7822830497";

  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <div className="text-indigo-500 font-bold uppercase tracking-widest mb-4">Contact Us</div>
          <h1 className="text-6xl md:text-8xl font-black font-heading tracking-tighter mb-8">START YOUR<br/><span className="text-gradient">LEGACY TODAY.</span></h1>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <button 
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
              className="flex items-center gap-3 px-8 py-4 bg-green-600/10 border border-green-600/20 text-green-500 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-600 hover:text-white transition-all duration-500"
            >
              <MessageCircle size={18} fill="currentColor" />
              Direct WhatsApp Sync
            </button>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-96 bg-neutral-900 rounded-[3rem] overflow-hidden mb-24 grayscale border border-white/5 relative">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <span className="text-white font-black">SF</span>
              </div>
              <p className="text-gray-400 font-bold tracking-widest uppercase">Visit our studio in Downtown LA</p>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20" 
            alt="Map background"
          />
        </div>

        {/* Form Section */}
        <ContactForm />

        <div className="mt-32 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h4 className="text-indigo-500 font-bold uppercase tracking-widest mb-4">New Business</h4>
            <p className="text-xl md:text-2xl font-bold font-heading">hello@scrollfuel.agency</p>
          </div>
          <div>
            <h4 className="text-indigo-500 font-bold uppercase tracking-widest mb-4">WhatsApp Support</h4>
            <p className="text-xl md:text-2xl font-bold font-heading">+{WHATSAPP_NUMBER}</p>
          </div>
          <div>
            <h4 className="text-indigo-500 font-bold uppercase tracking-widest mb-4">Join The Team</h4>
            <p className="text-xl md:text-2xl font-bold font-heading">careers@scrollfuel.agency</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

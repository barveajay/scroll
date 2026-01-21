
import React from 'react';
import ContactForm from '../components/ContactForm';
import { MessageCircle, Twitter, Facebook, Instagram, Linkedin, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const WHATSAPP_NUMBER = "7822830497";
  const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Bidoba+Sahkari+Sanstha+plot+no+133+Wardha+Rd+near+Hotel+Center+point+Bante+Layout+Sonegaon+Nagpur+Maharashtra+440025";

  const socialLinks = [
    { name: 'X', href: 'https://x.com/scrollfuel', icon: <Twitter size={20} /> },
    { name: 'Facebook', href: 'https://www.facebook.com/scrollfuel.nagpur', icon: <Facebook size={20} /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/scrollfuel/', icon: <Linkedin size={20} /> },
    { name: 'Instagram', href: 'https://www.instagram.com/scrollfuel/', icon: <Instagram size={20} /> }
  ];

  return (
    <div className="pt-32 pb-24 bg-brand-black">
      <section className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <div className="text-brand-primary font-bold uppercase tracking-widest mb-4">Contact Us</div>
          <h1 className="text-6xl md:text-8xl font-black font-heading tracking-tighter mb-8 italic text-brand-white">SYNC YOUR<br/><span className="text-brand-accent not-italic">VISION.</span></h1>
          
          <div className="flex flex-wrap gap-6 mt-8">
            <button 
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
              className="flex items-center gap-3 px-8 py-4 bg-brand-primary/10 border border-brand-primary/20 text-brand-primary rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-primary hover:text-brand-black transition-all duration-500 shadow-[0_0_30px_rgba(139,197,63,0.15)]"
            >
              <MessageCircle size={18} fill="currentColor" />
              Direct WhatsApp Sync
            </button>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-brand-accent hover:border-brand-accent transition-all"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Studio Map Link */}
        <a 
          href={MAPS_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full h-96 bg-neutral-900 rounded-[3rem] overflow-hidden mb-24 grayscale hover:grayscale-0 transition-all duration-1000 border border-white/5 relative group"
        >
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="text-center group-hover:scale-110 transition-transform duration-500">
              <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(255,201,59,0.5)]">
                <MapPin size={32} className="text-brand-black animate-bounce" />
              </div>
              <p className="text-brand-white font-black tracking-[0.3em] uppercase text-sm mb-2">Visit Our Studio</p>
              <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">Nagpur, Maharashtra (Wardha Rd)</p>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" 
            alt="Studio background"
          />
          {/* Overlay Grid */}
          <div className="absolute inset-0 bg-grid opacity-10" />
        </a>

        {/* Form Section */}
        <ContactForm />

        <div className="mt-32 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h4 className="text-brand-primary font-bold uppercase tracking-widest mb-4">Official Email</h4>
            <a href="mailto:scrollfuel@gmail.com" className="text-xl md:text-2xl font-bold font-heading hover:text-brand-primary transition-colors text-brand-white">scrollfuel@gmail.com</a>
          </div>
          <div>
            <h4 className="text-brand-accent font-bold uppercase tracking-widest mb-4">WhatsApp Direct</h4>
            <p className="text-xl md:text-2xl font-bold font-heading text-brand-white">+{WHATSAPP_NUMBER}</p>
          </div>
          <div>
            <h4 className="text-brand-primary font-bold uppercase tracking-widest mb-4">Official Hub</h4>
            <a href="https://scrollfuel.in" target="_blank" className="text-xl md:text-2xl font-bold font-heading hover:text-brand-primary transition-colors text-brand-white">scrollfuel.in</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

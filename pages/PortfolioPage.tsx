
import React from 'react';
import Portfolio from '../components/Portfolio';

const PortfolioPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-black">
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-brand-primary font-bold uppercase tracking-widest mb-4">Our Work</div>
        <h1 className="text-6xl md:text-8xl font-black font-heading tracking-tighter mb-4 text-brand-white">LATEST<br/><span className="text-brand-accent italic">PRODUCTIONS.</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          A collection of our most ambitious projects across film, branding, and digital design.
        </p>
      </section>
      
      {/* Reusing the Portfolio component but it fits well within this page structure */}
      <Portfolio />
      
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <div className="bg-neutral-900/50 rounded-3xl p-12 text-center border border-white/5">
          <h2 className="text-3xl font-bold mb-6 text-brand-white">See your brand here?</h2>
          <p className="text-gray-400 mb-8">Let's discuss how we can bring your project to life with cinematic quality.</p>
          <button className="px-10 py-4 bg-brand-primary text-brand-black rounded-full font-bold hover:bg-brand-accent transition-all">Start a Project</button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;

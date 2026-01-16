
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Category } from '../types';
import { Plus } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All');
  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter);
  const categories: Category[] = ['All', 'Branding', 'Video', 'Web Design', 'Marketing'];

  return (
    <section id="portfolio" className="py-32 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <div className="space-y-4">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-indigo-500">The Archive</span>
            <h2 className="text-5xl md:text-8xl font-heading font-black tracking-tighter leading-none">
              SELECTED <br /><span className="text-indigo-600">WORKS.</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all ${
                  filter === cat 
                    ? 'bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)]' 
                    : 'bg-white/5 text-gray-500 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id} 
              className={`group relative overflow-hidden bg-black transition-all duration-1000 ${
                idx === 0 || idx === 3 ? 'md:aspect-[4/3]' : 'md:aspect-square'
              }`}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="translate-y-12 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <div className="flex items-center gap-4 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <span className="h-[1px] w-8 bg-indigo-500" />
                    <span className="text-[10px] font-black tracking-widest uppercase text-indigo-400">
                      {project.category} / 0{project.id}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-heading font-bold mb-2 group-hover:italic transition-all">
                    {project.title}
                  </h3>
                  <div className="text-gray-500 text-sm font-light uppercase tracking-widest mb-8">
                    {project.client}
                  </div>
                  
                  <button className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                    <Plus size={24} />
                  </button>
                </div>
              </div>

              {/* Borders for a high-end grid look */}
              <div className="absolute top-0 right-0 w-px h-full bg-white/5" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-white/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

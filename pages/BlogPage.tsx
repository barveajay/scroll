
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <div className="text-indigo-500 font-bold uppercase tracking-widest mb-4">Insights & News</div>
          <h1 className="text-6xl md:text-8xl font-black font-heading tracking-tighter mb-8">FUEL FOR<br/><span className="text-gradient">THOUGHT.</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Explorations in marketing, design, and storytelling. Updated weekly with fresh industry insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-1"><Tag size={14} /> {post.category}</span>
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-indigo-500 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              <button className="flex items-center gap-2 text-indigo-400 font-bold group/btn">
                Read Full Story <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </article>
          ))}
        </div>

        {/* Newsletter Callout */}
        <div className="mt-32 p-12 md:p-24 glass-card rounded-[3rem] flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-lg">
            <h2 className="text-4xl font-black font-heading mb-4">Get the latest fuel in your inbox.</h2>
            <p className="text-gray-400 text-lg">No spam, just curated insights and industry updates once a week.</p>
          </div>
          <div className="flex w-full lg:w-auto gap-4">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-grow lg:w-80 px-8 py-4 bg-black/50 border border-white/10 rounded-2xl focus:outline-none focus:border-indigo-500"
            />
            <button className="px-8 py-4 bg-indigo-600 rounded-2xl font-bold whitespace-nowrap">Join Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

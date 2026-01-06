
import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { BLOG_POSTS } from '../constants';
import Button from '../components/Button';

const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">Insights & Strategy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Thought leadership on technology, scaling, and engineering excellence from the Lumina core team.
          </p>
        </ScrollReveal>

        {/* Featured Post */}
        <ScrollReveal className="mb-24">
          <Link to={`/blog/${BLOG_POSTS[0].id}`} className="block group">
            <div className="relative rounded-[3rem] overflow-hidden h-[500px] md:h-[600px] shadow-2xl">
              <img 
                src={BLOG_POSTS[0].image} 
                alt={BLOG_POSTS[0].title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-8 md:p-16">
                <div className="max-w-3xl">
                  <span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-8 inline-block shadow-lg">Featured</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-blue-200 transition-colors">{BLOG_POSTS[0].title}</h2>
                  <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-2xl">{BLOG_POSTS[0].excerpt}</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-white/20 overflow-hidden backdrop-blur-md">
                      <img src={`https://i.pravatar.cc/100?u=${BLOG_POSTS[0].author}`} alt={BLOG_POSTS[0].author} />
                    </div>
                    <div className="text-white">
                      <div className="font-bold text-sm tracking-wide">{BLOG_POSTS[0].author}</div>
                      <div className="text-xs text-gray-400 font-medium">{BLOG_POSTS[0].date} • {BLOG_POSTS[0].readTime}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </ScrollReveal>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.slice(1).map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 100}>
              <Link to={`/blog/${post.id}`} className="flex flex-col h-full group">
                <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm hover:shadow-2xl transition-all duration-500 bg-gray-100 border border-gray-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="flex-1 px-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest">{post.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500 text-[10px] font-bold">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors leading-tight">{post.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed line-clamp-3 text-sm">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                    <div className="flex items-center space-x-3">
                       <img src={`https://i.pravatar.cc/100?u=${post.author}`} alt={post.author} className="w-8 h-8 rounded-full border border-gray-100" />
                       <span className="text-xs font-bold text-gray-700">{post.author}</span>
                    </div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

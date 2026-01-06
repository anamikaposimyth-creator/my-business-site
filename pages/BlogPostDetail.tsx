
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" />;
  }

  return (
    <div className="pt-32 pb-32">
      <article className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <Link to="/blog" className="inline-flex items-center text-blue-600 font-bold text-sm mb-12 hover:translate-x-[-4px] transition-transform">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Insights
          </Link>
          
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-4 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">{post.category}</span>
              <span className="text-gray-400 text-xs font-medium">{post.date} • {post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-8">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4">
              <img src={`https://i.pravatar.cc/100?u=${post.author}`} alt={post.author} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
              <div>
                <div className="font-bold text-gray-900">{post.author}</div>
                <div className="text-xs text-gray-500 font-medium">Principal Strategist at Lumina</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200} className="mb-16">
          <div className="aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl mb-16 bg-gray-100">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div 
            className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed font-light
              prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
              prose-p:mb-8
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:italic prose-blockquote:pl-6 prose-blockquote:my-12 prose-blockquote:text-xl
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </ScrollReveal>

        <ScrollReveal className="pt-20 border-t border-gray-100">
          <div className="bg-gray-900 rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
             <h3 className="text-3xl font-bold mb-6">Ready to scale your business?</h3>
             <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg font-light">
               Our engineering team can help you implement the exact strategies discussed in this article.
             </p>
             <Link to="/contact">
               <Button className="bg-white text-gray-900 hover:bg-blue-50 px-12 py-5 font-black">
                 Start Technical Consultation
               </Button>
             </Link>
          </div>
        </ScrollReveal>
      </article>
    </div>
  );
};

export default BlogPostDetail;


import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { FAQS } from '../constants';

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const categories = Array.from(new Set(FAQS.map(f => f.category)));

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight">Expert Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Transparency is a core Lumina value. Here is how we handle security, pricing, and project longevity.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
             <div className="sticky top-32 space-y-4">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Filter Topics</h4>
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className="block w-full text-left px-6 py-3 rounded-xl hover:bg-white hover:shadow-sm transition-all text-sm font-bold text-gray-600 hover:text-blue-600"
                >
                  {cat}
                </button>
              ))}
             </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            {FAQS.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button 
                    className="w-full text-left p-10 flex justify-between items-center group"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{faq.category}</span>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{faq.question}</h3>
                    </div>
                    <div className={`w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-blue-600 text-white rotate-180' : 'text-gray-400'}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-10 pt-0 text-lg text-gray-600 leading-relaxed border-t border-gray-50 bg-gray-50/30">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="mt-32 p-16 bg-blue-600 rounded-[3.5rem] text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]"></div>
          <h3 className="text-3xl font-bold mb-6 relative z-10">Don't see your specific concern?</h3>
          <p className="text-blue-100 mb-10 text-lg relative z-10 max-w-2xl mx-auto">
            Our principal engineers are available for 15-minute technical discovery calls every Tuesday and Thursday.
          </p>
          <a href="/#/contact" className="inline-block px-12 py-5 bg-white text-blue-600 rounded-full font-black text-lg hover:bg-blue-50 transition-all shadow-2xl relative z-10">
            Schedule Technical Call
          </a>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default FAQs;

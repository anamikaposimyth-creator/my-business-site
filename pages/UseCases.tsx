
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { USE_CASES } from '../constants';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const UseCases: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-32">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight">Proof of Impact</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            We deliver measurable business value in environments where technical excellence is non-negotiable.
          </p>
        </ScrollReveal>

        <div className="space-y-40">
          {USE_CASES.map((useCase, i) => (
            <ScrollReveal key={useCase.id} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                <div className="aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-12 grid grid-cols-2 gap-4">
                  {useCase.results.map((res, idx) => (
                    <div key={idx} className="bg-blue-50 p-6 rounded-3xl border border-blue-100 text-center">
                      <div className="text-blue-700 font-black text-2xl mb-1">{res.split(' ')[0]}</div>
                      <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">{res.split(' ').slice(1).join(' ')}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-8">
                  <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-[10px] font-black uppercase tracking-widest">{useCase.industry}</span>
                  <div className="h-px bg-gray-200 flex-grow"></div>
                  <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest">Client: {useCase.client}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 leading-tight">{useCase.title}</h2>
                
                <div className="space-y-16">
                  <div className="group">
                    <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4 inline-flex items-center">
                      <span className="w-8 h-px bg-blue-600 mr-3"></span> Background
                    </h4>
                    <p className="text-xl text-gray-800 leading-relaxed font-medium">
                      {useCase.background}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4 inline-flex items-center">
                      <span className="w-8 h-px bg-blue-600 mr-3"></span> The Challenge
                    </h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {useCase.challenge}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100">
                    <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4 inline-flex items-center">
                      <span className="w-8 h-px bg-blue-600 mr-3"></span> Our Solution Approach
                    </h4>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {useCase.solution}
                    </p>
                    <Link to="/contact">
                      <Button variant="primary" className="text-sm">Inquire for similar project</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Industry Focus Section */}
        <ScrollReveal className="mt-40 pt-40 border-t border-gray-100 text-center">
          <h3 className="text-3xl font-bold mb-16">Industries We Empower</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Fintech', icon: '💳' },
              { label: 'Biotech', icon: '🧬' },
              { label: 'SaaS', icon: '☁️' },
              { label: 'Manufacturing', icon: '🏭' }
            ].map(industry => (
              <div key={industry.label} className="p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <div className="font-black text-gray-900 uppercase tracking-widest text-xs">{industry.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default UseCases;

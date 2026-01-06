
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { SERVICES } from '../constants';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-32">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight">Technical Capabilities</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            We operate at the intersection of rigorous engineering and business strategy. Our services are designed to build scalable, secure, and intelligent enterprises.
          </p>
        </ScrollReveal>

        {/* Process Section */}
        <ScrollReveal className="mb-40 bg-gray-900 rounded-[3rem] p-12 md:p-20 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Engagement Model</h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                We believe in transparency and measurable progress. Every engagement follows a refined four-stage lifecycle designed to minimize risk and maximize outcome.
              </p>
              <Link to="/contact">
                <Button className="bg-blue-600 text-white border-none">Download Engagement PDF</Button>
              </Link>
            </div>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Deep Discovery', desc: 'Audit of current state, identifying bottlenecks and scaling barriers.' },
                { step: '02', title: 'Strategic Roadmap', desc: 'Designing the architecture and prioritizing the high-ROI tasks.' },
                { step: '03', title: 'Agile Delivery', desc: 'Phased implementation with weekly reviews and transparent code access.' },
                { step: '04', title: 'Continuous Evolution', desc: 'Handover training and performance monitoring for long-term health.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start border-l border-white/10 pl-8 relative">
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-blue-500 rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-48">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.id} className={`flex flex-col lg:flex-row gap-20 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="inline-block p-4 bg-blue-50 rounded-2xl text-4xl mb-8 shadow-sm">
                  {service.icon}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{service.title}</h2>
                <div className="mb-10">
                  <span className="text-xs font-black text-blue-600 uppercase tracking-widest block mb-4">Target Audience</span>
                  <p className="text-lg text-gray-800 font-medium italic">"{service.targetAudience}"</p>
                </div>
                
                <p className="text-lg text-gray-600 mb-12 leading-relaxed">{service.fullContent}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-6 flex items-center">
                      <span className="w-1.5 h-6 bg-blue-500 rounded-full mr-3"></span>
                      Core Methodology
                    </h4>
                    <ul className="space-y-4">
                      {service.howItWorks.map(step => (
                        <li key={step} className="text-gray-600 flex items-start text-sm font-medium">
                          <svg className="w-4 h-4 text-blue-500 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl shadow-blue-100">
                    <h4 className="font-bold mb-6 flex items-center">
                      <span className="w-1.5 h-6 bg-white/30 rounded-full mr-3"></span>
                      Key Outcomes
                    </h4>
                    <ul className="space-y-4">
                      {service.outcomes.map(outcome => (
                        <li key={outcome} className="text-blue-50 flex items-start text-sm font-bold">
                          <svg className="w-4 h-4 text-white mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <Link to="/contact">
                    <Button variant="primary" className="px-10 py-4">Inquire about {service.id}</Button>
                  </Link>
                  <Link to="/use-cases" className="text-gray-500 hover:text-gray-900 font-bold text-sm">See Case Studies</Link>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="sticky top-32">
                  <div className="aspect-[4/5] bg-gray-100 rounded-[4rem] overflow-hidden shadow-2xl group">
                    <img 
                      src={`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800`} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-100 rounded-full -z-10 blur-3xl opacity-50"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

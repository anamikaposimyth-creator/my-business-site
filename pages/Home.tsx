
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import { SERVICES, USE_CASES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-blue-50/40 via-purple-50/20 to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Engineering the Enterprise Future
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-5xl md:text-8xl font-extrabold text-gray-900 tracking-tight leading-[1.05] mb-8">
              High-Performance <br />
              <span className="text-gradient">Digital Foundations</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              We solve high-stakes technical challenges for organizations that demand precision. From cloud-native scaling to proprietary AI, Lumina builds the architecture of tomorrow.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact">
                <Button variant="primary" className="px-10 py-5 text-lg shadow-blue-200 shadow-xl">Start a Consultation</Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="px-10 py-5 text-lg">Explore Capabilities</Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-10">Trusted by Market Leaders & Innovators</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-40">
            {/* Logos represent dummy industry leaders */}
            <div className="text-2xl font-black italic tracking-tighter">FINTECH.CO</div>
            <div className="text-2xl font-black tracking-widest">CLOUDLY</div>
            <div className="text-2xl font-serif font-bold">HealthPulse</div>
            <div className="text-2xl font-mono font-bold">NEXT-GEN</div>
            <div className="text-2xl font-black italic">GLOBAL_LOGISTICS</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Differentiators */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="right">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">Beyond Code. <br />Engineering Business Outcomes.</h2>
              <div className="space-y-8">
                {[
                  { title: 'Zero Vendor Lock-in', desc: 'We build on open standards and cloud-agnostic architectures, keeping you in control of your data and destiny.' },
                  { title: 'Military-Grade Security', desc: 'Every implementation is built with Zero-Trust principles. Security isn\'t an add-on; it\'s our foundation.' },
                  { title: 'Force-Multiplier for Teams', desc: 'We don\'t just deliver and disappear. We train your engineers and set up the pipelines for long-term self-sufficiency.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 font-bold">
                      0{i+1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" className="relative">
              <div className="aspect-square bg-blue-600 rounded-[3rem] overflow-hidden rotate-3 shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover -rotate-3 scale-110 opacity-80"
                  alt="Architecture Visualization"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass p-8 rounded-3xl text-center max-w-xs shadow-2xl">
                    <div className="text-4xl font-bold text-blue-600 mb-2">35%</div>
                    <div className="text-sm font-bold text-gray-800 uppercase tracking-widest">Avg. Cost Reduction Post-Migration</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Core Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-xl font-light">
              We specialize in the high-stakes technologies that drive modern enterprise growth.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 150}>
                <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full group flex flex-col">
                  <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed flex-grow">{service.description}</p>
                  <Link to={`/services`} className="text-blue-600 font-bold inline-flex items-center group-hover:translate-x-2 transition-transform">
                    View Methodology 
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Partners Say</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 200}>
                <div className="bg-gray-50 p-12 rounded-[2.5rem] relative">
                  <div className="text-6xl text-blue-200 absolute top-8 left-8 font-serif leading-none">“</div>
                  <p className="text-xl text-gray-700 italic relative z-10 mb-8 leading-relaxed">
                    {t.quote}
                  </p>
                  <div className="flex items-center space-x-4">
                    <img src={t.avatar} alt={t.author} className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
                    <div>
                      <div className="font-bold text-gray-900">{t.author}</div>
                      <div className="text-sm text-gray-500">{t.position}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 leading-tight">
              Let's engineer your <br /><span className="text-blue-400">competitive advantage.</span>
            </h2>
            <p className="text-blue-100/60 text-xl mb-14 max-w-2xl mx-auto font-light">
              Join the ranks of high-growth organizations that don't compromise on technical excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
              <Link to="/contact">
                <Button className="bg-white text-gray-900 hover:bg-blue-50 text-xl px-14 py-6 font-black rounded-full">
                  Book a Deep-Dive
                </Button>
              </Link>
              <div className="text-white/60 text-sm font-medium">
                Average first response: <span className="text-white">Under 4 hours</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;

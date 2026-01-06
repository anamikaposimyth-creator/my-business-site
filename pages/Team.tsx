
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-32">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight">Leadership & Experts</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            We are a group of specialists who left top-tier firms to build a focus-driven boutique engineering house.
          </p>
        </ScrollReveal>

        {/* Values Section */}
        <ScrollReveal className="mb-40 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Rigorous Engineering', desc: 'We don\'t cut corners. Every deployment is architected for the next decade, not the next quarter.' },
            { title: 'Radical Transparency', desc: 'You have full access to our code, our logic, and our reasoning throughout the project lifecycle.' },
            { title: 'Outcome Obsessed', desc: 'Technical elegance is secondary. Our primary KPI is the business growth we unlock for you.' }
          ].map((v, i) => (
            <div key={i} className="bg-blue-50/50 p-12 rounded-[2.5rem] border border-blue-100/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{v.title}</h3>
              <p className="text-gray-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {TEAM.map((member, i) => (
            <ScrollReveal key={member.id} delay={i * 100}>
              <div className="flex flex-col md:flex-row gap-10 items-start p-10 bg-white border border-gray-100 rounded-[3rem] hover:shadow-2xl transition-all duration-500">
                <div className="w-full md:w-56 h-56 rounded-[2.5rem] overflow-hidden shrink-0 shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-black text-[10px] uppercase tracking-widest">{member.role}</p>
                    </div>
                    <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed font-medium">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-500 rounded-lg text-[10px] font-black uppercase tracking-widest">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

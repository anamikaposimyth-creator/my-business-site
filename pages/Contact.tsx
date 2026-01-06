
import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-2/5">
            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-[1.1] tracking-tight">Start the <br /><span className="text-blue-600">Conversation.</span></h1>
              <p className="text-xl text-gray-600 mb-16 leading-relaxed font-light">
                We take a consultation-first approach. No sales pressure—just technical experts discussing your business problems.
              </p>
              
              <div className="space-y-12">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-2">What happens next?</h4>
                    <p className="text-gray-500 leading-relaxed">After submission, you will receive an invitation to schedule a 15-minute discovery call within 4 business hours.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 shrink-0 shadow-sm">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-2">Technical NDA</h4>
                    <p className="text-gray-500 leading-relaxed">We respect intellectual property. We are happy to sign an NDA before diving into your specific codebases or data structures.</p>
                  </div>
                </div>
              </div>

              <div className="mt-20 p-8 border border-gray-100 rounded-[2rem] bg-gray-50/50">
                <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Direct Office Lines</div>
                <div className="space-y-2">
                  <div className="flex justify-between font-bold text-gray-800">
                    <span>San Francisco</span>
                    <span className="text-blue-600">+1 (415) 555-0128</span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-800">
                    <span>London</span>
                    <span className="text-blue-600">+44 20 7946 0958</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:w-3/5">
            <ScrollReveal delay={200}>
              <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-gray-100 relative">
                {/* Visual Accent */}
                <div className="absolute top-10 right-10 w-24 h-24 bg-blue-50 rounded-full blur-2xl -z-10"></div>
                
                {submitted ? (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg shadow-green-50">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">Inquiry Received</h3>
                    <p className="text-gray-600 text-xl max-w-md mx-auto leading-relaxed">Check your inbox. A technical specialist has been notified and will reach out shortly.</p>
                    <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-12">Return to form</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-gray-50 border-b-2 border-gray-100 focus:border-blue-600 px-6 py-4 focus:outline-none focus:bg-white transition-all text-lg font-medium"
                          placeholder="Jane Smith"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Work Email</label>
                        <input 
                          required
                          type="email" 
                          className="w-full bg-gray-50 border-b-2 border-gray-100 focus:border-blue-600 px-6 py-4 focus:outline-none focus:bg-white transition-all text-lg font-medium"
                          placeholder="jane@enterprise.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Company</label>
                        <input 
                          type="text" 
                          className="w-full bg-gray-50 border-b-2 border-gray-100 focus:border-blue-600 px-6 py-4 focus:outline-none focus:bg-white transition-all text-lg font-medium"
                          placeholder="Global Tech Corp"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Inquiry Type</label>
                        <select className="w-full bg-gray-50 border-b-2 border-gray-100 focus:border-blue-600 px-6 py-4 focus:outline-none focus:bg-white transition-all text-lg font-medium">
                          <option>Digital Transformation</option>
                          <option>AI / LLM Deployment</option>
                          <option>Security / Compliance</option>
                          <option>General Strategic Query</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Briefly describe the challenge</label>
                      <textarea 
                        required
                        rows={5}
                        className="w-full bg-gray-50 border-b-2 border-gray-100 focus:border-blue-600 px-6 py-4 focus:outline-none focus:bg-white transition-all text-lg font-medium resize-none"
                        placeholder="e.g., Scaling transaction processing for BFCM..."
                      ></textarea>
                    </div>
                    <Button type="submit" variant="primary" className="w-full py-6 text-xl font-black rounded-3xl shadow-2xl shadow-blue-100">
                      Request Technical Review
                    </Button>
                    <div className="flex items-center justify-center space-x-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.548 4.708a1 1 0 10-1.428-1.396L9.317 11.27l-1.635-1.65a1 1 0 00-1.414 1.419l2.343 2.366a1 1 0 001.431-.003l3.672-3.705z" clipRule="evenodd" /></svg>
                      <span>Secure End-to-End Encryption Enabled</span>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

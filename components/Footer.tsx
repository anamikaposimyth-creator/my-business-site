
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">L</div>
              <span className="text-xl font-bold tracking-tight text-gray-900">Lumina</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Engineering the future of enterprise intelligence. We help global organizations navigate the digital frontier.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">About</Link></li>
              <li><Link to="/team" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Team</Link></li>
              <li><Link to="/blog" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Cloud Infrastructure</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">AI Implementation</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Cybersecurity</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">Data Analytics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Stay updated with our latest insights.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white border border-gray-200 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-xs">
            © 2024 Lumina Dynamics Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><span className="sr-only">Twitter</span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><span className="sr-only">LinkedIn</span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

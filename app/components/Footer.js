'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-10 border-t border-slate-800 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-900 opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900 opacity-10 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
      
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-white font-bold text-2xl flex items-center mb-4 group">
              <span className="text-blue-500 mr-2 transform transition-transform group-hover:scale-110">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </span>
              <div className="flex items-baseline">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 font-extrabold">Politek</span>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 pr-4">
              Making politics visual and accessible through data-driven insights that impact your daily life. Know what matters to you in seconds, not hours.
            </p>
            <div className="flex items-center text-slate-400 mb-4">
              <MapPin className="h-5 w-5 mr-2 text-blue-500" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center text-slate-400 mb-6">
              <Mail className="h-5 w-5 mr-2 text-blue-500" />
              <span>hello@politek.ai</span>
            </div>
            <div className="flex space-x-4">
              <SocialLink icon="twitter" />
              <SocialLink icon="facebook" />
              <SocialLink icon="linkedin" />
              <SocialLink icon="github" />
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Product</h3>
            <ul className="space-y-3">
              {['Features', 'How It Works', 'Demo', 'Pricing', 'Roadmap'].map(item => (
                <FooterLink key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>
                  {item}
                </FooterLink>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Resources</h3>
            <ul className="space-y-3">
              {['Blog', 'Documentation', 'Help Center', 'API', 'Community'].map(item => (
                <FooterLink key={item} href="#">
                  {item}
                </FooterLink>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Privacy Policy', 'Terms of Service', 'Contact'].map(item => (
                <FooterLink key={item} href="#">
                  {item}
                </FooterLink>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Politek AI, Inc. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200">Terms</a>
            <a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200">Cookies</a>
            <a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }) => (
  <li>
    <a 
      href={href} 
      className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group"
    >
      <ChevronRight className="h-3 w-3 mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-blue-500" />
      {children}
    </a>
  </li>
);

const SocialLink = ({ icon }) => {
  const getIcon = () => {
    switch(icon) {
      case 'twitter':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        );
      case 'facebook':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
          </svg>
        );
      case 'github':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        );
      default:
        return null;
    }
  };
  
  return (
    <a 
      href="#" 
      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
      aria-label={icon}
    >
      {getIcon()}
    </a>
  );
};

export default Footer;

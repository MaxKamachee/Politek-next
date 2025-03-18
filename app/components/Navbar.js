'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-2xl flex items-center group">
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
              <span className="text-xs text-blue-400 ml-1 font-medium rounded-full px-1.5 py-0.5 border border-blue-500/30 bg-blue-500/10">BETA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>
            <div className="flex items-center space-x-3">
              {isAuthenticated ? (
                <div className="relative">
                  <button 
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors px-3 py-1.5"
                  >
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                      {user?.first_name ? user.first_name[0] : <User className="h-4 w-4" />}
                    </div>
                    <span className="hidden lg:inline">{user?.first_name || 'Account'}</span>
                  </button>
                  
                  {/* User Dropdown */}
                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-md shadow-lg overflow-hidden z-10">
                      <div className="p-2 border-b border-slate-700">
                        <p className="text-sm font-medium text-white">{user?.first_name} {user?.last_name}</p>
                        <p className="text-xs text-slate-400 truncate">{user?.email}</p>
                      </div>
                      <div className="py-1">
                        <Link 
                          href="/dashboard" 
                          className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          Dashboard
                        </Link>
                        <Link 
                          href="/profile" 
                          className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          Profile Settings
                        </Link>
                        <button 
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-slate-700 hover:text-red-300"
                        >
                          <div className="flex items-center">
                            <LogOut className="h-4 w-4 mr-2" /> 
                            Logout
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link 
                    href="/login" 
                    className="text-slate-300 hover:text-white transition-colors px-3 py-1.5"
                  >
                    Log In
                  </Link>
                  <Link 
                    href="/register" 
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-2 rounded-md transition-all shadow-md hover:shadow-lg hover:shadow-blue-900/20"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-200 hover:text-white focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span 
                className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}
              />
              <span 
                className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span 
                className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col space-y-1 pt-2">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors py-3 px-4 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col space-y-3 pt-4 pb-2 mt-2 border-t border-slate-700/50">
            {isAuthenticated ? (
              <>
                <div className="px-4 py-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center mr-2">
                      {user?.first_name ? user.first_name[0] : <User className="h-4 w-4" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{user?.first_name} {user?.last_name}</p>
                      <p className="text-xs text-slate-400 truncate">{user?.email}</p>
                    </div>
                  </div>
                </div>
                <Link 
                  href="/dashboard" 
                  className="text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors py-3 px-4 rounded-md text-left"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  href="/profile" 
                  className="text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors py-3 px-4 rounded-md text-left"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Profile Settings
                </Link>
                <button 
                  onClick={handleLogout}
                  className="text-red-400 hover:text-red-300 hover:bg-slate-800/50 transition-colors py-3 px-4 rounded-md text-left flex items-center"
                >
                  <LogOut className="h-4 w-4 mr-2" /> 
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className="text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors py-3 px-4 rounded-md text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log In
                </Link>
                <Link 
                  href="/register" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-2.5 rounded-md transition-colors shadow-md mx-4 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#demo", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
];

const NavLink = ({ href, label }) => {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (href === "#") return;
      
      const section = document.querySelector(href);
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= 200 && rect.bottom >= 200;
        setIsActive(isInView);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [href]);
  
  return (
    <a 
      href={href} 
      className={`relative px-3 py-2 rounded-md transition-all ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-0.5 bg-blue-500 rounded-full" />
      )}
    </a>
  );
};

export default Navbar;
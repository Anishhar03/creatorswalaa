import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-40">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a className="text-2xl font-bold" href="/">
            <span className="text-white">Creators</span>
            <span className="text-[rgb(185,253,80)]">Wala</span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-gray-300 hover:text-lime-400 transition-colors">Process</a>
            <a href="#testimonials" className="text-gray-300 hover:text-lime-400 transition-colors">Brand</a>
            <a href="#pricing" className="text-gray-300 hover:text-lime-400 transition-colors">Services</a>
            <a href="#faq" className="text-gray-300 hover:text-lime-400 transition-colors">Portfolio</a>
            <a href="#pathway" className="text-gray-300 hover:text-lime-400 transition-colors">Creators</a>
            <button className="bg-lime-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-lime-300 transition-colors">
              <a href="#faq">Let's Talk</a>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 mr-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}
      >
        <div className="flex flex-col items-center gap-8 p-8 bg-slate-600">
          <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white hover:text-lime-400 transition-colors">
            Process
          </a>
          <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white hover:text-lime-400 transition-colors">
            Brand
          </a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white hover:text-lime-400 transition-colors">
            Services
          </a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white hover:text-lime-400 transition-colors">
            Portfolio
          </a>
          <a href="#pathway" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white hover:text-lime-400 transition-colors">
            Creators
          </a>
          <button className="bg-lime-400 text-black px-8 py-3 rounded-lg font-medium w-full max-w-xs">
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

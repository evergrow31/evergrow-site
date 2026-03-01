import React from 'react';
import { Logo } from './Logo';

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo className="w-10 h-10" />
          <div className="hidden sm:block">
            <h1 className="text-white font-bold text-lg leading-none">Evergrow</h1>
            <p className="text-gray-500 text-xs tracking-wide">Support Group</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <button onClick={() => document.getElementById('contact')?.scrollIntoView()} className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-semibold rounded-full text-sm transition-all shadow-lg shadow-orange-900/20 cursor-pointer">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

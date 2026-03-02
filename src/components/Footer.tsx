import React from 'react';
import { Logo } from './Logo';
import { Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#0a0b0c] py-12 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <img 
              src="https://i.imgur.com/oTL5Oda.png" 
              alt="Evergrow Logo" 
              className="w-16 h-16 rounded-lg object-contain"
            />
            <div>
              <h3 className="text-white font-bold text-xl">Evergrow</h3>
              <p className="text-gray-500 text-sm">Support Group</p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About Us</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex gap-4">
  <a
    href="#"
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10"
  >
    <Facebook className="w-5 h-5" />
  </a>

  <a
    href="https://instagram.com/evergrowsupportgroup"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10"
  >
    <Instagram className="w-5 h-5" />
  </a>
</div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
          <p>© {new Date().getFullYear()} Evergrow Support Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

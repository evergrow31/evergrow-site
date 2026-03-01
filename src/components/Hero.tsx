import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { Logo } from './Logo';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-evergrow-dark">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-900/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.1] mb-6 tracking-tight">
            Evergrow <br />
            <span className="text-yellow-500">Support</span> <span className="text-evergrow-green">Group</span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-300 mb-6 font-light">
            Nurturing potential, empowering independence.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
            Providing tailored NDIS support across Queensland, from everyday assistance to complex care. Each carer receives client-specific training to ensure truly individualised support.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#services" className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-semibold rounded-full flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] cursor-pointer">
              Get Started <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="px-8 py-4 bg-[#1a2e1a] border border-[#2d4a2d] text-[#4ADE80] hover:bg-[#223822] font-medium rounded-full flex items-center gap-2 transition-all cursor-pointer">
              <Phone className="w-5 h-5" /> Contact Us
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" /> Queensland Based
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500" /> Trained Specialists
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" /> Client Centred Care
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block h-[650px] w-full -mt-16"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-green-500/20 rounded-full blur-3xl" />
          
          {/* Main Hero Image */}
          <div className="relative h-full w-full rounded-3xl overflow-hidden">
             <img 
               src="https://images.pexels.com/photos/8415454/pexels-photo-8415454.jpeg" 
               alt="Inclusive support moment" 
               className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 brightness-[0.4] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent),linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] [mask-composite:intersect] [webkit-mask-composite:source-in]"
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

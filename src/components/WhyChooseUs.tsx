import React from 'react';

import { motion } from 'motion/react';



export const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 bg-[#121315] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Vertical Image Stack */}
          <div className="relative hidden lg:block">
            {/* Decorative Background Elements */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
            
            <div className="relative grid gap-6">
              <div className="rounded-2xl overflow-hidden h-48 sm:h-64 shadow-lg border border-white/5">
                <img 
                  src="https://images.pexels.com/photos/7551606/pexels-photo-7551606.jpeg" 
                  alt="Supportive care interaction" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 brightness-[0.6]"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 sm:h-64 shadow-lg border border-white/5">
                <img 
                  src="https://i.postimg.cc/1z5MBJgb/Screenshot-2026-02-28-at-1-41-16-pm.png" 
                  alt="Compassionate support worker" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 brightness-[0.6]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 sm:h-64 shadow-lg border border-white/5">
                <img 
                  src="https://i.postimg.cc/mZqqDfcd/Screenshot-2026-02-28-at-2-02-36-pm.png" 
                  alt="Happy client and carer" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 brightness-[0.6]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="text-left">
            <span className="text-yellow-500 font-medium tracking-wider text-sm uppercase mb-4 block">Why Choose Us</span>
            <h2 className="text-4xl lg:text-5xl font-semibold mb-8">
              Our <span className="text-green-500">Standard of Care</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-12">
              <p>
                At Evergrow Support Group, we recognise that meaningful support is never one-size-fits-all. Our approach is built on partnership — growing alongside each client and adapting to their needs as they change over time.
              </p>
              <p>
                The journey began with a clear conviction: the standard of disability support should reflect the same clinical discipline, accountability and compassion expected in healthcare.
              </p>
              <p>
                Grounded in strong support work background and clinical insight, our approach shapes everything from care planning and health awareness to risk management and professional conduct. We prioritise safety, informed decision-making and a proactive understanding of each client’s unique needs.
              </p>
              <p>
                Every carer undergoes a comprehensive evaluation to ensure they meet the highest clinical and professional standards.
              </p>
              <p>
                Carer’s are meticulously assessed for their qualifications, clinical knowledge, practical competency and professionalism — selecting only those who demonstrate exceptional capability, integrity and compassion.
              </p>
              <p>
                We ensure that all support professionals undergo specialised, client-specific training to ensure every client receives skilled, personalised support tailored to their unique needs.
              </p>
              <p>
                We partner closely with our clients, their families, and coordinators, to establish the most suitable support arrangement, pairing clients with carers whose expertise and approach align and maintain structured review points to ensure care remains effective and consistent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

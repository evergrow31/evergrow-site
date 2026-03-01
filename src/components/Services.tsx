import React from 'react';
import { Brain, GraduationCap, Shield, Heart, Users, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: "Autism Support",
    description: "Personalised support that empowers individuals to build communication/social confidence, and independence in daily life.",
    icon: Brain,
    color: "text-green-400",
    bg: "bg-green-900/20",
    border: "border-green-800/30"
  },
  {
    title: "Youth Mentoring",
    description: "Personalised mentoring that empowers young people to grow in confidence, develop life skills, and move toward greater independence.",
    icon: GraduationCap,
    color: "text-yellow-400",
    bg: "bg-yellow-900/20",
    border: "border-yellow-800/30"
  },
  {
    title: "Complex Care",
    description: "Dedicated, high-level support for individuals with complex needs, provided by carers who receive participant-specific training to ensure safe, consistent care.",
    icon: Shield,
    color: "text-green-400",
    bg: "bg-green-900/20",
    border: "border-green-800/30"
  },
  {
    title: "Daily Living Support",
    description: "Support with everyday living, personal care, and community engagement designed to strengthen independence and wellbeing.",
    icon: Heart,
    color: "text-yellow-400",
    bg: "bg-yellow-900/20",
    border: "border-yellow-800/30"
  },
  {
    title: "Community Participation",
    description: "Supporting participation in everyday activities, social connections, and recreation to foster meaningful engagement within the community.",
    icon: Users,
    color: "text-green-400",
    bg: "bg-green-900/20",
    border: "border-green-800/30"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support across daily living, personal care, and community participation, delivered with consistency, dignity, and professionalism.",
    icon: Sparkles,
    color: "text-yellow-400",
    bg: "bg-yellow-900/20",
    border: "border-yellow-800/30"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-evergrow-dark relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6">Comprehensive NDIS Support</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We deliver individualised NDIS support across all levels of need — from autism, ADHD, anxiety, and sensory impairments to complex neurological conditions, traumatic brain injury, cerebral palsy, and quadriplegia. With expert carers, we provide youth mentoring, daily living assistance, behavioural support, mobility care, and 24/7 services when required. With comprehensive training and expertise tailored to every client, we provide the continuity, capability, and trust families seek in a first-choice provider.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-2xl ${service.bg} border ${service.border} hover:border-opacity-50 transition-all group`}
            >
              <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

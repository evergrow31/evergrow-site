import React from 'react';
import { Users, Award, BookOpen } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "100+",
    label: "Participants Supported",
    color: "text-green-400",
    bg: "bg-green-900/20",
    border: "border-green-800/30"
  },
  {
    icon: Award,
    value: "50+",
    label: "Trained Carers",
    color: "text-yellow-400",
    bg: "bg-yellow-900/20",
    border: "border-yellow-800/30"
  },
  {
    icon: BookOpen,
    value: "24/7",
    label: "Support Available",
    color: "text-green-400",
    bg: "bg-green-900/20",
    border: "border-green-800/30"
  }
];

export const Stats = () => {
  return (
    <section className="py-12 bg-evergrow-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl ${stat.bg} border ${stat.border} flex items-center gap-6`}
            >
              <div className={`w-16 h-16 rounded-xl bg-black/20 flex items-center justify-center shrink-0`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

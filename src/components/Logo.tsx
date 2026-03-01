import React from 'react';

export const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Ring Gradient - Gold */}
        <linearGradient id="ringGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDB931" />
          <stop offset="25%" stopColor="#9f7928" />
          <stop offset="50%" stopColor="#FDB931" />
          <stop offset="75%" stopColor="#9f7928" />
          <stop offset="100%" stopColor="#FDB931" />
        </linearGradient>

        {/* Leaf Gradient - Green (Top Left) to Gold (Bottom Right) */}
        <linearGradient id="leafGradient" x1="20%" y1="20%" x2="80%" y2="80%">
          <stop offset="0%" stopColor="#4ADE80" /> {/* Bright Green */}
          <stop offset="40%" stopColor="#22c55e" /> {/* Green */}
          <stop offset="60%" stopColor="#EAB308" /> {/* Yellow */}
          <stop offset="100%" stopColor="#FDB931" /> {/* Gold */}
        </linearGradient>

        {/* Sphere Gradient - Soft Gold Glow */}
        <radialGradient id="sphereGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="50%" stopColor="#EAB308" />
          <stop offset="100%" stopColor="#854D0E" />
        </radialGradient>
      </defs>

      {/* Outer Ring */}
      <circle cx="50" cy="50" r="46" stroke="url(#ringGold)" strokeWidth="2" />

      {/* Stem - Solid Gold */}
      <rect x="48.5" y="62" width="3" height="20" fill="#EAB308" />

      {/* Leaf Shape - Green to Gold Gradient */}
      <path
        d="M 50 62 C 25 62, 20 40, 50 20 C 80 40, 75 62, 50 62 Z"
        stroke="url(#leafGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Top Sphere - Large */}
      <circle cx="50" cy="34" r="7" fill="url(#sphereGradient)" />
      
      {/* Left Sphere - Small */}
      <circle cx="33" cy="50" r="5" fill="url(#sphereGradient)" />
      
      {/* Right Sphere - Small */}
      <circle cx="67" cy="50" r="5" fill="url(#sphereGradient)" />
    </svg>
  );
};

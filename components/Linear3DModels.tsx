
import React from 'react';

export const SocialEcosystem3D = () => (
  <div className="relative w-full h-full perspective-[1200px]">
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-float-slow">
      <defs>
        <linearGradient id="grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8BC53F" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFC93B" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Isometric Grid Base */}
      <g transform="translate(400, 300) rotate(-30) skewX(30)">
        <rect x="-200" y="-200" width="400" height="400" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
        {Array.from({ length: 10 }).map((_, i) => (
          <React.Fragment key={i}>
            <line x1="-200" y1={-200 + i * 40} x2="200" y2={-200 + i * 40} stroke="white" strokeWidth="0.5" strokeOpacity="0.03" />
            <line x1={-200 + i * 40} y1="-200" x2={-200 + i * 40} y2="200" stroke="white" strokeWidth="0.5" strokeOpacity="0.03" />
          </React.Fragment>
        ))}
      </g>

      {/* 3D "Phone" Feed Wireframe */}
      <g className="animate-pulse-slow">
        <path d="M350 200 L450 150 L450 450 L350 500 Z" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
        <path d="M350 200 L370 190 L470 140 L450 150 Z" stroke="white" strokeWidth="1" strokeOpacity="0.1" />
        <path d="M450 150 L470 140 L470 440 L450 450 Z" stroke="white" strokeWidth="1" strokeOpacity="0.1" />
        
        {/* Internal Linear UI */}
        <line x1="365" y1="230" x2="435" y2="195" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
        <rect x="375" y="260" width="60" height="40" stroke="#FFC93B" strokeWidth="0.5" strokeOpacity="0.4" transform="skewY(-25)" />
      </g>

      {/* Floating Social Nodes */}
      <g className="animate-float">
        {/* "Like" Icon 3D representation */}
        <circle cx="550" cy="250" r="15" stroke="#8BC53F" strokeWidth="1" />
        <path d="M550 235 L550 265 M535 250 L565 250" stroke="#FFC93B" strokeWidth="1" />
        <line x1="450" y1="250" x2="535" y2="250" stroke="#8BC53F" strokeWidth="0.5" strokeDasharray="4 4" strokeOpacity="0.4" />
      </g>

      {/* Browser Wireframe Plane */}
      <g transform="translate(150, 200) rotate(15)">
        <rect width="200" height="150" rx="4" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
        <line x1="10" y1="30" x2="190" y2="30" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
        <circle cx="20" cy="15" r="3" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
        <circle cx="35" cy="15" r="3" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
      </g>

      {/* Marketing Connection Lines */}
      <path d="M200 400 C 300 450, 400 350, 600 400" stroke="url(#grad-primary)" strokeWidth="2" strokeDasharray="10 5" className="line-draw" />
    </svg>
  </div>
);

export const GrowthEngine3D = () => (
  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
    {/* Isometric Funnel Structure */}
    <g transform="translate(200, 100)">
      <path d="M-100 0 L100 0 L50 200 L-50 200 Z" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
      <ellipse cx="0" cy="0" rx="100" ry="30" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
      <ellipse cx="0" cy="200" rx="50" ry="15" stroke="#8BC53F" strokeWidth="1" strokeOpacity="0.5" />
      
      {/* 3D Vertical Connectors */}
      <line x1="-100" y1="0" x2="-50" y2="200" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
      <line x1="100" y1="0" x2="50" y2="200" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
      
      {/* Animated Data Particles */}
      <circle r="2" fill="#FFC93B" className="animate-ping">
        <animateMotion dur="3s" repeatCount="indefinite" path="M-80 10 L-40 190" />
      </circle>
      <circle r="2" fill="#8BC53F" className="animate-ping">
        <animateMotion dur="4s" repeatCount="indefinite" path="M80 10 L40 190" />
      </circle>
    </g>
  </svg>
);

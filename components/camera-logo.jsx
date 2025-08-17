import React from "react";

const CameraLogo = ({ width = 120, height = 32, className = "" }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 120 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle for camera lens */}
      <circle cx="16" cy="16" r="14" fill="url(#lensGradient)" stroke="url(#borderGradient)" strokeWidth="2"/>
      
      {/* Camera lens rings */}
      <circle cx="16" cy="16" r="12" fill="none" stroke="url(#ringGradient1)" strokeWidth="1" opacity="0.8"/>
      <circle cx="16" cy="16" r="9" fill="none" stroke="url(#ringGradient2)" strokeWidth="1" opacity="0.6"/>
      <circle cx="16" cy="16" r="6" fill="none" stroke="url(#ringGradient3)" strokeWidth="1" opacity="0.4"/>
      
      {/* Main lens aperture */}
      <circle cx="16" cy="16" r="4" fill="url(#apertureGradient)" stroke="url(#apertureBorder)" strokeWidth="0.5"/>
      
      {/* Lens center highlight */}
      <circle cx="16" cy="16" r="2" fill="url(#centerGradient)"/>
      
      {/* Camera body outline */}
      <rect x="6" y="10" width="20" height="12" rx="3" fill="none" stroke="url(#bodyGradient)" strokeWidth="1" opacity="0.7"/>
      
      {/* Camera grip */}
      <rect x="24" y="14" width="3" height="4" rx="1" fill="url(#gripGradient)" opacity="0.8"/>
      
      {/* Text "Pixxel" */}
      <text x="36" y="22" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="url(#textGradient)">
        Pixxel
      </text>
      
      {/* Gradients */}
      <defs>
        <linearGradient id="lensGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#667eea", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#764ba2", stopOpacity: 1}} />
        </linearGradient>
        
        <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#f093fb", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#f5576c", stopOpacity: 1}} />
        </linearGradient>
        
        <linearGradient id="ringGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#4facfe", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#00f2fe", stopOpacity: 1}} />
        </linearGradient>
        
        <linearGradient id="ringGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#43e97b", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#38f9d7", stopOpacity: 1}} />
        </linearGradient>
        
        <linearGradient id="ringGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#fa709a", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#fee140", stopOpacity: 1}} />
        </linearGradient>
        
        <linearGradient id="apertureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#a8edea", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#fed6e3", stopOpacity: 1}} />
        </linearGradient>
        
        <linearGradient id="apertureBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#ffecd2", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#fcb69f", stopOpacity: 1}} />
        </linearGradient>
        
        <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#ffffff", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#f0f0f0", stopOpacity: 1}} />
        </linearGradient>
        
        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#ff9a9e", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#fecfef", stopOpacity: 1}} />
        </linearGradient>
        
        <linearGradient id="gripGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#ffecd2", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#fcb69f", stopOpacity: 1}} />
        </linearGradient>
        
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#ffffff", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#f0f0f0", stopOpacity: 1}} />
        </linearGradient>
        
        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#00f2fe", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#4facfe", stopOpacity: 1}} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CameraLogo;

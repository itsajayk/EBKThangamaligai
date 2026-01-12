import * as React from "react";

function JewelryLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 100 100"
      {...props}
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f9d976" />
          <stop offset="50%" stopColor="#f2b300" />
          <stop offset="100%" stopColor="#c99700" />
        </linearGradient>
      </defs>

      {/* Outer luxury halo */}
      <polygon
        points="50 4 92 36 50 96 8 36"
        fill="none"
        stroke="url(#goldGradient)"
        strokeWidth="2"
        opacity="0.6"
      />

      {/* Main diamond outline */}
      <polygon
        points="50 10 86 38 50 90 14 38"
        fill="none"
        stroke="url(#goldGradient)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Vertical facet */}
      <line
        x1="50"
        y1="10"
        x2="50"
        y2="90"
        stroke="#e6b800"
        strokeWidth="1.8"
      />

      {/* Horizontal facet */}
      <line
        x1="14"
        y1="38"
        x2="86"
        y2="38"
        stroke="#e6b800"
        strokeWidth="1.8"
      />

      {/* Diagonal facets */}
      <line
        x1="14"
        y1="38"
        x2="50"
        y2="10"
        stroke="#d4af37"
        strokeWidth="1.2"
      />
      <line
        x1="86"
        y1="38"
        x2="50"
        y2="10"
        stroke="#d4af37"
        strokeWidth="1.2"
      />
      <line
        x1="14"
        y1="38"
        x2="50"
        y2="90"
        stroke="#d4af37"
        strokeWidth="1.2"
      />
      <line
        x1="86"
        y1="38"
        x2="50"
        y2="90"
        stroke="#d4af37"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export default JewelryLogo;

import React from 'react';

interface PlanoLogoProps {
  className?: string;
}

export const PlanoLogo: React.FC<PlanoLogoProps> = ({ className = "w-6 h-6 text-white" }) => {
  return (
    <svg viewBox="0 0 100 88" className={className} fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 42 0 H 73 C 87.9 0 100 11.2 100 25 C 100 38.8 87.9 50 73 50 H 58 V 36 H 42 V 0 Z M 58 15.5 H 71.5 C 76.7 15.5 81 19.8 81 25 C 81 30.2 76.7 34.5 71.5 34.5 H 58 V 15.5 Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 58 88 H 27 C 12.1 88 0 76.8 0 63 C 0 49.2 12.1 38 27 38 H 42 V 52 H 58 V 88 Z M 42 72.5 H 28.5 C 23.3 72.5 19 68.2 19 63 C 19 57.8 23.3 53.5 28.5 53.5 H 42 V 72.5 Z"
      />
    </svg>
  );
};

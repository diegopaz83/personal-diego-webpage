import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#1f2023] py-10 sm:py-12 text-xs text-neutral-400 font-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span className="text-white font-medium">Diego Fernando Paz Serrato</span> — Digital Transformation & Enterprise BI
        </div>
        <div className="font-mono text-[11px] text-neutral-400">
          Electronic Engineer (Univalle) • Master’s (U. of Barcelona)
        </div>
      </div>
    </footer>
  );
};

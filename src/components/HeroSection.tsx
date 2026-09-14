import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';

export const HeroSection: React.FC = () => {
  return (
    <section id="top" className="pt-14 sm:pt-24 pb-14 sm:pb-20 border-b border-[#1f2023]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        
        {/* Discipline Tagline */}
        <div className="text-[11px] sm:text-xs uppercase tracking-widest text-neutral-400 font-mono mb-6 sm:mb-8">
          Leadership • Enterprise Power BI • Data Strategy
        </div>

        {/* Main Positioning Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-light text-white tracking-tight leading-[1.14] sm:leading-[1.08] max-w-4xl">
          Transforming complex operations into <span className="text-neutral-400 font-normal">actionable decision intelligence.</span>
        </h1>

        {/* Concise Executive Statement */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <p className="lg:col-span-8 text-base sm:text-xl text-neutral-300 font-light leading-relaxed">
            I am <strong className="text-white font-medium">Diego Paz</strong>, a Digital Transformation Director and Enterprise Power BI Architect based in Colombia. 
            I bridge the gap between rigorous electronic engineering, dimensional data modeling, and executive business strategy—empowering leadership teams with real-time visibility, auditable metrics, and high-adoption digital processes.
          </p>

          <div className="lg:col-span-4 flex flex-col gap-3 pt-1 sm:pt-2 w-full">
            <a
              href="#solutions"
              className="inline-flex items-center justify-between px-5 py-3.5 rounded bg-white text-black text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors min-h-[46px]"
            >
              <span>Explore Solutions Brochure</span>
              <ArrowDownRight className="w-4 h-4 ml-2 shrink-0" />
            </a>
            <a
              href="https://wa.me/573218262462?text=Hello%20Diego,%20I%20reviewed%20your%20executive%20portfolio%20and%20would%20like%20to%20discuss%20an%20initiative."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between px-5 py-3.5 rounded border border-neutral-800 text-neutral-300 text-xs font-medium tracking-wide hover:border-neutral-600 hover:text-white transition-colors min-h-[46px]"
            >
              <span>Direct WhatsApp Inquiry</span>
              <ArrowUpRight className="w-4 h-4 ml-2 text-neutral-500 shrink-0" />
            </a>
          </div>
        </div>

        {/* Key Quantitative Anchors */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-[#1a1b1e] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          <div>
            <div className="text-2xl sm:text-4xl font-light text-white font-mono tracking-tight">
              <AnimatedCounter from={1} to={18} duration={1600} suffix="+" />
            </div>
            <div className="text-xs text-neutral-400 mt-1.5 sm:mt-2 font-light">Years in Tech & Engineering Leadership</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-light text-white font-mono tracking-tight">Power BI</div>
            <div className="text-xs text-neutral-400 mt-1.5 sm:mt-2 font-light">Advanced DAX & Star Schema Architecture</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-light text-white font-mono tracking-tight">Master’s</div>
            <div className="text-xs text-neutral-400 mt-1.5 sm:mt-2 font-light">Digital Transformation (U. of Barcelona)</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-light text-white font-mono tracking-tight">Agile</div>
            <div className="text-xs text-neutral-400 mt-1.5 sm:mt-2 font-light">Certified Scrum Master, PO & Design Thinking</div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

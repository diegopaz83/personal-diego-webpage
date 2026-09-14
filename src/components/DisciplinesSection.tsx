import React from 'react';
import { motion } from 'motion/react';
import { STRATEGIC_DISCIPLINES } from '../data/portfolioData';

export const DisciplinesSection: React.FC = () => {
  return (
    <section id="disciplines" className="py-16 sm:py-24 border-b border-[#1f2023]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          <div className="text-[11px] sm:text-xs uppercase tracking-widest text-neutral-400 font-mono mb-2 sm:mb-3">
            Core Disciplines & Strategic Pillars
          </div>
          <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
            How I Create Value
          </h2>
          <p className="mt-2 sm:mt-3 text-neutral-400 text-xs sm:text-sm leading-relaxed">
            Integrating engineering discipline with high-level digital leadership to ensure technological initiatives deliver verified operational returns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {STRATEGIC_DISCIPLINES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between border-t border-[#1f2023] pt-6 sm:pt-8"
            >
              <div>
                <div className="text-[11px] sm:text-xs font-mono text-neutral-400 mb-2">
                  0{idx + 1} / {item.subtitle}
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#17181a]">
                <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  Key Capabilities
                </div>
                <ul className="space-y-2 text-xs text-neutral-300 font-light">
                  {item.capabilities.map((cap, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2">
                      <span className="text-neutral-400 shrink-0 mt-0.5">—</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

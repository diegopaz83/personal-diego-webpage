import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SOLUTION_CASES } from '../data/portfolioData';
import { SolutionCase } from '../types';

export const SolutionsSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<SolutionCase | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Enterprise BI', 'Industrial & IoT', 'Strategy & Governance', 'Operations & Supply Chain'];

  const filteredCases = activeCategory === 'All'
    ? SOLUTION_CASES
    : SOLUTION_CASES.filter((c) => c.category === activeCategory);

  return (
    <section id="solutions" className="py-16 sm:py-24 border-b border-[#1f2023]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-[#1f2023]"
        >
          <div>
            <div className="text-[11px] sm:text-xs uppercase tracking-widest text-neutral-400 font-mono mb-2 sm:mb-3">
              Selected Works & Case Studies
            </div>
            <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
              Solutions Brochure
            </h2>
            <p className="mt-2 sm:mt-3 text-neutral-400 text-xs sm:text-sm max-w-xl leading-relaxed">
              Real-world analytical architectures and digital initiatives designed for high operational fidelity, auditable reporting, and executive decision-making.
            </p>
          </div>

          {/* Category Filter - Scrollable on mobile */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3 py-2 rounded transition-colors whitespace-nowrap shrink-0 min-h-[40px] flex items-center ${
                  activeCategory === cat
                    ? 'bg-neutral-800 text-white font-medium'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Editorial Solutions Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {filteredCases.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedCase(item)}
              className="group border border-[#1f2023] hover:border-neutral-700 bg-[#0e0f11] p-5 sm:p-8 rounded-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between gap-3 mb-3 sm:mb-4">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    {item.category}
                  </span>
                  <span className="text-neutral-400 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-neutral-200 transition-colors tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                  {item.tagline}
                </p>

                {/* Primary Metric Highlight */}
                {item.metrics.length > 0 && (
                  <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-[#1a1b1e] flex items-baseline justify-between">
                    <span className="text-xs text-neutral-400 font-light">{item.metrics[0].label}</span>
                    <span className="text-xl sm:text-2xl font-light text-white font-mono">{item.metrics[0].value}</span>
                  </div>
                )}
              </div>

              {/* Technologies strip */}
              <div className="mt-5 sm:mt-6 pt-4 border-t border-[#17181a] flex flex-wrap gap-2 text-[11px] text-neutral-400 font-mono">
                {item.architecture.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="after:content-['•'] after:ml-2 last:after:content-none">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Clean Technical Case Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-3xl bg-[#111214] border border-[#27282b] rounded-lg p-5 sm:p-10 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-[#1f2023]">
                <span className="text-xs uppercase font-mono tracking-widest text-neutral-400">
                  {selectedCase.category}
                </span>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-neutral-400 hover:text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Close case details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title & Tagline */}
              <div className="mt-5 sm:mt-6">
                <h3 className="text-xl sm:text-3xl font-light text-white tracking-tight">
                  {selectedCase.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                  {selectedCase.tagline}
                </p>
              </div>

              {/* Quantitative Metrics Bar */}
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-4 rounded bg-[#0b0c0d] border border-[#1d1e21]">
                {selectedCase.metrics.map((m, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[11px] sm:text-xs text-neutral-400 font-light">{m.label}</span>
                    <span className="text-xl sm:text-2xl font-light text-white font-mono mt-0.5 sm:mt-1">{m.value}</span>
                    {m.sublabel && <span className="text-[10px] sm:text-[11px] text-neutral-400 mt-0.5">{m.sublabel}</span>}
                  </div>
                ))}
              </div>

              {/* Problem & Solution */}
              <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6 text-xs sm:text-sm leading-relaxed">
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono mb-1.5">
                    The Business Challenge
                  </h4>
                  <p className="text-neutral-300 font-light">{selectedCase.problem}</p>
                </div>

                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono mb-1.5">
                    Architectural & Strategic Solution
                  </h4>
                  <p className="text-neutral-300 font-light">{selectedCase.solution}</p>
                </div>

                {selectedCase.daxLogic && (
                  <div>
                    <h4 className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono mb-1.5">
                      Key DAX Formulation
                    </h4>
                    <pre className="p-3 sm:p-4 rounded bg-[#090a0b] border border-[#1f2023] font-mono text-[11px] sm:text-xs text-neutral-300 overflow-x-auto whitespace-pre">
                      {selectedCase.daxLogic}
                    </pre>
                  </div>
                )}

                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono mb-2">
                    System Architecture & Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedCase.architecture.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-[#18191c] text-[11px] sm:text-xs text-neutral-300 font-mono border border-[#232428]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-[#1f2023]">
                  <h4 className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono mb-1.5">
                    Verified Executive Impact
                  </h4>
                  <p className="text-neutral-300 font-light">{selectedCase.businessImpact}</p>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-[#1f2023] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <a
                  href={`https://wa.me/573218262462?text=Hello%20Diego,%20I%20am%20interested%20in%20discussing%20the%20initiative:%20${encodeURIComponent(selectedCase.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-white bg-[#1a1b1e] sm:bg-transparent px-4 py-3 sm:p-0 rounded hover:text-neutral-300 transition-colors inline-flex items-center justify-center gap-1.5 min-h-[44px]"
                >
                  <span>Inquire About This Implementation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-xs text-neutral-400 hover:text-white py-2 px-3 text-center min-h-[44px]"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};


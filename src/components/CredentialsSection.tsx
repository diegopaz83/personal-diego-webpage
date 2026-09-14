import React from 'react';
import { CREDENTIALS_SUMMARY } from '../data/portfolioData';

export const CredentialsSection: React.FC = () => {
  const degrees = CREDENTIALS_SUMMARY.filter((c) => c.type === 'Degree');
  const certifications = CREDENTIALS_SUMMARY.filter((c) => c.type === 'Certification' || c.type === 'License');

  return (
    <section id="credentials" className="py-16 sm:py-24 border-b border-[#1f2023]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-[11px] sm:text-xs uppercase tracking-widest text-neutral-400 font-mono mb-2 sm:mb-3">
            Academic Background & Official Credentials
          </div>
          <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
            Education & Endorsements
          </h2>
          <p className="mt-2 sm:mt-3 text-neutral-400 text-xs sm:text-sm leading-relaxed">
            Formal foundations in electronic systems engineering, postgraduate digital leadership from Europe, and certified agile governance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
          
          {/* Degrees (6 cols) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-mono pb-3 border-b border-[#1f2023]">
              Higher Education
            </h3>

            {degrees.map((item, idx) => (
              <div key={idx} className="space-y-1.5 sm:space-y-2">
                <h4 className="text-base sm:text-lg font-medium text-white tracking-tight">
                  {item.title}
                </h4>
                <div className="text-xs sm:text-sm text-neutral-400 font-light">
                  {item.institution}
                </div>
                {item.focus && (
                  <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed font-light pt-1">
                    {item.focus}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Certifications (6 cols) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-mono pb-3 border-b border-[#1f2023]">
              Professional Certifications & License
            </h3>

            <div className="space-y-4 sm:space-y-5">
              {certifications.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 border-b border-[#17181a] pb-3"
                >
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-white">
                      {item.title}
                    </h4>
                    <div className="text-[11px] sm:text-xs text-neutral-400 font-light mt-0.5">
                      {item.institution}
                    </div>
                  </div>
                  {item.focus && (
                    <span className="text-[11px] sm:text-xs font-mono text-neutral-400 shrink-0 self-start sm:self-auto">
                      {item.focus}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

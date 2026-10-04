import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

/** Scroll-driven architectural proof of concept. No video assets or external APIs. */
export const OrchestrationExperience: React.FC = () => {
  const section = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end end'] });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const connection = useTransform(progress, [0.12, 0.5], [0, 1]);
  const agent = useTransform(progress, [0.4, 0.67], [0.25, 1]);
  const result = useTransform(progress, [0.65, 0.9], [0.2, 1]);
  const camera = useTransform(progress, [0, 1], [1, 1.07]);
  const flowOpacity = useTransform(progress, [0.2, 0.45, 0.9], [0, 1, 1]);
  const active = reduced ? undefined : connection;
  return (
    <section ref={section} id="orchestration" aria-label="Business orchestration demonstration" className="relative h-[260vh] bg-[#0c0d0e]">
      <div className="sticky top-0 flex h-screen min-h-[560px] flex-col justify-center overflow-hidden px-4 sm:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-6 max-w-2xl">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#b7a28a]">Architecture in motion / 01</p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-5xl">Your systems work. <span className="text-neutral-400">Let's make them work together.</span></h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base">Connecting enterprise data, orchestrating intelligent workflows, and turning complexity into measurable business outcomes.</p>
          </div>
          <motion.div style={reduced ? undefined : { scale: camera }} className="relative mx-auto w-full max-w-5xl rounded-2xl border border-white/10 bg-[#101418] p-3 shadow-[0_25px_100px_rgba(0,0,0,0.45)] sm:p-8">
            <svg viewBox="0 0 1000 480" role="img" aria-label="ERP and CRM feed an orchestration engine which coordinates an AI agent and business intelligence results" className="w-full" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="steel" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#303c45"/><stop offset=".55" stopColor="#192127"/><stop offset="1" stopColor="#11171b"/></linearGradient>
                <linearGradient id="signal" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#6b93ad"/><stop offset="1" stopColor="#c9a178"/></linearGradient>
                <pattern id="gridOrch" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="#ffffff" strokeOpacity=".045"/></pattern>
              </defs>
              <rect width="1000" height="480" fill="url(#gridOrch)"/>
              <g fill="none" stroke="#58636d" strokeWidth="2" strokeOpacity=".45"><path d="M205 140H315V240H400"/><path d="M205 340H315V240"/><path d="M590 240H680"/><path d="M840 240H900"/></g>
              <motion.g style={reduced ? undefined : { opacity: flowOpacity }}>
                <motion.path d="M205 140H315V240H400" fill="none" stroke="url(#signal)" strokeWidth="4" strokeLinecap="round" style={reduced ? undefined : { pathLength: active }}/>
                <motion.path d="M205 340H315V240" fill="none" stroke="#8db4ca" strokeWidth="4" strokeLinecap="round" style={reduced ? undefined : { pathLength: active }}/>
                <motion.path d="M590 240H680" fill="none" stroke="#c9a178" strokeWidth="4" strokeLinecap="round" style={reduced ? undefined : { pathLength: active }}/>
                <motion.path d="M840 240H900" fill="none" stroke="#c9a178" strokeWidth="4" strokeLinecap="round" style={reduced ? undefined : { pathLength: result }}/>
              </motion.g>
              {([{x:35,y:82,label:'ERP',sub:'Business systems'},{x:35,y:282,label:'CRM',sub:'Customer data'}] as const).map((n) => <g key={n.label}><rect x={n.x} y={n.y} width="170" height="116" rx="12" fill="url(#steel)" stroke="#73818b" strokeOpacity=".6"/><path d={`M${n.x+14} ${n.y+20}H${n.x+155}`} stroke="#a7b3b9" strokeOpacity=".3"/><text x={n.x+20} y={n.y+65} fill="#e5e7eb" fontSize="24" fontFamily="sans-serif">{n.label}</text><text x={n.x+20} y={n.y+90} fill="#9ca3af" fontSize="13" fontFamily="sans-serif">{n.sub}</text></g>)}
              <g><rect x="400" y="160" width="190" height="160" rx="15" fill="url(#steel)" stroke="#c9a178" strokeOpacity=".8" strokeWidth="2"/><rect x="418" y="178" width="154" height="124" rx="9" fill="#121c23" stroke="#c9a178" strokeOpacity=".3"/><circle cx="495" cy="220" r="22" fill="none" stroke="#c9a178" strokeWidth="3"/><circle cx="495" cy="220" r="9" fill="#c9a178" fillOpacity=".65"/><text x="495" y="269" textAnchor="middle" fill="#f1f5f9" fontSize="19" fontFamily="sans-serif">Orchestration</text><text x="495" y="290" textAnchor="middle" fill="#a3adb5" fontSize="12" fontFamily="sans-serif">Rules · Workflows · APIs</text></g>
              <motion.g style={reduced ? undefined : { opacity: agent }}><rect x="680" y="172" width="160" height="136" rx="13" fill="url(#steel)" stroke="#8db4ca" strokeOpacity=".75"/><path d="M720 213L760 191L800 213L800 254L760 276L720 254Z" fill="none" stroke="#8db4ca" strokeWidth="2"/><circle cx="760" cy="234" r="12" fill="#8db4ca" fillOpacity=".6"/><text x="760" y="295" textAnchor="middle" fill="#f1f5f9" fontSize="17" fontFamily="sans-serif">AI Agent</text></motion.g>
              <motion.g style={reduced ? undefined : { opacity: result }}><rect x="900" y="175" width="90" height="130" rx="10" fill="url(#steel)" stroke="#c9a178" strokeOpacity=".75"/><path d="M916 264V235H931V264M938 264V214H953V264M960 264V225H975V264" fill="none" stroke="#c9a178" strokeWidth="2"/><text x="945" y="286" textAnchor="middle" fill="#e5e7eb" fontSize="13" fontFamily="sans-serif">Insights</text></motion.g>
              <text x="36" y="445" fill="#6b7280" fontSize="12" fontFamily="monospace">INPUTS</text><text x="400" y="445" fill="#6b7280" fontSize="12" fontFamily="monospace">COORDINATE</text><text x="690" y="445" fill="#6b7280" fontSize="12" fontFamily="monospace">REASON</text><text x="900" y="445" fill="#6b7280" fontSize="12" fontFamily="monospace">ACT</text>
            </svg>
          </motion.div>
          <div className="mt-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-neutral-500"><span>Scroll to orchestrate</span><span>Concept prototype</span></div>
        </div>
      </div>
    </section>
  );
};

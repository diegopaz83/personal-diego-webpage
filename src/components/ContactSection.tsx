import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'Enterprise Power BI Solution',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('diegopaz83@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/573218262462?text=${encodeURIComponent(
    `Hello Diego, my name is ${form.name || 'Interested Colleague'}. Regarding: ${form.service}. Message: ${form.message || 'I would like to coordinate a discussion with you.'}`
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-[11px] sm:text-xs uppercase tracking-widest text-neutral-400 font-mono mb-2 sm:mb-3">
            Direct Inquiries
          </div>
          <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
            Initiate a Conversation
          </h2>
          <p className="mt-2 sm:mt-3 text-neutral-400 text-xs sm:text-sm leading-relaxed">
            Available for executive consulting, enterprise Power BI architecture, digital transformation advisory, or technology leadership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          
          {/* Direct channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                Electronic Mail
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:diegopaz83@gmail.com"
                  className="text-base sm:text-lg font-light text-white hover:text-neutral-300 transition-colors break-all"
                >
                  diegopaz83@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="text-neutral-400 hover:text-white transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && <span className="text-xs text-neutral-400 mt-1 block">Copied to clipboard.</span>}
            </div>

            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                Direct Messaging
              </div>
              <a
                href="https://wa.me/573218262462?text=Hello%20Diego,%20I%20reviewed%20your%20executive%20profile%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noreferrer"
                className="text-base sm:text-lg font-light text-white hover:text-neutral-300 transition-colors inline-flex items-center gap-1.5 py-1 min-h-[44px]"
              >
                <span>+57 321 826 2462 (WhatsApp)</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 shrink-0" />
              </a>
            </div>

            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                Professional Network
              </div>
              <a
                href="https://www.linkedin.com/in/diegopaz83"
                target="_blank"
                rel="noreferrer"
                className="text-base sm:text-lg font-light text-white hover:text-neutral-300 transition-colors inline-flex items-center gap-1.5 py-1 min-h-[44px] break-all"
              >
                <span>linkedin.com/in/diegopaz83</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 shrink-0" />
              </a>
            </div>

            <div className="pt-5 sm:pt-6 border-t border-[#1f2023] text-xs text-neutral-400 font-light space-y-1">
              <div>Location: Cali, Colombia</div>
              <div>Available for worldwide remote advisory, hybrid & on-site engagements.</div>
            </div>
          </div>

          {/* Clean Executive Form (7 cols) */}
          <div className="lg:col-span-7 border border-[#1f2023] rounded-lg p-5 sm:p-8 bg-[#0e0f11]">
            <h3 className="text-base sm:text-lg font-medium text-white tracking-tight mb-1.5">
              Send an Executive Inquiry
            </h3>
            <p className="text-xs text-neutral-400 font-light mb-5 sm:mb-6">
              Complete the fields below to prepare a structured inquiry directly into WhatsApp or email.
            </p>

            {submitted ? (
              <div className="py-6 sm:py-8 text-center space-y-4">
                <div className="text-sm text-white font-medium">Inquiry Prepared Successfully</div>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto font-light">
                  You can now send your message directly via WhatsApp with one click for the quickest response.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-3 rounded bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors inline-flex items-center justify-center min-h-[44px]"
                  >
                    Open in WhatsApp &rarr;
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-3 rounded border border-neutral-700 text-neutral-300 text-xs hover:text-white transition-colors min-h-[44px]"
                  >
                    Edit Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-sm font-light">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Name / Organization
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Sarah Vance / Enterprise Corp"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#090a0b] border border-[#232428] text-white text-sm sm:text-xs placeholder-neutral-600 focus:outline-none focus:border-neutral-500 min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#090a0b] border border-[#232428] text-white text-sm sm:text-xs placeholder-neutral-600 focus:outline-none focus:border-neutral-500 min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Engagement Subject
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-[#090a0b] border border-[#232428] text-white text-sm sm:text-xs focus:outline-none focus:border-neutral-500 min-h-[44px]"
                  >
                    <option value="Enterprise Power BI Solution">Enterprise Power BI / DAX Architecture</option>
                    <option value="Digital Transformation Advisory">Digital Transformation & Change Advisory</option>
                    <option value="Strategic Project & PMO Leadership">Strategic Project Governance & PMO</option>
                    <option value="Executive or Advisory Role">Executive / Leadership Opportunities</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Project Scope / Brief
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe the operational context, data sources, or strategic goals..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-[#090a0b] border border-[#232428] text-white text-sm sm:text-xs placeholder-neutral-600 focus:outline-none focus:border-neutral-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded bg-white text-black font-semibold text-xs tracking-wide hover:bg-neutral-200 transition-colors min-h-[46px]"
                >
                  Prepare Inquiry
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0c0d0e]/95 backdrop-blur-md border-b border-[#1f2023]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Typographic Monogram & Name */}
        <a href="#top" className="flex items-baseline gap-2.5 group">
          <span className="text-sm sm:text-base font-semibold tracking-tight text-white group-hover:text-neutral-300 transition-colors">
            Diego Paz
          </span>
          <span className="hidden md:inline text-xs text-neutral-500 font-light">
            / Digital Transformation & Enterprise BI
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-wide text-neutral-400 font-medium">
          <a href="#solutions" className="hover:text-white transition-colors py-2">
            Solutions
          </a>
          <a href="#disciplines" className="hover:text-white transition-colors py-2">
            Disciplines
          </a>
          <a href="#credentials" className="hover:text-white transition-colors py-2">
            Credentials
          </a>
          <a
            href="#contact"
            className="text-white border border-neutral-700 hover:border-neutral-500 px-3.5 py-1.5 rounded transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="#contact"
            className="text-white border border-neutral-700 px-3 py-1.5 rounded text-xs"
          >
            Contact
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#1f2023] bg-[#0e0f11] px-6 py-5 space-y-4">
          <a
            href="#solutions"
            onClick={closeMenu}
            className="block text-sm text-neutral-300 hover:text-white py-2"
          >
            Solutions Brochure
          </a>
          <a
            href="#disciplines"
            onClick={closeMenu}
            className="block text-sm text-neutral-300 hover:text-white py-2"
          >
            Core Disciplines
          </a>
          <a
            href="#credentials"
            onClick={closeMenu}
            className="block text-sm text-neutral-300 hover:text-white py-2"
          >
            Education & Endorsements
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="block text-sm text-white font-medium py-2"
          >
            Direct Contact & Inquiries
          </a>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { OrchestrationExperience } from './components/OrchestrationExperience';
import { SolutionsSection } from './components/SolutionsSection';
import { DisciplinesSection } from './components/DisciplinesSection';
import { CredentialsSection } from './components/CredentialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#d1d5db] flex flex-col selection:bg-white selection:text-black">
      {/* Refined Minimalist Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Typographic Hero & Positioning */}
        <HeroSection />

        {/* Selected Works & Solutions Brochure (Power BI, DAX, Systems) */}
        <OrchestrationExperience />
        <SolutionsSection />

        {/* Core Disciplines & Strategic Value */}
        <DisciplinesSection />

        {/* Academic & Professional Credentials (No graduation years, executive only) */}
        <CredentialsSection />

        {/* Direct Inquiries & Channel Access */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}

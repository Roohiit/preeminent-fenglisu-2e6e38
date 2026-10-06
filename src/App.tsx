import React, { useState, useEffect } from 'react';
import { PARLOUR_SERVICES, CATEGORIES } from './data/parlourServices';
import { Language } from './types';
import { ParlourHeader } from './components/ParlourHeader';
import { ParlourHero } from './components/ParlourHero';
import { AboutUsSection } from './components/AboutUsSection';
import { CombosHighlight } from './components/CombosHighlight';
import { ServicesGrid } from './components/ServicesGrid';
import { SalonGallery } from './components/SalonGallery';
import { SingleLocationSection } from './components/SingleLocationSection';
import { ParlourFooter } from './components/ParlourFooter';
import { DirectWhatsAppFloating } from './components/DirectWhatsAppFloating';
import { TrustStrip } from './components/TrustStrip';

export default function App() {
  const [brandName] = useState<string>('Velvet Canvas');
  const [lang, setLang] = useState<Language>('bn');
  const [phone] = useState<string>('8240111465');
  const [whatsappNumber] = useState<string>('918240111465');
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Handle URL hash on load (e.g. #gallery, #about, #location)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'services', 'combos', 'about', 'gallery', 'location', 'contact'].includes(hash)) {
      setCurrentPage(hash === 'contact' ? 'location' : hash);
    }
  }, []);

  const handleNavigate = (page: string) => {
    const targetPage = page === 'contact' ? 'location' : page;
    setCurrentPage(targetPage);
    window.location.hash = targetPage;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const comboServices = PARLOUR_SERVICES.filter((s) => s.category === 'combos');

  const handleScrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1A1A] selection:bg-[#FF3D8D]/20 selection:text-[#B80D4D]">
      {/* 1. Header with Full Responsive Navigation Menu */}
      <ParlourHeader
        brandName={brandName}
        lang={lang}
        onLanguageChange={setLang}
        phone={phone}
        whatsappNumber={whatsappNumber}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <main className="flex-1 pb-16 md:pb-0">
        {/* VIEW 1: HOME PAGE (Hero + Combos + Full Services 2-by-2 on mobile, Socials only in Footer) */}
        {currentPage === 'home' && (
          <div className="animate-in fade-in duration-200">
            {/* 1. Velvet Canvas Hero */}
            <ParlourHero
              brandName={brandName}
              lang={lang}
              onExploreServices={handleScrollToServices}
              whatsappNumber={whatsappNumber}
            />

            {/* 2. Salon Quality Trust Strip */}
            <TrustStrip lang={lang} />

            {/* 3. Special All-in-One Combos Highlight */}
            <CombosHighlight
              combos={comboServices}
              lang={lang}
              whatsappNumber={whatsappNumber}
              brandName={brandName}
            />

            {/* 4. Categorized Services Grid (Side-by-side 2 items per row on mobile) */}
            <ServicesGrid
              services={PARLOUR_SERVICES}
              categories={CATEGORIES}
              lang={lang}
              whatsappNumber={whatsappNumber}
              brandName={brandName}
            />
          </div>
        )}

        {/* VIEW 2: ALL SERVICES PAGE (Dedicated from Menu) */}
        {currentPage === 'services' && (
          <div className="animate-in fade-in duration-200">
            <ServicesGrid
              services={PARLOUR_SERVICES}
              categories={CATEGORIES}
              lang={lang}
              whatsappNumber={whatsappNumber}
              brandName={brandName}
            />
          </div>
        )}

        {/* VIEW 3: COMBOS & PACKAGES PAGE (Dedicated from Menu) */}
        {currentPage === 'combos' && (
          <div className="animate-in fade-in duration-200">
            <CombosHighlight
              combos={comboServices}
              lang={lang}
              whatsappNumber={whatsappNumber}
              brandName={brandName}
            />
            <ServicesGrid
              services={PARLOUR_SERVICES}
              categories={CATEGORIES}
              lang={lang}
              whatsappNumber={whatsappNumber}
              brandName={brandName}
            />
          </div>
        )}

        {/* VIEW 4: DEDICATED ABOUT US PAGE (Only opened from Menu) */}
        {currentPage === 'about' && (
          <div className="animate-in fade-in duration-200">
            <AboutUsSection
              lang={lang}
              brandName={brandName}
              whatsappNumber={whatsappNumber}
            />
            <TrustStrip lang={lang} />
          </div>
        )}

        {/* VIEW 5: DEDICATED GALLERY PAGE (Only opened from Menu) */}
        {currentPage === 'gallery' && (
          <div className="animate-in fade-in duration-200">
            <SalonGallery
              lang={lang}
              brandName={brandName}
            />
          </div>
        )}

        {/* VIEW 6: DEDICATED CONTACT & LOCATION PAGE (Only opened from Menu) */}
        {(currentPage === 'location' || currentPage === 'contact') && (
          <div className="animate-in fade-in duration-200">
            <SingleLocationSection
              lang={lang}
              brandName={brandName}
            />
          </div>
        )}
      </main>

      {/* Footer with Page Navigation, Social Links (Facebook, Instagram, Google Review) & Project Downloads */}
      <ParlourFooter
        brandName={brandName}
        lang={lang}
        phone={phone}
        onNavigate={handleNavigate}
      />

      {/* Direct WhatsApp Floating Trigger & Mobile Bar */}
      <DirectWhatsAppFloating
        lang={lang}
        phone={phone}
        whatsappNumber={whatsappNumber}
        brandName={brandName}
      />
    </div>
  );
}

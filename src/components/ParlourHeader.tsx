import React, { useState, useEffect } from 'react';
import {
  Phone,
  MapPin,
  Globe,
  MessageCircle,
  Menu,
  X,
  Home,
  Sparkles,
  Scissors,
  Camera,
  Info,
  ChevronRight,
  Star,
  Instagram,
  ThumbsUp,
} from 'lucide-react';
import { Language } from '../types';
import { SOCIAL_LINKS } from '../data/parlourServices';

interface ParlourHeaderProps {
  brandName: string;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  phone: string;
  whatsappNumber: string;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const ParlourHeader: React.FC<ParlourHeaderProps> = ({
  brandName,
  lang,
  onLanguageChange,
  phone,
  whatsappNumber,
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: { bn: 'হোম', en: 'Home' }, icon: Home },
    { id: 'services', label: { bn: 'সকল সার্ভিস', en: 'All Services' }, icon: Scissors },
    { id: 'combos', label: { bn: 'কম্বো প্যাকেজ', en: 'Combos & Offers' }, icon: Sparkles },
    { id: 'about', label: { bn: 'আমাদের সম্পর্কে', en: 'About Us' }, icon: Info },
    { id: 'gallery', label: { bn: 'গ্যালারি', en: 'Gallery' }, icon: Camera },
    { id: 'location', label: { bn: 'যোগাযোগ ও ম্যাপ', en: 'Contact & Map' }, icon: MapPin },
  ];

  const handleNavClick = (pageId: string) => {
    setMobileMenuOpen(false);
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickWhatsApp = () => {
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
    const msg =
      lang === 'bn'
        ? `নমস্কার ${brandName}! আমি পার্লার সার্ভিসের জন্য অ্যাপয়েন্টমেন্ট বুক করতে চাই। অনুগ্রহ করে স্লট জানাবেন।`
        : `Hello ${brandName}! I would like to book an appointment for salon services. Please let me know available slots.`;
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // Close mobile drawer on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#FBD9E6] shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
        {/* Zone 1: Brand Logo & Title */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 sm:gap-2.5 min-w-0 group cursor-pointer text-left"
        >
          <img
            src="/images/asset_0_Velvet_Canvas_logo.png"
            alt={`${brandName} logo`}
            className="h-9 sm:h-12 w-auto object-contain shrink-0"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          <div className="flex flex-col min-w-0">
            <span className="font-serif-display text-base sm:text-2xl font-bold tracking-tight text-[#1A1A1A] group-hover:text-[#B80D4D] transition-colors truncate">
              {brandName}
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#B80D4D] font-semibold tracking-wider uppercase truncate">
              Your Beauty, Our Canvas
            </span>
          </div>
        </button>

        {/* Zone 2: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-xs font-semibold text-[#4A4550]">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'text-[#E0115F] bg-[#FFF0F6] font-bold shadow-xs'
                    : 'text-[#4A4550] hover:text-[#E0115F] hover:bg-[#FFF0F6]/70'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#E0115F]' : 'text-[#8E8694]'}`} />
                <span>{link.label[lang]}</span>
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Language, Socials, Call, WhatsApp, & Mobile Menu Toggle) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick Social Badges on Desktop */}
          <div className="hidden xl:flex items-center gap-1.5 pr-1 border-r border-[#FBD9E6]">
            <a
              href={SOCIAL_LINKS.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-amber-500 hover:bg-amber-50 transition-colors"
              title="Google 5.0 Review"
            >
              <Star className="w-4 h-4 fill-amber-400" />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-[#DD2A7B] hover:bg-pink-50 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-[#1877F2] hover:bg-blue-50 transition-colors"
              title="Facebook"
            >
              <ThumbsUp className="w-4 h-4" />
            </a>
          </div>

          {/* Language Switcher */}
          <button
            onClick={() => onLanguageChange(lang === 'bn' ? 'en' : 'bn')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#FBD9E6] text-xs font-semibold text-[#1A1A1A] bg-[#FFF0F6]/50 hover:bg-[#FFF0F6] transition-colors cursor-pointer"
            title="Change Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#E0115F]" />
            <span>{lang === 'bn' ? 'EN' : 'বাং'}</span>
          </button>

          {/* Call Button (visible on tablet+) */}
          <a
            href={`tel:${phone}`}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1A1A1A] bg-white border border-[#E0115F] rounded-lg hover:bg-[#FFF0F6] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#E0115F]" />
            <span className="whitespace-nowrap">{phone}</span>
          </a>

          {/* Direct WhatsApp Appointment - Hidden on mobile (bottom bar used instead), visible on tablet/desktop */}
          <button
            onClick={handleQuickWhatsApp}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#1DA851] to-[#25D366] hover:brightness-105 active:scale-98 transition-all rounded-lg shadow-sm whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>{lang === 'bn' ? 'WhatsApp বুকিং' : 'Book on WhatsApp'}</span>
          </button>

          {/* Mobile Hamburger Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-[#FBD9E6] text-[#1A1A1A] bg-white hover:bg-[#FFF0F6] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#E0115F]" /> : <Menu className="w-5 h-5 text-[#1A1A1A]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay & Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#FBD9E6] bg-white/98 backdrop-blur-md shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-3">
            {/* Quick Menu Header */}
            <div className="flex items-center justify-between pb-2 border-b border-[#FBD9E6]/60">
              <span className="text-[11px] font-bold text-[#6B6570] uppercase tracking-wider">
                {lang === 'bn' ? 'নেভিগেশন মেনু' : 'Navigation Menu'}
              </span>
              <div className="flex items-center gap-1 text-[11px] text-[#B80D4D] font-medium">
                <MapPin className="w-3 h-3 text-[#E0115F]" />
                <span>{lang === 'bn' ? 'জ্যাংড়া বাজার, কলকাতা' : 'Jyangra Bazar, Kolkata'}</span>
              </div>
            </div>

            {/* Nav Links */}
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#FFF0F6] text-[#E0115F] font-bold border border-[#FBD9E6]'
                        : 'text-[#1A1A1A] hover:bg-[#FFF0F6] hover:text-[#E0115F]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                        isActive ? 'bg-[#E0115F] text-white' : 'bg-[#FFF0F6] text-[#E0115F]'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{link.label[lang]}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#E0115F]' : 'text-[#C4B5C0]'}`} />
                  </button>
                );
              })}
            </div>

            {/* Social & Review Links inside Mobile Menu */}
            <div className="pt-2 border-t border-[#FBD9E6]/60">
              <span className="text-[10px] font-bold text-[#8E8694] uppercase tracking-wider block mb-2">
                {lang === 'bn' ? 'সোশ্যাল মিডিয়া ও রিভিউ' : 'Social & Reviews'}
              </span>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={SOCIAL_LINKS.googleReview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1 p-2 rounded-xl bg-amber-50/60 border border-amber-200 text-center"
                >
                  <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
                  <span className="text-[10px] font-bold text-amber-900">Google 5.0★</span>
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1 p-2 rounded-xl bg-pink-50/60 border border-pink-200 text-center"
                >
                  <Instagram className="w-4 h-4 text-[#DD2A7B]" />
                  <span className="text-[10px] font-bold text-[#DD2A7B]">Instagram</span>
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1 p-2 rounded-xl bg-blue-50/60 border border-blue-200 text-center"
                >
                  <ThumbsUp className="w-4 h-4 text-[#1877F2]" />
                  <span className="text-[10px] font-bold text-[#1877F2]">Facebook</span>
                </a>
              </div>
            </div>

            {/* Quick Contact Buttons inside Mobile Menu */}
            <div className="pt-2 border-t border-[#FBD9E6]/60 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleQuickWhatsApp();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#1DA851] to-[#25D366] shadow-sm hover:brightness-105 active:scale-95 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{lang === 'bn' ? 'WhatsApp-এ অ্যাপয়েন্টমেন্ট বুকিং' : 'Book on WhatsApp'}</span>
              </button>

              <a
                href={`tel:${phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-[#1A1A1A] bg-[#FFF0F6] border border-[#FBD9E6] hover:bg-[#FFE3EC] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E0115F]" />
                <span>{lang === 'bn' ? `কল করুন: ${phone}` : `Call Salon: ${phone}`}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

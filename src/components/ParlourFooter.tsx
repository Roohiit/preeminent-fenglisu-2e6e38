import React from 'react';
import { Phone, Clock, Star, Instagram, ThumbsUp } from 'lucide-react';
import { Language } from '../types';
import { SOCIAL_LINKS } from '../data/parlourServices';

interface ParlourFooterProps {
  brandName: string;
  lang: Language;
  phone: string;
  onNavigate?: (page: string) => void;
}

export const ParlourFooter: React.FC<ParlourFooterProps> = ({
  brandName,
  lang,
  phone,
  onNavigate,
}) => {
  const handleLinkClick = (e: React.MouseEvent, pageId: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-slate-300 py-6 sm:py-8 px-4 border-t border-neutral-800 text-center">
      <div className="max-w-2xl mx-auto space-y-4">
        {/* 1. Brand Title & Tagline (Matching User Image) */}
        <div>
          <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {brandName}
          </h3>
          <p className="text-xs sm:text-sm text-pink-300 font-medium mt-1">
            Your Beauty, Our Canvas · Hair / Nail / Skin / Makeup
          </p>
        </div>

        {/* 2. Timing & Phone Number */}
        <div className="flex flex-col items-center justify-center gap-1.5 text-xs text-neutral-300">
          <div className="flex items-center gap-1.5 text-pink-400 font-medium">
            <Clock className="w-3.5 h-3.5 text-[#E0115F]" />
            <span>10:00 AM – 09:00 PM (Open 7 Days)</span>
          </div>

          <a
            href={`tel:+91${phone}`}
            className="flex items-center gap-1.5 font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>+91 {phone}</span>
          </a>
        </div>

        {/* 3. Social & Review Quick Badges */}
        <div className="flex items-center justify-center gap-2 pt-1">
          <a
            href={SOCIAL_LINKS.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-700 hover:border-amber-400 text-amber-300 text-[11px] font-medium transition-colors"
            title="Google 5.0 Review"
          >
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>Google 5.0★</span>
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-700 hover:border-[#DD2A7B] text-pink-300 text-[11px] font-medium transition-colors"
            title="Instagram"
          >
            <Instagram className="w-3 h-3 text-[#DD2A7B]" />
            <span>Instagram</span>
          </a>
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-700 hover:border-[#1877F2] text-blue-300 text-[11px] font-medium transition-colors"
            title="Facebook"
          >
            <ThumbsUp className="w-3 h-3 text-[#1877F2]" />
            <span>Facebook</span>
          </a>
        </div>

        {/* 4. Divider Line */}
        <div className="border-t border-neutral-800/80 my-3" />

        {/* 5. Navigation Links (Matching Screenshot: 2 clean centered rows) */}
        <div className="flex flex-col gap-2 text-xs font-medium text-neutral-400">
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5">
            <button
              onClick={(e) => handleLinkClick(e, 'home')}
              className="hover:text-pink-400 transition-colors cursor-pointer"
            >
              {lang === 'bn' ? 'হোম' : 'Home'}
            </button>
            <button
              onClick={(e) => handleLinkClick(e, 'services')}
              className="hover:text-pink-400 transition-colors cursor-pointer"
            >
              {lang === 'bn' ? 'সকল সার্ভিস মেনু' : 'All Services'}
            </button>
            <button
              onClick={(e) => handleLinkClick(e, 'combos')}
              className="hover:text-pink-400 transition-colors cursor-pointer"
            >
              {lang === 'bn' ? 'কম্বো প্যাকেজ' : 'Combos'}
            </button>
            <button
              onClick={(e) => handleLinkClick(e, 'about')}
              className="hover:text-pink-400 transition-colors cursor-pointer"
            >
              {lang === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5">
            <button
              onClick={(e) => handleLinkClick(e, 'gallery')}
              className="hover:text-pink-400 transition-colors cursor-pointer"
            >
              {lang === 'bn' ? 'ফটো গ্যালারি' : 'Photo Gallery'}
            </button>
            <button
              onClick={(e) => handleLinkClick(e, 'location')}
              className="hover:text-pink-400 transition-colors cursor-pointer"
            >
              {lang === 'bn' ? 'ঠিকানা ও যোগাযোগ' : 'Contact & Location'}
            </button>
          </div>
        </div>

        {/* 6. Subtle Copyright */}
        <div className="pt-2 text-[10px] text-neutral-500">
          © {new Date().getFullYear()} {brandName}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

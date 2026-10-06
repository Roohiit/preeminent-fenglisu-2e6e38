import React from 'react';
import { Sparkles, MessageCircle, MapPin, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { Language } from '../types';

interface ParlourHeroProps {
  brandName: string;
  lang: Language;
  onExploreServices: () => void;
  whatsappNumber: string;
}

export const ParlourHero: React.FC<ParlourHeroProps> = ({
  brandName,
  lang,
  onExploreServices,
  whatsappNumber,
}) => {
  const handleDirectWhatsApp = () => {
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
    const msg =
      lang === 'bn'
        ? `নমস্কার ${brandName}!\nআমি পার্লার সার্ভিসের জন্য অ্যাপয়েন্টমেন্ট বুক করতে চাই। অনুগ্রহ করে উপলব্ধ সময় জানাবেন।`
        : `Hello ${brandName}!\nI would like to book an appointment for salon services. Please let me know available slots.`;
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#FFF0F6]/80 via-[#FFE1EC]/30 to-white py-10 sm:py-16 border-b border-[#FBD9E6] scroll-mt-20">
      {/* Ambient lighting */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-[#FF6BA6]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#F2C464]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE1EC] border border-[#FF6BA6]/40 text-[#B80D4D] text-xs font-semibold tracking-wide uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#E0115F]" />
              <span>Hair · Nail · Skin · Makeup</span>
            </div>

            <h1 className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1A1A1A] leading-[1.15]">
              {lang === 'bn' ? (
                <>
                  আপনার সৌন্দর্য, <br className="hidden sm:inline" />
                  <span className="text-[#E0115F]">আমাদের ক্যানভাস</span>
                </>
              ) : (
                <>
                  Your Beauty, <br className="hidden sm:inline" />
                  <span className="text-[#E0115F]">Our Canvas</span>
                </>
              )}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#6B6570] leading-relaxed max-w-xl mx-auto lg:mx-0">
              {lang === 'bn'
                ? `${brandName}-এ আপনাকে স্বাগতম। আধুনিক প্রফেশনাল হেয়ার কাট, হেয়ার স্পা, কেরাটিন, স্কিনকেয়ার, ওথ্রি+ ও ডার্মালজিকা ফেসিয়াল, রিকা ওয়াক্স এবং ব্রাইডাল মেকআপের সম্পূর্ণ এক্সক্লুসিভ পরিষেবা।`
                : `Welcome to ${brandName}. Kolkata's premier luxury beauty parlour in Jyangra Bazar delivering precision haircuts, Hair Spa, Keratin, Dermalogica facials, Italian Rica wax, and luxury bridal artistry.`}
            </p>

            {/* Single Location: Jyangra Bazar */}
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-1 text-xs text-[#B80D4D]">
              <span className="inline-flex items-center gap-1.5 bg-[#FFF0F6] px-3.5 py-1.5 rounded-full border border-[#FBD9E6] font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#E0115F]" />
                {lang === 'bn'
                  ? 'Sky View Apartment, জ্যাংড়া বাজার, কলকাতা ৭০০০৫৯'
                  : 'Sky View Apartment, Jyangra Bazar, Kolkata 700059'}
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                onClick={handleDirectWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-white bg-gradient-to-r from-[#1DA851] via-[#25D366] to-[#1DA851] rounded-xl shadow-md hover:brightness-105 active:scale-98 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span>
                  {lang === 'bn' ? 'WhatsApp-এ অ্যাপয়েন্টমেন্ট নিন' : 'Book on WhatsApp'}
                </span>
              </button>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#1A1A1A] bg-white border border-[#E0115F] rounded-xl hover:bg-[#FFF0F6] transition-colors cursor-pointer"
              >
                <span>{lang === 'bn' ? 'সকল সার্ভিস দেখুন' : 'Explore All Services'}</span>
                <span className="text-[#E0115F]">↓</span>
              </button>
            </div>

            {/* Trust points */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs text-[#6B6570]">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{lang === 'bn' ? '১০০% জীবাণুমুক্ত টুলস' : '100% Sanitized Tools'}</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E0115F]" />
                <span>L'Oréal, O3+, Dermalogica, Rica</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
                <span>{lang === 'bn' ? 'অভিজ্ঞ নারী স্পেশালিস্ট' : 'Experienced Stylists'}</span>
              </div>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm sm:max-w-md w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-pink-100">
                <img
                  src="/images/asset_1_Velvet_Canvas_client.png"
                  alt={`${brandName} salon service`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-pink-200">
                    Premium Beauty Experience
                  </span>
                  <h3 className="font-serif-display text-xl font-bold mt-0.5">
                    {brandName}
                  </h3>
                  <p className="text-xs text-pink-100 font-light mt-0.5">
                    {lang === 'bn'
                      ? 'প্রতিটি সার্ভিসের নিচে "Book Now" বাটনে ক্লিক করে সরাসরি WhatsApp-এ স্লট বুক করুন।'
                      : 'Click "Book Now" on any service to instantly schedule via WhatsApp.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

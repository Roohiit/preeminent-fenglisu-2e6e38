import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Copy, CheckCheck, Clock, Sparkles } from 'lucide-react';
import { JYYANGRA_LOCATION } from '../data/parlourServices';
import { Language } from '../types';

interface SingleLocationSectionProps {
  lang: Language;
  brandName: string;
}

export const SingleLocationSection: React.FC<SingleLocationSectionProps> = ({
  lang,
  brandName,
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const location = JYYANGRA_LOCATION;

  const handleCopy = () => {
    navigator.clipboard.writeText(location.address.en);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLocationWhatsApp = () => {
    const msg =
      lang === 'bn'
        ? `নমস্কার ${brandName}!\nআমি আপনার জ্যাংড়া বাজার পার্লারে (Sky View Apartment) অ্যাপয়েন্টমেন্ট বুক করতে চাই। অনুগ্রহ করে স্লট জানাবেন।`
        : `Hello ${brandName}!\nI would like to book an appointment at your Jyangra Bazar parlour (Sky View Apartment). Please let me know available slots.`;
    window.open(`https://wa.me/91${location.phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="location" className="py-12 sm:py-16 bg-white border-b border-[#FBD9E6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE1EC] border border-[#FF6BA6]/40 text-[#B80D4D] text-xs font-semibold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#E0115F]" />
            <span>{lang === 'bn' ? 'আমাদের সেলুনের ঠিকানা' : 'Salon Location & Directions'}</span>
          </div>

          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
            {lang === 'bn' ? (
              <>
                আসুন {brandName}-এ — <span className="text-[#E0115F]">জ্যাংড়া বাজার</span>
              </>
            ) : (
              <>
                Visit {brandName} — <span className="text-[#E0115F]">Jyangra Bazar</span>
              </>
            )}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-[#6B6570]">
            {lang === 'bn'
              ? 'স্কাই ভিউ অ্যাপার্টমেন্ট, জ্যাংড়া বাজার, কলকাতা ৭০০০৫৯ — সপ্তাহের ৭ দিনই খোলা।'
              : 'Sky View Apartment, Jyangra Bazar, Kolkata 700059 — Open all 7 days.'}
          </p>
        </div>

        {/* Location & Map Card */}
        <div className="bg-[#FFFBFD] rounded-3xl p-6 sm:p-10 border border-[#FBD9E6] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Address details & actions */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#E0115F] uppercase tracking-wider">
                  Exclusive Parlour Studio
                </span>
                <h3 className="font-serif-display text-2xl font-bold text-[#1A1A1A] mt-1">
                  {location.name[lang]}
                </h3>
              </div>

              {/* Address card */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-2xl bg-[#FFF0F6] border border-[#FBD9E6] text-[#E0115F] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">
                      {lang === 'bn' ? 'ঠিকানা:' : 'Address:'}
                    </span>
                    <p className="text-slate-700 font-medium mt-0.5 leading-relaxed">
                      {location.address[lang]}
                    </p>
                    <div className="mt-1 text-xs text-[#B80D4D] font-medium">
                      📍 {location.landmark[lang]}
                    </div>
                  </div>
                </div>

                {/* Operating hours */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-2xl bg-[#FFF0F6] border border-[#FBD9E6] text-[#E0115F] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">
                      {lang === 'bn' ? 'খোলার সময়সূচী:' : 'Operating Hours:'}
                    </span>
                    <p className="text-slate-700 font-mono font-medium mt-0.5">
                      10:00 AM – 09:00 PM (Monday – Sunday)
                    </p>
                    <span className="inline-block text-[11px] text-emerald-700 font-semibold mt-0.5">
                      ● {lang === 'bn' ? 'সপ্তাহের ৭ দিনই খোলা' : 'Open All 7 Days'}
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-2xl bg-[#FFF0F6] border border-[#FBD9E6] text-[#E0115F] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">
                      {lang === 'bn' ? 'হেল্পলাইন / ফোন:' : 'Helpline / Phone:'}
                    </span>
                    <a
                      href={`tel:+91${location.phone}`}
                      className="font-mono font-bold text-base text-[#E0115F] hover:underline"
                    >
                      +91 {location.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckCheck className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">{lang === 'bn' ? 'কপি হয়েছে' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>{lang === 'bn' ? 'ঠিকানা কপি করুন' : 'Copy Address'}</span>
                    </>
                  )}
                </button>

                <a
                  href={location.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#FBD9E6] bg-[#FFF0F6] text-[#B80D4D] text-xs font-bold hover:bg-pink-100 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#E0115F]" />
                  <span>{lang === 'bn' ? 'গুগল ম্যাপে দিকনির্দেশ' : 'Open in Google Maps'}</span>
                </a>

                <button
                  type="button"
                  onClick={handleLocationWhatsApp}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#1DA851] to-[#25D366] hover:brightness-105 active:scale-98 transition-all cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{lang === 'bn' ? 'WhatsApp অ্যাপয়েন্টমেন্ট' : 'Book on WhatsApp'}</span>
                </button>
              </div>
            </div>

            {/* Right: Embedded Google Map */}
            <div className="lg:col-span-6">
              <div className="bg-white p-3 rounded-2xl border border-[#FBD9E6] shadow-md">
                <div className="aspect-[4/3] rounded-xl bg-slate-100 overflow-hidden relative border border-slate-200">
                  <iframe
                    title="Velvet Canvas Google Location Map"
                    src={location.embedMapUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>

                <div className="mt-3 p-2.5 bg-[#FFF0F6] rounded-xl flex items-center justify-between text-xs text-[#B80D4D]">
                  <span className="flex items-center gap-1 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    {lang === 'bn' ? 'এসি লাউঞ্জ ও সুবিধাজনক পার্কিং' : 'AC Lounge & Free Parking'}
                  </span>
                  <a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#E0115F] underline font-bold"
                  >
                    Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

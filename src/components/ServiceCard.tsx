import React, { useState, useRef } from 'react';
import { MessageCircle, Clock, Sparkles, Check, Camera, RotateCcw, ImagePlus } from 'lucide-react';
import { ParlourService, Language } from '../types';
import { getServiceImage } from '../data/parlourServices';
import { getServiceTheme, ServiceIcon } from './ServiceIcon';

interface ServiceCardProps {
  service: ParlourService;
  lang: Language;
  whatsappNumber: string;
  brandName: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  lang,
  whatsappNumber,
  brandName,
}) => {
  const [imageError, setImageError] = useState(false);
  const [customImage, setCustomImage] = useState<string | null>(() => {
    try {
      return localStorage.getItem(`custom_service_photo_${service.id}`);
    } catch {
      return null;
    }
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const defaultPhoto = getServiceImage(service);
  const displayPhoto = customImage || defaultPhoto;
  const theme = getServiceTheme(service);
  const IconComponent = theme.icon;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64 = event.target?.result as string;
        if (base64) {
          setCustomImage(base64);
          setImageError(false);
          try {
            localStorage.setItem(`custom_service_photo_${service.id}`, base64);
          } catch (err) {
            console.warn('Storage limit reached:', err);
          }

          // Persist directly to server disk permanently
          try {
            await fetch('/api/save-permanent-image', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ serviceId: service.id, imageBase64: base64 }),
            });
          } catch (netErr) {
            console.warn('Permanent disk save error:', netErr);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomImage(null);
    setImageError(false);
    try {
      localStorage.removeItem(`custom_service_photo_${service.id}`);
    } catch {}
  };

  const handleDirectWhatsAppBook = () => {
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
    const serviceName = service.name[lang];
    const priceText = service.price;

    const message =
      lang === 'bn'
        ? `নমস্কার ${brandName}!\n\n` +
          `আমি আপনার পার্লারের এই সার্ভিসটি বুক করতে আগ্রহী:\n` +
          `• সার্ভিস: ${serviceName}\n` +
          `• মূল্য: ${priceText}\n` +
          (service.duration ? `• আনুমানিক সময়: ${service.duration}\n` : '') +
          `• লোকেশন: জ্যাংড়া বাজার ব্রাঞ্চ (Sky View Apartment)\n\n` +
          `অনুগ্রহ করে উপলব্ধ তারিখ ও সময় জানাবেন। ধন্যবাদ!`
        : `Hello ${brandName}!\n\n` +
          `I would like to book this salon service:\n` +
          `• Service: ${serviceName}\n` +
          `• Price: ${priceText}\n` +
          (service.duration ? `• Estimated Duration: ${service.duration}\n` : '') +
          `• Location: Jyangra Bazar Branch (Sky View Apartment)\n\n` +
          `Please let me know available dates & time slots. Thank you!`;

    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl border border-[#FBD9E6] p-2.5 sm:p-5 shadow-xs hover:shadow-xl hover:border-[#FF3D8D]/40 transition-all duration-300">
      <div>
        {/* Hidden File Input for uploading custom photo */}
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
        />

        {/* Top Area: Responsive Stack (Vertical on Mobile 2-cols, Horizontal on Desktop) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-2.5 sm:gap-4">
          {/* Visual Photo Thumbnail with Category Icon Badge */}
          {!imageError ? (
            <div className="relative w-full h-28 sm:w-28 sm:h-28 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 bg-pink-50 border border-[#FBD9E6] shadow-xs group-hover:scale-102 transition-transform duration-300">
              <img
                src={displayPhoto}
                alt={service.name[lang]}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={() => setImageError(true)}
              />

              {/* Floating Action Icon Badge */}
              <div
                className={`absolute top-1.5 left-1.5 p-1 rounded-lg ${theme.badgeBg} shadow-xs backdrop-blur-xs flex items-center justify-center`}
                title={service.name[lang]}
              >
                <IconComponent className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              </div>

              {/* Quick Camera Upload Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className="absolute top-1.5 right-1.5 p-1 rounded-md bg-black/60 hover:bg-[#E0115F] text-white backdrop-blur-xs transition-colors shadow-xs z-10 cursor-pointer"
                title={lang === 'bn' ? 'ছবি পরিবর্তন করুন' : 'Change photo'}
              >
                <Camera className="w-3 h-3" />
              </button>

              {/* Reset to default button if custom image exists */}
              {customImage && (
                <button
                  type="button"
                  onClick={handleResetPhoto}
                  className="absolute bottom-1.5 left-1.5 p-1 rounded-md bg-black/70 hover:bg-red-600 text-white backdrop-blur-xs transition-colors z-10 cursor-pointer"
                  title={lang === 'bn' ? 'আসল ছবিতে ফিরে যান' : 'Reset to default'}
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              )}

              {/* Duration Tag */}
              {service.duration && (
                <div className="absolute bottom-1 right-1 bg-black/70 backdrop-blur-xs text-white text-[8px] sm:text-[9px] font-mono px-1.5 py-0.5 rounded-md font-semibold">
                  {service.duration}
                </div>
              )}
            </div>
          ) : (
            <div className="w-full h-28 sm:w-28 sm:h-28 flex items-center justify-center bg-[#FFF0F6] rounded-xl shrink-0">
              <ServiceIcon service={service} size="md" />
            </div>
          )}

          {/* Details & Price */}
          <div className="flex-1 min-w-0">
            {service.tag && (
              <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-[#E0115F] bg-[#FFF0F6] border border-[#FBD9E6] px-1.5 py-0.2 rounded-full uppercase tracking-wider mb-1">
                <Sparkles className="w-2 h-2 text-[#E0115F]" />
                <span className="truncate">{service.tag}</span>
              </span>
            )}

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <h3 className="font-serif-display text-xs sm:text-base font-bold text-[#1A1A1A] leading-snug group-hover:text-[#B80D4D] transition-colors line-clamp-2">
                {service.name[lang]}
              </h3>

              {/* Price Tag */}
              <div className="shrink-0 mt-0.5 sm:mt-0">
                <span className="font-mono text-sm sm:text-lg font-bold text-[#E0115F]">
                  {service.price}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-1 text-[11px] sm:text-xs text-[#6B6570] leading-relaxed line-clamp-2">
              {service.description[lang]}
            </p>

            {/* Prominent Custom Upload Prompt for Scalp Peeling or Active Status */}
            {service.id === 'cleaning-scalp-peeling' && !customImage && (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="mt-2 inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] sm:text-xs font-bold text-[#E0115F] bg-[#FFF0F6] border border-[#FBD9E6] hover:bg-[#FFE3EC] active:scale-95 transition-all shadow-xs cursor-pointer"
              >
                <ImagePlus className="w-3 h-3 text-[#E0115F]" />
                <span>{lang === 'bn' ? '📸 ছবি দিন' : '📸 Custom Photo'}</span>
              </button>
            )}

            {customImage && (
              <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200">
                <Check className="w-3 h-3 text-emerald-600" />
                <span>{lang === 'bn' ? '✓ সেভড!' : '✓ Saved!'}</span>
              </div>
            )}
          </div>
        </div>

        {/* Features if any (hidden on mobile 2-col to keep card compact, visible on desktop) */}
        {service.features && (
          <ul className="hidden sm:block mt-3 space-y-1 text-xs text-slate-700 bg-[#FFF0F6]/40 p-2.5 rounded-xl border border-[#FBD9E6]/60">
            {service.features[lang].map((f, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-tight">{f}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Bottom Area: Direct WhatsApp Book Now button */}
      <div className="mt-3 pt-2.5 border-t border-[#FBD9E6]/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
        <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-[#6B6570] font-medium">
          <Clock className="w-3.5 h-3.5 text-[#E0115F]" />
          <span>{service.duration || 'Session'}</span>
        </div>

        {/* Direct WhatsApp Book Now Button */}
        <button
          type="button"
          onClick={handleDirectWhatsAppBook}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#1DA851] via-[#25D366] to-[#1DA851] hover:brightness-105 active:scale-98 shadow-sm transition-all cursor-pointer whitespace-nowrap"
          title="Direct WhatsApp booking for this service"
        >
          <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white shrink-0" />
          <span>{lang === 'bn' ? 'Book Now' : 'Book Now'}</span>
        </button>
      </div>
    </div>
  );
};

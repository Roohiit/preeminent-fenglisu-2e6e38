import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Language } from '../types';

interface DirectWhatsAppFloatingProps {
  lang: Language;
  phone: string;
  whatsappNumber: string;
  brandName: string;
}

export const DirectWhatsAppFloating: React.FC<DirectWhatsAppFloatingProps> = ({
  lang,
  phone,
  whatsappNumber,
  brandName,
}) => {
  const handleOpenWhatsApp = () => {
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
    const msg =
      lang === 'bn'
        ? `নমস্কার ${brandName}! আমি পার্লার সার্ভিসের জন্য অ্যাপয়েন্টমেন্ট বুক করতে চাই। অনুগ্রহ করে স্লট জানাবেন।`
        : `Hello ${brandName}! I would like to book an appointment for salon services. Please let me know available slots.`;
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      {/* Mobile Sticky Bottom Bar (Height ~52px, well under 15% viewport height) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#FBD9E6] px-3 py-2 shadow-2xl flex items-center gap-2">
        <a
          href={`tel:+91${phone}`}
          className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-[#E0115F] text-[#B80D4D] text-xs font-bold bg-white shrink-0 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#E0115F]" />
          <span>{lang === 'bn' ? 'কল' : 'Call'}</span>
        </a>

        <button
          type="button"
          onClick={handleOpenWhatsApp}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#1DA851] via-[#25D366] to-[#1DA851] shadow-md active:scale-98 transition-all cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0" />
          <span className="truncate">
            {lang === 'bn' ? 'WhatsApp-এ বুক করুন' : 'Book on WhatsApp'}
          </span>
        </button>
      </div>

      {/* Desktop Floating WhatsApp Button */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <button
          onClick={handleOpenWhatsApp}
          className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-[#1DA851] via-[#25D366] to-[#1DA851] text-white font-bold text-sm rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          title="Direct WhatsApp Booking"
        >
          <MessageCircle className="w-5 h-5 fill-white shrink-0" />
          <span className="pr-1">{lang === 'bn' ? 'WhatsApp বুকিং' : 'Instant WhatsApp'}</span>
        </button>
      </div>
    </>
  );
};

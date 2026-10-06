import React from 'react';
import { Gift, MessageCircle, Sparkles, Check } from 'lucide-react';
import { ParlourService, Language } from '../types';
import { ServiceIcon } from './ServiceIcon';

interface CombosHighlightProps {
  combos: ParlourService[];
  lang: Language;
  whatsappNumber: string;
  brandName: string;
}

export const CombosHighlight: React.FC<CombosHighlightProps> = ({
  combos,
  lang,
  whatsappNumber,
  brandName,
}) => {
  const handleBookCombo = (combo: ParlourService) => {
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
    const msg =
      lang === 'bn'
        ? `নমস্কার ${brandName}!\n\n` +
          `আমি আপনার এই স্পেশাল কম্বো প্যাকেজটি বুক করতে চাই:\n` +
          `• প্যাকেজ: ${combo.name.bn}\n` +
          `• প্যাকেজ মূল্য: ${combo.price}\n` +
          `• বিবরণ: ${combo.description.bn}\n` +
          `\nঅনুগ্রহ করে আমার বুকিং কনফার্ম করতে স্লট জানাবেন। ধন্যবাদ!`
        : `Hello ${brandName}!\n\n` +
          `I would like to book this Special Combo Package:\n` +
          `• Package: ${combo.name.en}\n` +
          `• Price: ${combo.price}\n` +
          `• Inclusions: ${combo.description.en}\n` +
          `\nPlease let me know the available time slots. Thank you!`;

    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  if (!combos || combos.length === 0) return null;

  return (
    <section id="combos" className="py-12 bg-gradient-to-br from-[#FFE1EC]/60 via-[#FFF0F6] to-white border-b border-[#FBD9E6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE1EC] border border-[#FF6BA6]/40 text-[#B80D4D] text-xs font-semibold uppercase tracking-wider mb-2">
            <Gift className="w-3.5 h-3.5 text-[#E0115F]" />
            <span>{lang === 'bn' ? 'অল-ইন-ওয়ান প্যাকেজ' : 'All-in-One Value Combos'}</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
            {lang === 'bn' ? 'স্পেশাল পার্লার কম্বো প্যাকেজেস' : 'Special Parlour Combo Packages'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#6B6570]">
            {lang === 'bn'
              ? 'একাধিক সার্ভিস একসাথে নিয়ে উপভোগ করুন সেরা পার্লার গ্রুমিং ও আরামদায়ক অভিজ্ঞতা।'
              : 'Save time and money with our bundled head-to-toe parlour beauty regimens.'}
          </p>
        </div>

        {/* 2-Column Side-by-Side Combos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {combos.map((combo) => (
            <div
              key={combo.id}
              className="relative bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#E0115F]/30 shadow-lg flex flex-col justify-between hover:border-[#E0115F] transition-all"
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  {/* Luxury Combo Photo with Floating Icon Badge */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border border-[#FBD9E6] shadow-sm bg-pink-50">
                    <img
                      src={combo.image || '/images/services/luxury_combo_indian.jpg'}
                      alt={combo.name[lang]}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-1.5 left-1.5 p-1 rounded-lg bg-amber-600 text-white shadow-xs backdrop-blur-xs flex items-center justify-center">
                      <Gift className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="inline-block bg-gradient-to-r from-[#B80D4D] to-[#E0115F] text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider mb-1.5">
                          {combo.tag || 'Value Pack'}
                        </span>
                        <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#1A1A1A]">
                          {combo.name[lang]}
                        </h3>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-mono text-xl sm:text-2xl font-bold text-[#E0115F]">
                          {combo.price}
                        </span>
                        <div className="text-[10px] text-emerald-700 font-semibold">
                          {lang === 'bn' ? 'কম্বো রেট' : 'Combo Rate'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium bg-[#FFF0F6] p-3.5 rounded-2xl border border-[#FBD9E6]">
                  {combo.description[lang]}
                </p>

                {combo.features && (
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
                    {combo.features[lang].map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#FBD9E6] flex items-center justify-between">
                <span className="text-xs text-[#6B6570]">
                  ⏱ {combo.duration || 'Approx. 2 hrs'}
                </span>

                <button
                  type="button"
                  onClick={() => handleBookCombo(combo)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#1DA851] via-[#25D366] to-[#1DA851] shadow-md hover:brightness-105 active:scale-98 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{lang === 'bn' ? 'Book Now (WhatsApp)' : 'Book Now (WhatsApp)'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

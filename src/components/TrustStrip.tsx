import React from 'react';
import { ShieldCheck, Sparkles, Award, HeartHandshake } from 'lucide-react';
import { Language } from '../types';

interface TrustStripProps {
  lang: Language;
}

export const TrustStrip: React.FC<TrustStripProps> = ({ lang }) => {
  const items = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#E0115F]" />,
      title: lang === 'bn' ? '১০০% হাইজেনিক টুলস' : '100% Hygienic Tools',
      subtitle: lang === 'bn' ? 'প্রতিটি ক্লায়েন্টের জন্য নতুন জীবাণুমুক্ত কিট' : 'Autoclaved & single-use sanitized kits',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#E0115F]" />,
      title: lang === 'bn' ? 'প্রিমিয়াম প্রোডাক্টস' : '100% Genuine Products',
      subtitle: lang === 'bn' ? 'L\'Oréal, O3+, Rica ও Olaplex অথেন্টিক' : 'L\'Oréal, O3+, Rica & Olaplex certified',
    },
    {
      icon: <Award className="w-5 h-5 text-[#E0115F]" />,
      title: lang === 'bn' ? 'ট্রেইনড এক্সপার্টস' : 'Certified Senior Artists',
      subtitle: lang === 'bn' ? '১০+ বছরের অভিজ্ঞ বিউটিশিয়ান ও স্টাইলিস্ট' : 'Trained stylists with 10+ yrs artistry',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#E0115F]" />,
      title: lang === 'bn' ? '১২,০০০+ সন্তুষ্ট গ্রাহক' : '12,000+ Happy Clients',
      subtitle: lang === 'bn' ? 'নিউটাউন ও জ্যাংড়ার শীর্ষ পছন্দের সেলুন' : 'Newtown & Kolkata’s top-rated salon',
    },
  ];

  return (
    <div className="bg-[#FFF0F6] border-b border-[#FBD9E6] py-5 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/60 transition-colors"
          >
            <div className="p-2 rounded-lg bg-white shadow-xs border border-[#FBD9E6] shrink-0">
              {item.icon}
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-[#1A1A1A] leading-tight">
                {item.title}
              </h4>
              <p className="text-[11px] text-[#6B6570] mt-0.5 leading-snug hidden sm:block">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

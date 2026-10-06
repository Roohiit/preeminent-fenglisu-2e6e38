import React from 'react';
import { Sparkles, ShieldCheck, Heart, Award, CheckCircle2, Clock, Users, Scissors } from 'lucide-react';
import { Language } from '../types';

interface AboutUsSectionProps {
  lang: Language;
  brandName: string;
  whatsappNumber: string;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  lang,
  brandName,
  whatsappNumber,
}) => {
  const highlights = [
    {
      icon: Award,
      title: lang === 'bn' ? 'প্রশিক্ষিত বিউটি স্পেশালিস্ট' : 'Certified Specialists',
      desc:
        lang === 'bn'
          ? 'আমাদের প্রতিটি থেরাপিস্ট প্রফেশনাল ট্রেনিং ও ত্বকের যত্নে বিশেষ পারদর্শী।'
          : 'Highly trained hair stylists and certified skin aesthetic experts.',
    },
    {
      icon: ShieldCheck,
      title: lang === 'bn' ? '১০০% জীবাণুমুক্ত ও হাইজিন' : '100% Sanitized & Sterile',
      desc:
        lang === 'bn'
          ? 'প্রতিটি গ্রাহকের জন্য ডিসপোজেবল কিট এবং অটো-ক্লেভ জীবাণুমুক্ত যন্ত্রপাতি ব্যবহার করা হয়।'
          : 'Disposable kits and hospital-grade sterilization for complete safety.',
    },
    {
      icon: Heart,
      title: lang === 'bn' ? 'প্রিমিয়াম ব্র্যান্ড প্রোডাক্ট' : 'Authentic Premium Brands',
      desc:
        lang === 'bn'
          ? "L'Oréal, O3+, Cheryl's ও Raaga-এর আসল ত্বক ও চুলের প্রোডাক্ট।"
          : "Only genuine, top-tier products like L'Oréal, O3+, Cheryl's & Raaga.",
    },
    {
      icon: Scissors,
      title: lang === 'bn' ? 'ব্যক্তিগত পরামর্শ ও যত্ন' : 'Personalized Consultation',
      desc:
        lang === 'bn'
          ? 'আপনার স্ক্যাল্প ও ত্বকের ধরন পরীক্ষা করে উপযুক্ত ট্রিটমেন্ট নির্ধারণ করা হয়।'
          : 'Custom scalp and skin analysis before every single treatment.',
    },
  ];

  const handleBookVisit = () => {
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
    const msg =
      lang === 'bn'
        ? `নমস্কার ${brandName}! আমি আপনাদের পার্লারে আসার জন্য অ্যাপয়েন্টমেন্ট বুক করতে চাই।`
        : `Hello ${brandName}! I would like to book an appointment to visit your salon.`;
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="about" className="py-14 sm:py-20 bg-gradient-to-b from-white via-[#FFF0F6]/40 to-white border-b border-[#FBD9E6] relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0F6] border border-[#FBD9E6] text-[#E0115F] text-xs font-bold tracking-wide uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'আমাদের গল্প ও দর্শন' : 'Our Story & Philosophy'}</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight">
            {lang === 'bn' ? (
              <>
                <span className="text-[#E0115F]">{brandName}</span> — যেখানে আপনার সৌন্দর্যই আমাদের ক্যানভাস
              </>
            ) : (
              <>
                About <span className="text-[#E0115F]">{brandName}</span> — Your Beauty, Our Canvas
              </>
            )}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B6570] leading-relaxed">
            {lang === 'bn'
              ? 'কলকাতার জ্যাংড়া বাজারে অবস্থিত ভেলভেট ক্যানভাস শুধুমাত্র একটি পার্লার নয়; এটি প্রতিটি নারীর আত্মবিশ্বাস, প্রশান্তি এবং প্রাকৃতিক রূপচর্চার এক অনন্য ঠিকানা।'
              : 'Located at Jyangra Bazar, Kolkata, Velvet Canvas is more than just a salon — it is a sanctuary of comfort, luxury care, and beauty tailored exclusively for you.'}
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          {/* Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-neutral-100">
              <img
                src="/images/services/real_female_scalp_detox.jpg"
                alt="Velvet Canvas Salon Atmosphere"
                className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-[#E0115F] px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                  {lang === 'bn' ? 'প্রিমিয়াম সেলুন অভিজ্ঞতা' : 'Premium Salon Experience'}
                </span>
                <p className="font-serif-display text-lg font-bold">
                  {lang === 'bn' ? 'রিফ্রেশিং স্ক্যাল্প ও স্কিন ট্রিটমেন্ট' : 'Refreshing Scalp & Skin Care'}
                </p>
                <p className="text-xs text-white/80">Jyangra Bazar, Kolkata</p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white rounded-2xl p-3.5 shadow-lg border border-[#FBD9E6] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E0115F] to-[#FF6BA6] flex items-center justify-center text-white shadow-xs">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1A1A1A]">১০০০+ হ্যাপি কাস্টমার</p>
                <p className="text-[11px] text-[#6B6570]">৫-স্টার রেটিং সার্ভিস</p>
              </div>
            </div>
          </div>

          {/* Text Description & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-sm text-[#4A4550] leading-relaxed">
              <p className="text-sm sm:text-base leading-relaxed">
                {lang === 'bn'
                  ? 'আমরা বিশ্বাস করি প্রতিটি নারী অতুলনীয়। ভেলভেট ক্যানভাসে আমরা নিয়ে এসেছি আধুনিক স্ক্যাল্প ডিটক্স, হাইড্রেটিং ফেশিয়াল, প্রিমিয়াম হেয়ার স্পা, ব্রাইডাল মেকওভার ও নেল আর্টের সর্বোচ্চ মান।'
                  : 'At Velvet Canvas, we believe beauty is a form of self-care and artistry. We offer state-of-the-art scalp detoxifying, hydrating facials, bridal styling, and relaxing therapies tailored specifically to your hair and skin texture.'}
              </p>
              <p className="text-sm sm:text-base leading-relaxed mt-3">
                {lang === 'bn'
                  ? 'নিরাপত্তা ও পরিচ্ছন্নতা আমাদের প্রধান অঙ্গীকার। শান্ত, শীতাতপ নিয়ন্ত্রিত এবং আরামদায়ক পরিবেশে আপনি পাবেন নিজস্ব সময় কাটানোর সেরা অনুভূতি।'
                  : 'Hygiene and your well-being are non-negotiable. Step into our fully air-conditioned, serene salon where every detail is curated for maximum comfort and rejuvenation.'}
              </p>
            </div>

            {/* 4 Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-[#FBD9E6]/80 shadow-xs hover:border-[#E0115F] hover:shadow-md transition-all flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#FFF0F6] text-[#E0115F] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#1A1A1A]">{item.title}</h4>
                      <p className="text-[11px] text-[#6B6570] leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Action */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleBookVisit}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E0115F] to-[#FF3D8D] text-white text-xs sm:text-sm font-bold shadow-md hover:brightness-105 active:scale-95 transition-all cursor-pointer"
              >
                {lang === 'bn' ? 'অ্যাপয়েন্টমেন্ট বুক করুন' : 'Book an Appointment'}
              </button>
              <a
                href="#location"
                className="px-4 py-2.5 rounded-xl bg-[#FFF0F6] border border-[#FBD9E6] text-[#B80D4D] text-xs sm:text-sm font-semibold hover:bg-[#FFE3EC] transition-colors"
              >
                {lang === 'bn' ? 'পার্লারের ঠিকানা ও ম্যাপ' : 'View Salon Location'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

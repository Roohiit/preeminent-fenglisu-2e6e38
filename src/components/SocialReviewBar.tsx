import React from 'react';
import { Star, ExternalLink, ThumbsUp, Instagram, Heart } from 'lucide-react';
import { Language } from '../types';
import { SOCIAL_LINKS } from '../data/parlourServices';

interface SocialReviewBarProps {
  lang: Language;
  brandName: string;
}

export const SocialReviewBar: React.FC<SocialReviewBarProps> = ({ lang, brandName }) => {
  return (
    <section className="py-10 bg-gradient-to-b from-white via-[#FFF8FA] to-white border-b border-[#FBD9E6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE1EC] text-[#B80D4D] text-xs font-semibold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 text-[#E0115F] fill-[#E0115F]" />
            <span>{lang === 'bn' ? 'সোশ্যাল মিডিয়া ও গ্রাহক মতামত' : 'Social Media & Client Love'}</span>
          </div>
          <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#1A1A1A]">
            {lang === 'bn'
              ? `${brandName}-এর সাথে যুক্ত থাকুন ও রিভিউ দিন`
              : `Connect with ${brandName} & Leave a Review`}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* 1. Google 5-Star Review Card */}
          <a
            href={SOCIAL_LINKS.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-white border border-[#FBD9E6] shadow-xs hover:shadow-lg hover:border-[#4285F4] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                {/* Google Logo / Badge */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-xs">
                    <span className="font-bold text-base text-[#4285F4]">G</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1A1A1A]">Google Review</span>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  5.0 ★
                </span>
              </div>
              <p className="text-xs text-[#6B6570] leading-relaxed">
                {lang === 'bn'
                  ? 'আমাদের সার্ভিস আপনার ভালো লেগেছে? গুগল ম্যাপে আপনার অভিজ্ঞতা ও ৫-স্টার রিভিউ দিন!'
                  : 'Loved our salon experience? Share your thoughts and 5-star review on Google!'}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#4285F4] group-hover:underline">
              <span>{lang === 'bn' ? 'গুগল রিভিউ লিখুন' : 'Write a Google Review'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* 2. Instagram Page Card */}
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-white border border-[#FBD9E6] shadow-xs hover:shadow-lg hover:border-[#E1306C] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shadow-xs">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1A1A1A]">Instagram</span>
                    <p className="text-[10px] text-[#6B6570]">@velvetcanvaskolkata</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#DD2A7B] bg-pink-50 px-2 py-0.5 rounded-full">
                  Follow
                </span>
              </div>
              <p className="text-xs text-[#6B6570] leading-relaxed">
                {lang === 'bn'
                  ? 'আমাদের লেটেস্ট হেয়ার কাটিং, ব্রাইডাল মেকওভার ও নেল আর্টের রিলস এবং ছবি দেখুন।'
                  : 'Explore our latest hair transformations, bridal looks, and salon reels.'}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#DD2A7B] group-hover:underline">
              <span>{lang === 'bn' ? 'ইনস্টাগ্রাম পেজ ভিজিট করুন' : 'Follow on Instagram'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* 3. Facebook Page Card */}
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-white border border-[#FBD9E6] shadow-xs hover:shadow-lg hover:border-[#1877F2] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shadow-xs">
                    <ThumbsUp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1A1A1A]">Facebook Page</span>
                    <p className="text-[10px] text-[#6B6570]">{brandName}</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#1877F2] bg-blue-50 px-2 py-0.5 rounded-full">
                  Like Page
                </span>
              </div>
              <p className="text-xs text-[#6B6570] leading-relaxed">
                {lang === 'bn'
                  ? 'আমাদের অফিসিয়াল ফেসবুক পেজে লাইক দিন এবং নতুন স্পেশাল অফার ও আপডেট পান।'
                  : 'Like our official Facebook page to stay updated with monthly offers and festive deals.'}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#1877F2] group-hover:underline">
              <span>{lang === 'bn' ? 'ফেসবুক পেজ দেখুন' : 'Visit Facebook Page'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

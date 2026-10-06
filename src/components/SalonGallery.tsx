import React, { useState } from 'react';
import { Camera, Sparkles, X, ChevronRight, Eye } from 'lucide-react';
import { Language } from '../types';

interface GalleryItem {
  id: string;
  title: { bn: string; en: string };
  category: 'hair' | 'skin' | 'nails' | 'ambiance';
  categoryLabel: { bn: string; en: string };
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: { bn: 'স্ক্যাল্প পিলিং ডিটক্স ও হেয়ার থেরাপি', en: 'Scalp Peeling Detox & Therapy' },
    category: 'hair',
    categoryLabel: { bn: 'হেয়ার ও স্ক্যাল্প', en: 'Hair & Scalp' },
    image: '/images/services/real_female_scalp_detox.jpg',
  },
  {
    id: 'g-2',
    title: { bn: 'ভেলভেট ক্যানভাস রিলাক্সিং সেলুন ইন্টেরিয়র', en: 'Velvet Canvas Salon Interior' },
    category: 'ambiance',
    categoryLabel: { bn: 'পরিবেশ ও অ্যাম্বিয়েন্স', en: 'Ambiance' },
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g-3',
    title: { bn: 'O3+ গ্লো অ্যান্ড ব্রাইটেনিং ফেশিয়াল', en: 'O3+ Radiance Glow Facial' },
    category: 'skin',
    categoryLabel: { bn: 'স্কিন ও ফেশিয়াল', en: 'Skin & Facial' },
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g-4',
    title: { bn: 'হেয়ার স্মুদেনিং ও ক্যারাটিন গ্লস', en: 'Hair Smoothening & Keratin Gloss' },
    category: 'hair',
    categoryLabel: { bn: 'হেয়ার ও স্ক্যাল্প', en: 'Hair & Scalp' },
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g-5',
    title: { bn: 'লাক্সারি জেল এক্সটেনশন ও নেল আর্ট', en: 'Luxury Gel Nails & Custom Art' },
    category: 'nails',
    categoryLabel: { bn: 'নেল্স ও হাত-পা', en: 'Nails & Hands' },
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g-6',
    title: { bn: 'স্পা পেডিকিউর ও ফুট ম্যাসাজ স্টেশন', en: 'Spa Pedicure & Foot Relaxation' },
    category: 'nails',
    categoryLabel: { bn: 'নেল্স ও হাত-পা', en: 'Nails & Hands' },
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g-7',
    title: { bn: 'হাইড্রেটিং শিট ও স্কিন রিজুভেনেশন', en: 'Hydrating Skin Rejuvenation' },
    category: 'skin',
    categoryLabel: { bn: 'স্কিন ও ফেশিয়াল', en: 'Skin & Facial' },
    image: 'https://images.unsplash.com/photo-1512290900672-1f55b991b1a7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g-8',
    title: { bn: 'স্টাইলিং ও মিরর সেশন এরিয়া', en: 'Styling & Mirror Lounge' },
    category: 'ambiance',
    categoryLabel: { bn: 'পরিবেশ ও অ্যাম্বিয়েন্স', en: 'Ambiance' },
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
  },
];

interface SalonGalleryProps {
  lang: Language;
  brandName: string;
}

export const SalonGallery: React.FC<SalonGalleryProps> = ({ lang, brandName }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'hair' | 'skin' | 'nails' | 'ambiance'>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'all', label: { bn: 'সব ছবি', en: 'All Photos' } },
    { id: 'hair', label: { bn: 'হেয়ার ও স্ক্যাল্প', en: 'Hair & Scalp' } },
    { id: 'skin', label: { bn: 'ত্বক ও ফেশিয়াল', en: 'Skin & Facial' } },
    { id: 'nails', label: { bn: 'নেল্স ও পেডিকিউর', en: 'Nails & Spa' } },
    { id: 'ambiance', label: { bn: 'পার্লার পরিবেশ', en: 'Salon Ambiance' } },
  ];

  const filteredItems =
    selectedFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-white border-b border-[#FBD9E6] relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0F6] border border-[#FBD9E6] text-[#E0115F] text-xs font-bold tracking-wide uppercase mb-3 shadow-xs">
            <Camera className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'ফটো গ্যালারি' : 'Photo Gallery'}</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight">
            {lang === 'bn' ? (
              <>
                <span className="text-[#E0115F]">{brandName}</span>-এর বাস্তব রূপচর্চা ও পরিবেশ
              </>
            ) : (
              <>
                A Glimpse of <span className="text-[#E0115F]">{brandName}</span>
              </>
            )}
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#6B6570]">
            {lang === 'bn'
              ? 'আমাদের আধুনিক পার্লারের আসল কাজের মুহূর্ত, হাইজেনিক পরিবেশ এবং রূপচর্চার ছবি।'
              : 'Real glimpses of our treatments, hygienic salon ambiance, and beauty transformations.'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {filters.map((f) => {
            const isActive = selectedFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#E0115F] text-white shadow-xs'
                    : 'bg-[#FFF0F6] text-[#6B6570] hover:bg-[#FFE3EC] hover:text-[#1A1A1A] border border-[#FBD9E6]'
                }`}
              >
                {f.label[lang]}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid: 2 per row on mobile, 4 per row on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-4/3 sm:aspect-square bg-neutral-100 cursor-pointer border border-[#FBD9E6]/60 shadow-xs hover:shadow-lg transition-all"
            >
              <img
                src={item.image}
                alt={item.title[lang]}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5 sm:p-4 text-white">
                <span className="text-[9px] font-bold text-[#FF9EAA] uppercase tracking-wider">
                  {item.categoryLabel[lang]}
                </span>
                <p className="text-xs sm:text-sm font-semibold line-clamp-2 leading-snug">
                  {item.title[lang]}
                </p>
                <div className="mt-1 flex items-center gap-1 text-[10px] text-white/80">
                  <Eye className="w-3 h-3" />
                  <span>{lang === 'bn' ? 'বড় করে দেখুন' : 'View Full Image'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxImage.image}
              alt={lightboxImage.title[lang]}
              className="w-full max-h-[70vh] object-cover"
            />
            <div className="p-4 bg-white border-t border-[#FBD9E6]">
              <span className="text-xs font-bold text-[#E0115F] uppercase tracking-wider">
                {lightboxImage.categoryLabel[lang]}
              </span>
              <h3 className="font-serif-display text-lg font-bold text-[#1A1A1A] mt-0.5">
                {lightboxImage.title[lang]}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

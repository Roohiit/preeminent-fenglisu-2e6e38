import React, { useState, useMemo } from 'react';
import { Search, Sparkles, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import { ParlourService, ServiceCategory, Language } from '../types';
import { ServiceCard } from './ServiceCard';

interface ServicesGridProps {
  services: ParlourService[];
  categories: ServiceCategory[];
  lang: Language;
  whatsappNumber: string;
  brandName: string;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  services,
  categories,
  lang,
  whatsappNumber,
  brandName,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter services
  const filteredServices = useMemo(() => {
    return services.filter((srv) => {
      // Category match
      const matchCat = selectedCategory === 'all' || srv.category === selectedCategory;

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        srv.name.bn.toLowerCase().includes(q) ||
        srv.name.en.toLowerCase().includes(q) ||
        srv.description.bn.toLowerCase().includes(q) ||
        srv.description.en.toLowerCase().includes(q) ||
        srv.price.toLowerCase().includes(q);

      return matchCat && matchQuery;
    });
  }, [services, selectedCategory, searchQuery]);

  return (
    <section id="services" className="py-12 sm:py-16 bg-[#FFFBFD] border-b border-[#FBD9E6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE1EC] border border-[#FF6BA6]/40 text-[#B80D4D] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#E0115F]" />
            <span>{lang === 'bn' ? 'সম্পূর্ণ মেনু ও রেট চার্ট' : 'Full Parlour Rate Chart'}</span>
          </div>

          <h2 className="font-serif-display text-2xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            {lang === 'bn' ? 'আমাদের পার্লার সার্ভিসেস' : 'Our Salon & Parlour Services'}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-[#6B6570]">
            {lang === 'bn'
              ? 'নিচে প্রতিটি সার্ভিসের দাম দেখে সরাসরি "Book Now" বাটনে ক্লিক করে WhatsApp-এ আপনার সুবিধামতো স্লট বুক করুন।'
              : 'Browse all female salon services below. Tap "Book Now" under any service to book directly on WhatsApp.'}
          </p>
        </div>

        {/* Search Bar & Stats */}
        <div className="max-w-md mx-auto mb-6">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={
                lang === 'bn'
                  ? 'সার্ভিস খুঁজুন (যেমন: Keratin, Facial, Wax, Hair Cut...)'
                  : 'Search services (e.g. Keratin, Facial, Wax, Hair Cut...)'
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-[#FBD9E6] text-sm text-[#1A1A1A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E0115F]/20 focus:border-[#E0115F] shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Horizontal Filter Bar */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count =
              cat.id === 'all'
                ? services.length
                : services.filter((s) => s.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#B80D4D] text-white border-[#B80D4D] shadow-sm'
                    : 'bg-white text-slate-700 border-[#FBD9E6] hover:bg-[#FFF0F6] hover:border-pink-300'
                }`}
              >
                <span>{cat.name[lang]}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-white/25 text-white' : 'bg-pink-100 text-[#B80D4D]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Status Count */}
        <div className="flex items-center justify-between text-xs text-[#6B6570] mb-5 px-1">
          <span>
            {lang === 'bn' ? 'প্রদর্শিত সার্ভিস:' : 'Showing Services:'}{' '}
            <b className="text-slate-900 font-mono">{filteredServices.length}</b>{' '}
            {lang === 'bn' ? 'টি' : 'items'}
          </span>
          <span className="hidden sm:inline text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium border border-emerald-200">
            ✓ {lang === 'bn' ? 'সরাসরি WhatsApp কনফার্মেশন' : 'Instant WhatsApp Booking'}
          </span>
        </div>

        {/* SIDE BY SIDE 2 TO KORE SERVICE (2 Columns Grid on Mobile & Desktop) */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-2 gap-2.5 sm:gap-6">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                lang={lang}
                whatsappNumber={whatsappNumber}
                brandName={brandName}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-[#FBD9E6] p-8">
            <p className="text-slate-500 text-sm">
              {lang === 'bn'
                ? 'আপনার সার্চের সাথে মেলে এমন কোনো সার্ভিস পাওয়া যায়নি।'
                : 'No services found matching your search.'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-2 rounded-xl bg-[#FFF0F6] text-[#B80D4D] font-semibold text-xs border border-[#FBD9E6] cursor-pointer"
            >
              {lang === 'bn' ? 'সকল সার্ভিস পুনরায় দেখুন' : 'Reset Filters'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

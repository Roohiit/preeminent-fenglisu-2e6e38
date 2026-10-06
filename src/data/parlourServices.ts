import { ParlourService, ServiceCategory } from '../types';

export const JYYANGRA_LOCATION = {
  name: {
    bn: 'Velvet Canvas — জ্যাংড়া বাজার',
    en: 'Velvet Canvas — Jyangra Bazar',
  },
  address: {
    bn: 'Sky View Apartment, জ্যাংড়া বাজার, কলকাতা ৭০০০৫৯',
    en: 'Sky View Apartment, Jyangra Bazar, Kolkata 700059',
  },
  phone: '8240111465',
  landmark: {
    bn: 'জ্যাংড়া বাজার ও নিউটাউনের কাছে',
    en: 'Sky View Apartment, Jyangra Bazar, Kolkata 700059',
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sky+View+Apartment+Jyangra+Bazar+Kolkata+700059',
  embedMapUrl: 'https://maps.google.com/maps?q=Sky%20View%20Apartment%20Jyangra%20Bazar%20Kolkata%20700059&t=&z=15&ie=UTF8&iwloc=&output=embed',
};

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/velvetcanvasparlour',
  instagram: 'https://www.instagram.com/velvetcanvaskolkata',
  googleReview: 'https://share.google/qaAMiM87Lw5QtA4KH',
};

export const CATEGORIES: ServiceCategory[] = [
  { id: 'all', name: { bn: 'সকল সার্ভিস', en: 'All Services' }, iconName: 'Sparkles' },
  { id: 'combos', name: { bn: 'কম্বো প্যাকেজ', en: 'Combo Packages' }, iconName: 'Gift' },
  { id: 'haircuts', name: { bn: 'হেয়ার কাট', en: 'Haircuts' }, iconName: 'Scissors' },
  { id: 'hair-treatments', name: { bn: 'হেয়ার ট্রিটমেন্ট', en: 'Hair Treatments' }, iconName: 'Wand2' },
  { id: 'hair-spa', name: { bn: 'হেয়ার রিলাক্সিং ও স্পা', en: 'Hair Spa & Relaxing' }, iconName: 'HeartHandshake' },
  { id: 'hair-coloring', name: { bn: 'হেয়ার কালারিং', en: 'Hair Coloring' }, iconName: 'Palette' },
  { id: 'hair-cleaning', name: { bn: 'হেয়ার ক্লিনিং ও ওয়াশ', en: 'Hair Cleaning' }, iconName: 'Droplets' },
  { id: 'hair-styling', name: { bn: 'হেয়ার স্টাইলিং', en: 'Hair Styling' }, iconName: 'Flame' },
  { id: 'skincare-facial', name: { bn: 'স্কিনকেয়ার ও ফেসিয়াল', en: 'Skincare & Facials' }, iconName: 'Gem' },
  { id: 'advanced-skincare', name: { bn: 'অ্যাডভান্সড ডার্মালজিকা', en: 'Advanced Dermalogica' }, iconName: 'ShieldCheck' },
  { id: 'waxing', name: { bn: 'ওয়াক্সিং সার্ভিস', en: 'Waxing Services' }, iconName: 'Flower2' },
  { id: 'threading', name: { bn: 'থ্রেডিং সার্ভিস', en: 'Threading' }, iconName: 'Smile' },
  { id: 'makeup', name: { bn: 'মেকআপ সার্ভিস', en: 'Makeup Services' }, iconName: 'Crown' },
  { id: 'hand-foot', name: { bn: 'হ্যান্ড অ্যান্ড ফুট কেয়ার', en: 'Hand & Foot Care' }, iconName: 'Hand' },
  { id: 'other-services', name: { bn: 'কান ফোঁড়ানো ও পিয়ার্সিং', en: 'Ear Piercing & Other' }, iconName: 'Sparkle' },
];

export const getServiceImage = (service: ParlourService): string => {
  return service.image || '/images/asset_1_Velvet_Canvas_client.png';
};

export const PARLOUR_SERVICES: ParlourService[] = [
  // --- ১. স্পেশাল কম্বো প্যাকেজেস (Combos) ---
  {
    id: 'combo-full-luxury',
    category: 'combos',
    name: {
      bn: 'ফুল লাক্সারি পার্লার কম্বো প্যাকেজ',
      en: 'Full Luxury Head-to-Toe Combo Package',
    },
    price: '₹3,500',
    image: '/images/services/luxury_combo_indian.jpg',
    tag: 'Bestseller Combo',
    duration: '180 mins',
    description: {
      bn: 'হেয়ার কাট + হেয়ার স্পা + পেডিকিওর + ফেস ডি-ট্যান + লোটাস ফেসিয়াল + আইব্রো + আপারলিপ + ফুল হ্যান্ড ওয়াক্স + হাফ লেগ ওয়াক্স + ব্যাক পলিশিং।',
      en: 'Hair Cut + Hair Spa + Pedicure + Face De-Tan + Lotus Facial + Eyebrow + Upper Lip + Full Hand Wax + Half Leg Wax + Back Polishing.',
    },
    features: {
      bn: ['১০টি প্রিমিয়াম সেলুন সার্ভিস অন্তর্ভুক্ত', 'সম্পূর্ণ হেড-টু-টো ট্রান্সফরমেশন', 'সাশ্রয়ী মূল্যে পারফেক্ট গ্রুমিং'],
      en: ['10 premium salon treatments', 'Complete head-to-toe transformation', 'Maximum value for salon visit'],
    },
  },
  {
    id: 'combo-glow-express',
    category: 'combos',
    name: {
      bn: 'গ্লো এক্সপ্রেস কম্বো প্যাকেজ',
      en: 'Glow Express Combo Package',
    },
    price: '₹1,500',
    image: '/images/services/combo_glow.jpg',
    tag: 'Popular Combo',
    duration: '100 mins',
    description: {
      bn: 'হেয়ার কাট + হেয়ার স্পা + অ্যারোমা ম্যাজিক ফ্রুট ফেসিয়াল + পেডিকিওর + হাফ লেগ ওয়াক্স + ডি-ট্যান।',
      en: 'Hair Cut + Hair Spa + Aroma Magic Fruit Facial + Pedicure + Half Leg Wax + De-Tan.',
    },
    features: {
      bn: ['ইনস্ট্যান্ট গ্লো ও রিফ্রেশিং কেয়ার', '৬টি প্রয়োজনীয় গ্রুমিং সার্ভিস', 'সেরা মূল্যে দ্রুত রিলাক্সেশন'],
      en: ['Instant radiant glow', '6 essential salon services', 'Unbeatable pocket-friendly price'],
    },
  },

  // --- ২. হেয়ার কাট (Haircuts - Female) ---
  {
    id: 'haircut-female',
    category: 'haircuts',
    name: {
      bn: 'হেয়ার কাট (মহিলা)',
      en: 'Hair Cut (Female)',
    },
    price: '₹400',
    image: '/images/services/real_haircut_square.jpg',
    duration: '30 mins',
    description: {
      bn: 'ফেস কাট অনুযায়ী ট্রেন্ডি লেয়ার, ফেদার, ব্লান্ট বা স্টেপ হেয়ার কাট।',
      en: 'Customized precision haircut according to face profile (Layers, Feather, Blunt, etc.)',
    },
  },
  {
    id: 'haircut-creative',
    category: 'haircuts',
    name: {
      bn: 'ক্রিয়েটিভ হেয়ার কাট',
      en: 'Creative Hair Cut',
    },
    price: '₹600',
    image: '/images/services/haircut_creative.jpg',
    duration: '45 mins',
    description: {
      bn: 'এক্সক্লুসিভ টেক্সচার্ড, উলফ কাট, কোরিয়ান ব্যাং বা আধুনিক ক্রিয়েটিভ ডিজাইন কাট।',
      en: 'Signature artistic texturizing, wolf cut, butterfly layers, or curtain bang cuts.',
    },
  },
  {
    id: 'haircut-child',
    category: 'haircuts',
    name: {
      bn: 'চাইল্ড হেয়ার কাট (১-১০ বছর)',
      en: 'Child Hair Cut (1-10 Yrs)',
    },
    price: '₹200',
    image: '/images/services/haircut_child.jpg',
    duration: '20 mins',
    description: {
      bn: 'বাচ্চাদের জন্য আরামদায়ক ও নিখুঁত কিউট হেয়ার কাট।',
      en: 'Gentle, kid-friendly grooming and trendy haircut for children.',
    },
  },
  {
    id: 'haircut-teenager',
    category: 'haircuts',
    name: {
      bn: 'টিনএজার হেয়ার কাট (১১-১৭ বছর)',
      en: "Teenager's Hair Cut (11-17 Yrs)",
    },
    price: '₹400',
    image: '/images/services/teenager_cut_indian.jpg',
    duration: '30 mins',
    description: {
      bn: 'তরুণীদের জন্য আধুনিক ট্রেন্ডি কাট ও ভলিউম স্টাইলিং।',
      en: 'Fresh youth-inspired modern hair shaping and light texturing.',
    },
  },

  // --- ৩. হেয়ার ক্লিনিং ও স্ক্যাল্প কেয়ার (Hair Cleaning) ---
  {
    id: 'cleaning-basic-shampoo',
    category: 'hair-cleaning',
    name: {
      bn: 'বেসিক শ্যাম্পু ও কন্ডিশনার ওয়াশ',
      en: 'Basic Shampoo & Conditioner Wash',
    },
    price: '₹400',
    image: '/images/services/real_basic_shampoo_wash.jpg',
    duration: '20 mins',
    description: {
      bn: 'সেলুন বেসিনে স্ক্যাল্প ক্লিনিং এবং নরম সিল্কি ফিনিশের জন্য প্রিমিয়াম ওয়াশ।',
      en: 'Deep cleansing scalp wash at salon basin with salon-grade hydrating conditioner.',
    },
  },
  {
    id: 'cleaning-treatment-shampoo',
    category: 'hair-cleaning',
    name: {
      bn: 'ট্রিটমেন্ট বেসড শ্যাম্পু ও কন্ডিশনার',
      en: 'Treatment-Based Shampoo & Conditioner',
    },
    price: '₹600',
    image: '/images/services/real_treatment_shampoo_wash.jpg',
    duration: '30 mins',
    description: {
      bn: 'ড্যামেজ বা কেমিক্যালি ট্রিটেড চুলের জন্য বিশেষ রিপেয়ার শ্যাম্পু ও কন্ডিশনার থেরাপি।',
      en: 'Targeted hair-repair wash tailored to damaged, color-treated, or chemically processed hair.',
    },
  },
  {
    id: 'cleaning-scalp-peeling',
    category: 'hair-cleaning',
    name: {
      bn: 'স্ক্যাল্প পিলিং ডিটক্স ট্রিটমেন্ট',
      en: 'Scalp Peeling Detox Treatment',
    },
    price: '₹900 / ₹1,200',
    image: '/images/services/real_female_scalp_detox.jpg',
    duration: '30 mins',
    description: {
      bn: 'খুশকি ও স্ক্যাল্পের অতিরিক্ত তেল বা ডেড সেল দূর করতে স্পেশাল এক্সফোলিয়েশন।',
      en: 'Exfoliating clarifying scalp detox removing stubborn dandruff and sebum buildup.',
    },
  },

  // --- ৪. হেয়ার ট্রিটমেন্ট (Hair Treatments) ---
  {
    id: 'treatment-straightening-loreal',
    category: 'hair-treatments',
    name: {
      bn: 'স্ট্রেইটনিং / স্মুদেনিং (L’Oréal)',
      en: 'Straightening / Smoothing (L’Oréal)',
    },
    price: '₹4,000',
    image: '/images/services/straightening_smooth.jpg',
    tag: 'Premium Hair',
    duration: '180 mins',
    description: {
      bn: 'আসল লরিয়াল প্রফেশনাল দিয়ে পারফেক্ট সোজা, রেশমি ও চকচকে চুল।',
      en: 'Authentic L’Oréal Professional formula for mirror-smooth, permanent straight silky hair.',
    },
  },
  {
    id: 'treatment-keratin',
    category: 'hair-treatments',
    name: {
      bn: 'কেরাটিন ট্রিটমেন্ট (Keratin Treatment)',
      en: 'Keratin Protein Reconstruction',
    },
    price: '₹4,000',
    image: '/images/asset_3_Keratin_Treatment.png',
    tag: 'Top Rated',
    duration: '150 mins',
    description: {
      bn: 'চুলের গভীর প্রোটিন রিকনস্ট্রাকশন, ৪-৫ মাস ধরে মসৃণ, ফ্রিজ-মুক্ত ও জেল্লাদার লুক।',
      en: 'Deep protein reconstruction eliminating roughness and frizz for up to 4-5 months.',
    },
  },
  {
    id: 'treatment-botox',
    category: 'hair-treatments',
    name: {
      bn: 'হেয়ার বোটক্স ও প্রোটিন ট্রিটমেন্ট',
      en: 'Hair Botox & Protein Treatment',
    },
    price: '₹4,500 / ₹5,000',
    image: '/images/services/hair_botox.jpg',
    tag: 'Frizz Rescue',
    duration: '150 mins',
    description: {
      bn: 'ফ্রিজ মুক্ত করতে ও পাতলা বা ক্ষতিগ্রস্ত চুলের ভলিউম এবং স্বাস্থ্য ফেরাতে বোটক্স/সিস্টিন।',
      en: 'Deep conditioning anti-aging hair filler repairing damaged cuticles and restoring bounce.',
    },
  },

  // --- ৫. হেয়ার স্টাইলিং (Hair Styling) ---
  {
    id: 'styling-blow-dry',
    category: 'hair-styling',
    name: {
      bn: 'ব্লো ড্রাই স্টাইলিং (Blow Dry)',
      en: 'Salon Blow Dry Styling',
    },
    price: '₹400 Onward',
    image: '/images/services/blow_dry.jpg',
    duration: '30 mins',
    description: {
      bn: 'ইনস্ট্যান্ট ভলিউম ও বাউন্সি ফিনিশের জন্য প্রফেশনাল ব্লো ড্রাই।',
      en: 'Professional heat-styling blow out for instant bounce, shine, and polished finish.',
    },
  },
  {
    id: 'styling-tongs-iron',
    category: 'hair-styling',
    name: {
      bn: 'টংস কার্লস / আয়রনিং / হেয়ার ডু',
      en: 'Curling Tongs / Flat Iron / Designer Updo',
    },
    price: '₹450 – ₹600',
    image: '/images/services/tongs_styling_indian.jpg',
    duration: '45 mins',
    description: {
      bn: 'পার্টি বা অনুষ্ঠানের জন্য বিচ ওয়েভস, হলিউড কার্লস, স্লিক আয়রনিং বা খোঁপা স্টাইলিং।',
      en: 'Beach waves, defined ringlets, sleek flat-iron finish, or festive designer updo bun.',
    },
  },

  // --- ৬. হেয়ার রিলাক্সিং ও স্পা (Hair Relaxing & Spa) ---
  {
    id: 'spa-keratin',
    category: 'hair-spa',
    name: {
      bn: 'কেরাটিন হেয়ার স্পা (স্টিমার সহ)',
      en: 'Keratin Hair Spa with Steamer',
    },
    price: '₹1,200',
    image: '/images/asset_5_Keratin_Hair_Spa.png',
    tag: 'Popular Spa',
    duration: '60 mins',
    description: {
      bn: 'প্রোটিন রিচার্জিং স্পা মাস্ক, ওজোন হট স্টিম ও ডিপ নারিশিং স্ক্যাল্প ম্যাসাজ।',
      en: 'Intensive keratin protein infusion with warm ozone steam restoring softness and shine.',
    },
  },
  {
    id: 'spa-head-oil',
    category: 'hair-spa',
    name: {
      bn: 'হারবাল হেড অয়েল ম্যাসাজ (প্রিমিয়াম)',
      en: 'Premium Herbal Head Oil Massage',
    },
    price: '₹800',
    image: '/images/services/spa_head_oil.jpg',
    duration: '40 mins',
    description: {
      bn: 'বিশেষ হারবাল এসেনশিয়াল অয়েল দিয়ে ডিপ রিলাক্সিং আকুপ্রেসার স্ক্যাল্প ম্যাসাজ।',
      en: 'Therapeutic warm herbal essential oil treatment revitalizing scalp and hair roots.',
    },
  },
  {
    id: 'spa-ritual',
    category: 'hair-spa',
    name: {
      bn: 'লাক্সারি রিচুয়াল স্পা (Biotop / Nashi)',
      en: 'Luxury European Ritual Spa',
    },
    price: '₹1,800',
    image: '/images/services/spa_ritual.jpg',
    tag: 'Luxury',
    duration: '75 mins',
    description: {
      bn: 'ইন্টারন্যাশনাল ব্র্যান্ডের লাক্সারি অর্গানিক রিচুয়াল স্পা থেরাপি।',
      en: 'Luxury European hair ritual featuring Biotop 911 / Nashi Argan for deep cellular repair.',
    },
  },

  // --- ৭. হেয়ার কালারিং (Hair Coloring) ---
  {
    id: 'color-global',
    category: 'hair-coloring',
    name: {
      bn: 'গ্লোবাল হেয়ার কালার (অর্গানিক সহ)',
      en: 'Global Hair Color (Regular / Organic)',
    },
    price: '₹2,500 / ₹3,000',
    image: '/images/services/color_global.jpg',
    duration: '90 mins',
    description: {
      bn: 'সম্পূর্ণ চুলে একরকমের প্রিমিয়াম লাক্সারি কালার কভারেজ (অ্যামোনিয়া-মুক্ত উপলব্ধ)।',
      en: 'Full-head rich luminous color application using salon-grade gentle and organic dyes.',
    },
  },
  {
    id: 'color-highlights',
    category: 'hair-coloring',
    name: {
      bn: 'ফয়েল হাইলাইটস (Highlights)',
      en: 'Foil Highlights (Caramel / Honey / Ash)',
    },
    price: '₹3,000',
    image: '/images/services/highlights_indian.jpg',
    duration: '120 mins',
    description: {
      bn: 'চুলে গর্জিয়াস ডাইমেনশন দিতে গোল্ডেন, ক্যারামেল বা চকোলেট স্ট্র্যান্ড হাইলাইটস।',
      en: 'Multi-dimensional foil highlights in honey, caramel, or ash tones.',
    },
  },
  {
    id: 'color-balayage',
    category: 'hair-coloring',
    name: {
      bn: 'বালায়াজ / ওমব্রে কালার (Balayage / Ombre)',
      en: 'Balayage / Ombre Gradient Styling',
    },
    price: '₹4,000',
    image: '/images/services/color_balayage.jpg',
    tag: 'Trending',
    duration: '150 mins',
    description: {
      bn: 'হ্যান্ড-পেইন্টেড ন্যাচারাল গ্র্যাডিয়েন্ট কালার এফেক্ট।',
      en: 'Seamless hand-painted gradient melting from natural roots to luminous lighter tips.',
    },
  },
  {
    id: 'color-root-touchup',
    category: 'hair-coloring',
    name: {
      bn: 'রুট টাচ-আপ (Root Touch-Up)',
      en: 'Root Touch-Up & Grey Coverage',
    },
    price: '₹800 / ₹1,200',
    image: '/images/services/color_root_touchup.jpg',
    duration: '45 mins',
    description: {
      bn: 'পাকা চুল ঢাকতে বা আগের কালার রিনিউ করতে নিখুঁত রুট কালারিং।',
      en: 'Precision grey coverage and regrowth color matching for fresh root area.',
    },
  },

  // --- ৮. স্কিনকেয়ার ও ফেসিয়াল (Skincare & Facials) ---
  {
    id: 'facial-hydra',
    category: 'skincare-facial',
    name: {
      bn: 'হাইড্রা ফেসিয়াল (Hydra Facial)',
      en: 'Hydra Facial Treatment (Machine Wand)',
    },
    price: '₹3,000',
    image: '/images/asset_2_Hydra_Facial.png',
    tag: 'Celebrity Facial',
    duration: '75 mins',
    description: {
      bn: 'ভ্যাকুয়াম ব্ল্যাকহেড রিমুভাল, ফ্রুট অ্যাসিড পিল ও ডিপ সিরাম ইনফিউশন।',
      en: 'Hydro-dermabrasion suction extraction, peptide hydration & LED radiance therapy.',
    },
  },
  {
    id: 'facial-gold',
    category: 'skincare-facial',
    name: {
      bn: 'গোল্ড ও জুয়েল ফেসিয়াল (24K Gold & Diamond)',
      en: '24K Gold & Diamond Jewel Facial',
    },
    price: '₹3,000 / ₹3,500',
    image: '/images/services/facial_gold.jpg',
    duration: '75 mins',
    description: {
      bn: '২৪ ক্যারেট গোল্ড ও ডায়মন্ড থেরাপিতে ত্বক পায় ব্রাইডাল সোনালী গ্লো ও টানটান ভাব।',
      en: '24K colloidal gold leaf and micro-diamond polish boosting skin elasticity and bridal sheen.',
    },
  },
  {
    id: 'facial-purifying',
    category: 'skincare-facial',
    name: {
      bn: 'পিউরিফাইং অ্যাকনে ও ডিটক্স ফেসিয়াল',
      en: 'Purifying Acne & Pore Detox Facial',
    },
    price: '₹3,000',
    image: '/images/services/purifying_facial_indian.jpg',
    duration: '75 mins',
    description: {
      bn: 'ব্রণ, ফুসকুড়ি ও অতিরিক্ত তেলযুক্ত ত্বকের জন্য অ্যান্টিব্যাকটেরিয়াল পিউরিফাইং কেয়ার।',
      en: 'Specialized deep pore antibacterial detox soothing active acne and breakout redness.',
    },
  },
  {
    id: 'facial-cleanup-aroma',
    category: 'skincare-facial',
    name: {
      bn: 'ক্লিনআপ — অ্যারোমা ম্যাজিক / লোটাস',
      en: 'Cleanup — Aroma Magic / Lotus Herbals',
    },
    price: '₹600 / ₹800',
    image: '/images/services/facial_cleanup_aroma.jpg',
    duration: '40 mins',
    description: {
      bn: 'হার্বাল প্রোডাক্ট ও এসেনশিয়াল অয়েলে সফট পোর ক্লিনজিং ও ময়েশ্চারাইজিং।',
      en: 'Gentle botanical pore cleanup and fresh hydration using Lotus Herbals & Aroma Magic.',
    },
  },
  {
    id: 'facial-cleanup-aloe',
    category: 'skincare-facial',
    name: {
      bn: 'অ্যালোভেরা সুদিং ক্লিনআপ / ডি-ট্যান',
      en: 'Aloe Vera Soothing Cleanup / De-Tan',
    },
    price: '₹1,000 / ₹1,200',
    image: '/images/services/facial_cleanup_aloe.jpg',
    duration: '45 mins',
    description: {
      bn: 'রোদে পোড়া ট্যান দূর করতে এবং সংবেদনশীল ত্বকে আরাম দিতে খাঁটি অ্যালোভেরা প্যাক।',
      en: 'Pure cooling aloe vera soothing sunburn, redness, and sensitive irritation.',
    },
  },

  // --- ৯. অ্যাডভান্সড স্কিনকেয়ার (Dermalogica) ---
  {
    id: 'derma-treatment',
    category: 'advanced-skincare',
    name: {
      bn: 'লাক্সারি ক্লিনিক্যাল ট্রিটমেন্ট (Dermalogica USA)',
      en: 'Dermalogica USA Clinical Skin Treatment',
    },
    price: '₹3,500 – ₹6,000',
    image: '/images/services/derma_clinical.jpg',
    tag: 'Clinical Luxury',
    duration: '60-90 mins',
    description: {
      bn: 'আমেরিকান ডার্মালজিকা ফেস ম্যাপিং, এনজাইমেটিক এক্সফোলিয়েশন ও অ্যান্টি-এজিং থেরাপি।',
      en: 'Comprehensive Face Mapping®, multi-level enzymatic exfoliation & customized active mask.',
    },
  },

  // --- ১০. থ্রেডিং সার্ভিস (Threading) ---
  {
    id: 'thread-eyebrows',
    category: 'threading',
    name: {
      bn: 'আইব্রো শেপিং ও থ্রেডিং',
      en: 'Precision Eyebrow Threading & Shaping',
    },
    price: '₹50',
    image: '/images/services/eyebrow_threading_indian.jpg',
    duration: '10 mins',
    description: {
      bn: 'ফেস কাট অনুযায়ী নিখুঁত আর্চ ও পরিপাটি আইব্রো শেপিং। কপাল, আপারলিপ ও চিবুক (₹২০) উপলব্ধ।',
      en: 'Precision eyebrow hair removal and clean architectural shaping. Forehead & Upper lip also available.',
    },
  },
  {
    id: 'thread-full-face',
    category: 'threading',
    name: {
      bn: 'ফুল ফেস থ্রেডিং (আইব্রো ছাড়া)',
      en: 'Full Face Threading (Without Eyebrows)',
    },
    price: '₹300',
    image: '/images/services/face_threading_indian.jpg',
    duration: '25 mins',
    description: {
      bn: 'সম্পূর্ণ মুখের সূক্ষ্ম লোম তুলে ত্বককে নিখুঁত মসৃণ মেকআপ-রেডি করা।',
      en: 'Complete facial threading leaving skin velvet smooth for seamless makeup application.',
    },
  },

  // --- ১১. ওয়াক্সিং সার্ভিস (Waxing) ---
  {
    id: 'wax-rica',
    category: 'waxing',
    name: {
      bn: 'ইটালিয়ান রিকা ওয়াক্স (Rica Wax Packages)',
      en: 'Italian Rica Wax (Full Hand / Leg / Body)',
    },
    price: '₹150 – ₹2,000',
    image: '/images/services/rica_wax_indian.jpg',
    tag: 'Painless Choice',
    duration: '30-90 mins',
    description: {
      bn: 'আসল ইটালিয়ান রিকা কলোফনি-মুক্ত ওয়াক্স: আন্ডারআর্মস ₹১৫০ | হাত ₹৫০০ | পা ₹৫০০/₹৭০০ | পিঠ ₹৪০০ | ফুল বডি ₹২০০০।',
      en: 'Authentic Italian Rica liposoluble wax: Underarms ₹150 | Full Hand ₹500 | Leg ₹500/₹700 | Back ₹400 | Full Body ₹2000.',
    },
  },
  {
    id: 'wax-warm',
    category: 'waxing',
    name: {
      bn: 'রোল-অন ও হট ওয়াক্স (Roll-On / Hot Wax)',
      en: 'Roll-On & Warm Wax Packages',
    },
    price: '₹100 – ₹1,500',
    image: '/images/services/waxing_warm.jpg',
    duration: '20-75 mins',
    description: {
      bn: 'ডিসপোজেবল রোল-অন ও হট ওয়াক্স: আন্ডারআর্মস ₹১০০ | হাত ₹৩৫০ | পা ₹৪০০/₹৫০০ | পিঠ ₹৪০০ | ফুল বডি ₹১৫০০।',
      en: 'Hygienic cartridge roll-on and warm wax: Underarms ₹100 | Hand ₹350 | Leg ₹400/₹500 | Full Body ₹1500.',
    },
  },

  // --- ১২. মেকআপ সার্ভিস (Makeup) ---
  {
    id: 'makeup-party',
    category: 'makeup',
    name: {
      bn: 'পার্টি গ্ল্যাম মেকআপ (Party Makeup)',
      en: 'Party Glam Makeup (HD / Airbrush)',
    },
    price: '₹2,500 / ₹3,500',
    image: '/images/asset_4_Party_Makeup.png',
    tag: 'Event Ready',
    duration: '75 mins',
    description: {
      bn: 'এইচডি এয়ারব্রাশ / ওয়াটারপ্রুফ মেকআপ, থ্রিডি আইল্যাশ ও হেয়ার স্টাইলিং সহ।',
      en: 'High-definition waterproof glam look using MAC & Huda Beauty, including lashes and hair do.',
    },
    features: {
      bn: ['১২+ ঘণ্টা দীর্ঘস্থায়ী ফিনিশ', 'এইচডি ফটো-রেডি আর্ট', 'হেয়ার ডু অন্তর্ভুক্ত'],
      en: ['12+ hr sweat-proof wear', 'HD camera-ready contouring', 'Includes tailored hair styling'],
    },
  },
  {
    id: 'makeup-bridal',
    category: 'makeup',
    name: {
      bn: 'রয়্যাল ব্রাইডাল মেকওভার (Bridal Makeover)',
      en: 'Royal Bridal Makeover Luxury',
    },
    price: '₹8,000 / ₹15,000',
    image: '/images/services/bridal_makeup_indian.jpg',
    tag: 'Signature Bridal',
    duration: '180 mins',
    description: {
      bn: 'প্রিমিয়াম এয়ারব্রাশ বা এইচডি ব্রাইডাল মেকআপ, শাড়ি/লেহেঙ্গা ড্রেপিং, জুয়েলারি সেটিং ও হেয়ার ডিজাইন।',
      en: 'Ultra-luxury bridal transformation: International HD airbrush makeup, saree/lehenga draping, and ornate hair styling.',
    },
    features: {
      bn: ['আন্তর্জাতিক লাক্সারি মেকআপ কিট (NARS, MAC)', 'শাড়ি ও লেহেঙ্গা ড্র্যাপিং অন্তর্ভুক্ত', 'সারাদিন নিখুঁত ব্রাইডাল গ্লো'],
      en: ['NARS, Kryolan, Charlotte Tilbury kits', 'Complete bridal jewelry & dupatta styling', 'All-day transfer-proof radiance'],
    },
  },

  // --- ১৩. হ্যান্ড অ্যান্ড ফুট কেয়ার (Hand & Foot Care) ---
  {
    id: 'pedicure-spa',
    category: 'hand-foot',
    name: {
      bn: 'পেডিকিওর স্পা ও লেগ কেয়ার (Pedicure Spa)',
      en: 'Luxury Floral Pedicure Spa',
    },
    price: '₹500 – ₹1,000',
    image: '/images/services/pedicure_foot_soak.jpg',
    duration: '45-60 mins',
    description: {
      bn: 'গোলাপের পাঁপড়িতে পা ডুবিয়ে উষ্ণ বাবল ওয়াশ, সি-সল্ট স্ক্রাব ও রিলাক্সিং ফুট ম্যাসাজ।',
      en: 'Warm aromatic floral foot soak, dead skin exfoliation, heel scrubbing & soft lotion massage.',
    },
  },
  {
    id: 'manicure-spa',
    category: 'hand-foot',
    name: {
      bn: 'ম্যানিকিওর স্পা ও নেল আর্ট (Manicure Spa)',
      en: 'Manicure Hand Spa & Nail Care',
    },
    price: '₹500 – ₹1,000',
    image: '/images/services/manicure_nails.jpg',
    duration: '35-50 mins',
    description: {
      bn: 'নখ শেপিং, কিউটিকল ট্রিম, ট্যান রিমুভাল সুগার স্ক্রাব ও ডিপ ময়েশ্চারাইজিং ম্যাসাজ।',
      en: 'Nail shaping, cuticle trimming, exfoliating sugar scrub, and nourishing hand butter massage.',
    },
  },

  // --- ১৪. অন্যান্য সার্ভিস (Other Services) ---
  {
    id: 'other-piercing',
    category: 'other-services',
    name: {
      bn: 'কান ও নাক ফোঁড়ানো (Ear & Nose Piercing)',
      en: 'Ear & Nose Piercing (Sterile Gun)',
    },
    price: '₹400',
    image: '/images/services/real_ear_piercing_square.jpg',
    duration: '15 mins',
    description: {
      bn: 'জীবাণুমুক্ত আধুনিক স্টেরাইল গান প্রযুক্তিতে নিরাপদ ও সম্পূর্ণ ব্যথাহীন কান/নাক ফোঁড়ানো।',
      en: '100% sterilized single-use gun piercing for ears and nose with minimum discomfort.',
    },
  },
];

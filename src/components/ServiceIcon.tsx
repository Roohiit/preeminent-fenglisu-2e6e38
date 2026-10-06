import React from 'react';
import {
  Scissors,
  Droplets,
  Wand2,
  Flame,
  Wind,
  HeartHandshake,
  Palette,
  Gem,
  Flower2,
  ShieldCheck,
  Smile,
  Crown,
  Hand,
  Footprints,
  Disc,
  Gift,
  Sparkles,
  Sparkle,
  Brush,
  LucideIcon,
} from 'lucide-react';
import { ParlourService } from '../types';

export interface ServiceTheme {
  icon: LucideIcon;
  gradient: string;
  badgeBg: string;
  border: string;
  text: string;
  shadow: string;
}

export const getServiceTheme = (service: ParlourService): ServiceTheme => {
  const id = service.id;
  const cat = service.category;

  if (cat === 'combos' || id.startsWith('combo')) {
    return {
      icon: Gift,
      gradient: 'from-amber-100 via-rose-100 to-pink-100',
      badgeBg: 'bg-amber-600 text-white',
      border: 'border-amber-300/80',
      text: 'text-amber-700',
      shadow: 'shadow-amber-100',
    };
  }

  if (id === 'makeup-bridal') {
    return {
      icon: Crown,
      gradient: 'from-amber-100 via-rose-200 to-pink-200',
      badgeBg: 'bg-[#B80D4D] text-white',
      border: 'border-[#B80D4D]/40',
      text: 'text-[#B80D4D]',
      shadow: 'shadow-rose-100',
    };
  }

  if (id === 'makeup-party' || cat === 'makeup') {
    return {
      icon: Crown,
      gradient: 'from-pink-100 via-rose-100 to-red-100',
      badgeBg: 'bg-[#E0115F] text-white',
      border: 'border-rose-300',
      text: 'text-[#E0115F]',
      shadow: 'shadow-pink-100',
    };
  }

  if (cat === 'haircuts') {
    return {
      icon: Scissors,
      gradient: 'from-pink-100 via-rose-100 to-red-50',
      badgeBg: 'bg-[#E0115F] text-white',
      border: 'border-pink-300',
      text: 'text-[#E0115F]',
      shadow: 'shadow-pink-100',
    };
  }

  if (cat === 'hair-cleaning') {
    if (id.includes('peeling')) {
      return {
        icon: Sparkle,
        gradient: 'from-sky-100 via-cyan-100 to-blue-50',
        badgeBg: 'bg-sky-600 text-white',
        border: 'border-sky-300',
        text: 'text-sky-700',
        shadow: 'shadow-sky-100',
      };
    }
    return {
      icon: Droplets,
      gradient: 'from-sky-100 via-teal-100 to-cyan-50',
      badgeBg: 'bg-teal-600 text-white',
      border: 'border-teal-300',
      text: 'text-teal-700',
      shadow: 'shadow-teal-100',
    };
  }

  if (cat === 'hair-treatments') {
    return {
      icon: Wand2,
      gradient: 'from-purple-100 via-pink-100 to-rose-100',
      badgeBg: 'bg-purple-600 text-white',
      border: 'border-purple-300',
      text: 'text-purple-700',
      shadow: 'shadow-purple-100',
    };
  }

  if (cat === 'hair-styling') {
    return {
      icon: id.includes('blow') ? Wind : Flame,
      gradient: 'from-orange-100 via-amber-100 to-pink-100',
      badgeBg: 'bg-orange-600 text-white',
      border: 'border-orange-300',
      text: 'text-orange-700',
      shadow: 'shadow-orange-100',
    };
  }

  if (cat === 'hair-spa') {
    return {
      icon: HeartHandshake,
      gradient: 'from-emerald-100 via-teal-100 to-green-50',
      badgeBg: 'bg-emerald-600 text-white',
      border: 'border-emerald-300',
      text: 'text-emerald-700',
      shadow: 'shadow-emerald-100',
    };
  }

  if (cat === 'hair-coloring') {
    return {
      icon: id.includes('highlights') ? Brush : Palette,
      gradient: 'from-indigo-100 via-purple-100 to-pink-100',
      badgeBg: 'bg-indigo-600 text-white',
      border: 'border-indigo-300',
      text: 'text-indigo-700',
      shadow: 'shadow-indigo-100',
    };
  }

  if (cat === 'skincare-facial') {
    return {
      icon: id.includes('hydra') || id.includes('gold') ? Gem : Sparkles,
      gradient: 'from-rose-100 via-pink-100 to-amber-50',
      badgeBg: 'bg-[#B80D4D] text-white',
      border: 'border-rose-300',
      text: 'text-[#B80D4D]',
      shadow: 'shadow-rose-100',
    };
  }

  if (cat === 'advanced-skincare') {
    return {
      icon: ShieldCheck,
      gradient: 'from-blue-100 via-indigo-100 to-purple-50',
      badgeBg: 'bg-blue-600 text-white',
      border: 'border-blue-300',
      text: 'text-blue-700',
      shadow: 'shadow-blue-100',
    };
  }

  if (cat === 'threading') {
    return {
      icon: Smile,
      gradient: 'from-amber-100 via-yellow-100 to-orange-50',
      badgeBg: 'bg-amber-600 text-white',
      border: 'border-amber-300',
      text: 'text-amber-700',
      shadow: 'shadow-amber-100',
    };
  }

  if (cat === 'waxing') {
    return {
      icon: Flower2,
      gradient: 'from-pink-100 via-rose-100 to-orange-50',
      badgeBg: 'bg-rose-600 text-white',
      border: 'border-rose-300',
      text: 'text-rose-600',
      shadow: 'shadow-rose-100',
    };
  }

  if (cat === 'hand-foot') {
    return {
      icon: id.includes('pedi') ? Footprints : Hand,
      gradient: 'from-teal-100 via-cyan-100 to-sky-50',
      badgeBg: 'bg-teal-600 text-white',
      border: 'border-teal-300',
      text: 'text-teal-700',
      shadow: 'shadow-teal-100',
    };
  }

  if (id.includes('piercing')) {
    return {
      icon: Disc,
      gradient: 'from-violet-100 via-purple-100 to-pink-50',
      badgeBg: 'bg-violet-600 text-white',
      border: 'border-violet-300',
      text: 'text-violet-700',
      shadow: 'shadow-violet-100',
    };
  }

  // Default
  return {
    icon: Sparkles,
    gradient: 'from-pink-100 via-rose-100 to-pink-50',
    badgeBg: 'bg-[#E0115F] text-white',
    border: 'border-pink-300',
    text: 'text-[#E0115F]',
    shadow: 'shadow-pink-100',
  };
};

interface ServiceIconProps {
  service: ParlourService;
  size?: 'sm' | 'md' | 'lg';
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ service, size = 'md' }) => {
  const theme = getServiceTheme(service);
  const IconComponent = theme.icon;

  const sizeClasses = {
    sm: 'w-10 h-10 rounded-xl',
    md: 'w-16 h-16 sm:w-20 sm:h-20 rounded-2xl',
    lg: 'w-20 h-20 sm:w-24 sm:h-24 rounded-3xl',
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8 sm:w-10 sm:h-10',
    lg: 'w-10 h-10 sm:w-12 sm:h-12',
  };

  return (
    <div
      className={`relative ${sizeClasses[size]} shrink-0 flex items-center justify-center bg-gradient-to-br ${theme.gradient} border ${theme.border} shadow-sm ${theme.shadow} transition-transform duration-300 group-hover:scale-105`}
    >
      <IconComponent className={`${iconSizes[size]} ${theme.text} stroke-[1.75]`} />
      {service.duration && size !== 'sm' && (
        <span className="absolute -bottom-1.5 -right-1 bg-white/95 border border-[#FBD9E6] text-[#B80D4D] text-[9px] font-mono px-1.5 py-0.2 rounded-md font-bold shadow-2xs">
          {service.duration}
        </span>
      )}
    </div>
  );
};

export type Language = 'bn' | 'en';

export interface ParlourService {
  id: string;
  category: string;
  name: {
    bn: string;
    en: string;
  };
  price: string;
  image?: string;
  priceNote?: {
    bn?: string;
    en?: string;
  };
  duration?: string;
  tag?: string;
  description: {
    bn: string;
    en: string;
  };
  features?: {
    bn: string[];
    en: string[];
  };
}

export interface ServiceCategory {
  id: string;
  name: {
    bn: string;
    en: string;
  };
  iconName: string;
  count?: number;
}

export interface BranchLocation {
  id: string;
  name: {
    bn: string;
    en: string;
  };
  address: {
    bn: string;
    en: string;
  };
  phone: string;
  landmark: {
    bn: string;
    en: string;
  };
}

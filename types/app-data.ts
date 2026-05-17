export interface AppFeature {
  icon: string;
  title: string;
  description: string;
}

export interface AppData {
  slug: string;
  name: string;
  tagline: string;
  heroDescription: string;
  category: string;
  appStoreId: string;
  appStoreUrl: string;
  privacyUrl: string;
  color: string;
  gradient: string;
  features: AppFeature[];
  pricing: {
    model: string;
    description: string;
    highlights: string[];
  };
  ctaDescription: string;
}

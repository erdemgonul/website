export interface ThirdPartyService {
  name: string;
  url: string;
}

export interface CustomSection {
  title: string;
  content: string;
}

export interface PrivacyPolicy {
  appId: string;
  appName: string;
  slug: string;
  author: string;
  email: string;
  effectiveDate: string;
  type: "Free" | "Freemium" | "Paid";
  collectsLocation: boolean;
  collectsPersonalInfo: boolean;
  thirdParties: ThirdPartyService[];
  customSections?: CustomSection[];
}

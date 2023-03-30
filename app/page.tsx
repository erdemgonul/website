import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  IntroSection,
  PortfolioSection,
} from "@/components/HomeSections";

export default async function Home() {
  return (
    <div className="homepage">
      <IntroSection />
      <AboutSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}

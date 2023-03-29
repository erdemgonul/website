import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  IntroSection,
  PortfolioSection,
} from "components/HomeSections";

export default function Home() {
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

import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  IntroSection,
  PortfolioSection,
} from "@/components/HomeSections";

export const metadata = {
  title: "Erdem Gönül | Frontend Developer",
  description:
    "a passionate frontend developer who loves to imagine, design and code. Explore my work and discover my skills in creating beautiful and functional websites that engage and delight users. ahmet erdem gönül.",
};

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

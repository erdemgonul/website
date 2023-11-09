import {
  AboutSection,
  ContactSection,
  ExperienceSection,
} from "@/components/about-components/index";

export const metadata = {
  title: "Frontend Developer",
  description:
    "a passionate frontend developer who loves to imagine, design and code. Explore my work and discover my skills in creating beautiful and functional websites that engage and delight users. ahmet erdem gönül.",
};

export default async function About() {
  return (
    <div className="px-4 md:px-0 md:max-w-screen-md flex flex-col bg-black md:mx-auto w-full pt-24 md:pt-48 pb-12 gap-y-24 md:gap-y-48">
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}

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
    <div className="max-w-screen-md flex flex-col bg-black mx-auto w-full pt-48 pb-24 gap-y-48">
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}

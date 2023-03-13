import Head from "next/head";

import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  IntroSection,
  PortfolioSection,
} from "components/HomeSections";

export default function Home() {
  return (
    <>
      <Head>
        <title>Erdem Gönül | Frontend Developer</title>
        <meta
          name="description"
          content="a passionate frontend developer who loves to imagine, design and code. Explore my work and discover my skills in creating beautiful and functional websites."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="homepage">
        <IntroSection />
        <AboutSection />
        <ExperienceSection />
        <PortfolioSection />
        <ContactSection />
      </div>
    </>
  );
}

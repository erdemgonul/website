import Head from "next/head";

import {
  AboutSection,
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
          content="Hayatımızdaki fırtınalar beynimizdeki her şeyi götürse de bunlar kalsın dediğimiz düşünceler. Filmler, tiyatrolar, müzikler ve ilginç olduğunu sandığımız fikirlerimiz..."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="homepage">
        <IntroSection />
        <AboutSection />
        <ExperienceSection />
        <PortfolioSection />
      </main>
    </>
  );
}

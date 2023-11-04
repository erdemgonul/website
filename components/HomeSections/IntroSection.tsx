import ScrollButton from "../ScrollButton";

const IntroSection = () => (
  <section className="home-section">
    <div className="max-w-screen-lg md:flex md:flex-col bottom-0">
      <div className="flex flex-col w-fit">
        <h1 className="slogan">Erdem Gönül</h1>
        <h2 className="sub-slogan">Frontend Developer</h2>
      </div>
    </div>
    <ScrollButton nextSection="" nextSectionId="about" />
  </section>
);

export default IntroSection;

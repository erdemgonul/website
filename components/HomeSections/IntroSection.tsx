import ScrollButton from "../ScrollButton";

const IntroSection = () => (
  <section className="home-section">
    <div className="max-w-screen-lg absolute left-0 right-0 md:flex md:flex-col md:mx-auto top-1/2">
      <div className="flex flex-col w-fit">
        <h1 className="slogan">Erdem Gönül</h1>
        <h1 className="sub-slogan">Frontend Developer</h1>
      </div>
    </div>
    <ScrollButton nextSection="" nextSectionId="about" />
  </section>
);

export default IntroSection;

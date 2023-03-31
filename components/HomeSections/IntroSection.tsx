import ScrollButton from "../ScrollButton";

const IntroSection = () => (
  <section className="home-section">
    <div></div>
    <div></div>
    <div className="max-w-screen-lg  left-0 right-0 md:flex md:flex-col md:mx-auto ">
      <div className="flex flex-col w-fit">
        <h1 className="slogan">Erdem Gönül</h1>
        <h2 className="sub-slogan">Frontend Developer</h2>
      </div>
    </div>
    <ScrollButton nextSection="" nextSectionId="about" />
  </section>
);

export default IntroSection;

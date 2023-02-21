import ScrollButton from "../ScrollButton";

const AboutSection = () => (
  <section className="home-section" id="about">
    <div className=" md:flex md:flex-col md:mx-auto h-full">
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-white text-2xl leading-[1.5] font-light">
          Hey there! I'm a front-end developer based in Istanbul, and I
          absolutely love what I do. I studied Computer Science at Ozyegin
          University. I have a passion for web and mobile. I love diving into
          complex projects and finding innovative solutions. I'm always up for a
          challenge! 🎉
        </h3>
      </div>
    </div>
    <ScrollButton nextSection="Experience" />
  </section>
);

export default AboutSection;

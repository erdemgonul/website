import ScrollButton from "../ScrollButton";
import Linkedin from "public/svg/linkedin.svg";

const ExperienceSection = () => (
  <section className="home-section" id="experience">
    <div className="max-w-screen-sm md:max-w-screen-lg 2xl:max-w-screen-xl  md:flex md:flex-col md:mx-auto h-full">
      <div className="flex flex-col h-full justify-center">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-3xl mt-20 mb-12 ">Experience</h1>
          <a
            href="https://www.linkedin.com/in/erdem-g%C3%B6n%C3%BCl-38a321179/"
            target="_blank"
            rel="noreferrer"
            className="text-white text-xl mt-20 mb-12 "
          >
            <Linkedin width={40} height={40} fill="#0E76A8" />
          </a>
        </div>
        <ul className=" text-white text-2xl space-y-8 ml-8">
          <li>
            <div className="flex items-center gap-x-4">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <h3>OBSS</h3>
              <h3 className="text-gray-400">Intern | 2019</h3>
            </div>
            <h5 className="text-gray-400 font-normal mt-4 mx-6">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage,
            </h5>
          </li>
          <li>
            <div className="flex items-center gap-x-4">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <h3>Intertech</h3>
              <h3 className="text-gray-400">Fullstack Developer | 2020-2021</h3>
            </div>
            <h5 className="text-gray-400 font-normal mt-4 mx-6">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage,
            </h5>
          </li>
          <li>
            <div className="flex items-center gap-x-4">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <h3>Trendyol</h3>
              <h3 className="text-gray-400">
                Frontend Developer | 2021 - Current
              </h3>
            </div>
            <h5 className="text-gray-400 font-normal mt-4 mx-6">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage,
            </h5>
          </li>
        </ul>
      </div>
    </div>
    <ScrollButton nextSection="Portfolio" />
  </section>
);

export default ExperienceSection;

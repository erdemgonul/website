import ScrollButton from "../ScrollButton";
import Linkedin from "public/svg/linkedin.svg";

const ExperienceSection = () => (
  <section className="home-section" id="experience">
    <div className="max-w-screen-sm md:max-w-screen-lg 2xl:max-w-screen-xl  md:flex md:flex-col md:mx-auto h-full">
      <div className="flex flex-col h-full justify-center">
        <div className="flex justify-between items-center mt-32 md:mt-20   mb-12 ">
          <h1 className="text-color text-2xl font-light md:font-normal md:text-3xl">
            Experience
          </h1>
          <a
            href="https://www.linkedin.com/in/erdem-g%C3%B6n%C3%BCl-38a321179/"
            target="_blank"
            rel="noreferrer"
            className="text-color text-xl"
          >
            <Linkedin
              width={40}
              height={40}
              className="dark:fill-indigo-400 fill-blue-500 hover:dark:fill-white hover:fill-black"
            />
          </a>
        </div>
        <ul className=" text-color text-2xl space-y-4 md:space-y-8 md:ml-8">
          <li>
            <div className="flex items-center gap-x-4">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <div className="flex items-center w-full">
                <h3 className="title">OBSS</h3>
                <h3 className="subtitle">
                  Intern <span className="hidden md:inline">| 2019</span>
                </h3>
              </div>
            </div>
            <h5 className="text">
              At my internship period, I participated in bootcamps on backend
              and frontend technologies. I have developed a Netflix-like web
              project using IMDB API.
            </h5>
          </li>
          <li>
            <div className="flex items-center gap-x-4">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <div className="flex items-center">
                <h3 className="title">Intertech</h3>
                <h3 className="subtitle">
                  Fullstack Developer{" "}
                  <span className="hidden md:inline">| 2020-2021</span>
                </h3>
              </div>
            </div>
            <h5 className="text">
              I took part in the development of a mobile banking application in
              my internship period at Intertech. Afterwards, I continued to work
              as a part time student. In this process, I took part in the
              development of bank application screens. After my graduation, I
              started as a full time and took part in the development of a low
              code product.
            </h5>
          </li>
          <li>
            <div className="flex items-center gap-x-4">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <div className="flex items-center">
                <h3 className="title">Trendyol</h3>
                <h3 className="subtitle">
                  Frontend Developer
                  <span className="hidden md:inline"> | 2021 - Current</span>
                </h3>
              </div>
            </div>
            <h5 className="text">
              I work in a Frontend team that we support many different projects
              in Trendyol. We develop many tools and products for improving
              Developer Experience.
            </h5>
          </li>
        </ul>
      </div>
    </div>
    <ScrollButton nextSection="Portfolio" nextSectionId="portfolio" />
  </section>
);

export default ExperienceSection;

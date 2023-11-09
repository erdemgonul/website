import Linkedin from "public/svg/linkedin.svg";

const EXPERIENCES_LIST = [
  {
    companyName: "OBSS",
    role: "Intern",
    year: "| 2019",
    desc: "At my internship period, I participated in bootcamps on backend and frontend technologies. I have developed a Netflix-like web project using IMDB API.",
  },
  {
    companyName: "Intertech",
    role: "Fullstack Developer",
    year: "| 2020-2021",
    desc: "I took part in the development of a mobile banking application in my internship period at Intertech. Afterwards, I continued to work as a part time student. In this process, I took part in the development of bank application screens. After my graduation, I started as a full time and took part in the development of a low code product.",
  },
  {
    companyName: "Trendyol",
    role: "Frontend Developer",
    year: "| 2021 - Current",
    desc: "I work in a Frontend team that we support many different projects in Trendyol. We develop many tools and products for improving Developer Experience.",
  },
];

const ExperienceItem = ({ companyName, role, year, desc }) => (
  <li>
    <div className="flex items-center gap-x-2">
      <span className="w-2 h-2 rounded-full bg-red"></span>
      <div className="flex items-center w-full">
        <h3 className="text-xl text-[#bfbfbf] font-medium">{companyName}</h3>
        <h3 className="text-lg font-medium text-gray-500 ml-2">
          {"|"} {role} <span className="hidden md:inline">{year}</span>
        </h3>
      </div>
    </div>
    <p className="text-[#bfbfbf] text-base font-normal mt-4">{desc}</p>
  </li>
);

const ExperienceSection = () => (
  <section>
    <div className="flex flex-col mx-auto w-full">
      <div className="flex flex-col justify-center">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[#bfbfbf] text-3xl font-medium">Experience</h2>
          <a
            href="https://www.linkedin.com/in/erdem-g%C3%B6n%C3%BCl-38a321179/"
            target="_blank"
            rel="noreferrer"
            className="text-[#bfbfbf] text-xl"
            aria-label="linkedin-link"
          >
            <Linkedin
              width={40}
              height={40}
              className="fill-red hover:fill-white"
            />
          </a>
        </div>
        <ul className="mt-4 space-y-8">
          {EXPERIENCES_LIST.map((experience) => (
            <ExperienceItem {...experience} key={experience.companyName} />
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ExperienceSection;

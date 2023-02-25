import Link from "next/link";
import Github from "public/svg/github.svg";
import Linkedin from "public/svg/linkedin.svg";
import Twitter from "public/svg/twitter.svg";
import Medium from "public/svg/medium.svg";

const SOCIAL_LINKS = [
  {
    Icon: (props) => <Github {...props} />,
    link: "https://www.github.com/erdemgonul",
  },
  {
    Icon: (props) => <Linkedin {...props} />,
    link: "https://www.linkedin.com/in/erdem-g%C3%B6n%C3%BCl-38a321179/",
  },
  {
    Icon: (props) => <Twitter {...props} />,
    link: "https://twitter.com/aherdemgonul",
  },
  {
    Icon: (props) => <Medium {...props} />,
    link: "https://erdemgonul.medium.com/",
  },
];
const ContactSection = () => (
  <section className="home-section" id="contact">
    <div className="max-w-screen-sm md:max-w-screen-lg 2xl:max-w-screen-xl   absolute left-0 right-0 md:flex md:flex-col md:mx-auto h-full">
      <div className="flex flex-col h-full justify-center items-center">
        <h3 className="md:items-start justify-center flex flex-wrap text-color  text-lg md:text-xl leading-[1.5] font-light hover:text-orange-500">
          Contact me from
          <span className="ml-2 underline underline-offset-8">
            ahmeterdemgonul@gmail.com
          </span>
        </h3>
        <div className="mt-20 flex gap-x-6 md:gap-x-10 items-center justify-center">
          {SOCIAL_LINKS.map(({ link, Icon }) => (
            <Link
              key={link}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon
                className="dark:fill-indigo-400 fill-black dark:hover:fill-white hover:fill-black"
                width={48}
                height={48}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;

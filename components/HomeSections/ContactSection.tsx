import Link from "next/link";
import Github from "public/svg/github.svg";
import Linkedin from "public/svg/linkedin.svg";
import Twitter from "public/svg/twitter.svg";
import Message from "public/svg/message.svg";
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
  <section className="home-section">
    <div className="max-w-screen-sm md:max-w-screen-lg 2xl:max-w-screen-xl   absolute left-0 right-0 md:flex md:flex-col md:mx-auto h-full">
      <div className="flex flex-col h-full justify-center items-center">
        <div className="flex gap-x-10 items-center justify-center">
          {SOCIAL_LINKS.map(({ link, Icon }) => (
            <Link
              key={link}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon fill="white" width={48} height={48} />
            </Link>
          ))}
        </div>
        <h3 className="mt-20 text-white text-2xl leading-[1.5] font-light hover:text-indigo-400">
          Contact me from
          <span className="ml-2 underline underline-offset-8">
            ahmeterdemgonul@gmail.com
          </span>
        </h3>
      </div>
    </div>
  </section>
);

export default ContactSection;

import Navbar from "./Navbar";
import Footer from "./Footer";
import Github from "public/svg/github.svg";
import Linkedin from "public/svg/linkedin.svg";
import Twitter from "public/svg/twitter.svg";
import Message from "public/svg/message.svg";
import Medium from "public/svg/medium.svg";
import Link from "next/link";

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

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
          <Navbar />
          <div className="flex w-full md:w-[calc(100vw-200px)]">{children}</div>
        </div>
        <div className="hidden md:block rightbar fixed top-0 right-0 w-[50px] md:w-[200px] h-screen transition-all duration-[400ms] indigo-bg">
          <div className="absolute left-0 right-0 bottom-[50px] self-center items-center  md:space-y-4 flex flex-col ">
            {SOCIAL_LINKS.map(({ link, Icon }) => (
              <Link
                key={link}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon fill="#151515" width={48} height={48} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

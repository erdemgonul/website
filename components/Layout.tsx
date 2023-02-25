import Navbar from "./Navbar";
import Github from "public/svg/github.svg";
import Linkedin from "public/svg/linkedin.svg";
import Twitter from "public/svg/twitter.svg";
import Medium from "public/svg/medium.svg";
import Link from "next/link";
import ThemeChanger from "./ThemeChanger";

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
      <div className="flex  w-full h-full">
        <div className="hidden lg:block rightbar fixed left-0 top-0 z-50 w-[50px] md:w-[200px] h-screen transition-all duration-[400ms] bg-indigo-400">
          <div className="relative w-full h-full">
            <div className="absolute left-0 right-0 top-[50px] flex justify-center items-center">
              <ThemeChanger />
            </div>
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
        <div className="absolute lg:left-[200px] h-full w-[calc(100vw-200px)]">
          <div className="relative flex flex-col w-full">
            <Navbar />
            <div className="flex w-[calc(100vw)] lg:w-[calc(100vw-200px)] absolute">
              {children}
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

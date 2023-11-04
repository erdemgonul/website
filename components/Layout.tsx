import Link from "next/link";
import ThemeChanger from "./ThemeChanger";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      {/* <div className="hidden lg:block rightbar fixed left-0 top-0 z-50 w-[50px] md:w-[200px] h-screen transition-all duration-[400ms] bg-indigo-400">
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
                aria-label={link}
              >
                <Icon fill="#151515" width={48} height={48} />
              </Link>
            ))}
          </div>
        </div>
      </div> */}
      <Navbar />
      {children}

      {/* <Footer /> */}
    </>
  );
}

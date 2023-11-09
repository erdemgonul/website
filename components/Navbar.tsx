"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavbar from "./MobileNavbar";
import Github from "public/svg/github.svg";
import Linkedin from "public/svg/linkedin.svg";
import Twitter from "public/svg/twitter.svg";
import Medium from "public/svg/medium.svg";

const NAVBAR_LINKS = [
  { link: "/blog", name: "Blog" },
  { link: "/projects", name: "Projects" },
  { link: "/about", name: "About" },
];

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

const NavLink = ({ link, name, active, theme }) => (
  <li>
    <Link
      href={link}
      className={classNames(
        "font-semibold uppercase tracking-widest whitespace-nowrap text-base self-center flex link-border link link-animation",
        {
          "text-black": theme === "light",
          "text-[#bfbfbf]": theme === "dark",
          "!text-red border-b border-red px-2": active,
        }
      )}
    >
      {name}
    </Link>
  </li>
);

export default function Navbar({ theme = "dark" }) {
  const currentRoute = usePathname();

  return (
    <nav
      className={classNames("flex w-full md:py-12", {
        "bg-white": theme === "light",
        "bg-black": theme === "dark",
      })}
    >
      <div className="hidden md:flex mx-auto  items-center justify-between  w-full md:max-w-screen-xl">
        <Link
          href={"/"}
          aria-label="homepage"
          className={classNames(
            "text-xl font-medium w-fit whitespace-nowrap items-center",
            {
              "text-black": theme === "light",
              "text-[#bfbfbf]": theme === "dark",
            }
          )}
        >
          {currentRoute !== "/" && "Erdem Gönül"}
        </Link>
        <div></div>
        <ul className="flex items-center gap-x-8">
          {NAVBAR_LINKS.map((link) => (
            <NavLink
              link={link.link}
              name={link.name}
              active={currentRoute === link.link}
              key={link.link}
              theme={theme}
            />
          ))}
        </ul>

        <div className="justify-center items-center  md:space-x-6 flex">
          {SOCIAL_LINKS.map(({ link, Icon }) => (
            <Link
              key={link}
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={link}
            >
              <Icon
                fill={theme === "light" ? "#000000" : "#ffffff"}
                width={36}
                height={36}
              />
            </Link>
          ))}
        </div>
      </div>
      <MobileNavbar theme={theme} />
    </nav>
  );
}

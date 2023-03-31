"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavbar from "./MobileNavbar";

const NAVBAR_LINKS = [
  { link: "https://erdemgonul.medium.com/", name: "Blog", newTab: true },
  { link: "/projects", name: "Projects" },
  { link: "/#about", name: "About" },
  { link: "/#contact", name: "Contact" },
];

const NavLink = ({ link, name, active, newTab = false }) => (
  <li>
    <Link
      href={link}
      {...(newTab && {
        target: "_blank",
        rel: "noreferrer noopener",
      })}
      className={classNames(
        "lowercase font-normal tracking-wider whitespace-nowrap text-xl xl:text-2xl self-center flex link-border link link-animation",
        {
          "text-indigo-400 border-b border-indigo-400 px-2": active,
          "text-color": !active,
        }
      )}
    >
      {name}
    </Link>
  </li>
);

export default function Navbar() {
  const currentRoute = usePathname();

  return (
    <nav className="fixed top-[0px]  lg:left-[200px] flex w-full lg:max-w-[calc(100vw-240px)] max-w-[calc(100vw-40px)]  z-[10] background-color ">
      <div className="hidden h-[80px] md:flex mx-auto  items-center justify-between  w-full px-4 lg:px-20 2xl:px-20">
        <Link
          href={"/"}
          className="text-color font-light text-2xl w-fit whitespace-nowrap items-center"
        >
          {currentRoute !== "/" && "> Erdem Gönül"}
        </Link>
        <ul className="flex items-center w-full justify-end gap-x-8">
          {NAVBAR_LINKS.map((link) => (
            <NavLink
              link={link.link}
              name={link.name}
              active={currentRoute === link.link}
              key={link.link}
              newTab={link.newTab}
            />
          ))}
        </ul>
      </div>
      <MobileNavbar />
    </nav>
  );
}

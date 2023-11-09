"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAVBAR_LINKS = [
  { link: "/", name: "Home" },
  { link: "/blog", name: "Blog" },
  { link: "/projects", name: "Projects" },
  { link: "/about", name: "About" },
];

const MobileNavLink = ({ link, mobileName, active, theme, newTab = false }) => (
  <li>
    <Link
      href={link}
      className={classNames(
        "tracking-wider font-medium capitalize text-3xl hover:border-red hover:border-b-2 border-white",
        {
          "text-primary border-red border-b-2": active,
          [theme === "dark" ? "text-[#bfbfbf]" : "text-black"]: !active,
        }
      )}
      {...(newTab && {
        target: "_blank",
        rel: "noreferrer noopener",
      })}
    >
      {mobileName}
    </Link>
  </li>
);

export default function MobileNavbar({ theme = "dark" }) {
  const [showModal, setShowModal] = useState(false);
  const currentRoute = usePathname();

  console.log({ theme });

  useEffect(() => {
    showModal && setShowModal(false);
    //eslint-disable-next-line
  }, [currentRoute]);

  return (
    <>
      <div className="px-4 flex md:hidden h-[80px] justify-between w-full items-center z-50">
        <Link
          href="/"
          className={classNames("font-medium text-3xl text-white", {
            "text-black": theme === "light",
            "text-white": theme === "dark",
          })}
        >
          {currentRoute !== "/" && "Erdem Gönül"}
        </Link>
        <div
          className="flex flex-col justify-between w-[36px] h-[14px] z-20"
          onClick={() => setShowModal(!showModal)}
        >
          <div
            className={classNames("w-full h-[3px] rounded-lg", {
              "bg-black": theme === "light",
              "bg-white": theme === "dark",
            })}
          ></div>
          <div
            className={classNames("w-full h-[3px] rounded-lg", {
              "bg-black": theme === "light",
              "bg-white": theme === "dark",
            })}
          ></div>
        </div>
      </div>
      <div
        className={classNames("flex md:hidden modal-body", {
          open: showModal,
          "bg-white": theme === "light",
          "bg-black": theme === "dark",
        })}
      >
        <ul className="flex flex-col gap-y-6 ml-8 justify-center h-full">
          {NAVBAR_LINKS.map((link) => (
            <MobileNavLink
              link={link.link}
              mobileName={link.name}
              active={currentRoute === link.name}
              key={link.link}
              theme={theme}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAVBAR_LINKS = [
  { link: "https://erdemgonul.medium.com/", name: "Blog", newTab: true },
  { link: "/projects", name: "Projects" },
  { link: "/#about", name: "About" },
  { link: "/#contact", name: "Contact" },
];

const MobileNavLink = ({ link, mobileName, active, newTab = false }) => (
  <li>
    <Link
      href={link}
      className={classNames(
        "tracking-04 font-light capitalize text-2xl text-color hover:border-primary hover:border-b-2 border-white",
        {
          "text-primary border-primary border-b-2": active,
          "text-color": !active,
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

export default function MobileNavbar() {
  const [showModal, setShowModal] = useState(false);
  const currentRoute = usePathname();

  useEffect(() => {
    showModal && setShowModal(false);
    //eslint-disable-next-line
  }, [currentRoute]);

  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", appHeight);
    appHeight();

    return () => {
      window.removeEventListener("resize", appHeight);
    };
  }, []);

  return (
    <>
      <div className="h-[80px] px-3 flex md:hidden justify-between w-full items-center z-50">
        <Link href="/" className="tracking-04 font-light text-xl text-color">
          {"Erdem Gönül"}
        </Link>
        <div
          className="flex flex-col justify-between w-[30px] h-[10px] z-20"
          onClick={() => setShowModal(!showModal)}
        >
          <div className="w-full h-[1px] bg-white"></div>
          <div className=" w-full h-[1px] bg-white"></div>
        </div>
      </div>
      <div
        className={classNames("flex md:hidden modal-body", {
          open: showModal,
        })}
      >
        <ul className="flex flex-col gap-y-2 ml-8 justify-center h-full">
          {NAVBAR_LINKS.map((link) => (
            <MobileNavLink
              link={link.link}
              mobileName={link.name}
              active={currentRoute === link.name}
              key={link.link}
              newTab={link.newTab}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

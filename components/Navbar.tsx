import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ThemeChanger from "./ThemeChanger";

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
        "lowercase font-normal tracking-wider whitespace-nowrap text-2xl self-center flex link-border link-animation",
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

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  useEffect(() => {
    showModal && setShowModal(false);
    //eslint-disable-next-line
  }, [router]);

  return (
    <nav className="fixed right-0 left-0 md:left-[200px] top-0 flex h-[80px]  z-[10] background-color mx-4">
      <div className="hidden md:flex mx-auto  items-center justify-between  w-full max-w-screen-xl px-20 2xl:px-0">
        <Link
          href={"/"}
          className="text-color font-light text-2xl w-full items-center"
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
    </nav>
  );
}

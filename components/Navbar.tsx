import { CATEGORIES } from "@/constants";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NavLink = ({ link, name, active }) => (
  <li>
    <Link
      href={link}
      className={classNames(
        "nav-animation lowercase font-semibold tracking-wider whitespace-nowrap text-2xl self-center flex",
        {
          "text-indigo-400 border-b border-indigo-400 px-2": active,
          "text-white": !active,
        }
      )}
    >
      {name}
    </Link>
  </li>
);

const MobileNavLink = ({ link, mobileName, active }) => (
  <li>
    <Link
      href={link}
      className={classNames(
        "tracking-04 font-medium capitalize text-3xl text-black hover:border-primary hover:border-b-2 border-black",
        {
          "text-primary border-primary border-b-2": active,
          "text-black": !active,
        }
      )}
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
  }, [router.pathname]);

  return (
    <nav className="fixed right-0 left-0 md:left-[200px] top-0 flex h-[100px]  z-[10] bg-black mx-4">
      <div className="hidden md:flex mx-auto  items-center  w-full max-w-screen-xl px-20 2xl:px-0">
        <ul className="flex items-center w-full justify-end gap-x-8">
          <NavLink
            link="/blog"
            name="Blog"
            active={currentRoute === "/blog"}
            key="/blog"
          />
          <NavLink
            link="/projects"
            name="Projects"
            active={currentRoute === "/projects"}
            key="/projects"
          />
          <NavLink
            link="/#about"
            name="About Me"
            active={currentRoute === "/about"}
            key="/about"
          />
          <NavLink
            link="/#contact"
            name="Contact"
            active={currentRoute === "/contact"}
            key="/contact"
          />
        </ul>
      </div>
      <div className="h-[100px] px-5 flex md:hidden justify-between w-full items-center z-50">
        <Link href="/" className="tracking-04 font-normal text-2xl text-white">
          {"Erdem Gönül"}
        </Link>
        <div
          className="flex  flex-col justify-between w-[40px] h-[10px] z-20"
          onClick={() => setShowModal(!showModal)}
        >
          <div className="w-full h-[2px] bg-black"></div>
          <div className=" w-full h-[2px] bg-black"></div>
        </div>
      </div>
      <div
        className={classNames("flex md:hidden modal-body", {
          open: showModal,
        })}
      >
        <ul className="flex flex-col  gap-y-2 ml-8 justify-center  h-full">
          {CATEGORIES.map((route) => (
            <MobileNavLink
              {...route}
              active={currentRoute === route.link}
              key={route.link}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}

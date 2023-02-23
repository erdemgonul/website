import Link from "next/link";
import ScrollButton from "../ScrollButton";

const PortfolioSection = () => (
  <section className="home-section" id="portfolio">
    <div className="max-w-screen-xl  absolute left-0 right-0 md:flex md:flex-col md:mx-auto h-full">
      <div className="flex flex-col h-full justify-center">
        <Link
          href="/projects"
          className="text-white text-base md:text-xl leading-[1.5] font-light hover:text-orange-500"
        >
          - I have developed many side projects and freelance jobs so far.{" "}
        </Link>
        <Link
          href="/projects"
          className="mt-8 text-white text-base md:text-xl leading-[1.5] font-light hover:text-orange-500"
        >
          -{" "}
          <span className=" underline underline-offset-8">
            Click to view my portfolio
          </span>
        </Link>
        <a
          href="https://www.github.com/erdemgonul"
          target="_blank"
          rel="noreferrer"
          className="mt-8 text-white text-base md:text-xl leading-[1.5] font-light hover:text-orange-500"
        >
          - You can also check my{" "}
          <span className="underline underline-offset-8">Github profile.</span>
        </a>
      </div>
    </div>
    <ScrollButton nextSection="Contact" nextSectionId="contact" />
  </section>
);

export default PortfolioSection;

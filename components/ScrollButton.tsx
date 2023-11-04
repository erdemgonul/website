"use client";

import ArrowDown from "public/svg/arrow-down-solid.svg";

type Props = {
  nextSection: string;
  nextSectionId?: string;
};

const ScrollButton = ({ nextSection, nextSectionId }: Props) => {
  const handleScrollSection = () => {
    nextSectionId &&
      document
        .getElementById(nextSectionId)
        ?.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  return (
    <button
      className="scroll-button"
      onClick={handleScrollSection}
      name="scroll-button"
      aria-label="scroll-button"
    >
      <div className="max-w-screen-xl mx-auto w-full flex justify-center items-center gap-x-4 group">
        <span className="text-color text-base font-light cursor-pointer group-hover:text-orange-500">
          {nextSection}
        </span>
        <ArrowDown
          width={32}
          rotate={90}
          height={32}
          className="cursor-pointer dark:fill-white fill:black group-hover:fill-orange-500 transition-none"
        />
      </div>
    </button>
  );
};

export default ScrollButton;

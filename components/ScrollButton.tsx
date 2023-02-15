import ArrowDown from "public/svg/arrow-down-solid.svg";

type Props = {
  nextSection: string;
};

const ScrollButton = ({ nextSection }: Props) => (
  <div className=" absolute bottom-[30px] right-0 w-full">
    <div className="max-w-screen-xl mx-auto w-full flex justify-center items-center gap-x-4">
      <span className="text-white text-base font-light cursor-pointer">
        {nextSection}
      </span>
      <ArrowDown
        width={32}
        height={32}
        fill="white"
        className="cursor-pointer"
      />
    </div>
  </div>
);

export default ScrollButton;

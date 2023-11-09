import classNames from "classnames";
import Image from "next/image";

export const PostMdxComponents = {
  Image: ({ contain = true, cover = false, ...props }: any) => (
    <div className="h-[250px] md:h-[500px] !my-4 relative">
      <Image
        alt="sample photo"
        {...props}
        fill
        className={classNames("!mt-0 !mb-0", {
          "object-contain": contain,
          "object-cover": cover,
        })}
      />
    </div>
  ),
  Title: (props: any) => (
    <h1 className="text-black !mb-4 md:!mb-6 text-[44px] leading-[1.1] md:text-6xl font-extrabold">
      {props.text}
    </h1>
  ),
  Date: (props: any) => (
    <h5 className="text-slate-300  font-semibold md:font-medium text-lg md:text-sm tracking-widest mb-6">
      {props.text}
    </h5>
  ),
  Subtitle: (props: any) => (
    <h4 className="font-medium text-zinc-500 !mb-0 !mt-0 md:text-2xl">
      {props.text}
    </h4>
  ),
  Subheader: (props: any) => (
    <h4 className="font-semibold text-black md:!my-12 !text-xl">
      {props.text}
    </h4>
  ),
  SubSubheader: (props: any) => (
    <h5 className="font-semibold text-black md:!my-12 !text-lg">
      {props.text}
    </h5>
  ),
  Quote: (props: any) => (
    <h5 className="ml-2 md:ml-4 border-l border-gray-400 py-1 md:py-3 px-4 text-slate-500 font-light text-base tracking-widest mb-6">
      {props.text}
    </h5>
  ),
  Youtube: ({ id }) => {
    return (
      <div className="my-8 md:my-20">
        <iframe
          width="100%"
          height="450"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    );
  },
};

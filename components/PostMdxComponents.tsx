import classNames from "classnames";
import Image from "next/image";

export const PostMdxComponents = {
  Image: ({ mobile, ...props }) => {
    return (
      <div></div>
      // <div
      //   className={classNames("my-16 w-1/2", {
      //     "md:!w-1/4": !!props.mobile,
      //   })}
      // >
      //   <img
      //     alt="sample photo"
      //     {...props}
      //     style={{ objectFit: "contain" }}
      //     className="!mt-0 !mb-0"
      //   />
      // </div>
    );
  },
  Title: (props: any) => (
    <div className="flex items-center">
      <div className="w-2 h-2 bg-white rounded-full shrink-0 mr-8"></div>
      <h1 className="text-white   text-3xl font-normal md:text-2xl md:font-light">
        {props.text}
      </h1>
    </div>
  ),
  Text: (props: any) => (
    <p className="mt-4 text-gray-400  ml-10 text-xl font-normal md:text-lg md:font-light">
      {props.text}
    </p>
  ),
  Date: (props: any) => (
    <h5 className="text-slate-500 font-light text-sm tracking-widest mb-6">
      {props.text}
    </h5>
  ),
  Subtitle: (props: any) => (
    <h4 className="hidden md:block font-light text-zinc-500 !mb-0 !mt-0md:text-2xl">
      {props.text}
    </h4>
  ),
  Quote: (props: any) => (
    <h5 className="ml-2 md:ml-4 border-l border-gray-400 py-1 md:py-3 px-4 text-slate-500 font-light text-base tracking-widest mb-6">
      {props.text}
    </h5>
  ),
};

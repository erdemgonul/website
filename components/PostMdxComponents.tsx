import Image from "next/image";

// text-[44px] leading-[1.1] font-normal
export const PostMdxComponents = {
  Image: (props: any) => (
    <div className="!my-10 relative md:w-full md:h-[300px]">
      <Image alt="sample photo" {...props} fill className="!mt-0 !mb-0" />
    </div>
  ),
  Title: (props: any) => (
    <div className="flex items-center">
      <div className="w-8 h-1 bg-indigo-400 rounded-full shrink-0 mr-8"></div>
      <h1 className="text-white   text-3xl font-normal md:text-3xl md:font-normal">
        {props.text}
      </h1>
    </div>
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

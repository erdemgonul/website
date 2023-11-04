import Image from "next/image";

export const PostMdxComponents = {
  Image: (props: any) => (
    <div className="bg-[#1B1D1F] h-[250px] md:h-[500px] !my-10 relative">
      <Image
        alt="sample photo"
        {...props}
        fill
        className="!mt-0 !mb-0 object-cover"
      />
    </div>
  ),
  Title: (props: any) => (
    <h1 className="text-zinc-800  md:!mb-12 text-[44px] leading-[1.1] font-normal md:text-6xl md:font-extrabold">
      {props.text}
    </h1>
  ),
  Date: (props: any) => (
    <h5 className="text-black font-normal text-sm tracking-widest mb-6">
      {props.text}
    </h5>
  ),
  Subheader: (props: any) => (
    <h4 className="font-normal text-black !my-12 !text-2xl md:!text-3xl">
      {props.text}
    </h4>
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

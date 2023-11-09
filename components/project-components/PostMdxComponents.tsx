export const PostMdxComponents = {
  Title: (props: any) => (
    <div className="flex items-center">
      <h2 className="text-[#bfbfbf] text-xl font-normal group-hover:text-red">
        {props.text}
      </h2>
    </div>
  ),
  Text: (props: any) => (
    <p className="mt-2 md:mt-4 text-[#bfbfbf] text-base font-normal group-hover:text-red">
      {props.text}
    </p>
  ),
};

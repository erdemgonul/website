export const PostMdxComponents = {
  Title: (props: any) => (
    <div className="flex items-center">
      <h2 className="text-white text-xl tracking-widest font-normal group-hover:text-red">
        {props.text}
      </h2>
    </div>
  ),
  Text: (props: any) => (
    <p className="mt-4 text-gray-400 text-base font-normal group-hover:text-red">
      {props.text}
    </p>
  ),
};

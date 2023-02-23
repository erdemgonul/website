export const PostMdxComponents = {
  Title: (props: any) => (
    <div className="flex items-center">
      <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-white rounded-full shrink-0 mr-4 md:mr-8"></div>
      <h1 className="text-white text-lg font-light md:text-2xl md:font-light">
        {props.text}
      </h1>
    </div>
  ),
  Text: (props: any) => (
    <p className="mt-2 md:mt-4 text-gray-400  ml-6 md:ml-10 text-sm font-light md:text-lg md:font-light">
      {props.text}
    </p>
  ),
};

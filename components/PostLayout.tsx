import { MDXRemote } from "next-mdx-remote";
import { PostMdxComponents } from "components/PostMdxComponents";

type Props = {
  mdxSource: any;
};

const PostLayout = ({ mdxSource }: Props) => {
  return (
    <main className="mx-4 md:mx-auto pt-8 pb-16 md:pt-16 md:pb-24 bg-white">
      <div className="prose prose-lg md:prose-2xl mx-auto">
        <MDXRemote {...mdxSource} components={PostMdxComponents} />
      </div>
    </main>
  );
};

export default PostLayout;

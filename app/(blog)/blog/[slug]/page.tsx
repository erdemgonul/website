import { PostMdxComponents } from "@/components/blog/PostMdxComponents";
import {
  generateDynamicBlogPosts,
  getBlogPostContent,
} from "@/helpers/blog-helpers";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import BackIcon from "public/svg/back.svg";

export default async function BlogPost({ params: { slug } }) {
  const { mdxSource } = await getBlogPostContent(slug);

  return (
    <main className="mx-4 md:mx-auto pt-8 pb-16 bg-white prose prose-lg">
      <Link
        href="/blog"
        className="flex items-center gap-x-2 text-base no-underline font-bold md:font-semibold"
      >
        <BackIcon className="transform rotate-90" />
        Back to Posts
      </Link>
      <div className="mt-8 md:mt-16 prose prose-lg mx-auto prose-p:font-normal prose-p:text-gray-800">
        {/* @ts-expect-error Server Component */}
        <MDXRemote
          source={mdxSource}
          components={{ ...PostMdxComponents, ...{} }}
        />
      </div>
    </main>
  );
}

export const generateStaticParams = async () => {
  const { paths } = generateDynamicBlogPosts();
  console.log(paths);

  return paths;
};

export const generateMetadata = async ({ params: { slug } }) => {
  const { frontMatter } = await getBlogPostContent(slug);

  return {
    title: frontMatter.title,
    description: frontMatter.description,
  };
};

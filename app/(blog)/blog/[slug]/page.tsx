import { PostMdxComponents } from "@/components/blog/PostMdxComponents";
import {
  generateDynamicBlogPosts,
  getBlogPostContent,
} from "@/helpers/blog-helpers";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import BackIcon from "public/svg/back.svg";

export const metadata: Metadata = {
  title: "My Page Title",
  description: "Test",
};

export default async function BlogPost({ params: { slug } }) {
  const { mdxSource } = await getBlogPostContent(slug);

  return (
    <main className="mx-4 md:mx-auto pt-8 pb-16 bg-white prose prose-2xl">
      <Link
        href="/blog"
        className="flex items-center gap-x-2 text-base no-underline font-semibold"
      >
        <BackIcon className="transform rotate-90" />
        Back to Posts
      </Link>
      <div className="mt-32 prose prose-2xl mx-auto prose-p:font-normal prose-p:text-gray-800">
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
  return paths;
};

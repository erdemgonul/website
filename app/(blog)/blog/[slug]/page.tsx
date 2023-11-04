import { PostMdxComponents } from "@/components/blog/PostMdxComponents";
import {
  generateDynamicBlogPosts,
  getBlogPostContent,
} from "@/helpers/blog-helpers";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

export const metadata: Metadata = {
  title: "My Page Title",
  description: "Test",
};

export default async function BlogPost({ params: { slug } }) {
  const { mdxSource } = await getBlogPostContent(slug);

  return (
    <main className="mx-4 md:mx-auto pt-8 pb-16 bg-white">
      <div className="prose prose-lg mx-auto prose-p:font-normal prose-p:text-gray-800">
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

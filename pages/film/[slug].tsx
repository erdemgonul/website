import Head from "next/head";
import { generateDynamicPosts, getPostContent } from "@/helpers/post-helpers";
import PostLayout from "@/components/PostLayout";

export default function Post({
  frontMatter: { title, description },
  mdxSource,
}) {
  return (
    <>
      <Head>
        <title>{title} | Fırtınadan Notlar</title>
        <meta name="description" content={description || ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostLayout mdxSource={mdxSource} />
    </>
  );
}

export const getStaticPaths = async () => generateDynamicPosts("film");

export const getStaticProps = async ({ params: { slug } }) =>
  await getPostContent("film", slug);

import Head from "next/head";

import { getProjects } from "@/helpers/post-helpers";
import { MDXRemote } from "next-mdx-remote";
import { PostMdxComponents } from "@/components/PostMdxComponents";

export default function Portfolio({ projects }) {
  return (
    <>
      <Head>
        <title>Portfolio | Erdem Gönül</title>
        <meta
          name="description"
          content="Hayatımızdaki fırtınalar beynimizdeki her şeyi götürse de bunlar kalsın dediğimiz düşünceler. Filmler, tiyatrolar, müzikler ve ilginç olduğunu sandığımız fikirlerimiz..."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="portfolio h-full flex flex-col">
        <div className=" max-w-screen-xl w-full h-full flex flex-col mx-auto">
          <h1 className="my-32 text-white font-bold text-5xl">My Portfolio</h1>
          {(projects || []).map(({ props }) => (
            <div className="flex flex-col h-full justify-center  mx-auto text-white font-bold">
              <MDXRemote {...props.mdxSource} components={PostMdxComponents} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
};

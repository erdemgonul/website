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
          <h1 className="mt-12 mb-32 text-white font-bold text-5xl">
            My Portfolio
          </h1>
          <ul className="flex flex-col gap-y-4 ml-2 list-disc list-inside flex-wrap">
            {(projects || []).map(({ props }, i) => (
              <li
                className={
                  "portfolio-item ml-8 flex  text-white text-sm font-bold md:w-1/2 mt-4 self-start"
                }
                key={i}
              >
                <div className="flex flex-col">
                  <MDXRemote
                    {...props.mdxSource}
                    components={PostMdxComponents}
                  />
                </div>
              </li>
            ))}
          </ul>
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

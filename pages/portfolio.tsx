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
      <div className="portfolio h-full flex flex-col pt-[150px]">
        <div className=" max-w-screen-xl w-full h-full flex flex-col mx-auto">
          <h1 className="mt-12 mb-8 text-white font-bold text-5xl">
            My Portfolio
          </h1>
          <ul className="portfolio-body">
            {(projects || []).map(({ props }, i: number) => (
              <section
                className={
                  "portfolio-item ml-2 flex flex-col text-white text-sm font-bold justify-center"
                }
                key={i}
              >
                <MDXRemote
                  {...props.mdxSource}
                  components={PostMdxComponents}
                />
              </section>
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

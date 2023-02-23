import Head from "next/head";

import { getProjects } from "@/helpers/post-helpers";
import { MDXRemote } from "next-mdx-remote";
import { PostMdxComponents } from "@/components/PostMdxComponents";
import Link from "next/link";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Portfolio({ projects }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState();

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
      <div className="portfolio h-full w-full flex flex-col pt-[100px] md:pt-[150px] mb-20">
        <div className="md:max-w-screen-xl w-full h-full flex flex-col mx-auto">
          <h1 className="mb-12 md:mb-20 text-white font-light border-b border-gray-300 pb-4 px-3 text-2xl md:text-4xl">
            Projects
          </h1>
          <ul className="portfolio-body">
            {(projects || []).map(({ props }, i: number) => {
              console.log(props);
              if (props.image) {
                return (
                  <div
                    className="portfolio-item"
                    key={i}
                    onClick={() => {
                      setImage(props.image);
                      setModalVisible(true);
                    }}
                  >
                    <MDXRemote
                      {...props.mdxSource}
                      components={PostMdxComponents}
                    />
                  </div>
                );
              } else {
                return (
                  <Link
                    className="portfolio-item"
                    key={i}
                    href={props.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MDXRemote
                      {...props.mdxSource}
                      components={PostMdxComponents}
                    />
                  </Link>
                );
              }
            })}
          </ul>
        </div>
      </div>
      {modalVisible && (
        <Modal image={image} handleCloseModal={() => setModalVisible(false)} />
      )}
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

import { getProjects } from "@/helpers/post-helpers";
import { MDXRemote } from "next-mdx-remote";
import { PostMdxComponents } from "@/components/PostMdxComponents";
import Link from "next/link";
import Modal from "@/components/Modal";
import { useState } from "react";

export const metadata = {
  title: "Projects | Erdem Gönül",
  description:
    "browse my latest projects and discover my expertise in creating engaging and responsive user interfaces that leave a lasting impression.",
};

const fetchProjects = async () => {
  const projects = await getProjects();

  return projects;
};

export default async function Portfolio() {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState({ src: undefined, mobile: false });

  const projects = await fetchProjects();
  return (
    <>
      <div className="portfolio h-full w-full flex flex-col pt-[100px] md:pt-[150px] pb-20">
        <div className="md:max-w-screen-xl w-full h-full flex flex-col mx-auto">
          <h1 className="mb-12 md:mb-20 text-color font-light border-b border-gray-300 pb-4 px-3 text-2xl md:text-4xl">
            Projects
          </h1>
          <ul className="portfolio-body">
            {(projects || []).map(({ props }, i: number) => {
              if (props.image) {
                return (
                  <div
                    className="portfolio-item"
                    key={i}
                    onClick={() => {
                      setImage({ src: props.image, mobile: props.mobile });
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
        <Modal
          image={image.src}
          horizontal={!image.mobile}
          handleCloseModal={() => setModalVisible(false)}
        />
      )}
    </>
  );
}

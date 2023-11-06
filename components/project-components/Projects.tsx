"use client";

import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import { PostMdxComponents } from "./PostMdxComponents";

export default function Projects({ projects }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState({ src: undefined, mobile: false });

  return (
    <>
      <ul className="md:mt-12 w-full flex flex-col md:ml-2 list-disc list-inside items-start gap-y-6 md:gap-y-8">
        {(projects || []).map(({ props }, i: number) => {
          if (props.image) {
            return (
              <div
                className="flex flex-col text-white  text-xs md:text-sm font-normal md:font-bold justify-center cursor-pointer group"
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
                className="flex flex-col text-white  text-xs md:text-sm font-normal md:font-bold justify-center cursor-pointer group"
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

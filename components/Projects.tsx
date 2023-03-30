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

"use client";

import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import { PostMdxComponents } from "./PostMdxComponents";
import Image from "next/image";

export default function Projects({ projects }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState({ src: undefined, mobile: false });

  return (
    <>
      <ul className="mt-8 md:mt-12 w-full flex flex-col md:ml-2 list-disc list-inside items-start gap-y-6 md:gap-y-8">
        {(projects || []).map(({ props }, i: number) => {
          if (props.image) {
            return (
              <div
                className="flex flex-col text-[#bfbfbf]  text-xs md:text-sm font-normal md:font-bold justify-center cursor-pointer group"
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
          } else if (props.appstoreLink || props.playstoreLink) {
            return (
              <div
                className="flex flex-col text-[#bfbfbf]  text-xs md:text-sm font-normal md:font-bold justify-center cursor-pointer group"
                key={i}
              >
                <MDXRemote
                  {...props.mdxSource}
                  components={PostMdxComponents}
                />
                <div className="flex items-center mt-2">
                  {props.appstoreLink && (
                    <Link
                      href={props.appstoreLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/appstore-badge.png"
                        width={120}
                        height={40}
                        alt="appstore-badge"
                      />
                    </Link>
                  )}
                  {props.playstoreLink && (
                    <Link
                      href={props.playstoreLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/googleplay-badge.png"
                        width={140}
                        height={40}
                        alt="playstore-badge"
                      />
                    </Link>
                  )}
                </div>
              </div>
            );
          } else {
            return (
              <Link
                className="flex flex-col text-[#bfbfbf]  text-xs md:text-sm font-normal md:font-bold justify-center cursor-pointer group"
                key={i}
                href={props.link || ""}
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

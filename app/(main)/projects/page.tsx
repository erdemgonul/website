import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { PostMdxComponents } from "@/components/project-components/PostMdxComponents";
import Image from "next/image";
import { getProjects } from "@/helpers/project-helpers";

export const metadata = {
  title: "Projects",
  description:
    "browse my latest projects and discover my expertise in creating engaging and responsive user interfaces that leave a lasting impression.",
};

export default async function Portfolio() {
  const projects = await getProjects();

  return (
    <div className="md:max-w-screen-md w-full h-full flex flex-col px-4 md:px-0 md:mx-auto pt-12 md:pt-24 pb-24">
      <h1 className="mb-4 text-[#bfbfbf] font-medium border-b-2 border-gray-300 pb-2 text-2xl">
        Projects
      </h1>
      <ul className="mt-8 md:mt-12 w-full flex flex-col md:ml-2 list-disc list-inside items-start gap-y-6 md:gap-y-8">
        {(projects || []).map((project: any, i: number) => {
          const { props } = project;
          if (props.image) {
            return (
              <div
                className="flex flex-col text-[#bfbfbf] text-xs md:text-sm font-normal md:font-bold justify-center cursor-pointer group"
                key={i}
              >
                <MDXRemote source={props.content} components={PostMdxComponents} />
              </div>
            );
          } else if (props.appstoreLink || props.playstoreLink) {
            return (
              <div
                className="flex flex-col text-[#bfbfbf] text-xs md:text-sm font-normal md:font-bold justify-center cursor-pointer group"
                key={i}
              >
                <MDXRemote source={props.content} components={PostMdxComponents} />
                <div className="flex items-center mt-2">
                  {props.appstoreLink && (
                    <Link href={props.appstoreLink} target="_blank" rel="noreferrer">
                      <Image
                        src="/appstore-badge.png"
                        width={120}
                        height={40}
                        alt="appstore-badge"
                      />
                    </Link>
                  )}
                  {props.playstoreLink && (
                    <Link href={props.playstoreLink} target="_blank" rel="noreferrer">
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
                className="flex flex-col text-[#bfbfbf] text-xs md:text-sm font-normal md:font-bold justify-center cursor-pointer group"
                href={props.link || ""}
                key={i}
                target="_blank"
                rel="noreferrer"
              >
                <MDXRemote source={props.content} components={PostMdxComponents} />
              </Link>
            );
          }
        })}
      </ul>
    </div>
  );
}

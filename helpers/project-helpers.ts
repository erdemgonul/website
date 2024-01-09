import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

const projectsPath = (_path?: string) =>
  path.join(process.cwd(), "public", "projects", _path || "");

const parseProjectMdx = async (fileName: string) => {
  const markdownWithMeta = fs.readFileSync(projectsPath(fileName), "utf-8");
  const {
    content,
    data: { image, link, mobile, appstoreLink, playstoreLink },
  } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      mdxSource,
      image,
      link,
      appstoreLink,
      playstoreLink,
      mobile: mobile || false,
    },
  };
};

export const getProjects = async () => {
  const projectsFolder = fs.readdirSync(projectsPath());

  const allProjects: any = [];

  for (let i = 0; i < projectsFolder.length; i++) {
    const parsedFile = await parseProjectMdx(projectsFolder[i]);
    allProjects.push(parsedFile);
  }

  return allProjects;
};

import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { PostItemType } from "@/types";

const blogsPath = (_path?: string) =>
  path.join(process.cwd(), "public", "blog-posts", _path || "");

const parseMdxFile = (fileName: string) => {
  const slug = fileName.replace(".mdx", "");

  const fileContents = fs.readFileSync(blogsPath(`${slug}.mdx`), "utf8");
  const {
    data: { title, category, thumbnailUrl, date = "", authors = "" },
  } = matter(fileContents);

  return {
    slug,
    title,
    category,
    thumbnailUrl,
    date,
    authors,
  };
};

export const getBlogs = (): PostItemType[] => {
  const postsFolder = fs.readdirSync(blogsPath());

  const allPosts: PostItemType[] = [];

  postsFolder.forEach((post) => {
    const parsedFile = parseMdxFile(post);
    allPosts.push(parsedFile);
  });

  return allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

export const getBlogPost = (slug: string) => {
  console.log({ slug });

  const fileContents = fs.readFileSync(blogsPath(`${slug}.mdx`), "utf8");
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};

export const getBlogPostContent = async (slug: string) => {
  const markdownWithMeta = fs.readFileSync(blogsPath(slug + ".mdx"), "utf-8");
  const { data: frontMatter, content } = matter(markdownWithMeta);
  return {
    frontMatter,
    slug,
    mdxSource: content,
  };
};

export const generateDynamicBlogPosts = () => {
  try {
    const files = fs.readdirSync(blogsPath());
    console.log({ files });

    const paths = files.map((filename) => ({
      params: {
        slug: filename.replace(".mdx", ""),
      },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return { paths: [], fallback: false };
  }
};

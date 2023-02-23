import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { PostItemType } from "@/types";
import { serialize } from "next-mdx-remote/serialize";

const postsPath = (_path?: string) =>
  path.join(process.cwd(), "public", "posts", _path || "");

const parseMdxFile = (fileName: string, filePath: string) => {
  const slug = fileName.replace(".mdx", "");

  const fileContents = fs.readFileSync(
    postsPath(`${filePath}/${slug}.mdx`),
    "utf8"
  );
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

export const getPosts = (): PostItemType[] => {
  const categories = fs.readdirSync(postsPath());

  const allPosts: PostItemType[] = [];

  categories.forEach((category) => {
    const categoryFolder = fs.readdirSync(postsPath(category));

    categoryFolder.forEach((post) => {
      const parsedFile = parseMdxFile(post, category);
      allPosts.push(parsedFile);
    });
  });

  return allPosts;
};

const getPageDatas = (posts: PostItemType[], postPerPage: number) => {
  return {
    totalCount: posts.length,
    totalPageCount: Math.ceil(posts.length / postPerPage),
    postPerPage,
  };
};

export const getPostsWithPagination = (
  allPosts: PostItemType[] = [],
  currentPage: number = 1,
  postPerPage: number = 9
) => {
  const { totalPageCount, totalCount } = getPageDatas(allPosts, postPerPage);

  return {
    posts: allPosts.slice(
      (currentPage - 1) * postPerPage,
      currentPage * postPerPage
    ),
    totalPageCount,
    totalCount,
  };
};

export const getPostsByCategory = (filteredCategory: string): PostItemType[] =>
  getPosts().filter(
    (post) => post.category === filteredCategory
  ) as PostItemType[];

export const getPostsByCategoryWithPagination = (
  filteredCategory: string,
  currentPage: number,
  postPerPage: number
) => {
  const categoryPosts = getPostsByCategory(filteredCategory);

  return getPostsWithPagination(categoryPosts, currentPage, postPerPage);
};

export const getPost = (slug: string) => {
  const fileContents = fs.readFileSync(postsPath(`${slug}.mdx`), "utf8");
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};

export const getPostContent = async (category: string, slug: string) => {
  const markdownWithMeta = fs.readFileSync(
    postsPath(category + "/" + slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export const generateDynamicPosts = (category: string) => {
  try {
    const files = fs.readdirSync(postsPath(category));
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

const projectsPath = (_path?: string) =>
  path.join(process.cwd(), "public", "projects", _path || "");

const parseProjectMdx = async (fileName: string) => {
  const markdownWithMeta = fs.readFileSync(projectsPath(fileName), "utf-8");
  const {
    content,
    data: { image, link },
  } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      mdxSource,
      image,
      link,
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

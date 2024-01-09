import { generateDynamicBlogPosts } from "@/helpers/blog-helpers";

const URL = "https://www.erdemgonul.com";

export default async function sitemap() {
  const { paths } = generateDynamicBlogPosts();

  const posts = paths.map(({ params }) => ({
    url: `${URL}/blog/${params.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ["", "/about", "/blog", "/projects"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}

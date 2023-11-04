import { getBlogs } from "@/helpers/blog-helpers";
import FeaturedPostItem from "@/components/blog/FeaturedPostItem";
import PostItem from "@/components/blog/PostItem";

export const metadata = {
  title: "Blog",
  description:
    "browse my latest projects and discover my expertise in creating engaging and responsive user interfaces that leave a lasting impression.",
};

export default async function Blog() {
  const blogPosts = getBlogs();

  const featuredPost = blogPosts?.[0];
  const posts = blogPosts?.slice?.(1) || [];

  return (
    <main className="mx-[10%] mt-20">
      <div className="flex flex-col">
        {featuredPost && <FeaturedPostItem post={featuredPost} />}

        <div className="flex mx-auto flex-col w-full mt-24">
          <div className="gap-y-12 gap-x-8 grid grid-cols-3">
            {posts.map((post) => (
              <PostItem post={post} key={post.slug} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

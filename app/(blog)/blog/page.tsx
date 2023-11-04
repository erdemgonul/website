import { getBlogs } from "@/helpers/blog-helpers";
import FeaturedPostItem from "@/components/blog/FeaturedPostItem";
import PostItem from "@/components/blog/PostItem";

export const metadata = {
  title: "Dev Blog | Erdem Gönül",
  description:
    "browse my latest projects and discover my expertise in creating engaging and responsive user interfaces that leave a lasting impression.",
};

export default async function Blog() {
  const blogPosts = getBlogs();

  const featuredPost = blogPosts?.[0];
  const posts = blogPosts.slice(1);

  return (
    <main className="mx-[10%]">
      <h1 className="mb-12 text-black text-center text-2xl font-semibold underline underline-offset-4">
        Articles
      </h1>
      <div className="flex flex-col">
        {featuredPost && <FeaturedPostItem post={featuredPost} />}

        <div className="flex mx-auto flex-col w-full">
          <div className="gap-y-12">
            {posts.map((post) => (
              <PostItem post={post} key={post.slug} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

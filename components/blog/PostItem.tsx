import { PostItemType } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: PostItemType;
};

const PostItem = ({ post: { slug, thumbnailUrl, title, date } }: Props) => (
  <Link
    href={`/blog/${slug}`}
    className="flex flex-col cursor-pointer group hover:bg-red rounded-lg p-6"
  >
    <div className="relative w-full flex rounded-lg aspect-[4/5]">
      <Image
        alt={slug}
        className="rounded-lg cover"
        fill
        src={thumbnailUrl}
        placeholder="empty"
      />
    </div>
    <div className="flex flex-col mt-4">
      <h4 className="text-lg font-semibold text-gray-400 group-hover:text-white">
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h4>
      <h4 className="mt-2 text-3xl font-semibold text-black group-hover:text-white">
        {title}
      </h4>
    </div>
  </Link>
);

export default PostItem;

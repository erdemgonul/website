import { PostItemType } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: PostItemType;
};

const PostItem = ({ post: { slug, thumbnailUrl, title, date } }: Props) => (
  <Link href={`/blog/${slug}`} className="flex bg-gray-100 rounded-lg p-12">
    <div className=" py-4 cursor-pointer flex bg-transparent w-full">
      <div className="flex flex-col mr-12 grow justify-between">
        <div className="flex flex-col gap-y-4">
          <h4 className="text-4xl font-medium text-black tracking-wider">
            {title}
          </h4>
          <h4 className="text-2xl font-medium text-gray-500">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h4>
        </div>

        <div className="text-xl font-medium">Read Full Article</div>
      </div>
      <div className="aspect-auto h-[230px] w-[400px] rounded-lg relative">
        <Image
          alt="movie-image"
          className="object-cover rounded-lg"
          fill
          src={thumbnailUrl}
        />
      </div>
    </div>
  </Link>
);

export default PostItem;

import { PostItemType } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: PostItemType;
};

const FeaturedPostItem = ({
  post: { slug, thumbnailUrl, title, date },
}: Props) => (
  <Link
    href={`/blog/${slug}`}
    className="flex md:bg-gray-100 rounded-lg p-4 md:p-12 md:border-4 border-gray-100 group hover:bg-red md:hover-bg-white md:hover:border-red md:hover:border-4"
  >
    <div className=" py-4 cursor-pointer flex md:flex-row flex-col gap-y-4 md:gap-y-0 bg-transparent w-full">
      <div className="flex flex-col md:mr-12 grow justify-between">
        <div className="flex flex-col gap-y-2 md:gap-y-4">
          <h4 className="text-3xl md:text-4xl font-semibold text-black md:tracking-wider group-hover:text-black">
            {title}
          </h4>
          <h4 className="text-xl font-medium text-gray-400 group-hover:text-black">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h4>
        </div>

        <div className="hidden md:block text-lg mt-4 md:mt-0 font-medium group-hover:text-black group-hover:underline">
          Read Full Article
        </div>
      </div>
      <div className="relative w-full flex rounded-lg aspect-[4/5] md:aspect-auto md:h-[230px] md:md:w-[400px]">
        <Image
          alt="post-image"
          className="object-cover rounded-lg"
          fill
          src={thumbnailUrl}
        />
      </div>
    </div>
  </Link>
);

export default FeaturedPostItem;

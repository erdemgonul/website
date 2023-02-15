import { PostItemType } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: PostItemType;
};

const PostItem = ({ post: { category, slug, thumbnailUrl, title } }: Props) => (
  <Link href={`/${category}/${slug}`} className="post-item group">
    <div className=" py-4 w-full cursor-pointer ">
      <div className="w-100 h-auto flex items-center">
        <Image
          alt="movie-image"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          src={thumbnailUrl}
        />
      </div>
      <div className="mt-4">
        <h4 className="text-2xl md:tracking-wider font-normal text-black">
          {title}
        </h4>
      </div>
      <div className="read-story mt-2 underline">Yazıyı Oku</div>
    </div>
  </Link>
);

export default PostItem;

import { PostItemType } from "@/types";
import Image from "next/image";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import PostItem from "./PostItem";
import PulpFiction from "public/pulp.webp";

type Props = {
  posts: PostItemType[];
  title: string;
  description: string;
  currentPage: number;
  totalPageCount: number;
  totalCount: number;
};

const PostsLayout = ({
  posts,
  title,
  description,
  currentPage = 1,
  totalPageCount,
}: Props) => {
  const router = useRouter();

  const scrollTo = () => {
    const el: any = document.querySelector("#posts");
    const y = el?.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const paginationHandler = (page: any) => {
    const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.page = page.selected + 1;

    router.push(
      {
        pathname: currentPath,
        query: currentQuery,
      },
      currentPath,
      { scroll: false }
    );

    scrollTo();
  };

  return (
    <main className="flex flex-col min-h-screen ">
      <div className="flex mx-auto flex-col h-full  w-full">
        <div className="hidden md:block bg-[#1B1D1F] h-[250px] md:h-[300px] relative overflow-y-hidden">
          <Image
            alt="firtinadannotlar.com pulp fiction"
            fill
            priority
            className="!h-full md:!h-auto opacity-[0.1]"
            src={PulpFiction}
          />
        </div>
        <h1
          id="posts"
          className="mt-10 md:mt-20 mb-2 md:mb-6 flex  w-full items-center justify-center text-3xl md:text-5xl text-center max-w-screen-xl mx-auto"
        >
          {title}
        </h1>
        <h1 className="flex  w-full items-center justify-center text-lg md:text-xl font-light text-center text-[#a8a29e] max-w-screen-xl mx-auto">
          {description}
        </h1>
        <div className="mx-4 md:mx-auto mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-3 md:gap-x-12 md:gap-y-0 flex-wrap max-w-screen-xl z-20 relative">
          {posts.map((post) => (
            <PostItem post={post} key={post.slug} />
          ))}
        </div>
        <ReactPaginate
          previousLabel={<div>{"< Öncesi"}</div>}
          nextLabel={<div>{"Sonrası >"}</div>}
          breakLabel={"..."}
          breakClassName={"break-me"}
          activeClassName={"active"}
          containerClassName={"pagination"}
          disableInitialCallback={true}
          initialPage={currentPage - 1}
          pageCount={totalPageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          onPageChange={paginationHandler}
        />
      </div>
    </main>
  );
};

export default PostsLayout;

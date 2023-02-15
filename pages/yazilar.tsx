import PostsLayout from "@/components/PostsLayout";
import { getPosts, getPostsWithPagination } from "@/helpers/post-helpers";
import { PostPageProps } from "@/types";
import Head from "next/head";

export default function Posts(props: PostPageProps) {
  return (
    <>
      <Head>
        <title>Yazılar | Fırtınadan Notlar</title>
        <meta
          name="description"
          content="Çok mu dertsiz duruyoruz uzaktan bakınca, çok mu kalender sandınız dert anlatmayınca?"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostsLayout {...props} title="Yazılar." description="Tüm Paylaşımlar" />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const page = query.page || 1;
  const { posts, totalCount, totalPageCount } = getPostsWithPagination(
    getPosts(),
    page,
    6
  );

  return {
    props: {
      posts,
      totalCount,
      totalPageCount,
      currentPage: page,
    },
  };
}

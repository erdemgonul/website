import { getPostsByCategoryWithPagination } from "helpers/post-helpers";
import { PostPageProps } from "@/types";
import Head from "next/head";
import PostsLayout from "@/components/PostsLayout";

export default function Posts(props: PostPageProps) {
  return (
    <>
      <Head>
        <title>Tiyatro | Fırtınadan Notlar</title>
        <meta
          name="description"
          content="Hayatımızdaki fırtınalar beynimizdeki her şeyi götürse de bunlar kalsın dediğimiz düşünceler. Filmler, tiyatrolar, müzikler ve ilginç olduğunu sandığımız fikirlerimiz..."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostsLayout
        {...props}
        title="Tiyatro Yazıları."
        description="Gidilen tiyatrolara dair karalamalar"
      />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const page = query.page || 1;
  const { posts, totalCount, totalPageCount } =
    getPostsByCategoryWithPagination("tiyatro", page, 9);

  return {
    props: {
      posts,
      totalCount,
      totalPageCount,
      currentPage: page,
    },
  };
}

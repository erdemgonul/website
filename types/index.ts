export type PostItemType = {
  slug: string;
  title: string;
  category: string;
  thumbnailUrl: string;
  date: number;
  authors: string;
};

export type PostPageProps = {
  posts: PostItemType[];
  totalCount: number;
  totalPageCount: number;
  currentPage: number;
};

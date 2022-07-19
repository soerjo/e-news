export type GetPostsResponse = {
  id: number;
  title: string;
  date: string;
  desc: string;
  image_url: string;
  categories: number;
};

export type GetPostsByIdResponse = {
  id: number;
  title: string;
  author: string;
  date: string;
  desc: string;
  image_url: string;
  image_desc: string;
};

export type GetCategoriesResponse = {
  id: number;
  name: string;
};

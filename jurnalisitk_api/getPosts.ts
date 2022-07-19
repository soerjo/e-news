import axios from "axios";
import { GetPostsByIdResponse, GetPostsResponse } from "../types";
import { getAuthorName } from "./getAuthor";

const baseUrl = "https://internal.jurnalistika.id/wp-json/wp/v2";
const postApi = axios.create({ baseURL: `${baseUrl}/posts` });

type getPostProps = {
  categorie?: number;
  search?: string;
  page?: number;
  per_page?: number;
};

export async function getPostsById(id: string): Promise<GetPostsByIdResponse> {
  const response = await postApi.get<any>(id);
  const author = await getAuthorName(response.data.author);

  return {
    id: response.data.id,
    title: response.data.title.rendered,
    author: author,
    date: response.data.date_gmt,
    desc: response.data.content.rendered,
    image_url: response.data.jetpack_featured_media_url,
    image_desc: response.data.yoast_head_json.schema["@graph"][1]["caption"],
  };
}

export async function getPosts(
  props: getPostProps
): Promise<GetPostsResponse[]> {
  const { categorie, page = 1, per_page = 10, search } = props;
  console.log(search);
  const response = await postApi.get<any[]>("", {
    params: {
      per_page,
      page,
      search,
      categories: categorie,
    },
  });

  return response.data.map(val => ({
    id: val.id,
    title: val.title.rendered,
    date: val.date_gmt,
    desc: val.excerpt.rendered,
    image_url: val.jetpack_featured_media_url,
    categories: val.categories[0],
  }));
}

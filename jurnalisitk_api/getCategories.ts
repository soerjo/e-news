import axios from "axios";
import { GetCategoriesResponse } from "../types";

const baseUrl = "https://internal.jurnalistika.id/wp-json/wp/v2";
const categoriesApi = axios.create({ baseURL: `${baseUrl}/categories` });

export async function getCategories(): Promise<GetCategoriesResponse[]> {
  const getAuthor = await categoriesApi.get<any[]>(`?per_page=100`);
  return getAuthor.data.map(val => ({
    id: val.id,
    name: val.name,
  }));
}

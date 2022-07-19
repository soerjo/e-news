import axios from "axios";

const baseUrl = "https://internal.jurnalistika.id/wp-json/wp/v2";
const authorApi = axios.create({ baseURL: `${baseUrl}/users` });

export async function getAuthorName(id: number): Promise<string> {
  const getAuthor = await authorApi.get(`/${id}`);
  return getAuthor.data.name;
}

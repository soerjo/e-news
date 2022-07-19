import { useEffect, useState } from "react";
import { getPosts } from "../jurnalisitk_api/getPosts";
import { GetPostsResponse } from "../types";

type useGetPostsProps = {
  categorie?: number;
  search?: string;
  page?: number;
};

const useGetPosts = ({ categorie, search, page = 1 }: useGetPostsProps) => {
  const [posts, setPosts] = useState<GetPostsResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const contoller = new AbortController();
    setLoading(true);

    const fetchPosts = async () => {
      const res_getPosts = await getPosts({ categorie, search, page });
      setPosts([...res_getPosts]);
      setLoading(false);
    };

    fetchPosts();

    return () => {
      contoller.abort();
    };
  }, [search, categorie, page]);

  return {
    posts,
    loading,
    page,
  };
};

export default useGetPosts;

import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";
import { categoriesByName } from "../../utils/categoriesByName";
import { dateDuration } from "../../utils/dateDuration";
import { GetCategoriesResponse, GetPostsResponse } from "../../types";
import Image from "next/image";

type PostsBannerProps = {
  post: GetPostsResponse;
  categories: GetCategoriesResponse[];
};

const PostsBanner: React.FC<PostsBannerProps> = ({ post, categories }) => {
  return (
    <Link key={post.id} href={`/detail/${post.id}`}>
      <a>
        <div className="flex flex-row p-8 rounded shadow hover:shadow-lg items-center justify-center">
          <div className="overflow-hidden rounded-md mr-4 bg-slate-400 w-[200px] h-[130px] relative flex justify-center items-center">
            {post.image_url ? (
              <Image src={post.image_url} alt={post.title} layout="fill" />
            ) : (
              <p className="text-white">image not found!</p>
            )}
          </div>
          <div className="w-full">
            <div className="mb-3">
              <h2 className="text-2xl font-semibold ">{post.title}</h2>
              <div className={styles.postLists}>
                <div dangerouslySetInnerHTML={{ __html: post.desc }}></div>
              </div>
            </div>
            <div className="flex flex-row w-full items-center gap-4">
              <div className="py-1 px-2 rounded bg-orange-500 text-white">
                {categoriesByName(post.categories, categories)}
              </div>
              <div className="text-green-500 opacity-80">
                {dateDuration(post.date)}
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostsBanner;

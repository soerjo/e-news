import React from "react";
import Image from "next/image";
import { getInitialName } from "../../utils/getInitialName";
import ReactHTMLParser from "react-html-parser";
import { GetPostsByIdResponse } from "../../types";

type DetailContentProps = {
  postById: GetPostsByIdResponse;
};

const DetailContent: React.FC<DetailContentProps> = ({ postById }) => {
  return (
    <div className="container mt-8">
      <h1 className="text-4xl font-semibold">{postById.title}</h1>
      <div className="flex flex-row items-center">
        <div className="w-10 h-10 rounded-full bg-slate-600 mr-2 uppercase flex items-center justify-center font-medium text-lg text-white my-4">
          {getInitialName(postById.author)}
        </div>
        <div className="flex flex-col">
          <p className="font-medium">{postById.author}</p>
          <p className="opacity-60">
            {new Date(postById.date).toLocaleString()}
          </p>
        </div>
      </div>
      <div className="mb-4">
        <Image
          src={postById.image_url}
          alt={"foto"}
          layout="responsive"
          width={180}
          height={120}
        />
        <p className="py-2 text-sm opacity-70 border-b-2">
          {postById.image_desc}
        </p>
      </div>
      <div className="mb-4 text-justify">{ReactHTMLParser(postById.desc)}</div>
    </div>
  );
};

export default DetailContent;

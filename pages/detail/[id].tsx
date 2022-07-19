import React from "react";
import { GetServerSideProps } from "next";
import { getPostsById } from "../../jurnalisitk_api/getPosts";
import { GetCategoriesResponse, GetPostsByIdResponse } from "../../types";
import { getCategories } from "../../jurnalisitk_api/getCategories";
import Head from "next/head";
import Headers from "../../components/Headers";
import Footer from "../../components/Footer";
import DetailContent from "../../components/DetailContent";

type DetailByIdProps = {
  categories: GetCategoriesResponse[];
  postById: GetPostsByIdResponse;
};

const DetailById: React.FC<DetailByIdProps> = props => {
  const { categories, postById } = props;
  return (
    <>
      <Head>
        <title>News Soerjo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col overflow-hidden justify-center items-center">
        <Headers categories={categories} />
        <DetailContent postById={postById} />
        <Footer />
      </main>
    </>
  );
};

export default DetailById;

export const getServerSideProps: GetServerSideProps = async context => {
  const id: string = context.query["id"] as string;
  const postById = await getPostsById(id);
  const categories = await getCategories();
  return {
    props: {
      categories,
      postById,
    },
  };
};
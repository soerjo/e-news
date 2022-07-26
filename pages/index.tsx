import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { getCategories } from "../jurnalisitk_api/getCategories";
import { GetCategoriesResponse } from "../types";
import Footer from "../components/Footer";
import Headers from "../components/Headers";
import PostsLists from "../components/PostsLists";

const Home: NextPage<{ categories: GetCategoriesResponse[] }> = ({
  categories,
}) => {
  return (
    <>
      <Head>
        <title>News Soerjo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col overflow-hidden justify-center items-center relative">
        <Headers categories={categories} />
        <PostsLists categories={categories} categorie={67} />
        <Footer />
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<{
  categories: GetCategoriesResponse[];
}> = async () => {
  const data = await getCategories();
  return {
    props: {
      categories: data,
    },
  };
};

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { GetCategoriesResponse } from "../../types";
import Search from "../../assets/icons/search.svg";
import { handleSepecialChar } from "../../utils/handleSpecialChar";

type HeaderProps = {
  categories: GetCategoriesResponse[];
};

const Headers: React.FC<HeaderProps> = ({ categories }) => {
  const router = useRouter();
  const [searchInput, setsearchInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (searchInput) {
      router.push("/search/?q=" + searchInput);
    }
  }

  return (
    <div className="bg-orange-400 w-full sticky top-0">
      <div className="flex flex-row justify-between mx-4 py-4 items-center">
        <Link href={"/"}>
          <a>
            <h1 className="uppercase text-white text-xl font-bold">
              Jurnalistika
            </h1>
          </a>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="flex flex-row rounded overflow-hidden bg-white pl-3 items-center justify-center"
        >
          <input
            className="p-1 items-center outline-none"
            placeholder="search"
            type="text"
            onChange={e => setsearchInput(e.target.value)}
          />
          <button className="w-full h-full bg-slate-400 px-2 py-2">
            <div className="stroke-white">
              <Search />
            </div>
          </button>
        </form>
      </div>

      <div className="flex flex-row overflow-x-scroll">
        {categories.map(val => (
          <Link
            key={val.id}
            href={`/${handleSepecialChar(val.name.toLowerCase())}`}
          >
            <a>
              <p
                dangerouslySetInnerHTML={{ __html: val.name }}
                className="uppercase whitespace-nowrap hover:text-slate-50 hover:bg-orange-600 p-4"
              ></p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Headers;

"use client";

import React from "react";
import { useFlux } from "./hooks/useFlux";
import Loading from "./loading";
import dynamic from "next/dynamic";
import Search from "@/components/SearchInput";
const NewsComponent = dynamic(() => import("@/components/NewsCard"), {
  loading: () => <Loading />,
});
export default function Flux() {
  const { newsList, news, search, handleChange } = useFlux();

  return (
    <main className="container mx-auto">
      <h1>Flux</h1>
      <Search search={search} handleChange={handleChange} />
      <NewsComponent newsList={news} />
    </main>
  );
}

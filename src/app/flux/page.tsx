"use client";

import React, { Suspense } from "react";
import { useFlux } from "./hooks/useFlux";
import Loading from "./loading";
import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";
const NewsComponent = dynamic(() => import("@/components/NewsCard"), {
  loading: () => <Loading />,
});
export default function Flux() {
  const { newsList, news, search, handleChange } = useFlux();

  return (
    <main className="container mx-auto">
      <h1>Flux</h1>
      <Input
        type="search"
        value={search}
        onChange={handleChange}
        className="relative w-full md:w-1/2 mt-5"
        placeholder="찾으시는 뉴스를 입력해주세요"
      />
      {/* <Suspense fallback={<Loading />}> */}
      <NewsComponent newsList={news} />
      {/* </Suspense> */}
    </main>
  );
}

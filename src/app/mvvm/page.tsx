"use client";

import React, { useContext, useState } from "react";
import Loading from "./loading";
import dynamic from "next/dynamic";
import Search from "@/components/SearchInput";
import { observer } from "mobx-react";
import { NewsContext } from "@/libMobX/store";
const NewsComponent = dynamic(() => import("@/components/NewsCard"), {
  loading: () => <Loading />,
});
const Mvvm: React.FunctionComponent = observer(() => {
  const newsViewModel = useContext(NewsContext);
  const { filteredNewsItems } = newsViewModel;
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    newsViewModel.setSearch(query);
  };
  return (
    <main className="container mx-auto">
      <h1>mvvm</h1>
      <Search search={searchQuery} handleChange={handleSearchChange} />
      <NewsComponent newsList={filteredNewsItems} />
    </main>
  );
});

export default Mvvm;

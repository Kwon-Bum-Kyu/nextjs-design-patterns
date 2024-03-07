"use client";

import React from "react";
import Loading from "./loading";
import dynamic from "next/dynamic";
import Search from "@/components/SearchInput";
const NewsComponent = dynamic(() => import("@/components/NewsCard"), {
  loading: () => <Loading />,
});
export default function Mvvm() {
  return (
    <main className="container mx-auto">
      <h1>mvvm</h1>
    </main>
  );
}

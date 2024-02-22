"use client";

import { Suspense } from "react";
import { useFlux } from "./hooks/useFlux";
import Loading from "./loading";
import NewsCard from "@/components/NewsCard";

export default function Flux() {
  const { newsList } = useFlux();
  return (
    <main className="container mx-auto">
      <h1>Flux</h1>

      <NewsCard newsList={newsList} />
    </main>
  );
}

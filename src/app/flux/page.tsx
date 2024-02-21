"use client";
import { useEffect } from "react";

export default function Flux() {
  useEffect(() => {
    fetch("/api/news", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  return <h1>Flux</h1>;
}

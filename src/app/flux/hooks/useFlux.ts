import { fetchAPI } from "@/app/api/fetch";
import { getNews } from "@/lib/feature/newsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useCallback, useEffect } from "react";

export const useFlux = () => {
  const dispatch = useAppDispatch();
  const { newsList } = useAppSelector((state) => state.news);
  useEffect(() => {
    (async () =>
      await fetchAPI<NewsItem[]>("/api/news")
        .then((data) => getNewsHook(data))
        .catch((error) => console.error("Error:", error)))();
  }, []);
  const getNewsHook = useCallback(
    (newsList: NewsItem[]) => {
      dispatch(getNews(newsList));
    },
    [dispatch]
  );
  return {
    newsList,
  };
};

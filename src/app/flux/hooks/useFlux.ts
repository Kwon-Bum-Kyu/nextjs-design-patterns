import { fetchAPI } from "@/app/api/fetch";
import { getNews } from "@/libRedux/feature/newsSlice";
import { useAppDispatch, useAppSelector } from "@/libRedux/hooks";
import { useCallback, useEffect, useState } from "react";

export const useFlux = () => {
  const dispatch = useAppDispatch();
  const { newsList } = useAppSelector((state) => state.news);
  const [search, setSearch] = useState("");
  const [news, setNews] = useState<NewsItem[] | never>([]);
  useEffect(() => {
    (async () =>
      await fetchAPI<NewsItem[]>("/api/news")
        .then((data) => getNewsHook(data))
        .catch((error) => console.error("Error:", error)))();
  }, []);
  useEffect(() => {
    setUpNewsList();
  }, [search, newsList]);
  const setUpNewsList = () => {
    const news = newsList;
    const lowercasedSearch = search.toLowerCase();
    setNews(
      news.filter(
        (news) =>
          news.title.toLowerCase().includes(lowercasedSearch) ||
          news.description.toLowerCase().includes(lowercasedSearch)
      )
    );
  };
  const getNewsHook = useCallback(
    (newsList: NewsItem[]) => {
      dispatch(getNews(newsList));
    },
    [dispatch]
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return {
    newsList,
    news,
    search,
    handleChange,
  };
};

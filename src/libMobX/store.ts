import { createContext } from "react";
import { makeObservable, observable, computed, action } from "mobx";
import { fetchAPI } from "@/app/api/fetch";

export class News {
  newsList: NewsItem[] = [];
  search = "";
  constructor() {
    makeObservable(this, {
      newsList: observable,
      setSearch: action,
    });
    this.fetchNews();
  }
  setSearch(query: string) {
    this.search = query;
  }
  get filteredNewsItems() {
    return this.newsList.filter(
      (news) =>
        news.title.toLowerCase().includes(this.search) ||
        news.description.toLowerCase().includes(this.search)
    );
  }
  async fetchNews(): Promise<void> {
    await fetchAPI<NewsItem[]>("/api/news").then(
      (data) => (this.newsList = data)
    );
  }
}

export const NewsContext = createContext(new News());
const newsStore = new News();
export const RootStore = {
  newsStore,
};

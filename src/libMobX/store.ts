import { createContext } from "react";
import { makeObservable, observable, computed, action } from "mobx";

class News {
  newsList: NewsItem[] = [];
  constructor() {
    makeObservable(this, {
      newsList: observable,
      getNews: action,
    });
  }
  getNews() {
    this.newsList = [];
  }
}

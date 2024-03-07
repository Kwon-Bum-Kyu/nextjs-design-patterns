import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { newsList: NewsItem[] } = {
  newsList: [],
};

export const NewsState = createSlice({
  name: "news",
  initialState,
  reducers: {
    getNews: (state, action: PayloadAction<NewsItem[]>) => {
      state.newsList = action.payload;
    },
  },
});

export const { getNews } = NewsState.actions;
const NewsReducer = NewsState.reducer;

export default NewsReducer;

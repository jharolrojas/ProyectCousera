import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    title: "top css",
    number: 1,
    url: "../../../public/assets/video/video1.mp4",
  },
  reducers: {
    saveMovie: (state, action) => {
      return action.payload;
    },
  },
});

export const { saveMovie } = movieSlice.actions;

export default movieSlice.reducer;

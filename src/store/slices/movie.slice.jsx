import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    title: "Top css",
    number: 1,
    url: "../../assets/video/video1.mp4"
  },
  reducers: {
    saveMovie: (state, action) => {
      return action.payload;
    },
  },
});

export const { saveMovie } = movieSlice.actions;

export default movieSlice.reducer;

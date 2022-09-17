import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: [
    {
      title: "top css",
      number: 1,
      url: "../../../public/assets/video/video1.mp4",
      status: true,
    },
    {
      title: "Creative javascripit",
      number: 2,
      url: "../../../public/assets/video/video2.mp4",
      status: false,
    },
    {
      title: "Awesome animation ",
      number: 3,
      url: "../../../public/assets/video/video3.mp4",
      status: false,
    },
    {
      title: "Awesome menu",
      number: 4,

      url: "../../../public/assets/video/video4.mp4",
      status: false,
    },
    {
      title: "Top css and js",
      number: 5,
      url: "../../../public/assets/video/video5.mp4",
      status: false,
    },
  ],
  reducers: {},
});

export const {} = moviesSlice.actions;

export default moviesSlice.reducer;

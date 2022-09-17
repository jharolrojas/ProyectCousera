import { createSlice } from "@reduxjs/toolkit";

// Cambiamos moviesSlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const moviesSlice = createSlice({
  name: "movies",
  initialState: [
    {
      title: "hola jharito",
      number: 1,
      url: "../../../public/assets/video/video1.mp4",
      status: true,
    },
    {
      title: "Motion in UI Design",
      number: 2,
      url: "../../../public/assets/video/video2.mp4",
      status: false,
    },
    {
      title: "Fundamentls of Web ",
      number: 3,
      url: "../../../public/assets/video/video3.mp4",
      status: false,
    },
    {
      title: "Improving Visual Skill",
      number: 4,

      url: "../../../public/assets/video/video4.mp4",
      status: false,
    },
    {
      title: "Finding Inspiration",
      number: 5,
      url: "../../../public/assets/video/video5.mp4",
      status: false,
    },
  ],
  reducers: {
    
    

  },
});

export const {} = moviesSlice.actions;

export default moviesSlice.reducer;

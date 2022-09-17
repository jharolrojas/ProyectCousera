import { createSlice } from "@reduxjs/toolkit";

// Cambiamos movieSlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    title: "What is Interation Design",
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

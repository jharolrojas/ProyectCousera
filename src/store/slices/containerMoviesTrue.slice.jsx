import { createSlice } from "@reduxjs/toolkit";

// Cambiamos containerMoviesTrueSlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const containerMoviesTrueSlice = createSlice({
  name: "movieTrue",
  initialState: [
    {
      title: "What is Interation Design",
      number: 1,
      url: "../../../public/assets/video/127.0.0.1_5173 - Google Chrome 2022-09-15 21-30-38.mp4",
    },
  ],
  reducers: {
    saveMovieTrue: (state, action) => {
        // const verificar = state.find(element => action.payload?.number == element?.number)
        // if (!verificar) {
          state.push(action.payload);
            
        // }
      
    },
  },
});

export const { saveMovieTrue } = containerMoviesTrueSlice.actions;

export default containerMoviesTrueSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

// Cambiamos progressMoviesSlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const progressMoviesSlice = createSlice({
		name: 'progress',
    initialState: [1],
    reducers: {
        saveProgressMovie: (state, action) => {
            if (!state.includes(action.payload)) {
                state.push(action.payload) ;
            }
            
          },
    }
})

export const { saveProgressMovie } = progressMoviesSlice.actions;

export default progressMoviesSlice.reducer;
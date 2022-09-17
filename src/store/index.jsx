import { configureStore } from '@reduxjs/toolkit'
import  saveMovieTrue  from './slices/containerMoviesTrue.slice'
import  movieSlice  from './slices/movie.slice'
import moviesSlice from './slices/movies.slice'
import progressMoviesSlice from './slices/progressMovies.slice'


export default configureStore({
  reducer: {
    movie: movieSlice,
    progress: progressMoviesSlice,
    movies:moviesSlice,
    movieTrue:saveMovieTrue

	}
})
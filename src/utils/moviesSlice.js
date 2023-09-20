import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    upcomingMovies: null,
    topratedMovies: null,
    currentTrailer :null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addCurrentTrailer: (state,action)=>{
      state.currentTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addToprated: (state, action) => {
      state.topratedMovies = action.payload;
    },
    
  },
});
export default moviesSlice.reducer;
export const {
  addNowPlayingMovies,
  addTrailer,
  addCurrentTrailer,
  addPopularMovies,
  addUpcoming,
  addToprated,
  
} = moviesSlice.actions;

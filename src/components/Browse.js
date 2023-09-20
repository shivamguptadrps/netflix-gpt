import React, { useEffect } from "react";

import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcoming";
import useTopratedMovies from "../hooks/useTopRated";
const Browse = () => {
  useNowPlayingMovie();
  usePopularMovies();
  useUpcomingMovies();
  useTopratedMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

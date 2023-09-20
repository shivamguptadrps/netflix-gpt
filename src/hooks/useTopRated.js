import React from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addToprated } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopratedMovies = () => {
  const dispatch = useDispatch();
  const toprated = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addToprated(json.results));
  };
  useEffect(() => {
    toprated();
  });
};

export default useTopratedMovies;

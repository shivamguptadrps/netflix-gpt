import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addTrailer } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const movieurl =
      "https://api.themoviedb.org/3/movie/" +
      movieId +
      "/videos?language=en-US";
    const data = await fetch(movieurl, API_OPTIONS);
    const json = await data.json();
    const filterData = json?.results?.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailer(trailer));
    console.log(trailer);
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;

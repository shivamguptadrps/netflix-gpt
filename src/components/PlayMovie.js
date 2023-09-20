import React from "react";
import { LOGO } from "../utils/constant";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const PlayMovie = () => {
  const { id } = useParams();
  const trailerVideo = useSelector((state) => state?.movies?.trailerVideo);
  useMovieTrailer(id);

  return (
    <div>
      <div className="px-8 absolute bg-gradient-to-b from-black z-30 w-full flex justify-between">
        <img className="w-60" src={LOGO} alt="logo"></img>
      </div>
      <div className="w-full">
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default PlayMovie;

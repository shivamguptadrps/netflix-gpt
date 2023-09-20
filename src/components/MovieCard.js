import React from "react";
import { POSTER_CDN } from "../utils/constant";
import { Link } from "react-router-dom";
const MovieCard = ({ poster, movie_id }) => {
  return (
    <div className="m-2 ">
      <div className="h-[288px] w-[192px] rounded-md  hover:scale-110">
        <Link to={"/browse/" + movie_id}>
          <img
            src={POSTER_CDN + poster}
            alt="david"
            className="rounded-sm"
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;

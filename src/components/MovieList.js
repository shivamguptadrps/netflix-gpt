import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="">
      <h1 className="text-lg md:text-3xl py-4 mx-4  text-white font-bold">
        {title}
      </h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              poster={movie.poster_path}
              movie_id={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;

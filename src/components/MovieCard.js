import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const imageUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
    : "https://placehold.co/384x448?text=No%20Image";

  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/movie/detail/${movie.id}`);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 ">
      <img className="rounded-t-lg" src={imageUrl} alt={movie.title || "Movie"} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {movie.original_title || "Untitled"}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.overview ? `${movie.overview.substring(0, 100)}...` : "No overview available."}
        </p>
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-800 hover:bg-primary-1000"
          onClick={handleReadMore}
        >
          Read More
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;

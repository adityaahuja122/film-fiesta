import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDynamicTitle, useFetch } from "../hooks"; 

const MovieDetailPage = ({ apiPath,title }) => {
  const { id } = useParams();

  const { data: movie, isLoading, error, setUrl } = useFetch();
  useDynamicTitle(title)
  useEffect(() => {
    if (id) {
      const updatedUrl = `https://api.themoviedb.org/3/${apiPath}${id}?api_key=${process.env.REACT_APP_API_KEY}`;
      setUrl(updatedUrl);
    }
  }, [id, apiPath, setUrl]);

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error.message}</div>;
  if (!movie) return <div className="text-center">No details available.</div>;

  return (
    <div className="flex flex-col md:flex-row p-6 rounded-lg shadow-md max-w-4xl mx-auto dark:bg-gray-800 dark:text-white ">
      <div className="md:w-1/3 flex justify-center">
        <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://placehold.co/384x448?text=No%20Image"}
          alt={movie.title || "Movie Poster"}
          className="rounded-lg shadow-lg w-full md:w-auto max-h-96"
        />
      </div>
      <div className="md:w-2/3 mt-6 md:mt-0 md:ml-6">
        <h2 className="text-2xl font-bold">{movie.title}</h2>
        <p className="mt-4">{movie.overview || "No description available."}</p>
        <div className="flex flex-wrap mt-4 gap-2">
          {movie.genres?.map((genre) => (
            <span key={genre.id} className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm font-medium rounded-full dark:bg-indigo-600 dark:text-indigo-100">
              {genre.name}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <span className="text-yellow-500">⭐ {movie.vote_average}</span>
          <span className="text-gray-500">({movie.vote_count} Reviews)</span>
        </div>
        <hr className="my-4" />
        <h3 className="text-xl font-semibold">Details</h3>
        <ul className="mt-2">
          <li><strong>Runtime:</strong> {movie.runtime || "N/A"} mins</li>
          <li><strong>Budget:</strong> ${movie.budget?.toLocaleString() || "N/A"}</li>
          <li><strong>Revenue:</strong> ${movie.revenue?.toLocaleString() || "N/A"}</li>
          <li><strong>Release Date:</strong> {movie.release_date || "N/A"}</li>
          <li><strong>IMDB Code:</strong> {movie.imdb_id || "N/A"}</li>
        </ul>
      </div>
    </div>
  );
  
};

export default MovieDetailPage;

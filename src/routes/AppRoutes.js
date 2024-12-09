import React from "react";
import { Route, Routes } from "react-router-dom";
import { MovieDetailPage, MovieListPage, PageNotFound, SearchPage } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieListPage key="nowPlaying" apiPath="movie/now_playing" />} />
      <Route path="/movies/popular" element={<MovieListPage key="popular" apiPath="movie/popular" />} />
      <Route path="/movies/top-rated" element={<MovieListPage key="topRated" apiPath="movie/top_rated" />} />
      <Route path="/movies/upcoming" element={<MovieListPage key="upcoming" apiPath="movie/upcoming" />} />
      <Route path="/movies/search" element={<SearchPage apiPath="search/movie" />} />
      <Route path="/movie/detail/:id" element={<MovieDetailPage apiPath="movie/" />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;

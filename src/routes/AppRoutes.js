import React from "react";
import { Route, Routes } from "react-router-dom";
import { MovieDetailPage, MovieListPage, PageNotFound, SearchPage } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieListPage key="nowPlaying" apiPath="movie/now_playing" title="Home | Film Feista"/>} />
      <Route path="/movies/popular" element={<MovieListPage key="popular" apiPath="movie/popular" title="Popular | Film Feista"/>} />
      <Route path="/movies/top-rated" element={<MovieListPage key="topRated" apiPath="movie/top_rated" title="Top-Rated | Film Feista"/>} />
      <Route path="/movies/upcoming" element={<MovieListPage key="upcoming" apiPath="movie/upcoming" title="Upcoming | Film Feista"/>} />
      <Route path="/movies/search" element={<SearchPage apiPath="search/movie" title="Search | Film Feista"/>} />
      <Route path="/movie/detail/:id" element={<MovieDetailPage apiPath="movie/" title="MovieDetails | Film Feista"/>} />
      <Route path="*" element={<PageNotFound />} title="Page Not Found | Film Feista"/>
    </Routes>
  );
};

export default AppRoutes;

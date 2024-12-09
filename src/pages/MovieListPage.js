import React from 'react'
import { MovieCard, renderSkeletons } from '../components'
import { useDynamicTitle, useFetch } from '../hooks'

const MovieListPage = ({apiPath,title}) => {
    const url =`https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`;
    const {data:movies,isLoading,error}= useFetch(url)
    useDynamicTitle(title)
    return (
        <div className='flex flex-wrap max-md:justify-evenly'>
            { isLoading && renderSkeletons(6)}
            {movies && movies.results.map(movie => <MovieCard movie={movie} />)}
        </div>
  )
}

export default MovieListPage
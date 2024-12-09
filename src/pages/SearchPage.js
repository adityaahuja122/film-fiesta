import React, { useEffect } from 'react'
import { MovieCard, renderSkeletons } from '../components';
import { useFetch } from '../hooks';
import { useSearchParams } from 'react-router-dom';

const SearchPage = ({apiPath}) => {
    const [searchParams,setSearchParams] = useSearchParams()
    const query = searchParams.get('q');
    const url =`https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;
    const {data:movies,isLoading,error,setUrl}= useFetch(url)

    useEffect(()=>{
        const url =`https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;
        setUrl(url);

    },[query])

    return (
        <div className='flex flex-wrap max-md:justify-evenly'>
            { isLoading && renderSkeletons(6)}
            {movies && movies.results.map(movie => <MovieCard movie={movie}/>)}
        </div>
      )
    
  
}

export default SearchPage
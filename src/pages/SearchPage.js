import  { useEffect } from 'react'
import { MovieCard, renderSkeletons } from '../components';
import { useDynamicTitle, useFetch } from '../hooks';
import { useSearchParams } from 'react-router-dom';

const SearchPage = ({apiPath}) => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q');
    const url =`https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;
    const {data:movies,isLoading,error,setUrl}= useFetch(url)


    useDynamicTitle(`Search Results for: ${query}`)
    useEffect(()=>{
        const url =`https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;
        setUrl(url);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[query])

    return (
        <div className='pt-4'>
            <h2 className='text-4xl dark:text-white mb-2 text-slate-800'>Search Results for: {query}</h2>
        <div className='flex flex-wrap max-md:justify-evenly'>
            {error && <p>Some issue in searching your data</p>}
            { isLoading && renderSkeletons(6)}
            {movies && movies.results.length === 0 && <p className='dark:text-white'>No Movies Found for your keyword</p>}
            {movies && movies.results.map(movie => <MovieCard movie={movie}/>)}
        </div>
        </div>
      )
    
  
}

export default SearchPage
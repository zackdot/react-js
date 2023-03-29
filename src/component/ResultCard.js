import React,{useContext} from 'react'
import { useMovieContext } from './context/GlobalContext'
import { GlobalContext } from './context/GlobalContext'
import './ResultCard.css'

const ResultCard = ({ movie }) => {
    const MovieContext = useMovieContext();

    const {MoviesDispatch , watchlist , watched} = useContext(GlobalContext)

    const storedMovie = MovieContext.watchlist.find((o)=> o.imdbID === movie.imdbID) // movie.id === movie.id in watchlist return this object
    const storedMovieWatched = watched.find((o)=> o.imdbID === movie.imdbID)

    const watchlistDisabled = storedMovie ? true : 
          storedMovieWatched ? true : false

    const watchedDisabled = storedMovieWatched ? true : false 
  return (
    <div className='result-card'>
        <div className='poster-wrapper'>
        {
              movie.Poster ? (
                    <img src={movie.Poster} alt={movie.Title}></img>
                ): <div className='filter-poster'></div>
            }
        </div>
        <div className='info'>
            <div className='heading'>
                <h3 className='title'>{movie.Title}</h3>
                {movie.Year ? <h4 className='release-date'>{movie.Year}</h4> : "_"}
            </div>
            <div className='controls'>
            <button
             className='btn'
             disabled={watchlistDisabled}
             onClick={()=>MoviesDispatch({type : 'ADD_MOVIE_TO_WATCHLIST' , payload : movie })}
             >Add to Watchlist
            </button>
            <button
             className='btn'
             disabled={watchedDisabled}
             onClick={()=>MoviesDispatch({type : 'ADD_MOVIE_TO_WATCHED' , payload : movie })}
             >Add to Watched
            </button>
        </div>
        </div>
    </div>
  )
}

export default ResultCard
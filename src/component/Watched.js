import {React, useContext} from 'react'
import { GlobalContext } from './context/GlobalContext'
import './Watched.css'
import MovieCard from './MovieCard'

const Watched = () => {
  const { watched } = useContext(GlobalContext)
  return (
    <div className="movie-page">
        <div className="container">
          <div className="header">
          <h1 className='heading'>Watched Movies</h1>
          <span className='count-pill'>
          {Watched.length} {Watched.length === 1 ? 'Movie':
        'Movies' }</span>
          </div>
          {
              Watched.length > 0 ? (  <div className="movie-grid">
                {Watched.map((movie)=>(
                <MovieCard key={movie.imdbID} movie={movie} type='watched'/>
              ))}
              </div>):(<h2 className='no-movies'>No movies in your list, add some!</h2>)
          }
        </div>
      </div>
  )
}

export default Watched
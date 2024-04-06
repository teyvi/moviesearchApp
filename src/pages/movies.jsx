import React from 'react'
import Navbar from '../components/navbar';
import PopularMovies from '../components/popularmoviespage';
import Moviedetails from '../components/movielist';
import Toprated from './top-rated';

const Movies = () => {
  return (
    <>
      <Navbar/>
      <h1>MOVIES</h1>
      <PopularMovies/>
      <Moviedetails/>
      <Toprated/>
    </>
  )
}

export default Movies;

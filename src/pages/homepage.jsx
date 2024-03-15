import React from 'react'
import Header from '../components/header';
import Moviedetails from '../components/movielist';
import Footer from '../components/footer';
import Toprated from '../pages/top-rated' ;
import PopularMovies from '../components/popularmoviespage';
import TopRatedSeries from '../components/top-rated series';
const Homepage = () => {
  return (
    <>
      <Header/>
      <Moviedetails/>
      <Toprated/>
      <PopularMovies/>
      <TopRatedSeries/>
      <Footer/>
     

    </>
  )
}

export default Homepage;

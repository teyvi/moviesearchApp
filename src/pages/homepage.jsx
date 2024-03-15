import React from 'react'
import Header from '../components/header';
import Moviedetails from '../components/movielist';
import Series from '../components/series';
import Footer from '../components/footer';
import Toprated from '../pages/top-rated' ;
import PopularMovies from '../components/popularmoviespage';
import TopRatedSeries from '../components/top-ratedseries';
const Homepage = () => {
  return (
    <>
      <Header/>
      <Moviedetails/>
      <Series/>
      <Toprated/>
      <PopularMovies/>
      <TopRatedSeries/>
      <Footer/>
     

    </>
  )
}

export default Homepage;

import React from 'react'
import Navbar from '../components/navbar';
import TopRatedSeries from '../components/top-ratedseries';
import Series from '../components/series';

const Seriespage = () => {
  return (
    <div>
      <Navbar/>
      <h1>SERIES</h1>
      <Series/>
      <TopRatedSeries/>
    </div>
  )
}

export default Seriespage;

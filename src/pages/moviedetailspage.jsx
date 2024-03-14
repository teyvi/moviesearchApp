import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";

const Moviedetailspage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        // Fetch movie details using movie ID
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=d20a5b8aba07e5f652033a77ed8a2312`; 
        const response = await fetch(url);
        const data = await response.json();
        setMovieDetails(data);
        console.log('mydata',data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieDetails();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="container h-96 bg-red-400 m-auto mt-5">
        {movieDetails ? (
          <>
            {/* Display movie details */}
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt="movie"
              />
              <div>Movie Title {movieDetails.original_title}</div>
              <div>Release Date {movieDetails.release_date}</div>
              <div>Overview {movieDetails.overview}</div>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default Moviedetailspage;

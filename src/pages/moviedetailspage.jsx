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
      <div className="container h-96 m-auto mt-5 flex justify-center">
        {movieDetails ? (
          <>
            {/* Display movie details */}
            <div className="flex">
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt="movie"
                className="h-64  mt-3 rounded-md mx-0.5 "
              />
              <div className="ml-7">
                <div className="font-bold text-2xl pt-6">{movieDetails.original_title}</div>
                <div className="pt-16">Release Date: {movieDetails.release_date}</div>
                <div>Overview: {movieDetails.overview}</div>
                <div>Rating: {movieDetails.vote_average}</div>
                <div>
                  Production Countries:
                  {movieDetails.production_countries.map((country) => (
                    <div key={country.iso_3166_1}>{country.name}</div>
                  ))}
                </div>
              </div>
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

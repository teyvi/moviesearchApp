import axios from "axios";
import React, { useEffect, useState } from "react";

const Moviedetails = () => {
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=d20a5b8aba07e5f652033a77ed8a2312";
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    async function displayAllMovies() {
      try {
        const response = await axios.get(url);
        const responseJson = response.data.results; // Access the 'results' property
        console.log("response", responseJson);
        setMovieList(responseJson);
      } catch (error) {
        console.log(error);
      }
    }
    displayAllMovies();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-4">
      {movieList.map((item, index) => (
        <div key={index} className="rounded">
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt="movie"
          />
          <h2 className="overflow-hidden">{item.original_title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Moviedetails;

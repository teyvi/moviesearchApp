import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Moviedetails = () => {
  const url = "https://api.themoviedb.org/3/discover/movie?api_key=d20a5b8aba07e5f652033a77ed8a2312";
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    async function displayAllMovies() {
      try {
        const response = await axios.get(url);
        const responsejson = response.data.results; // Access the 'results' property
        console.log("response", responsejson);
        setMovieList(responsejson);
      } catch (error) {
        console.log(error);
      }
    

    }
    displayAllMovies();
  }, []);

  return (
    <>
    {/* add browse for more so when user clicks on it it shows all movies */}

      <div className="flex justify-center mt-9">
        <div className="container"> <span className="font-extrabold	">Movies</span>
          <div className=" flex overflow-auto gap-x-1  hide-scroll-bar">
            {movieList.map((item, index) => (
              <div key={index} className="flex-shrink-0 ">
                <Link to={'/moviedetailspage/' + item.id}>
                <div className=" w-48 h-auto p-4 rounded-md ">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt="movie"
                    className="h-64 rounded-md "
                  />
                  <h2 className="mt-2 text-base font-semibold truncate h-7 ">
                    {item.original_title}
                  </h2>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Moviedetails;



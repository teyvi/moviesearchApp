import axios from "axios";
import { useEffect, useState } from "react";

const PopularMovies = () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=55dcde56c65284d28b71f215d3411474";
  const [popularmovies, setPopularMovies] = useState([]);

  // declare the useEffect
  useEffect(() => {
    async function displayPopularMovies() {
      try {
        const response = await axios.get(url);
        const responseJson = response.data.results;
        console.log("response", responseJson);
        setPopularMovies(responseJson);
      } catch (error) {
        console.log(error);
      }
    }
    displayPopularMovies();
  }, []);

  return (
    <>
      <div className="flex justify-center mt-9">
        <div className="container">
        <h1>Popular Movies</h1>
          <div className="flex overflow-auto gap-x-2 ">
            {popularmovies.map((item, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="w-48 h-auto p-4 rounded-md">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt="movie"
                    className="h-64 rounded-md"
                  />
                  <h2 className="mt-2 text-base font-semi-bold truncate h-7 ">
                    {item.original_title}

                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularMovies

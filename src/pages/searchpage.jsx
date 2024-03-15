import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");
    if (query) {
      console.log("Query:", query);
      fetchSearchResults(query);
    }
  }, [location.search]);

  const fetchSearchResults = async (query) => {
    try {
      // You can make an API request here to fetch search results based on the query
      console.log("Fetching search results for query:", query);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=8d14bc5cc17bd609435aa33c0221ce8b&query=${query}`
      );
      const data = await response.json();
      setSearchResults(data.results); // Assuming data.results contains the search results
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="container mx-auto mt-4">
          <h1 className="text-2xl font-bold mb-4">Search Results</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchResults.length === 0 ? (
              <p>No search results found.</p>
            ) : (
              searchResults.map((movie, index) => (
                <div key={index} className="">
                  <Link to={"/moviedetailspage/" + movie.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full h-auto rounded-md mb-2"
                    />
                    <div className="flex flex-col">
                      <h2 className="text-xl font-bold text-black ">
                        {movie.title}
                      </h2>
                      {/* <p className="text-black">{movie.overview}</p> */}
                      <p className="text-black">
                        Released: {movie.release_date.substring(0, 4)}
                      </p>
                      <div className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-orange-500 mr-1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                            fill=""
                          />
                        </svg>
                        <p className="text-orange-400">{movie.vote_average}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;

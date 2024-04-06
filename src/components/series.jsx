import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Series() {
  const [movieSeries, setMovieSeries] = useState([]);


  const url =
    "https://api.themoviedb.org/3/trending/tv/day?api_key=0d54830a793847999884f168688c8735";

  useEffect(() => {
    async function getSeries() {
      try {
        const response = await axios.get(url);
        const responseJson = response.data.results;
        console.log("response", responseJson);
        setMovieSeries(responseJson);
      } catch (error) {
        console.log(error);
      }
    }
    getSeries();
  }, []);

  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="container">
          {" "}
          <span className="font-extrabold">Series</span>
          <div className=" flex overflow-auto gap-x-2 hide-scroll-bar ">
            {movieSeries.map((item, index) => (
              <div key={index} className="flex-shrink-0 ">
                <Link to={"/moviedetailspage/" + item.id}>
                  <div className=" w-48 h-auto p-4 rounded-md ">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt="movie"
                      className="h-64 rounded-md "
                    />
                    <h2 className="mt-2 text-base font-semibold truncate h-7 ">
                      {item.name}
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

    // <section>
    //     <h1>Series</h1>

    //     {movieSeries.map((item, index) => (
    //         <div>
    //             <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
    //             <div>{item.name}</div>
    //         </div>

    //     ))}

    // </section>
  );
}


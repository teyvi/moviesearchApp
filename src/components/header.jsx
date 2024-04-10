import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=d20a5b8aba07e5f652033a77ed8a2312";
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <ul style={{ margin: "0" }}> {dots} </ul>
      </div>
    ),
    customPaging: function (i) {
      return (
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#fff",
            margin: "0 3px",
          }}
        ></div>
      );
    },
  };

  return (
    <div>
      <header>
        <Navbar />
        <div className="justify-center">
          <div className="mx-auto">
            <Slider {...settings}>
              {movieList.map((item) => (
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                    alt=""
                  />
                  <div>
                  <h1 className="text-4xl text-white text-outline font-bold mb-4 ">{item.title}</h1>
                  </div>
                  <div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

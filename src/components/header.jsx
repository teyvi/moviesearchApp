import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar";

const Header = () => {
  //   const url = ''
  // const [slider,setSlider] = useState([]);

  // async function slides (){
  //   try {
  //     const slidesresult = await axios.get(url)

  //   } catch (error) {
  //     console.log('error')
  //   }
  // }

  return (
    <div>
      <header>
        <Navbar />

        <div className="h-96 bg-red-400">
          
        </div>
      </header>
    </div>
  );
};

export default Header;

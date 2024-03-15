import React from "react";
import { Link } from "react-router-dom";
import Searchinput from "./searchinput";

const Navbar = () => {
  return (
    <div>
      <div className=" justify-center text-zinc-50">
        <div className="bg-red-900 flex justify-between h-16 p-5">
          <Link to="/">
            {" "}
            <div><h1>OPALFLIX</h1></div>
          </Link>
          <div>
            <Searchinput/>
          </div>

          <div className="">
            <ul className="flex ">
              <li className="px-8">
                <Link to="/"> HOME</Link>
              </li>
              <li className="px-8">
                <Link to="/movies">MOVIES</Link>
              </li>
              <li className="px-8">
                <Link to='/seriespage'>TV SHOWS</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

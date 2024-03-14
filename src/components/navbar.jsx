import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className=" justify-center text-zinc-50">
        <div className="bg-red-900 flex justify-between h-16 p-5">
          <div>LOGO</div>
          <div className="">
            <ul className="flex ">
              <li className="px-8">
                <Link to="/"> Home</Link>
              </li>
              <li className="px-8">
                <Link to="/allmoviespage">MOVIES</Link>
              </li>
              <li className="px-8">
                <Link>TV SHOWS</Link>
              </li>
              <li className="px-8">
                <Link>POPULAR</Link>
              </li>
              <li className="px-8">
                <Link>TOP-RATED</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

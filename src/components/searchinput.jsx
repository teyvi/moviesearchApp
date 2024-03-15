import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Searchinput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const gotoSearchPage = (event) => {
    console.log(event);
    if (event.key === "Enter") {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className="">
      <input
        type="text"
        value={searchQuery}
        className="w-full h-11 mt-1 rounded-[8rem] text-stone-950 outline-none px-20 placeholder:text-slate-500"
        placeholder="Search for movies and series....."
        onChange={handleSearch}
        onKeyDown={gotoSearchPage}
      ></input>
      <div className="bg-white">
        <button className="font-semibold text-stone-950">Search</button>
      </div>
      //{" "}
    </div>
  );
};
export default Searchinput;

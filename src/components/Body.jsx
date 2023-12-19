import React from "react";
import RestroCard from "./RestroCard";
import restroList from "../utils/restroList";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search Restro / Food" />
        <button>Search</button>
      </div>
      <div className="restroCardContainer">
        {restroList.map((res) => (
          <RestroCard resData={res} key={res.info.resId} />
        ))}
      </div>
    </div>
  );
};

export default Body;

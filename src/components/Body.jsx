import React, { useState } from "react";
import RestroCard from "./RestroCard";
import restroList from "../utils/restroList";

const Body = () => {
  const [topRatedRestaurant, setTopRatedRestaurant] = useState(restroList);

  return (
    <div className="body">
      {/* <div className="search">
        <input type="text" placeholder="Search Restro / Food" />
        <button>Search</button>
      </div> */}

      <div>
        <button
          id="topRatedRestroBtn"
          onClick={() => {
            // console.log(topRatedRestaurant)
            const topRatedRestro = topRatedRestaurant.filter(
              (restro) => restro.info.rating.aggregate_rating > 4
            );
            setTopRatedRestaurant(topRatedRestro);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restroCardContainer">
        {topRatedRestaurant.map((res) => (
          <RestroCard resData={res} key={res.info.resId} />
        ))}
      </div>
    </div>
  );
};

export default Body;

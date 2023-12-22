import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [topRatedRestaurant, setTopRatedRestaurant] = useState([]);

  // component render then call callback function of useEffect() hook
  useEffect(() => {
    fetchData();
  }, []);

  // fetching data logic: way 1 using Promise (.then() .catch())
  // const fetchData = () => {
  //   fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5898463&lng=73.8264677&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   )
  //     .then((data) => data.json())
  //     .then((json) => {
  //       const restroCards = json?.data?.cards.filter(
  //         (card) =>
  //           card?.card?.card?.gridElements?.infoWithStyle["@type"] ===
  //           "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
  //       )[0].card.card.gridElements.infoWithStyle.restaurants;

  //       // console.log(restroCards);
  //       setTopRatedRestaurant(restroCards);
  //     })
  //     .catch((err) => {
  //       alert("Something Went Wrong! After Some time please check Again...");
  //       console.log("Error is " + err);
  //     });
  // };

  // fetching data logic: way 2 using async await (try{} catch(){} )
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5898463&lng=73.8264677&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const restroCards = json?.data?.cards.filter(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
      )[0].card?.card?.gridElements?.infoWithStyle?.restaurants;

      // console.log(restroCards);
      setTopRatedRestaurant(restroCards);
    } catch (err) {
      alert("Something Went Wrong! After Some time please check Again...");
      console.error("Error is " + err);
    }
  };

  // Shimmer UI effect logic: way 1
  if (topRatedRestaurant.length === 0) return <Shimmer />;

  // Shimmer Ui effect logic: way2
  return topRatedRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
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
              (restro) => restro.info.avgRating > 4.2
            );
            setTopRatedRestaurant(topRatedRestro);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restroCardContainer">
        {topRatedRestaurant.map((restro) => (
          <RestroCard resData={restro} key={restro.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;

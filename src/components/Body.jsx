import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";

const Body = () => {
  // very imp logic --> don't update ever filterRestro state.. it have whole important data ..only filter purpose use it.
  const [searchRestro, setSearchRestro] = useState([]);
  const [filterRestro, setFilterRestro] = useState([]);
  const [userSearchText, setUserSearchText] = useState("");
  // console.log(searchRestro)

  // first component render then call callback function of useEffect() hook
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
  //       setFilterRestro(restroCards);
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
      setSearchRestro(restroCards);
      setFilterRestro(restroCards);
    } catch (err) {
      alert("Something Went Wrong! After Some time please check Again...");
      console.error("Error is " + err);
    }
  };

  // Shimmer UI effect logic: way 1
  if (filterRestro.length === 0) return <Shimmer />;

  // Shimmer Ui effect logic: way2
  return filterRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div id="featureBox">
        <div className="search">
          <input
            type="text"
            placeholder="Search Restro / Cusines"
            value={userSearchText}
            onChange={(e) => setUserSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              // console.log(userSearchText);
              const filterSearchData = filterRestro.filter(
                (restro) =>
                  restro.info.name
                    .toUpperCase()
                    .includes(userSearchText.toUpperCase()) ||
                  restro.info.cuisines
                    .slice(0, 3)
                    .join(", ")
                    .toLowerCase()
                    .includes(userSearchText.toLowerCase())
              );
              // console.log(filterSearchData);
              setSearchRestro(filterSearchData);
            }}
          >
            Search
          </button>
        </div>

        <div className="filter">
          <button
            id="topRatedRestroBtn"
            onClick={() => {
              // console.log(topRatedRestaurant)
              const topRatedRestro = filterRestro.filter(
                (restro) => restro.info.avgRating > 4.2
              );

              setSearchRestro(topRatedRestro);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="restroCardContainer">
        {searchRestro.map((restro) => (
          <RestroCard resData={restro} key={restro.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;

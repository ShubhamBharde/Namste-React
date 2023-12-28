import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // very imp logic --> don't update ever filterRestro state.. it have whole important data ..only filter purpose use it.
  const [filterRestro, setFilterRestro] = useState([]);
  const [listOfRestro, setListOfRestro] = useState([]);
  const [userSearchText, setUserSearchText] = useState("");
  // console.log(listOfRestro)

  // first component render then call callback function of useEffect() hook
  useEffect(() => {
    fetchData();
  }, []);

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
      setListOfRestro(restroCards);
      setFilterRestro(restroCards);
    } catch (err) {
      alert("Something Went Wrong! After Some time please check Again...");
      console.error("Error is " + err);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Looks like you're Offline</h1>;

  // Shimmer Ui effect logic: way2 Conditional render
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
              setListOfRestro(filterSearchData);
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

              setListOfRestro(topRatedRestro);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="restroCardContainer">
        {listOfRestro.map((restro) => (
          <Link to={`/restaurants/${restro.info.id}`} key={restro.info.id}>
            <RestroCard resData={restro} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

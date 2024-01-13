import { useEffect, useState } from "react";
import RestroCard, { withPromotedCard } from "./RestroCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTRAURANT_API } from "../utils/constants";

const Body = () => {
  // very imp logic --> don't update ever filterRestro state.. it have whole important data ..only filter purpose use it.
  const [filterRestro, setFilterRestro] = useState([]);
  const [listOfRestro, setListOfRestro] = useState([]);
  const [userSearchText, setUserSearchText] = useState("");
  // console.log(listOfRestro);

  const RestroPromotedCard = withPromotedCard(RestroCard);

  // first component render then call callback function of useEffect() hook
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTRAURANT_API);
      const json = await data.json();

      const restroCards = json?.data?.cards?.filter(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
      )[0].card?.card?.gridElements?.infoWithStyle?.restaurants;

      // console.log(restroCards);
      setListOfRestro(restroCards);
      setFilterRestro(restroCards);
    } catch (err) {
      setTimeout(() => {
        alert("Something Went Wrong! After Some time please check Again...");
      }, 1000);
      console.log("Error is " + err);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Looks like you're Offline</h1>;

  // Shimmer Ui effect logic: way2 Conditional render
  return filterRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="py-8 px-4">
      <div className="flex flex-wrap gap-4 mb-4 justify-center">
        <div className="flex">
          <input
            type="text"
            className="border border-solid border-gray-900 px-3 py-1"
            placeholder="Search Restro / Cusines"
            value={userSearchText}
            onChange={(e) => setUserSearchText(e.target.value)}
          />
          <button
            className="py-2 px-4 bg-red-500 border-0 text-yellow-400 font-bold text-lg  border-gray-950 rounded-r-lg"
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

        <div className="">
          <button
            className="px-4 py-2 text-lg bg-yellow-300 text-[red] font-extrabold rounded-md"
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

      <div className="flex flex-wrap flex-col items-center sm:flex-row sm:justify-evenly sm:gap-x-10 md:justify-center lg:justify-between    ">
        {listOfRestro.length === 0 ? (
          userSearchText === "" ? (
            setListOfRestro(filterRestro)
          ) : (
            <h1 className="text-lg font-bold text-center mx-auto my-4 md:text-2xl">
              No data found for {userSearchText.toUpperCase()}.. Please check
              another Cuisines / Restaurant
            </h1>
          )
        ) : (
          listOfRestro.map((restro) => (
            <Link to={`/restaurants/${restro.info.id}`} key={restro.info.id}>
              {restro?.info?.avgRating >= 4.5 ? (
                <RestroPromotedCard resData={restro} />
              ) : (
                <RestroCard resData={restro} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;

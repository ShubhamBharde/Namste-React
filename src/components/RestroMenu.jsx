import Shimmer from "./Shimmer";
import RestroMenuCategory from "./RestroMenuCategory";
import useRestroMenu from "../utils/useRestroMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState } from "react";

const RestroMenu = () => {
  const restroMenu = useRestroMenu(); // custom hook for fetching restroMenu info
  const onlineStatus = useOnlineStatus();
  const [showIndex, setShowIndex] = useState(null);
  const [showItems, setShowItems] = useState(true);

  if (onlineStatus === false)
    return (
      <h1 className="text-2xl text-red-500 md:text-4xl text-center mt-10 px-1">
        Looks like you're Offline, plz Check interent connection{" "}
      </h1>
    );

  const restroInfo = restroMenu?.cards
    .filter(
      (card) =>
        card?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )
    .map((card) => card?.card?.card?.info);
  // console.log(restroInfo);

  const restroMenuCategories = restroMenu?.cards
    .filter((card) => card?.groupedCard)
    .map((card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    .flat(1)
    .filter(
      (card) =>
        card?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        card?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  // console.log(restroMenuCategories);

  if (!restroMenu) return <Shimmer />;

  restroInfo.map(
    (restro) =>
      ({ name, locality, areaName, cuisines, costForTwoMessage, avgRating } =
        restro)
  );

  return (
    <section className="py-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold">{name} </h1>
        <h3 className="font-bold text-lg">{locality + ", " + areaName}</h3>
        <h4 className="font-semibold ">
          {cuisines.join(" | ")} - {costForTwoMessage}
        </h4>
        <h4>{avgRating} Rating</h4>
      </div>

      <div>
        {restroMenuCategories.map((menuCategory, index) => (
          <RestroMenuCategory
            key={menuCategory?.card?.card?.title}
            menuCategory={menuCategory?.card?.card}
            showItems={index === showIndex && showItems}
            setShowIndex={() => setShowIndex(index)}
            setShowItems={() => index === showIndex && setShowItems(!showItems)}
          />
        ))}
      </div>
    </section>
  );
};
export default RestroMenu;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestroMenuCategory from "./RestroMenuCategory";
import { MENU_API } from "../utils/constants";

const RestroMenu = () => {
  const [restroMenu, setRestroMenu] = useState(null);
  const { resId } = useParams(); // dynamic param gives in form of object

  useEffect(() => {
    fetchRestroMenu();
  }, []);

  const fetchRestroMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    // console.log(json.data);
    setRestroMenu(json.data);
  };

  if (!restroMenu) return <Shimmer />;

  const restroInfo = restroMenu?.cards
    .filter(
      (card) =>
        card?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )
    .map((card) => card?.card?.card?.info);
  // console.log(restroInfo);

  const { name, locality, areaName, cuisines, costForTwoMessage, avgRating } =
    restroInfo[0];

  return (
    <div className="menuPage">
      <div className="restroInfo">
        <h1>{name} </h1>
        <h3>{locality + ", " + areaName}</h3>
        <h4>
          {cuisines.join(" | ")} - {costForTwoMessage}
        </h4>
        <h4>{avgRating} Rating</h4>
      </div>

      <RestroMenuCategory menuCategory={restroMenu} />
    </div>
  );
};
export default RestroMenu;

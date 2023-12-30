import Shimmer from "./Shimmer";
import RestroMenuCategory from "./RestroMenuCategory";
import useRestroMenu from "../utils/useRestroMenu";

const RestroMenu = () => {
  const restroMenu = useRestroMenu(); // custom hook

  const restroInfo = restroMenu?.cards
    .filter(
      (card) =>
        card?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )
    .map((card) => card?.card?.card?.info);
  // console.log(restroInfo);

  if (!restroMenu) return <Shimmer />;

  restroInfo.map(
    (restro) =>
      ({ name, locality, areaName, cuisines, costForTwoMessage, avgRating } =
        restro)
  );

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

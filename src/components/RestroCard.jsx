import React from "react";
import { SWIGGY_IMAGE_CDN } from "../utils/constants";

const RestroCard = ({ resData }) => {
  // console.log(resData);

  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    sla: { deliveryTime },
    costForTwo,
  } = resData?.info; // ---> object destructuring

  return (
    <div className="w-[250px] h-80 my-4 p-4 bg-gray-200 hover:bg-gray-300">
      <img
        className="h-40 w-full object-cover rounded-lg "
        src={SWIGGY_IMAGE_CDN + cloudinaryImageId}
        alt="restro image"
      />
      <h2 className="font-bold text-lg pt-1">{name}</h2>
      <h3>{cuisines.slice(0, 3).join(", ")}</h3>

      <div className="flex justify-between">
        <h4>{deliveryTime} min</h4>
        <h4>{avgRating} ⭐ </h4>
      </div>

      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestroCard;

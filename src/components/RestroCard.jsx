import React from "react";

const RestroCard = ({ resData }) => {
  // console.log(resData);

  const {
    name,
    image: { url: img },
    rating: { aggregate_rating: rating },
    cuisine,
    cft: { text: cft },
  } = resData?.info; // ---> object destructuring

  const { deliveryTime } = resData?.order;

  return (
    <div className="restroCard">
      <img src={img} alt="restro image" />
      <h2>{name}</h2>
      <h3>
        {cuisine
          .map((dish) => dish.name)
          .slice(0, 4)
          .join(", ")}
      </h3>

      <div>
        <h4>{deliveryTime} </h4>
        <h4>{rating} ⭐ </h4>
      </div>

      <h4>{cft}</h4>
    </div>
  );
};

export default RestroCard;

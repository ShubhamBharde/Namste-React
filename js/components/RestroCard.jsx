import React from "react";

const RestroCard = ({ name, cuisines, eat, rating }) => {
  // const { name, cuisines, eat, rating } = props; // ---> object destructuring

  return (
    <div className="restroCard">
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.rW2D5caiEBoqmSn31JrlLAHaE8&pid=Api&P=0&h=180"
        alt="restro image"
      />
      <h2>{name}</h2>
      <h3>{cuisines}</h3>

      <div>
        <h4>EAT : {eat} min </h4>
        <h4>{rating} ⭐ </h4>
      </div>

      <h4>Cost For Two : 450 ₹</h4>
    </div>
  );
};

export default RestroCard;

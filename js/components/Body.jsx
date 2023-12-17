import React from "react";
import RestroCard from "./RestroCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search Restro / Food" />
        <button>Search</button>
      </div>

      <div
        className="restroCardContainer"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* name, cuisines, eat & rating are props */}
        <RestroCard name = "KFC" cuisines="lollipop, biryani" eat="25" rating="4.2" />
        <RestroCard name = "Burger King" cuisines="burger, cold-drink"  eat="40" rating="3.5"/>
        <RestroCard  name = "Macdonald's" cuisines="burger, rolls" eat="35" rating="4.7" />
      </div>
    </div>
  );
};

export default Body;

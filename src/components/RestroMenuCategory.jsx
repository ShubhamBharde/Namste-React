import React, { useState } from "react";
import ItemList from "./ItemList";

const RestroMenuCategory = ({ menuCategory, showItems, setShowIndex }) => {
  // console.log(menuCategory);

  // const [showItems, setShowItems] = useState(false);

  const { title, itemCards, categories } = menuCategory;

  return (
    <div className="w-[90%] bg-slate-200 mx-auto p-4 my-4 shadow-md shadow-slate-600 md:w-9/12 lg:w-[60%] xl:w-6/12 ">
      {/* accordian header */}
      <header
        className="flex justify-between cursor-pointer"
        onClick={() => setShowIndex()}
      >
        <h3 className="font-bold text-2xl">
          {title} (
          {itemCards
            ? itemCards?.length
            : categories.reduce((acc, cat) => cat?.itemCards?.length + acc, 0)}
          )
        </h3>
        <span className="text-2xl">{showItems ? "☝️" : "👇"}</span>
      </header>

      {/* accordian body 😡 */}
      {showItems && (
        <ItemList
          menuItems={
            itemCards
              ? itemCards
              : categories.map((category) => category?.itemCards).flat(1)
          }
        />
      )}
    </div>
  );
};

export default RestroMenuCategory;

import React from "react";
import ItemList from "./ItemList";

const RestroMenuCategory = ({ menuCategory }) => {
  // console.log(menuCategory);

  const restroMenuCategories = menuCategory?.cards
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

  return (
    <div className="menu">
      {restroMenuCategories.map((category) => {
        const {
          title: categoryTitle,
          itemCards,
          categories,
        } = category?.card?.card;

        return (
          <div key={categoryTitle} className="restroMenuInfo">
            <div className="restroMenuCategory">
              <h3>
                {categoryTitle} (
                {categories
                  ? categories.reduce(
                      (ac, category) => category?.itemCards?.length + ac,
                      0
                    )
                  : itemCards?.length}
                )
              </h3>
              <span>👇</span>
            </div>

            <ItemList menuItems={category} />
          </div>
        );
      })}
    </div>
  );
};

export default RestroMenuCategory;

import { SWIGGY_IMAGE_CDN } from "../utils/constants";

const ItemList = ({ menuItems }) => {
  // console.log(menuItems);

  const items =
    menuItems?.card?.card?.itemCards ||
    menuItems?.card?.card?.categories.map((cat) => cat?.itemCards).flat(1);
  console.log(items);

  return items.map((item) => {
    const { id, name, price, defaultPrice, description, imageId } =
      item?.card?.info;

    return (
      <div className="itemList" key={id}>
        <div className="itemInfo">
          <h3 className="dishName">{name}</h3>
          <h3 className="dishPrice">{(price || defaultPrice) / 100} /-</h3>
          <p>{description}</p>
        </div>
        <div className="itemImage">
          <img src={SWIGGY_IMAGE_CDN + imageId} alt="" />
        </div>
      </div>
    );
  });
};

export default ItemList;

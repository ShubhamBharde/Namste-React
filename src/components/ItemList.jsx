import { useDispatch } from "react-redux";
import { SWIGGY_IMAGE_CDN } from "../utils/constants";
import { addItem } from "../utils/store/cartSlice";

const ItemList = ({ menuItems }) => {
  // console.log(menuItems);
  const dispatch = useDispatch();
  const handleAddItem = (items) => {
    dispatch(addItem(items));
  };

  return (
    <div>
      {menuItems.map((item) => {
        const { id, name, price, defaultPrice, description, imageId } =
          item?.card?.info;

        return (
          <div
            className="flex flex-col-reverse gap-2 p-4 border-b border-solid border-gray-400 sm:flex-row sm:justify-between sm:items-center"
            key={id}
          >
            <div className="sm:w-9/12 text-lg font-medium">
              <h3 className="dishName ">{name}</h3>
              <h3 className="dishPrice ">{(price || defaultPrice) / 100} /-</h3>
              <p className="text-xs font-normal">{description}</p>
            </div>
            <div className="sm:w-3/12 relative ">
              <img
                src={SWIGGY_IMAGE_CDN + imageId}
                className="w-[85%] m-auto object-cover max-h-[160px] relative"
              />
              <button
                className="bg-gray-900 bg-opacity-90 text-white px-4 py-1 w-4/12 absolute left-0 right-0 bottom-0 mx-auto rounded-md sm:w-6/12 sm:-bottom-3 "
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

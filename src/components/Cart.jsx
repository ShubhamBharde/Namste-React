import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { SWIGGY_IMAGE_CDN } from "../utils/constants";
import { clearCart } from "../utils/store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="py-4 max-w-[800px] m-auto">
      <h1 className="text-center text-3xl font-bold">SB Cart</h1>
      {cartItems.length > 0 && (
        <button
          className="bg-black text-white  text-center block mx-auto p-2 my-4 rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}

      {/* <ItemList menuItems={cartItems} /> */}

      {cartItems.length === 0 && (
        <h1 className="text-center text-2xl m-6 font-bold">
          Cart is Empty !!! Do Some Shopping{" "}
        </h1>
      )}

      {cartItems.map((item) => {
        const { id, name, price, defaultPrice, description, imageId } =
          item?.card?.info;

        return (
          <div
            className="flex justify-between px-4 py-4 items-center border-b-2"
            key={id}
          >
            <div className="w-8/12 md:w-9/12">
              <h2 className="font-medium text-lg  ">{name}</h2>
              <h3 className="font-medium text-lg">
                {(price || defaultPrice) / 100} /-{" "}
              </h3>
              <p className="text-xs font-normal">{description}</p>
            </div>
            <div className="w-4/12 md:w-3/12 ">
              <img
                src={SWIGGY_IMAGE_CDN + imageId}
                className="w-full float-end"
                alt="item-image"
              />
            </div>
          </div>
        );
      })}

      {cartItems.length > 0 && (
        <div className="text-2xl px-2 md:text-4xl my-4 font-bold">
          Your Total Bill : {"  "}
          {cartItems.reduce((acc, item) => {
            const { price, defaultPrice } = item?.card?.info;
            return (price || defaultPrice) / 100 + acc;
          }, 0) + " "}
          /-
        </div>
      )}
    </div>
  );
};

export default Cart;

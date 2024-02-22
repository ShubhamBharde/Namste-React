import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
      // state.items.length = 0;
      // return {items : []}
    },
  },
});

// console.log(cartSlice); // return object

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

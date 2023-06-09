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
    removeItem: (state, action) => {
      const removeItem = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.items = removeItem;
    },

    clearCart: (state) => {
      state.items = [];
    },

    increaseItemQty: (state, action) => {
      state.cartItems.map((item) => {
        if (item.id == action.payload) {
          item.qty = item.qty + 1;
        }
      });
    },
  },
});

export const { addItem, removeItem, clearCart, increseItemCount } = cartSlice.actions;
export default cartSlice.reducer;

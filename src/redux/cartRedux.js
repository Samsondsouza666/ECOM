import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      console.log(action.payload)
    },
    resetProduct: (state) => {
      
      state.products =[];
      state.quantity = 0;
      state.total = 0;
      console.log("hello");

    },
  },
});

export const { addProduct ,resetProduct} = cartSlice.actions;
export default cartSlice.reducer;
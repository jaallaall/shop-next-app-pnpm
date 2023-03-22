import { createSlice } from "@reduxjs/toolkit";

interface Item {
  id: number;
  title: string;
  discount: number;
  size: number;
  price: number;
  quantity: number;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: 0,
    cartItems: [] as Item[],
    totalAmount: 0,
    checked: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    // totalAmount: (state, action) => {
    //  const totalAmount = state.cartItems?.reduce(
    //     (accumulator, item) => accumulator + item.quantity,
    //     0
    //   );
    //   state.totalAmount = totalAmount;
    // },

    handleChangeChecked: (state, action) => {
      state.checked = action.payload;
    },
    valueQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[itemIndex].quantity = action.payload.quantity;
      if (state.cartItems[itemIndex].quantity === 0) {
        state.cartItems.splice(itemIndex, 1);
      }
    },
    incrementQuantity: (state, action) => {
      const item = state?.cartItems?.find((item) => item.id === action.payload);
      if (item) item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item?.quantity === 1) {
        const index = state.cartItems.findIndex(
          (item) => item.id === action.payload
        );
        state.cartItems.splice(index, 1);
      } else {
        if (item) item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      state.cartItems.splice(index, 1);
    },
  },
});

export const {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  valueQuantity,
  handleChangeChecked,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

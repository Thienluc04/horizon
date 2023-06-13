import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Cart } from 'models';

interface CartState {
  quantity: number;
  list: Cart[];
}

const initialState: CartState = {
  list: [],
  quantity: 0,
};

export interface ChangeCartItem {
  cart: Cart;
  quantity: number;
  price: string;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementItemCart(_, __: PayloadAction<ChangeCartItem>) {},
    incrementItemCartDetail(_, __: PayloadAction<ChangeCartItem>) {},
    decrementItemCart(_, __: PayloadAction<Cart>) {},
    setQuantity(state, action: PayloadAction<number>) {
      state.quantity = action.payload;
    },
    setListCart(state, action: PayloadAction<Cart[]>) {
      state.list = action.payload;
    },
  },
});

// Actions
export const cartActions = cartSlice.actions;

// Selectors
export const selectQuantityCart = (state: RootState) => state.cart.quantity;
export const selectListCart = (state: RootState) => state.cart.list;

// Reducer
const cartReducer = cartSlice.reducer;
export default cartReducer;

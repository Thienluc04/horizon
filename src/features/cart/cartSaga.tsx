import { PayloadAction } from '@reduxjs/toolkit';
import { Cart } from 'models';
import { put, select, takeEvery } from 'redux-saga/effects';
import { ChangeCartItem, cartActions, selectListCart } from './cartSlice';

function* handleIncrementCart({ payload }: PayloadAction<ChangeCartItem>) {
  const list: Cart[] = yield select(selectListCart);
  if (list.some((item) => item.id === payload.cart.id)) {
    const newList = list.map((item) => {
      if (item.id === payload.cart.id) {
        return { ...item, quantity: item.quantity + payload.quantity };
      }
      return item;
    });
    yield put(cartActions.setListCart(newList));
  } else {
    yield put(cartActions.setListCart([...list, payload.cart]));
  }
}

function* handleDecrementCart(action: PayloadAction<Cart>) {
  const list: Cart[] = yield select(selectListCart);
  const newList = list.filter((item) => item.id !== action.payload.id);
  yield put(cartActions.setListCart(newList));
}

export default function* cartSaga() {
  yield takeEvery(cartActions.incrementItemCart, handleIncrementCart);
  yield takeEvery(cartActions.decrementItemCart, handleDecrementCart);
}

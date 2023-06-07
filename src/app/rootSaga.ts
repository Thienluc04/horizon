import authSaga from 'features/auth/authSaga';
import categorySaga from 'features/category/categorySaga';
import detailConfigSaga from 'features/detailConfig/detailConfigSaga';
import productSaga from 'features/product/productSaga';
import trademarkSaga from 'features/trademark/trademarkSaga';
import userSaga from 'features/user/userSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    productSaga(),
    categorySaga(),
    trademarkSaga(),
    detailConfigSaga(),
  ]);
}

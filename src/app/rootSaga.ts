import authSaga from "features/auth/authSaga";
import userSaga from "features/user/userSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}

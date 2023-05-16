import { PayloadAction } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import { ChangePass } from "models";
import { call, takeLatest } from "redux-saga/effects";
import { userAction } from "./userSlice";
import { status } from "utils/constant";

// function* handleFetchUserList() {}

// function* handleGetProfile(action: PayloadAction<number>) {
//   const response: User = yield call(userApi.getProfile, action.payload);
//   console.log(response);
// }

function* handleChangePass(action: PayloadAction<ChangePass>) {
  const response: number = yield call(userApi.changePass, action.payload);
  if (response === status.OK) {
    console.log("Register success");
  } else {
    console.log("Register failed");
  }
}

export default function* userSaga() {
  // yield takeLatest(userAction.fetchProfileUser.type, handleGetProfile);
  yield takeLatest(userAction.fetchChangePass.type, handleChangePass);
}

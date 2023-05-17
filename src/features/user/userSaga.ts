import { PayloadAction } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import { ChangePass, Response } from "models";
import { call, takeLatest } from "redux-saga/effects";
import { userAction } from "./userSlice";
import { status } from "utils/constant";
import { toast } from "react-toastify";

// function* handleFetchUserList() {}

function* handleChangePass(action: PayloadAction<ChangePass>) {
  const response: Response<number> = yield call(
    userApi.changePass,
    action.payload
  );
  if (response.data === status.OK) {
    toast.success("Change password success");
  } else if (response.data === status.EXIST) {
    toast.error("Field old password is wrong, please retype this field");
  } else if (response.data === status.ERROR) {
    toast.error("Change password failed");
  }
}

export default function* userSaga() {
  yield takeLatest(userAction.fetchChangePass.type, handleChangePass);
}

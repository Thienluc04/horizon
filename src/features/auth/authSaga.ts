import { PayloadAction } from "@reduxjs/toolkit";
import authApi from "api/authApi";
import { Login, LoginResponse, Register } from "models";
import { call, put, takeLatest } from "redux-saga/effects";
import { authAction } from "./authSlice";
import { STATUS_OK } from "utils/constant";
import { toast } from "react-toastify";

function* handleAuthLogin(action: PayloadAction<Login>) {
  const response: LoginResponse = yield call(authApi.login, action.payload);
  if (response.data.id) {
    yield put(authAction.authLoginSuccess(response.data));
  } else {
    yield put(authAction.authLoginFailed());
    toast.error("Email or password maybe wrong");
  }
}

function* handleAuthRegister(action: PayloadAction<Register>) {
  const response: number = yield call(authApi.register, action.payload);
  if (response === STATUS_OK) {
    console.log("Register success");
  } else {
    console.log("Register failed");
  }
}

export default function* authSaga() {
  yield takeLatest(authAction.authLogin.type, handleAuthLogin);
  yield takeLatest(authAction.authRegister.type, handleAuthRegister);
}

import { PayloadAction } from "@reduxjs/toolkit";
import authApi from "api/authApi";
import { Login, LoginResponse, Register, RegisterResponse } from "models";
import { call, put, takeLatest } from "redux-saga/effects";
import { authAction } from "./authSlice";
import { toast } from "react-toastify";
import { push } from "redux-first-history";
import { status } from "utils/constant";

function* handleAuthLogin(action: PayloadAction<Login>) {
  const response: LoginResponse = yield call(authApi.login, action.payload);
  if (response.data?.username) {
    yield put(authAction.authLoginSuccess(response.data));
    yield put(push("/"));
    toast.success("Login success");
  } else {
    yield put(authAction.authLoginFailed());
    toast.error("Username or password maybe wrong");
  }
}

function* handleAuthRegister(action: PayloadAction<Register>) {
  const response: RegisterResponse = yield call(
    authApi.register,
    action.payload
  );
  if (response.data === status.OK) {
    yield put(authAction.authRegisterSuccess);
    yield put(push("/login"));
    toast.success("Your account has just been created");
  } else if (response.data === status.EXIST) {
    yield put(authAction.authRegisterFailed);
    toast.error("Your account already exists");
  } else if (response.data === status.ERROR) {
    yield put(authAction.authRegisterFailed);
    toast.error("Can't create your account, please enter again");
  }
}

export default function* authSaga() {
  yield takeLatest(authAction.authLogin.type, handleAuthLogin);
  yield takeLatest(authAction.authRegister.type, handleAuthRegister);
}

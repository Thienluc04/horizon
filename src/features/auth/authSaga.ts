import { PayloadAction } from '@reduxjs/toolkit';
import authApi from 'api/authApi';
import { CurrentUser, Login, Register } from 'models';
import { toast } from 'react-toastify';
import { push } from 'redux-first-history';
import { call, put, takeLatest } from 'redux-saga/effects';
import { status } from 'utils/constant';
import { authAction } from './authSlice';

function* handleAuthLogin(action: PayloadAction<Login>) {
  const response: CurrentUser = yield call(authApi.login, action.payload);
  if (response?.username) {
    yield put(authAction.authLoginSuccess(response));
    yield put(push('/'));
    toast.success('Login success');
  } else {
    yield put(authAction.authLoginFailed());
    toast.error('Username or password maybe wrong');
  }
}

function* handleAuthRegister(action: PayloadAction<Register>) {
  const response: number = yield call(authApi.register, action.payload);
  if (response === status.OK) {
    yield put(authAction.authRegisterSuccess);
    yield put(push('/login'));
    toast.success('Your account has just been created');
  } else if (response === status.EXIST) {
    yield put(authAction.authRegisterFailed);
    toast.error('Your account already exists');
  } else if (response === status.ERROR) {
    yield put(authAction.authRegisterFailed);
    toast.error("Can't create your account, please enter again");
  }
}

export default function* authSaga() {
  yield takeLatest(authAction.authLogin.type, handleAuthLogin);
  yield takeLatest(authAction.authRegister.type, handleAuthRegister);
}

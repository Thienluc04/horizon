import { PayloadAction } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import { ChangePass, ChangeRole, ListParams, Response, User } from 'models';
import { call, put, takeLatest } from 'redux-saga/effects';
import { userAction } from './userSlice';
import { status } from 'utils/constant';
import { toast } from 'react-toastify';

function* handleChangePass(action: PayloadAction<ChangePass>) {
  const response: Response<number> = yield call(userApi.changePass, action.payload);
  if (response.data === status.OK) {
    toast.success('Change password success');
  } else if (response.data === status.EXIST) {
    toast.error('Field old password is wrong, please retype this field');
  } else if (response.data === status.ERROR) {
    toast.error('Change password failed');
  }
}

function* handleChangeRole(action: PayloadAction<ChangeRole>) {
  const response: number = yield call(userApi.changeRole, action.payload);
  if (response === status.OK) {
    toast.success('Change role user success');
  } else if (response === status.ERROR || response === status.EXIST) {
    toast.error('Something is wrong');
  }
}

function* handleFetchUserList(action: PayloadAction<ListParams>) {
  const response: Response<User[]> = yield call(userApi.getUsers, action.payload);
  if (response.data) {
    yield put(userAction.fetchUserListSuccess(response));
  } else {
    yield put(userAction.fetchUserListFailed());
  }
}

function* handleSearchUser(action: PayloadAction<string>) {
  const { data }: Response<User[]> = yield call(userApi.searchUser, action.payload);
  if (data) {
    yield put(userAction.searchUserSuccess(data));
  }
}

function* handleGetUserWithGender(action: PayloadAction<string>) {
  const { data }: Response<User[]> = yield call(userApi.getUserWithGender, action.payload);
  if (data) {
    yield put(userAction.getUserWithGenderSuccess(data));
  }
}

function* handleGetUserWithRole(action: PayloadAction<string>) {
  const { data }: Response<User[]> = yield call(userApi.getUserWithRole, action.payload);
  if (data) {
    yield put(userAction.getUserWithRoleSuccess(data));
  }
}

function* handleResetPass(action: PayloadAction<string>) {
  const { data }: Response<number> = yield call(userApi.resetPass, action.payload);
  if (data === status.OK) {
    toast.success('Reset the password success');
  } else if (data === status.ERROR) {
    toast.error('Something is wrong !');
  }
}

export default function* userSaga() {
  yield takeLatest(userAction.fetchChangePass.type, handleChangePass);
  yield takeLatest(userAction.fetchChangeRole.type, handleChangeRole);
  yield takeLatest(userAction.fetchUserList.type, handleFetchUserList);
  yield takeLatest(userAction.searchUser.type, handleSearchUser);
  yield takeLatest(userAction.getUserWithGender.type, handleGetUserWithGender);
  yield takeLatest(userAction.getUserWithRole.type, handleGetUserWithRole);
  yield takeLatest(userAction.fetchResetPass.type, handleResetPass);
}

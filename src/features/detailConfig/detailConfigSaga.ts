import { call, put, takeLatest } from 'redux-saga/effects';
import { detailConfigActions } from './detailConfigSlice';
import { detailConfigApi } from 'api/detailConfigApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { detailConfig } from 'models/detailConfig';
import { status } from 'utils/constant';
import { toast } from 'react-toastify';

function* handleFetchDataConfig(action: PayloadAction<string>) {
  try {
    const data: detailConfig = yield call(detailConfigApi.getByIdProduct, action.payload);
    if (data) {
      yield put(detailConfigActions.fetchDetailConfigSuccess(data));
    }
  } catch (error) {
    console.log('function*handleFetchDataConfig ~ error:', error);
    yield put(detailConfigActions.fetchDetailConfigFailed);
  }
}

function* handleInsertDetailConfig(action: PayloadAction<detailConfig>) {
  try {
    const data: number = yield call(detailConfigApi.insertDetailConfig, action.payload);

    if (data === status.ERROR) {
      toast.error('Insert detail configuration failed!');
    } else if (data === status.NOT_FOUND) {
      toast.error("Can't find this product!");
    } else if (data === status.OK) {
      toast.success('Insert detail configuration success');
    }
  } catch (error) {
    console.log('function*handleInsertDetailConfig ~ error:', error);
    toast.error('Something is wrong!');
  }
}

function* handleUpdateDetailConfig(action: PayloadAction<detailConfig>) {
  try {
    const data: number = yield call(detailConfigApi.updateDetailConfig, action.payload);
    if (data === status.ERROR) {
      toast.error('Update detail configuration failed!');
    } else if (data === status.NOT_FOUND) {
      toast.error("Can't find this product!");
    } else if (data === status.OK) {
      toast.success('Update detail configuration success');
    }
  } catch (error) {
    console.log('function*handleInsertDetailConfig ~ error:', error);
    toast.error('Something is wrong!');
  }
}

export default function* detailConfigSaga() {
  yield takeLatest(detailConfigActions.fetchDetailConfig.type, handleFetchDataConfig);
  yield takeLatest(detailConfigActions.insertDetailConfig.type, handleInsertDetailConfig);
  yield takeLatest(detailConfigActions.updateDetailConfig.type, handleUpdateDetailConfig);
}

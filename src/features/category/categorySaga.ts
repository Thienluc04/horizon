import { categoryApi } from 'api/categoryApi';
import { Category } from 'models';
import { call, put, takeLatest } from 'redux-saga/effects';
import { categoryActions } from './categorySlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { status } from 'utils/constant';

function* handleFetchCategoryList() {
  try {
    const data: Category[] = yield call(categoryApi.getAll);
    if (data) {
      yield put(categoryActions.fetchCategoryListSuccess(data));
    }
  } catch (error) {
    yield put(categoryActions.fetchCategoryListFailed());
    console.log('function*handleFetchCategoryList ~ error:', error);
  }
}

function* handleInsertCategory(action: PayloadAction<Category>) {
  try {
    const data: number = yield call(categoryApi.insertCategory, action.payload);
    if (data === status.OK) {
      toast.success('Insert category success!');
    } else {
      toast.error('Something went wrong!');
    }
  } catch (error) {
    console.log('function*handleInsertCategory ~ error:', error);
    toast.error('Something went wrong!');
  }
}

function* handleUpdateCategory(action: PayloadAction<Category>) {
  try {
    const data: number = yield call(categoryApi.updateCategory, action.payload);
    if (data === status.OK) {
      toast.success('Update category success!');
    } else {
      toast.error('Something went wrong!');
    }
  } catch (error) {
    console.log('function*handleUpdateCategory ~ error:', error);
    toast.error('Something went wrong!');
  }
}

export default function* categorySaga() {
  yield takeLatest(categoryActions.fetchCategoryList.type, handleFetchCategoryList);
  yield takeLatest(categoryActions.insertCategory.type, handleInsertCategory);
  yield takeLatest(categoryActions.updateCategory.type, handleUpdateCategory);
}

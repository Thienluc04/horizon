import { categoryApi } from 'api/categoryApi';
import { Category } from 'models';
import { call, put, takeLatest } from 'redux-saga/effects';
import { categoryActions } from './categorySlice';

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

export default function* categorySaga() {
  yield takeLatest(categoryActions.fetchCategoryList.type, handleFetchCategoryList);
}

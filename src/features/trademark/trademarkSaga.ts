import { trademarkApi } from 'api/trademarkApi';
import { Trademark } from 'models';
import { call, put, takeLatest } from 'redux-saga/effects';
import { trademarkActions } from './trademarkSlice';

function* handleFetchListTrademark() {
  try {
    const data: Trademark[] = yield call(trademarkApi.getAll);
    if (data) {
      yield put(trademarkActions.fetchTrademarkListSuccess(data));
    }
  } catch (error) {
    console.log('function*handleFetchListTrademark ~ error:', error);
    yield put(trademarkActions.fetchTrademarkListFailed());
  }
}

export default function* trademarkSaga() {
  yield takeLatest(trademarkActions.fetchTrademarkList, handleFetchListTrademark);
}

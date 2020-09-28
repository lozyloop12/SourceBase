import { TEST_DATA, TEST_DATA_SUCCESSFULLY, TEST_DATA_FAILED } from '../actions'

import { put, takeLatest } from 'redux-saga/effects';
import { getdata } from '../services';
import { showLoading, hideLoading } from '../../../actions'

function* TestDataSaga(actions) {
  const { payload } = actions;
  try {
    yield put(showLoading())
    const result = yield getdata();
    yield put(hideLoading())
    yield put({ type: TEST_DATA_SUCCESSFULLY, payload: result })
  } catch (error) {
    yield put(hideLoading())
    yield put({ type: TEST_DATA_FAILED })
  }
}

export function* watchTest() {
  yield takeLatest(TEST_DATA, TestDataSaga);
}
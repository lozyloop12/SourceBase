import { all } from 'redux-saga/effects';
import {
  watchTest
} from './home.saga';

export function* homeSaga() {
  yield all([
    watchTest(),
  ]);
}

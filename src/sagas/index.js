import { all } from 'redux-saga/effects';
import {
    homeSaga
} from '../modules';

export default function* rootSaga() {
    yield all([
        homeSaga(),
    ]);
}

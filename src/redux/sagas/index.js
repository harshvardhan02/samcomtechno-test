import { all, fork } from 'redux-saga/effects';
import userSaga from './userSaga';
import userDetailSaga from './userDetailSaga'

export default function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(userDetailSaga)
    ])
}
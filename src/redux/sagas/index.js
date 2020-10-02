import { all, fork } from 'redux-saga/effects';
import userSaga from './userSaga';
import userDetailSaga from './userDetailSaga';
import userFavSaga from './favSaga';

export default function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(userDetailSaga),
        fork(userFavSaga)
    ])
}
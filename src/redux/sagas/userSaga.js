import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../types'
import * as Api from './api'

function* fetchUsers(action) {
    try {
        const user = yield call(Api.getUser);
        yield put({ type: types.GET_USERS_SUCCESS, user: user.data });
    } catch (e) {
        yield put({ type: types.GET_USERS_FAILED, message: e.message });
    }
}

function* userSaga() {
    yield takeEvery(types.GET_USERS_REQUEST, fetchUsers);
}

export default userSaga
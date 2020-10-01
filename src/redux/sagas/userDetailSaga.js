import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../types'
import * as Api from './api'

function* fetchUsersDetails(action) {
    console.log(action.payload, 'userDetailsssssss')
    try {
        const userDetail = yield call(Api.getUserById, action.payload);
        console.log(userDetail.data, '---------------------------------------')
        yield put({ type: types.GET_USERS_DETAILS_SUCCESS, user: userDetail.data });
    } catch (e) {
        yield put({ type: types.GET_USERS_DETAILS_FAILED, message: e.message });
    }
}

function* userDetailSaga() {
    yield takeEvery(types.GET_USERS_DETAILS_REQUEST, fetchUsersDetails);
}

export default userDetailSaga
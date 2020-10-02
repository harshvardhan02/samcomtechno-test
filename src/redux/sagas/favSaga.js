import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../types'
import * as Api from './api'

function* addFav(action) {
    console.log(action.payload, 'userDetailsssssss')
    try {
        const userDetail = yield call(Api.getUserById, action.payload);
        console.log(userDetail.data, '---------fav-sgag------------------------------')
        yield put({ type: types.FAV_ADD_SUCCESS, user: userDetail.data });
    } catch (e) {
        yield put({ type: types.FAV_ADD_FAILED, message: e.message });
    }
}

function* userFavSaga() {
    yield takeEvery(types.FAV_ADD_REQUEST, addFav);
}

export default userFavSaga
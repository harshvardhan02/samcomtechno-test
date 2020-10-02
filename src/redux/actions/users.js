import * as type from '../types';

export function getUsers() {
    return {
        type: type.GET_USERS_REQUEST
    }
}

export function getUserDetails(credentials) {
    return {
        type: type.GET_USERS_DETAILS_REQUEST,
        payload: credentials
    }
}

export function addToFav(item) {
    return {
        type: type.FAV_ADD_REQUEST,
        payload: item
    }
}
import * as type from '../types';

const initialState = {
    fav: [],
    loading: false,
    error: null,
}

export default function (state = initialState, action) {
    console.log(action, '------------favoi')
    switch (action.type) {
        case type.FAV_ADD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case type.FAV_ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                fav: [...state.fav, action.user]
            }
        case type.FAV_ADD_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        default:
            return state;
    }
}
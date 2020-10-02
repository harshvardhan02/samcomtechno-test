import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './user';
import fav from './fav';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['fav']
}

const rootReducers = combineReducers({
    users: user,
    fav: fav
});

export default persistReducer(persistConfig, rootReducers);
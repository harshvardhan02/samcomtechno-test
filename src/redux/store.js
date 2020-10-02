import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
//reducers
import rootReducer from './reducers';
import rootSaga from './sagas';


//create saga middleware
const sagaMiddleware = createSagaMiddleware();

//define middleware
const middleware = [sagaMiddleware];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
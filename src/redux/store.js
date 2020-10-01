import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

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

sagaMiddleware.run(rootSaga);

export default store;
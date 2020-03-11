import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './middleware';
import {layoutReducer} from './modules/Layouts/reducer';

const appReducer = combineReducers({
    Layouts: layoutReducer
});

let store = null;

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? 
window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ }) : compose;

store = createStore(appReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { localStorageMw, promiseMw } from '../middlewares';
import Perf  from 'react-addons-perf';
import thunk from 'redux-thunk';
import reduxInvariant from 'redux-immutable-state-invariant'
import reducers from '../reducers';
import { routerReducer,  routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { reducer as counterReducer } from '../pages/counter/';
// Apply the middleware to the store
import resetEnhancer from './reset';
const win = window;
win.Perf = Perf;
const originalReducers = {
    todoApp: reducers,
    count: counterReducer,
    routing: routerReducer,
}
const reducer = combineReducers(originalReducers);
const middlewares = [];
middlewares.push(localStorageMw, thunk, promiseMw, routerMiddleware(browserHistory));
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(reduxInvariant());
}
const storeEnchancers = compose(
    resetEnhancer,
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
)
const initialState = {};
const store = createStore(reducer, initialState, storeEnchancers);
store._reducers = originalReducers;
export default store;
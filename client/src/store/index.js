import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { localStorageMw } from '../middlewares';
import Perf  from 'react-addons-perf';
import thunk from 'redux-thunk';
import reduxInvariant from 'redux-immutable-state-invariant'
import reducers from '../reducers';
import { routerReducer } from 'react-router-redux';
const win = window;
win.Perf = Perf;
const reducer = combineReducers({
    todoApp: reducers,
    routing: routerReducer
});
const middlewares = [];
middlewares.push(localStorageMw, thunk);
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(reduxInvariant());
}
const storeEnchancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
)
export default createStore(reducer, {}, storeEnchancers);
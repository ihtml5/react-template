import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as todoReducer } from '../todoApp/todos';
import { reducer as filterReducer } from '../todoApp/filter';
import { reducer as selectTodoTypeReducer } from '../todoApp/badge';
import { reducer as loadingReducer } from '../todoApp/loading';
import { reducer as navReducer } from '../Nav';
import { routerReducer } from 'react-router-redux'
import { localStorageMw } from '../middleware';
import Perf  from 'react-addons-perf';
import thunk from 'redux-thunk';
import reduxInvariant from 'redux-immutable-state-invariant'
const win = window;
win.Perf = Perf;
const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
    todoTypes: selectTodoTypeReducer,
    loading: loadingReducer,
    routing: routerReducer,
    menuData: navReducer
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
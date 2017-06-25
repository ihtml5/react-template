import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { reducer as todoReducer, setNextTodo } from '../todos';
import { reducer as filterReducer } from '../filter';
import { localStorageMw } from '../middleware';
import Perf  from 'react-addons-perf';
import reduxInvariant from 'redux-immutable-state-invariant'
const win = window;
win.Perf = Perf;
const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
    nextTodoId: setNextTodo
});
const middlewares = [];
middlewares.push(localStorageMw);
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(reduxInvariant());
}
const storeEnchancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
)
export default createStore(reducer, {}, storeEnchancers);
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { reducer as todoReducer } from '../todos';
import { reducer as filterReducer } from '../filter';
import { localStorageMw } from '../middleware';

const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});

export default createStore(reducer, applyMiddleware(localStorageMw));
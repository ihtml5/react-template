// 引入 combineReducers
import {  combineReducers } from 'redux';

// 引入一系列reducer

import { reducer as todoReducer } from '../pages/todoApp/todos';
import { reducer as filterReducer } from '../pages/todoApp/filter';
import { reducer as selectTodoTypeReducer } from '../pages/todoApp/badge';
import { reducer as loadingReducer } from '../pages/todoApp/loading';
import { reducer as navReducer } from '../common/Nav';
export default  combineReducers({
    todos: todoReducer,
    filter: filterReducer,
    todoTypes: selectTodoTypeReducer,
    loading: loadingReducer,
    menuData: navReducer
});
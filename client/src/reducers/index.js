import { reducer as todoReducer } from '../views/todoApp/todos';
import { reducer as filterReducer } from '../views/todoApp/filter';
import { reducer as selectTodoTypeReducer } from '../views/todoApp/badge';
import { reducer as loadingReducer } from '../views/todoApp/loading';
import { reducer as navReducer } from '../views/Nav';
import {  combineReducers } from 'redux';
export default  combineReducers({
    todos: todoReducer,
    filter: filterReducer,
    todoTypes: selectTodoTypeReducer,
    loading: loadingReducer,
    menuData: navReducer
});
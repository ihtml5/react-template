import { INIT_TODO, ADD_TODO } from '../../pages/todoApp/todos/actionTypes';
import { disableGetLocalStorage } from '../../config';
let baseNextId = 0;
const localStorageMw = store => next => action => {
    if (action.type === INIT_TODO ) {
        baseNextId = action.todos.length;
    }
    if ((action.id || action.id === 0 ) && action.type === ADD_TODO) {
        action = { ...action, id: baseNextId + action.id}
    }
    next(action)
    let todos = store.getState().todoApp.todos;
    if ( disableGetLocalStorage.indexOf(action.type) === -1 ) {
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }
}

export default localStorageMw;
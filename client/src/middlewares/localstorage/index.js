import { INIT_TODO, ADD_TODO } from '../../views/todoApp/todos/actionTypes';
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
    window.localStorage.setItem('todos', JSON.stringify(todos));
}

export default localStorageMw;
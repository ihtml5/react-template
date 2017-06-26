import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, EDIT_TODO, INIT_TODO } from './actionTypes';

let nextTodoId = 0;

export const addTodo = (text,typeId) => ({
    type: ADD_TODO,
    text: text,
    completed: false,
    typeId: typeId,
    id: nextTodoId++
});

export const toggleTodo = (id) => ({
    id: id,
    type: TOGGLE_TODO
});

export const removeTodo = (id) => ({
    id: id,
    type: REMOVE_TODO
})


export const editTodo = ({id, text}) => ({
    id,
    type: EDIT_TODO,
    text,
    completed: false
})

export const initTodos = (todos) => (
    {
        todos,
        type: INIT_TODO    
    }
)
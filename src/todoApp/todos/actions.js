import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, EDIT_TODO } from './actionTypes';

let nextTodoId = 0;

export const addTodo = (text) => ({
    type: ADD_TODO,
    text: text,
    completed: false,
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
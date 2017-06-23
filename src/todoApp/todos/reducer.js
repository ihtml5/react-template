import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, EDIT_TODO, INIT_TODO } from './actionTypes';

export default (state= [], action) => {
    switch (action.type) {
        case INIT_TODO :
            return [...action.todos, ...state]
        case ADD_TODO :
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
                ...state
            ];
        case REMOVE_TODO : 
            return state.filter((todoItem) => {
                return todoItem.id !== action.id
            });
        case TOGGLE_TODO :
            return state.map((todoItem) => {
                if (todoItem.id === action.id) {
                    return {...todoItem, completed: !todoItem.completed}
                } else {
                    return todoItem
                }
            })
        case EDIT_TODO :
           return state.map((todoItem, i) => {
               if (todoItem.id === action.id) {
                   return {
                       ...todoItem, text: action.text
                   } 
               } else {
                   return todoItem
               }
           })
        default: 
            return state;
    }
}

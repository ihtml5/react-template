import { SELECTTODOTYPE } from './actionTypes';

const selectTodoType = (state=[{
    id: 0,
    name: '紧急',
    color: 'red'
}, {
    id: 1,
    name: '重要',
    color: '#555'
}, {
    id: 2,
    name: '一般',
    color: '#ddd'
}], action) => {
    switch(action.type) {
        case SELECTTODOTYPE:
            return [...state];
        default:
            return state;
    }
}

export default selectTodoType;
import { SELECTTODOTYPE } from './actionTypes';
export const selectTodoType = (typeId) => ({
    type: SELECTTODOTYPE,
    typeId: typeId
});
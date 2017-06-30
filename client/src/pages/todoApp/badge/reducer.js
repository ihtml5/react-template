const SELECTTODOTYPE = 'TODO/BADGE/SELETETODOTYPE';
const setTodoType = (state=[{
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
const selectTodoType = (typeId) => ({
    type: SELECTTODOTYPE,
    typeId: typeId
});
export {
    selectTodoType
}
export default setTodoType;
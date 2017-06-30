import { FILTERTYPES } from '../constants';
const SET_FILTER = 'TODO/FILTER/SET_FILTER';
export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        filter: filter
    }
}
export default (state=FILTERTYPES.All, action) => {
    switch( action.type) {
        case SET_FILTER: {
            console.log('SET_FILTER', action.type);
            return action.filter;
        }
        default:
            return state;
    }
}
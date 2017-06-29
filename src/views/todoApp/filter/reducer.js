import { SET_FILTER } from './actionTypes';
import { FILTERTYPES } from '../constants';

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
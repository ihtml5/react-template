import { SET_FILTER } from './actionTypes';
import { FILTERTYPES } from '../constants';

export default (state=FILTERTYPES.All, action) => {
    switch( action.type) {
        case SET_FILTER: {
            return action.filter;
        }
        default:
            return state;
    }
}
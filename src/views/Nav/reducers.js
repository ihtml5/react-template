import { INIT_MENU } from './actionTypes';
import menuData from '../../config/menu';
const doInitMenu = (state= menuData, action) => {
    switch( action.type) {
        case INIT_MENU:
             return action.data || state;
        default:
            return state;
    }
}

export default  doInitMenu;
import { SHOW_LOADING, HIDE_LOADING } from './actionTypes';


const  doLoading = (state='none', action ) => {
    switch(action.type) {
        case SHOW_LOADING:
            return action.display;
        case HIDE_LOADING:
            return action.display;
        default: 
            return state;
    }
}


export default doLoading;
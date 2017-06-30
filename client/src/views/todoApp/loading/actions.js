import { SHOW_LOADING, HIDE_LOADING } from './actionTypes';
import { actions } from '../todos/';
export const showLoading = () => {
    return {
        type: SHOW_LOADING,
        display: 'inline-block'
    }
}

export const hideLoading = () => {
    return {
        type: HIDE_LOADING,
        display: 'none'
    }
}

export const getInitLoad = () => (dispatch, getState) => {
    dispatch(showLoading());
    fetch('http://localhost:3002/users').then(res => res.json()).then( result => {
        dispatch(actions.initTodos(result))
        dispatch(hideLoading())
    })
}

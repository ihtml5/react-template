import { SHOW_LOADING, HIDE_LOADING, ERROR_LOADING } from './actionTypes';
import { INIT_TODO } from '../todos/actionTypes';
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

// export const getInitLoad = (url) => (dispatch, getState) => {
//     dispatch(showLoading());
//     fetch('http://localhost:3002/users').then(res => res.json()).then( result => {
//         dispatch(actions.initTodos(result))
//         dispatch(hideLoading())
//     })
// }


export const getInitLoad = (url) => {
    return {
        promise: fetch(url).then((res) => {
            if (res.status !== 200) {
                throw new Error('Fail to get response with status'+ res.status);
            }
            return res.json().then(result => result);
        }),
        types: [showLoading(), INIT_TODO, ERROR_LOADING]
    }
}

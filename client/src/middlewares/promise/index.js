import { isPromise } from '../../utils';
import { hideLoading } from '../../pages/todoApp/loading/actions';

export default function promiseMiddleware({dispatch, reset}) {
    return next => action => {
        const { types, promise, ...rest} = action;
        if (!isPromise(promise) || !(action.types && action.types.length === 3)) {
            return next(action);
        }
        console.error('reset', reset);
        const [PENDING, DONE, FAIL] = types;
        dispatch({...rest, type: PENDING});
        return action.promise.then(
            (result) => {
                dispatch({...rest, todos: result, type: DONE})
                dispatch(hideLoading())
            },
            (error) => dispatch({...rest, type: FAIL})
        );
    }
}
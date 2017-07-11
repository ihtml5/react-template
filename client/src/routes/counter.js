import store from '../store';
import { combineReducers } from 'redux';
export default {
    path: 'counter',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const { view, reducer, stateKey, initialState} = require('../pages/counter');
            const state = store.getState();
            store.reset(combineReducers({
                ...store._reducers,
                count: reducer
            }), {
                ...state,
                [stateKey]: initialState
            });
            cb(null, view);
        }, 'counter');
   }
}
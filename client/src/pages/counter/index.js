import reducer from './reducer';
import view, { stateKey } from './views/counter';
const initialState = 100;
export {
    stateKey,
    initialState,
    reducer,
    view
}
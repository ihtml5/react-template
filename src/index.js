import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import { Provider } from 'react-redux';
import store from './store';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import rootRoute from './routes';

const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
<Provider store ={ store}>
    <Router history={history} routes={rootRoute}/>
</Provider>, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store);
const rootRoute = {
  childRoutes: [ {
    path: '/',
    component: require('./App').default,
    childRoutes: [
      require('./routes/todos').default,
    ]
  }]
}
ReactDOM.render(
<Provider store ={ store}>
    <Router history={history} routes={rootRoute}/>
</Provider>, document.getElementById('root'));
registerServiceWorker();

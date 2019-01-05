import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './redux/store/configureStore'
import * as serviceWorker from './serviceWorker';

import RouteMap from './router/routeMap'
//引入项目的通用样式
import './static/css/common.less'
import './static/css/font.css'

const store = configureStore()
ReactDOM
.render(
  <Provider store={store}>
    <RouteMap />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
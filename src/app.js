import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import { store } from './Stores';

const rootRoute = {
  childRoutes: [ {
    path: '/',
    component: require('./components/App/App.js'),
    // childRoutes: [
    //   require('./routes/Calendar'),
    //   require('./routes/Course'),
    //   require('./routes/Grades'),
    //   require('./routes/Messages'),
    //   require('./routes/Profile')
    // ]
  } ]
}

render(
  <Provider store={store}>
    < Router history={browserHistory} routes={rootRoute} />
  </Provider>,
  document.getElementById('root'))
